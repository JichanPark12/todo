interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: size;
  children?: React.ReactNode;
  color: colors;
}

export type size = "M" | "SM";
type colors = "slate-2" | "rose-5" | "lime-3" | "violet-6";

const SIZE_MAP: { [k in Props["size"]]: string } = {
  M: "w-[164px] h-[52px] rounded-3xl text-base font-bold",
  SM: "w-[56px] h-[56px] rounded-3xl text-base font-bold",
};

const TodoButton = ({ size, color, children, ...props }: Props) => {
  return (
    <button
      {...props}
      className={`flex justify-center items-center ${SIZE_MAP[size]} p-[18px] relative`}
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
