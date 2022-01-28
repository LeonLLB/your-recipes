import SimpleFormInput from "./SimpleFormInput";
import useForm from "../hooks/useForm";
import SimpleSelectBox from "./SimpleSelectBox";
import {useRouter} from "next/router";

const SearchFilterBar = () => {

    const [form, onInputChange] = useForm({
        query:'',
        style:''
    });

    const router = useRouter()

    const valueList = [
        {label:'Frozen dessert',value:'fd'},
        {label:'Baked desserts',value:'bd'},
        {label:'Oven',value:'ov'},
        {label:'Stew',value:'st'},
        {label:'Frying pan',value:'fp'},
        {label:'Drinks',value:'dr'},
        {label:'Sweets',value:'sw'}
    ]

    const onSearch = (e:React.MouseEvent<HTMLButtonElement>) :void =>{
        e.preventDefault()

        router.push('/search?q=' + encodeURI(form.query) + '&s=' + encodeURI(form.style))
    }

  return (
      <div className='flex flex-row space-x-2 p-3 items-center justify-center'>
        <SimpleFormInput Type='text' Name='query' Label='Receta' onInputChange={onInputChange}/>
        <SimpleSelectBox name='style' onInputChange={onInputChange} valueList={valueList} placeholder='Food type' value={form.style}/>
        <button onClick={onSearch} className='btn-simple-1'>
            Search
        </button>
      </div>
  )
};

export default SearchFilterBar;
