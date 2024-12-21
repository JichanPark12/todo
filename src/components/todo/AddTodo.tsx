"use client";

import { createTodo } from "@/action/createTodo";
import TodoInput from "../input/TodoInput";
import Create from "../todoButton/Create";
import { useTransition } from "react";

// 투두를 생성하는 form

const AddTodo = () => {
  const [isPending, startTransition] = useTransition();

  const action = (formData: FormData) => {
    startTransition(() => {
      if (isPending) return;
      createTodo(formData);
    });
  };

  return (
    <form action={action} className="flex">
      <TodoInput />
      <div className="ml-[18px]">
        <Create size="M" fill={false} isRWD={true} />
      </div>
    </form>
  );
};

export default AddTodo;
