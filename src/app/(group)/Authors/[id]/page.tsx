import AuthorsContant from "@/components/AuthorsContant";

interface Iprops {
  params: { id: string };
}
 async function page({ params }: Iprops) {
  const id = await params.id;

  return (
    <>
      <AuthorsContant id={id} />
    </>
  );
}

export default page;
