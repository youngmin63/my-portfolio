import React, { useEffect, useRef } from "react";

export default function MouseHighlight() {
  const dotRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;

    const moveHandler = (e) => {
      const x = e.clientX - 100;
      const y = e.clientY - 100;
      dot.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener("mousemove", moveHandler);
    return () => window.removeEventListener("mousemove", moveHandler);
  }, []);

  return (
    <div
      ref={dotRef}
      className="fixed top-0 left-0 w-[200px] h-[200px] rounded-full pointer-events-none z-50 blur-3xl"
      style={{
        backgroundColor: "#64ffda", // 밝은 민트
        mixBlendMode: "screen", // 어두운 배경에 빛 효과
        opacity: 0.15, // 자연스럽게
        transition: "transform 0.05s linear",
      }}
    />
  );
}
