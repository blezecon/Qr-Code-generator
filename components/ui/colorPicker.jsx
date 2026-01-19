"use client";
import { HexColorPicker } from "react-colorful";

export default function ColorPicker({ label, value, onChange }) {
  return (
    <div className="space-y-2">
      <label className="text-xs text-muted-foreground">{label}</label>

      <div className="rounded-md border bg-background p-4 flex justify-center">
        <div className="w-full max-w-50 flex flex-col items-center">
          <HexColorPicker
            color={value}
            onChange={onChange}
            className="w-full"
          />

          <div className="mt-2 flex w-full items-center justify-between text-xs">
            <span className="font-mono text-muted-foreground">{value}</span>
            <div
              className="h-4 w-4 rounded-sm border"
              style={{ backgroundColor: value }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
