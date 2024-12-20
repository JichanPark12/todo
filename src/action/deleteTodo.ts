"use server";

import { link } from "@/api/link";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const deleteTodo = async (id: number) => {
  await fetch(`${link}/items/${id}`, { method: "DELETE" });

  revalidateTag("todoList");
  revalidateTag(id.toString());

  redirect("/");
};
