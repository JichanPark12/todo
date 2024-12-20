import DetailTodoContainer from "./_source/components/DetailTodoContainer";
import { PromiseParams } from "./_source/type/params";

interface Props {
  params: PromiseParams;
}

const page = ({ params }: Props) => {
  return <DetailTodoContainer params={params} />;
};

export default page;
