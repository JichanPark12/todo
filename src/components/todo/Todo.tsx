"use client";

import { SimpleTodo } from "@/types/todo";
import CheckCircleIcon from "../icon/CheckCircleIcon";
import CircleIcon from "../icon/CircleIcon";
import { toggleTodo } from "@/action/toggleTodo";
import { useTransition } from "react";
import Link from "next/link";

interface Props {
  todo: SimpleTodo;
}

const Todo = ({ todo }: Props) => {
  const [isPending, startTransition] = useTransition();

  const handleCheckClick = () => {
    startTransition(() => {
      if (!isPending) toggleTodo(todo.id, !todo.isCompleted);
    });
  };
  return (
    <div className="w-full h-[50px] rounded-[27px] pl-[12px] pr-[12px] flex items-center border-2 border-slate-9 cursor-pointer">
      <div>
        {todo.isCompleted ? (
          <CheckCircleIcon
            onClick={handleCheckClick}
            stroke="white"
            fill="violet-6"
          />
        ) : (
          <CircleIcon
            onClick={handleCheckClick}
            stroke="slate-9"
            fill="white"
          />
        )}
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
