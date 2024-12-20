"use server";

import { link } from "@/api/link";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const updateTodo = async (id: number, fromData: FormData) => {
  const imageUrl = fromData.get("imageUrl");
  const name = fromData.get("name");
  const memo = fromData.get("memo");

  await fetch(`${link}/items/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      imageUrl,
      name,
      memo,
    }),
  }).then((res) => res.json());

  revalidateTag("todoList");
  revalidateTag(id.toString());

  redirect("/");
};
