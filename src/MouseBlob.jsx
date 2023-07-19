import { useState, useEffect } from "react";

export default function MouseBlob() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleWindowMouseMove = (e) => {
      setCoords({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", handleWindowMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  }, []);
  return (
    <>
      <div
        style={{ top: `${coords.y}px`, left: `${coords.x}px` }}
        className="blob"
      ></div>
    </>
  );
}
