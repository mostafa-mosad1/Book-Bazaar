import BookPageContant from "@/components/BookPageContant";


interface IProps {
  params: Promise<{
    BookId: string;
  }>;
}
async function page(props: IProps) {
  const params = await props.params;
  const { BookId } = params;
  console.log(BookId);
  return (
    <>
    <BookPageContant BookId={BookId} />
    </>
  );
}

export default page;
