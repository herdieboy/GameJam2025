import { useEffect, useState } from "react";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({
        x: event.clientX + window.scrollX,
        y: event.clientY + window.scrollY,
      });
    };

    const handleMouseOver = (event: MouseEvent) => {
      if ((event.target as HTMLElement).tagName === "A") {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (event: MouseEvent) => {
      if ((event.target as HTMLElement).tagName === "A") {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
      className="absolute z-50 pointer-events-none w-[2rem] h-[2rem] translate-x-[-50%] translate-y-[-50%] data-[hover=true]:scale-0 transition-transform duration-300"
      data-hover={isHovering ? "true" : "false"}
    >
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABHklEQVR4nLXUL0sEURSG8Z9uUIui2WCw6ieQFbSaLAYRLAZBsOxHMFhXbH4CMRsULIJd3GAWbaJg8g/oyIUzMCy6rjszDwwz986d8zCX815+ZkjNnGC0TkGGC0zUKUhXB9N1CjI8YL4uwVXcn7BQh2AEx/H8hrWqBYkGDmP8hZaKBTm7+Iz5NoZVLEhs4CPelcrKb4LEMl7KZqWXIDGH+zJZ+UuQmMHtoFnpR5CYxGWsfUZTxYLEGE5j/StWlRBMYQnbOMA57iIf+TeplXcGETTx2HVOZYWUd6J197Aef9a3YAvvMXeNo0j0CmYj7f8iFzSwXxi3BynWS3BW2ILNKgp3C7LY98UqixcFNxGoyknFU2+P11E8kVqt1HGc8w3ixWptqqsMhAAAAABJRU5ErkJggg=="
        alt="blue-pointer"
      />
    </div>
  );
}
