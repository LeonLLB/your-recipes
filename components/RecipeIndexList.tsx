import {useRouter} from 'next/router'

interface postRange {
    min:number,
    max:number
}

const calcRange = (pageNum:number,postPerPage:number) : postRange => {
    const maxPosts = pageNum * postPerPage + 1;
    return {
        min: maxPosts - postPerPage,
        max: maxPosts
    };
}

const RecipeIndexList = () => {

    const testArray = [1,2,3,4,5,6,7,8,9,10]

    const router = useRouter();

    let pageNum : number;

    if(isNaN(parseInt(router.query.indexID as string))){pageNum=1}else{pageNum=parseInt(router.query.indexID as string)};    

    const maxPost = 10;
    const range = calcRange(pageNum,maxPost)

    const onRecipeClick = (e:React.MouseEvent<HTMLElement>,id:number) : void =>{
        e.preventDefault();

        router.push('/recipes/'+id)
    }

    return (
        <div className='grid grid-cols-2 gap-2 mx-5 p-2 place-items-center'>
            {   testArray.map(val=>(
                <article onClick={(e)=>{onRecipeClick(e,val)}} key={val} className='hover:cursor-pointer p-2 w-fit flex flex-col items-center content-center justify-between border-2 rounded-md'>
                    <img src="stew test.jpg" alt="test" className='h-72 w-72 rounded-md'/>
                    <h2 className='text-lg italic font-bold'>Lorem Ipsum Dolor</h2>
                    <span>By: test {range.min}</span>
                </article>
            ))}
        </div>
    );
}
  
export default RecipeIndexList;
  