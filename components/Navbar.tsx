import Link from 'next/link'

const Navbar = () => {
  return <div className='flex flex-row bg-green-500 w-full justify-between py-3'>
      <span className='ml-4 font-light italic text-xl'>
          <h1>Your Recipes!</h1>
      </span>
      <nav className='mr-4 flex flex-row justify-evenly w-1/3 font-light italic text-md'>
        <Link href='/'>Home</Link>
        <Link href='/top'>Top</Link>
        <Link href='/trending'>Trending</Link>
        <Link href='/user/login'>Login</Link>
      </nav>
  </div>;
};

export default Navbar;
