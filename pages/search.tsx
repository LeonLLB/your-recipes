import { useRouter } from 'next/router';
import SearchFilterBar from '../components/SearchFilterBar';

const SearchPage = () => {

    const router = useRouter();

    console.log(router.query);

  return <div>
      
      <SearchFilterBar/>

    </div>;
};

export default SearchPage;
