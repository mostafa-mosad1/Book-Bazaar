import AuthorsContant from "@/components/AuthorsContant";

interface Iprops {
  params: { id: string };
}
function page({ params }: Iprops) {
  const id = params.id;

  return (
    <>
      <AuthorsContant id={id} />
    </>
  );
}

export default page;
