export async function POST(req) {
  try {
    const apiKey = process.env.IMGBB_API_KEY;

    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: "API key not configured" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const formData = await req.formData();
    const file = formData.get("image");

    if (!file) {
      return new Response(
        JSON.stringify({ error: "No file provided" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Check file size (30MB limit for client-side validation, but enforce 32MB imgbb limit on server)
    const maxSize = 32 * 1024 * 1024; // 32MB
    if (file.size > maxSize) {
      return new Response(
        JSON.stringify({ error: "File size exceeds 32MB limit" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Convert file to base64
    const buffer = await file.arrayBuffer();
    const base64 = Buffer.from(buffer).toString("base64");

    // Create FormData for imgbb API
    const imgbbFormData = new FormData();
    imgbbFormData.append("image", base64);
    imgbbFormData.append("expiration", "15552000"); // 180 days in seconds
    imgbbFormData.append("key", apiKey);

    // Forward to imgbb API
    const imgbbResponse = await fetch("https://api.imgbb.com/1/upload", {
      method: "POST",
      body: imgbbFormData,
    });

    const responseText = await imgbbResponse.text();

    // Parse response (handle both JSON and potential error responses)
    let imgbbData;
    try {
      imgbbData = JSON.parse(responseText);
    } catch (e) {
      return new Response(
        JSON.stringify({
          error: "Failed to parse imgbb response",
          details: responseText,
        }),
        { status: 502, headers: { "Content-Type": "application/json" } }
      );
    }

    if (!imgbbResponse.ok) {
      return new Response(
        JSON.stringify({
          error: imgbbData.error?.message || "imgbb upload failed",
          details: imgbbData,
        }),
        {
          status: imgbbResponse.status,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Return imgbb response data
    return new Response(JSON.stringify(imgbbData), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Upload error:", error);
    return new Response(
      JSON.stringify({
        error: "Upload failed",
        details: error.message,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
