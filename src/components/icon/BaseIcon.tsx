"use client";

import { BaseIconProps } from "./types/icon";

// svg를 사용하기 위한 기본적인 세팅 같은 svg가 색상만 바뀌거나 크기만 변경되는 경우가 많기에 재사용을 위해 만듬

const BaseIcon = ({
  height = 24,
  width = 24,
  children,
  onClick,
}: BaseIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      className={`hover:cursor-pointer`}
      onClick={() => onClick?.()}
    >
      {children}
    </svg>
  );
};

export default BaseIcon;
