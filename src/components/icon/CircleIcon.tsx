import BaseIcon from "./BaseIcon";
import { FillAndStrokeIconProps } from "./types/icon";

const CircleIcon = ({
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
        r={(width + height) / 4 - 1}
        className={`stroke-${stroke} fill-${fill}`}
        strokeWidth={2}
      />
    </BaseIcon>
  );
};

export default CircleIcon;
