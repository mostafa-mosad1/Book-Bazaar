import CategoriesPageContant from "@/components/CategoriesPageContant";

interface IProps {
    params: Promise<{
      id: string;
    }>;
  }
  async function page(props: IProps) {
    const params = await props.params;
    const { id } = params;
    console.log(id);


    return (
        <>
        <CategoriesPageContant id={id}  />
        </>
    )
}

export default page;