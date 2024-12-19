import BaseIcon from "./BaseIcon";
import { FillAndStrokeIconProps } from "./types/icon";

const CheckCircleIcon = ({
  stroke = "slate-9",
  fill = "slate-9",
  height = 32,
  width = 32,
  ...props
}: FillAndStrokeIconProps) => {
  return (
    <BaseIcon height={height} width={width} {...props}>
      <circle
        cx={width / 2}
        cy={height / 2}
        r={(height + width) / 4}
        className={`fill-${fill}`}
        strokeWidth={2}
      />
      <path
        d="M8 16.2857L13.8182 22L24 12"
        className={`stroke-${stroke}`}
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
};

export default CheckCircleIcon;
