import BaseIcon from "./BaseIcon";
import { StrokeIconProps } from "./types/icon";

const CheckIcon = ({ stroke = "slate-9", ...props }: StrokeIconProps) => {
  return (
    <BaseIcon {...props}>
      <path
        d="M2.95654 7L7.45654 11.5L14.9565 4"
        className={`stroke-${stroke}`}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
};

export default CheckIcon;
