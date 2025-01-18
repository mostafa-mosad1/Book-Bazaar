import BookPageContant from "@/components/BookPageContant";


interface IProps {
  params: Promise<{
    BookId: string;
  }>;
}
async function page(props: IProps) {
  const params = await props.params;
  const { BookId } = params;

  return (
    <>
    <BookPageContant BookId={BookId} />
    </>
  );
}

export default page;
