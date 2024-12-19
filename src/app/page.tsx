import TodoListContainer from "@/components/todoList/TodoListContainer";
import AddTodo from "@/components/todo/AddTodo";

export default function Home() {
  return (
    <div className=" mt-[24px]">
      <AddTodo />
      <div className="mt-[40px] flex justify-between gap-[24px]">
        <TodoListContainer />
      </div>
    </div>
  );
}
