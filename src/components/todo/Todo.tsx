"use client";

import { SimpleTodo } from "@/types/todo";
import Link from "next/link";
import Toggle from "../todoButton/Toggle";

interface Props {
  todo: SimpleTodo;
}

const Todo = ({ todo }: Props) => {
  return (
    <div className="w-full h-[50px] rounded-[27px] pl-[12px] pr-[12px] flex items-center border-2 border-slate-9 cursor-pointer">
      <div>
        <Toggle id={todo.id} isCompleted={todo.isCompleted} />
      </div>
      <Link
        href={`/items/${todo.id}`}
        className="w-full h-full flex items-center"
      >
        <p className={`ml-[16px] ${todo.isCompleted ? "line-through" : ""} `}>
          {todo.name}
        </p>
      </Link>
    </div>
  );
};

export default Todo;
