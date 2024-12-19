"use server";

import { link } from "@/api/link";
import { revalidateTag } from "next/cache";

export const createTodo = async (formData: FormData) => {
  const todo = formData.get("todo");

  const result = await fetch(`${link}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: todo,
    }),
  });

  if (!result.ok) {
    throw new Error("투두 생성 실패");
  }

  revalidateTag("todoList");
};
