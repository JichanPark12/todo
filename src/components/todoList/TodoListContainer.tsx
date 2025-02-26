import { link } from "@/api/link";
import { SimpleTodo } from "@/types/todo";
import TodoList from "./TodoList";

interface ReduceResult {
  todo: SimpleTodo[];
  done: SimpleTodo[];
}

const TodoListContainer = async () => {
  const todoList: SimpleTodo[] = await fetch(`${link}/items`, {
    cache: "force-cache",
    next: { revalidate: 3600, tags: ["todoList"] },
  }).then((res) => res.json());

  const reduceTodoList: ReduceResult = todoList.reduce<ReduceResult>(
    (acc, cur) => {
      if (cur.isCompleted) {
        acc.done.push(cur);
      } else {
        acc.todo.push(cur);
      }
      return acc;
    },
    {
      todo: [],
      done: [],
    }
  );

  return (
    <div className="w-full flex flex-col gap-[48px] md:flex md:flex-row md:gap-[24px]">
      <TodoList isCompleted={false} todoList={reduceTodoList.todo} />
      <TodoList isCompleted={true} todoList={reduceTodoList.done} />
    </div>
  );
};

export default TodoListContainer;
