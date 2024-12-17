import { StrokeIconProps } from "./types/icon";
import BaseIcon from "./BaseIcon";

const PlusIcon = ({
  stroke = "slate-9",
  ...props
}: Omit<StrokeIconProps, "onClick">) => {
  return (
    <BaseIcon {...props}>
      <path
        d="M2.5 8L14.5 8"
        className={`stroke-${stroke}`}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <path
        d="M8.5 14L8.5 2"
        className={`stroke-${stroke}`}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </BaseIcon>
  );
};

export default PlusIcon;
