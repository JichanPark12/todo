const SIZE_MAP = {
  M: "md",
  SM: "sm",
};

export const formatClassRWD = (type: "M" | "SM", className: string) =>
  className
    .split(" ")
    .map((name) => `${SIZE_MAP[type]}:${name}`)
    .join(" ");
