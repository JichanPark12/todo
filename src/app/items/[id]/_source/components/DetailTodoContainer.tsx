import { link } from "@/api/link";
import { PromiseParams } from "../type/params";
import { DetailTodo } from "@/types/todo";
import TodoName from "./TodoName";
import TodoImage from "./TodoImage";
import TodoMemo from "./TodoMemo";
import Update from "@/components/todoButton/Update";
import Delete from "@/components/todoButton/Delete";
import { updateTodo } from "@/action/updateTodo";
import { redirect } from "next/navigation";

interface Props {
  params: PromiseParams;
}

const DetailTodoContainer = async ({ params }: Props) => {
  const { id } = await params;

  const res = await fetch(`${link}/items/${id}`, {
    cache: "force-cache",
    next: { tags: [id], revalidate: 1000 },
  });

  if (!res.ok) {
    redirect("/");
  }

  const todo: DetailTodo = await res.json();

  const updateTodoWithId = updateTodo.bind(null, +id);

  return (
    <form
      action={updateTodoWithId}
      className=" mt-[24px] max-w-[996px] w-full mx-auto flex flex-col gap-[24px]"
    >
      <TodoName id={+id} isCompleted={todo.isCompleted} name={todo.name} />
      <div className="flex gap-[24px] justify-between md:flex-row flex-col">
        <TodoImage imageUrl={todo.imageUrl} />
        <TodoMemo memo={todo.memo} />
      </div>
      <div className="flex md:justify-end justify-center gap-[16px]">
        <Update fill={false} />
        <Delete id={id} />
      </div>
    </form>
  );
};

export default DetailTodoContainer;
