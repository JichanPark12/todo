import { size } from "@/components/todoButton/TodoButton";
import { useEffect, useState } from "react";

const useResponsiveSize = (defaultSize: size): size => {
  const [size, setSize] = useState<size>(defaultSize);

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth < 485 ? "SM" : "M");
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
};

export default useResponsiveSize;
