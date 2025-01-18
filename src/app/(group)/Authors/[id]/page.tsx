import AuthorsContant from "@/components/AuthorsContant";

interface IProps {
  params: Promise<{
    id: string;
  }>;
}
async function page(props: IProps) {
  const params = await props.params;
  const { id } = params;


  return (
    <>
      <AuthorsContant id={id} />
    </>
  );
}

export default page;
