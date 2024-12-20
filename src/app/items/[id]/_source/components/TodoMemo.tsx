import Image from "next/image";

interface Props {
  memo: string;
}

const TodoMemo = ({ memo }: Props) => {
  return (
    <label className="w-[588px] h-[311px] relative rounded-3xl p-[24px]">
      <Image
        src={"/image/memo.png"}
        fill={true}
        alt="메모 이미지"
        className=" z-0"
      />
      <div className="relative z-30 h-full">
        <p className="text-base font-bold text-center text-amber-8">Memo</p>
        <textarea
          name="memo"
          className="mt-[24px] bg-transparent outline-none text-center resize-none w-full text-slate-8"
          rows={8}
          defaultValue={memo}
        ></textarea>
      </div>
    </label>
  );
};

export default TodoMemo;
