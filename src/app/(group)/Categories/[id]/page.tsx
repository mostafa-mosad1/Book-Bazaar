import CategoriesPageContant from "@/components/CategoriesPageContant";

interface Iprops {	
    params: { id: string };
}	
function page({params}:Iprops) {
    let id = params.id;


    return (
        <>
        <CategoriesPageContant id={id}  />
        </>
    )
}

export default page;