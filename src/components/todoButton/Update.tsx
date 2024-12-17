import CheckIcon from "../icon/CheckIcon";
import TodoButton from "./TodoButton";

interface Props {
  fill: boolean;
}

const Update = ({ fill }: Props) => {
  return (
    <TodoButton size="M" color={fill ? "lime-3" : "slate-2"}>
      <div className=" flex justify-center items-center">
        <CheckIcon width={17} height={16} stroke="slate-9" />
        <p className="font-bold ml-[4px] text-slate-9">수정 완료</p>
      </div>
    </TodoButton>
  );
};

export default Update;
