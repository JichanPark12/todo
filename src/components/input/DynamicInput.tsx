"use client";

import { useRef, useState } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
}

export const DynamicInput = ({ value, ...props }: Props) => {
  const [inputValue, setInputValue] = useState(value);
  const spanRef = useRef<HTMLSpanElement>(null);

  const dynamicWidth = spanRef.current
    ? spanRef.current.getBoundingClientRect().width
    : 0;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);

    const mirror = spanRef.current;

    if (!mirror) return;

    mirror.textContent = e.target.value;
  };

  return (
    <>
      <span
        ref={spanRef}
        className="absolute top-0 left-0 bg-gray-300 invisible"
      >
        {inputValue}
      </span>
      <input
        {...props}
        type="text"
        value={inputValue}
        onChange={handleChange}
        style={{
          width: `${dynamicWidth}px`,
        }}
      />
    </>
  );
};
