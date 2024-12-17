import XIcon from "../icon/XIcon";
import TodoButton from "./TodoButton";

const Delete = () => {
  return (
    <TodoButton size="M" color="rose-5">
      <div className=" flex justify-center items-center">
        <XIcon width={17} height={16} stroke="white" />
        <p className="font-bold ml-[4px] text-white">삭제하기</p>
      </div>
    </TodoButton>
  );
};

export default Delete;
