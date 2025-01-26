import BookPageContant from "@/components/BookPageContant";


interface IProps {
  params: Promise<{ id: string }>;
}

async function page({ params }: IProps) {
  const resolvedParams = await params; // انتظار حل الـ Promise
  const { id } = resolvedParams;
  return (
    <>
    <BookPageContant BookId={id} />
    </>
  );
}

export default page;
