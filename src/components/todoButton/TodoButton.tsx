interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: size;
  children?: React.ReactNode;
  color: colors;
  isRWD?: boolean;
}

export type size = "M" | "SM";
type colors = "slate-2" | "rose-5" | "lime-3" | "violet-6";

const SIZE_MAP: { [k in Props["size"]]: string } = {
  M: "w-[164px] h-[52px]",
  SM: "w-[56px] h-[56px]",
};

const RWD_SIZE_MAP: { [k in Props["size"]]: string } = {
  M: "xs:w-[164px] xs:h-[52px] w-[56px] h-[56px]",
  SM: "w-[56px] h-[56px]",
};

//기본적인 투두 버튼 디자인 반응형 여부와 사이즈 사용할 색을 지정하면 그에맞는 버튼이 나옵니다.

const TodoButton = ({
  size,
  color,
  children,
  isRWD = false,
  ...props
}: Props) => {
  const className = `${isRWD ? RWD_SIZE_MAP[size] : SIZE_MAP[size]}`;

  return (
    <button
      {...props}
      className={`flex justify-center items-center sm:w-[168px] ${className} p-[18px] relative rounded-3xl text-base font-bold`}
    >
      <div className="w-full h-full absolute left-[2.15px] top-[2.5px] rounded-3xl bg-slate-9 border-2 border-slate-9" />
      <div
        className={`w-full h-full absolute left-[-1.5px] top-[-1.5px] rounded-3xl bg-${color} border-2 border-slate-9 flex items-center justify-center`}
      >
        {children}
      </div>
    </button>
  );
};

export default TodoButton;
