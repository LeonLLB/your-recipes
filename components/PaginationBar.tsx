import {useRouter} from 'next/router'
import { useEffect, useState } from 'react';
import { parseConfigFileTextToJson } from 'typescript';
import PaginationBarItem from './PaginationBarItem';

const changePagination = (pageNum: number, PaginationRange: number[],maxPages:number) : number[] => {
    const middleIndexOfRange = ((PaginationRange.length - 1) / 2);
    const shouldIncreaseByOne = (((PaginationRange.length - 1) % 2) > 0);
    
    let centralIndex = parseInt(middleIndexOfRange.toString());
    
    if(shouldIncreaseByOne){
        centralIndex += 1            
    }

    let newRange : number[];

    const isFinalRange = PaginationRange.includes(maxPages)

    if(pageNum === PaginationRange[centralIndex+1] && isFinalRange === false){
        newRange = PaginationRange.map(val=>val+1);        
    }
    else if(pageNum === PaginationRange[0] && pageNum != 1){
        newRange = PaginationRange.map(val=>val-1); 
    }
    else if(pageNum > PaginationRange[centralIndex+1] && isFinalRange === false){
        const prevRange = PaginationRange.map(val=>val+1)
        newRange = changePagination(pageNum,prevRange,maxPages);
    }
    
    else{newRange = PaginationRange}

    return newRange
}

const PaginationBar = () => {

    const router = useRouter();
    const [PaginationRange, setPaginationRange] = useState([1,2,3,4,5]);

    let pageNum : number;
    const maxPost = 10;

    if(isNaN(parseInt(router.query.indexID as string))){pageNum=1}else{pageNum=parseInt(router.query.indexID as string)};    

    const totalPosts = 145;
    let pages = parseInt(((totalPosts / maxPost).toString()));

    if(totalPosts % maxPost > 0){
        pages +=  1;
    }

    useEffect(() => {
        setPaginationRange(changePagination(pageNum,PaginationRange,pages))
    });    

    const onClick = (shouldChange = true) : void => {
        setPaginationRange(changePagination(pageNum,PaginationRange,pages)); 
    };    

    if(pageNum > pages){
        router.push('/');  
    }
  
    return (
        <div className="flex flex-row justify-center space-x-4 w-full">
            <div className='py-1 px-2 sm:py-2 sm:px-4 text-lg rounded-md border border-teal-400 bg-emerald-50'>
                <button disabled={pageNum === 1} onClick={(e)=>{e.preventDefault();router.push('/'+(pageNum-1));onClick()}}>
                    &lt;
                </button>
            </div>
            { PaginationRange.map(val=>(
                <PaginationBarItem key={val} number={val} onClick={onClick}/>
            ))}
            <div className='py-1 px-2 sm:py-2 sm:px-4 text-lg rounded-md border border-teal-400 bg-emerald-50'>
                <button disabled={pageNum === pages} onClick={(e)=>{e.preventDefault();router.push('/'+(pageNum+1));onClick()}}>
                    &gt;
                </button>
            </div>
        </div>
    );


};

export default PaginationBar;
