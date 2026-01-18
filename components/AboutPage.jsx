const AboutPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
  <div className="wrapper px-6 sm:px-12 max-w-4xl mx-auto">
    <div className="text-center">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
        About Me
      </h1>

      <p className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed">
        I&apos;m Blezecon, a developer focused on building clean, fast, and practical
        web tools. I enjoy working on projects that solve simple problems
        efficiently—without unnecessary complexity, tracking, or lock-in.
      </p>
    </div>

    <div className="space-y-8 text-muted-foreground text-base sm:text-lg leading-relaxed">
      <p>
        This QR Code Generator is an open-source project built with simplicity
        and usability in mind. It allows anyone to create, scan, and share QR
        codes instantly, directly from the browser—no accounts, no ads, and no
        hidden limitations.
      </p>

      <p>
        My main interests lie in modern frontend development, performance-aware
        UI design, and developer-friendly tooling. I enjoy working with
        technologies like Next.js, React, and open-source libraries to build
        products that feel lightweight and intentional.
      </p>

      <p>
        I believe good software should be easy to use, respectful of user
        privacy, and accessible to everyone. Most of my projects follow this
        philosophy: minimal UI, clear functionality, and transparent code.
      </p>

      <p>
        This project is actively maintained and open for exploration. If you&apos;re
        interested in how it&apos;s built, contributions, or improvements, feel free
        to check out the source code on GitHub.
      </p>
    </div>
  </div>
</section>

  )
}

export default AboutPage
