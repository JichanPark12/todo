const TodoInput = () => {
  return (
    <div className=" w-full max-w-[1016px] h-[56px] relative">
      <div className="max-w-full h-full">
        <div className="w-full h-[52px] absolute left-[3.06px] top-[2.5px] rounded-3xl bg-slate-9 border-2 border-slate-9" />
        <div className="w-full h-[52px] absolute left-[-1px] top-[-1px] rounded-3xl bg-slate-1 border-2 border-slate-9 flex items-center px-6 sm:px-8">
          <input
            type="text"
            placeholder="할 일을 입력해주세요"
            name="todo"
            className="w-full outline-none text-slate-9 text-sm sm:text-base"
          />
        </div>
      </div>
    </div>
  );
};

export default TodoInput;
