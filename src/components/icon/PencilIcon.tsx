import { FillIconProps } from "./types/icon";
import BaseIcon from "./BaseIcon";

const PencilIcon = ({
  fill = "slate-9",
  ...props
}: Omit<FillIconProps, "onClick">) => {
  return (
    <BaseIcon {...props}>
      <path
        d="M13.3098 3.86603C13.586 3.38773 14.1975 3.22386 14.6758 3.5L18.0481 5.44698C18.5264 5.72312 18.6903 6.33471 18.4141 6.81301L11.1837 19.3366C11.072 19.5299 10.8989 19.6803 10.6919 19.7639L7.12194 21.2048C6.81834 21.3273 6.48085 21.1299 6.43891 20.8052L5.95038 17.0233C5.92229 16.8058 5.96647 16.5851 6.07612 16.3952L13.3098 3.86603Z"
        className={`fill-${fill}`}
      />
    </BaseIcon>
  );
};

export default PencilIcon;
