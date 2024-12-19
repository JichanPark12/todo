import { createTodo } from "@/action/createTodo";
import TodoInput from "../input/TodoInput";
import Create from "../todoButton/Create";

const AddTodo = () => {
  return (
    <form action={createTodo} className="flex">
      <TodoInput />
      <div className="ml-[18px]">
        <Create size="M" fill={false} />
      </div>
    </form>
  );
};

export default AddTodo;
