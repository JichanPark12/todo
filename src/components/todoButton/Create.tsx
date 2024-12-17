import PlusIcon from "../icon/PlusIcon";
import TodoButton, { size } from "./TodoButton";

interface Props {
  size: size;
  fill: boolean;
}

const Create = ({ size, fill }: Props) => {
  return (
    <TodoButton size={size} color={fill ? "violet-6" : "slate-2"}>
      <div className=" flex justify-center items-center">
        {size === "M" ? (
          <>
            <PlusIcon
              width={17}
              height={17}
              stroke={fill ? "white" : "slate-9"}
            />
            <p
              className={`font-bold ml-[4px] text-${fill ? "white" : "slate-9"}`}
            >
              추가하기
            </p>
          </>
        ) : (
          <PlusIcon
            width={17}
            height={17}
            stroke={fill ? "white" : "slate-9"}
          />
        )}
      </div>
    </TodoButton>
  );
};

export default Create;
