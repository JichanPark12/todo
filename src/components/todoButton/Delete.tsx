"use client";

import { useTransition } from "react";
import XIcon from "../icon/XIcon";
import TodoButton from "./TodoButton";
import { deleteTodo } from "@/action/deleteTodo";

interface Props {
  id: string;
}

const Delete = ({ id }: Props) => {
  const [isPending, startTransition] = useTransition();

  const handleCheckClick = () => {
    startTransition(() => {
      if (isPending) return;
      deleteTodo(+id);
    });
  };

  return (
    <TodoButton
      size="M"
      color="rose-5"
      type="button"
      onClick={handleCheckClick}
    >
      <div className=" flex justify-center items-center">
        <XIcon width={17} height={16} stroke="white" />
        <p className="font-bold ml-[4px] text-white">삭제하기</p>
      </div>
    </TodoButton>
  );
};

export default Delete;
