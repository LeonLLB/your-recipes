import { ChangeEvent } from "react";



const SimpleSelectBox = ({valueList,name,onInputChange,placeholder,value}:{name:string,valueList:{value:any,label:string}[],value:any,onInputChange:(e:ChangeEvent)=>void,placeholder:string}) => {
  return <div>
      <select name={name} onChange={onInputChange} value={value} className='w-48 h-12 border border-teal-200 rounded-md outline-none'>
          <option value="" disabled>{placeholder}</option>
          {   valueList.map(({value,label})=>(
              <option key={value} value={value}>{label}</option>
          ))}
      </select>
  </div>;
};

export default SimpleSelectBox;
