import AuthorsContant from "@/components/AuthorsContant";

interface IProps {
  params: Promise<{ id: string }>;
}

async function page({ params }: IProps) {
  const resolvedParams = await params; // انتظار حل الـ Promise
  const { id } = resolvedParams;

  return (
    <>
      <AuthorsContant id={id} />
    </>
  );
}

export default page;
