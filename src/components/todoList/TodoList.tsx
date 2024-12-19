import Image from "next/image";
import Todo from "../todo/Todo";
import { SimpleTodo } from "@/types/todo";

interface Props {
  isCompleted: boolean;
  todoList: Array<SimpleTodo>;
}

const TodoList = ({ todoList, isCompleted }: Props) => {
  return (
    <div className="w-full max-w-[588px] flex flex-col gap-[16px]">
      <div>
        <Image
          src={isCompleted ? "/image/done.png" : "/image/todo.png"}
          alt="태그 이미지"
          height={100}
          width={100}
        />
      </div>
      {todoList.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
