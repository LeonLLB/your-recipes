import {useRouter} from 'next/router';
import Link from 'next/link';

const PaginationBarItem = ({number,onClick}:{number:number,onClick:()=>void}) => {

  const router = useRouter();

  let pageNum : number;

  if(isNaN(parseInt(router.query.indexID as string))){pageNum=1}else{pageNum=parseInt(router.query.indexID as string)}

  return <div className={`py-2 px-4 text-lg rounded-md border border-teal-400 ${(pageNum === number || (router.asPath === '/' && number === 1)) ? 'bg-green-500' : 'bg-emerald-50'}`}>
    
    <button onClick={(e)=>{e.preventDefault();router.push('/'+number);onClick()}}>
      {number}
    </button>
    
    </div>;
};

export default PaginationBarItem;
