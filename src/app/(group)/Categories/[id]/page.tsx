import CategoriesPageContant from "@/components/CategoriesPageContant";

interface IProps {
    params: Promise<{ id: string }>;
  }
  
  async function page({ params }: IProps) {
    const resolvedParams = await params; // انتظار حل الـ Promise
    const { id } = resolvedParams;


    return (
        <>
        <CategoriesPageContant id={id}  />
        </>
    )
}

export default page;