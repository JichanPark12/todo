import { DynamicInput } from "@/components/input/DynamicInput";
import Toggle from "@/components/todoButton/Toggle";

interface Props {
  id: number;
  isCompleted: boolean;
  name: string;
}

const TodoName = ({ id, name, isCompleted }: Props) => {
  return (
    <div className="w-full h-[64px] rounded-3xl border-2 border-slate-9 flex items-center justify-center font-bold text-xl">
      <Toggle id={id} isCompleted={isCompleted} />
      <DynamicInput
        name="name"
        className="ml-[16px] outline-none min-w-[200px] max-w-lg"
        value={name}
        placeholder="할 일을 입력해주세요"
      />
      {/* <input
        name="name"
        className="ml-[16px] font-bold text-xl  outline-none "
        defaultValue={name}
      ></input> */}
    </div>
  );
};

export default TodoName;
