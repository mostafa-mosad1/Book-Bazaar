import AuthorsContant from "@/components/AuthorsContant";

interface Iprops {
  params: { id: string };
}
function page({ params }: Iprops) {
  let id = params.id;

  return (
    <>
      <AuthorsContant id={id} />
    </>
  );
}

export default page;
