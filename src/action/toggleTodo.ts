"use server";

import { link } from "@/api/link";
import { revalidateTag } from "next/cache";

export const toggleTodo = async (id: number, isCompleted: boolean) => {
  await fetch(`${link}/items/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ isCompleted }),
  });

  revalidateTag("todoList");
  revalidateTag(id.toString());
};
