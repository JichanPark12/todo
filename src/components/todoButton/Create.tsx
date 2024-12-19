"use client";

import PlusIcon from "../icon/PlusIcon";
import TodoButton, { size } from "./TodoButton";

interface Props {
  size: size;
  fill: boolean;
  isRWD?: boolean;
}

const Create = ({ size, fill, isRWD = false }: Props) => {
  return (
    <TodoButton size={size} color={fill ? "violet-6" : "slate-2"} isRWD={isRWD}>
      <div className="flex justify-center items-center">
        <PlusIcon width={17} height={17} stroke={fill ? "white" : "slate-9"} />
        <p
          className={`font-bold ml-[4px] text-${fill ? "white" : "slate-9"} ${isRWD ? "hidden xs:block" : ""}`}
        >
          추가하기
        </p>
      </div>
    </TodoButton>
  );
};

export default Create;
