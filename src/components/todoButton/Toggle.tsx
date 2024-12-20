"use client";

import { useTransition } from "react";
import CircleIcon from "../icon/CircleIcon";
import { toggleTodo } from "@/action/toggleTodo";
import CheckCircleIcon from "../icon/CheckCircleIcon";

interface Props {
  id: number;
  isCompleted: boolean;
}

const Toggle = ({ id, isCompleted }: Props) => {
  const [isPending, startTransition] = useTransition();

  const handleCheckClick = () => {
    startTransition(() => {
      if (isPending) return;
      toggleTodo(id, !isCompleted);
    });
  };

  return (
    <div>
      {isCompleted ? (
        <CheckCircleIcon
          onClick={handleCheckClick}
          stroke="white"
          fill="violet-6"
        />
      ) : (
        <CircleIcon
          onClick={handleCheckClick}
          stroke="slate-9"
          fill="slate-1"
        />
      )}
    </div>
  );
};

export default Toggle;
