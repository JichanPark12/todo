import BaseIcon from "./BaseIcon";
import { StrokeIconProps } from "./types/icon";

const XIcon = ({ stroke = "slate-9", ...props }: StrokeIconProps) => {
  return (
    <BaseIcon {...props}>
      <path
        d="M4.5 4L12.5 12"
        className={`stroke-${stroke}`}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <path
        d="M12.5 4L4.5 12"
        className={`stroke-${stroke}`}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </BaseIcon>
  );
};

export default XIcon;
