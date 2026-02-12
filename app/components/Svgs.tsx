import React from "react";

/* ================= Grid ================= */
export function Grid({ className }: { className?: string }) {
  return (
    <svg
      version="1.1"
      viewBox="0 0 1920 800"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      <defs>
        <style>
          {`
            .st0 {
              fill: none;
              stroke: currentColor;
              stroke-dasharray: 2,2;
            }
          `}
        </style>
      </defs>

      {/* Vertical lines */}
      {[50.5,120.5,190.5,260.5,330.5,400.5,470.5,540.5,610.5,680.5,750.5,820.5,890.5,960.5,1030.5,1100.5,1170.5,1240.5,1310.5,1380.5,1450.5,1520.5,1590.5,1660.5,1730.5,1800.5,1870.5].map(
        (x) => (
          <line
            key={`v-${x}`}
            className="st0"
            x1={x}
            y1="0"
            x2={x}
            y2="800"
          />
        )
      )}

      {/* Horizontal lines */}
      {[49.5,119.5,189.5,259.5,329.5,399.5,469.5,539.5,609.5,679.5,749.5].map(
        (y) => (
          <line
            key={`h-${y}`}
            className="st0"
            x1="0"
            y1={y}
            x2="1920"
            y2={y}
          />
        )
      )}
    </svg>
  );
}

/* ================= Circle ================= */
export function Circle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}
