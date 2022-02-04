import Link from 'next/link'
import {
	Email,
	Lock
} from '@styled-icons/material'
import SimpleFormInput from "../../components/SimpleFormInput";
import useForm from "../../hooks/useForm";


const LoginPage = () => {	

	const [form, onInputChange] = useForm({
		email:'',
		password:''
	})

	const onLogInRequest = (e: React.MouseEvent<HTMLButtonElement>) :void => {
		e.preventDefault();


	}

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mx-5 p-2 place-items-center">
			<div id="login-moto" className='flex flex-col w-3/5 space-y-2'>
				<span className="italic text-2xl text-center font-bold">Your recipes!</span>
				<span className="italic text-xl text-center font-thin">Log in for commenting, reacting, and seeing your favorites recipes!</span>			
			</div>
      <div id="login-container" className='flex flex-col space-y-2 w-3/5'>
				<SimpleFormInput Icon={Email} Type='email' Name='email' Label='Email' onInputChange={onInputChange} value={form.email} classNameField='w-full' classNameContentLabel='!left-1'/>
				<SimpleFormInput Icon={Lock} Type='password' Name='password' Label='Password' onInputChange={onInputChange} value={form.pasword} classNameField='w-full' classNameContentLabel='!left-1'/>
				<button onClick={onLogInRequest} className='btn-simple-1'>Log in!</button>
				<Link href='/user/register'><a className='btn-text-1 text-center'>You don't have an account? Sign Up!</a></Link>
				<Link href='/user/forgot-password'><a className='btn-text-1 text-center'>Forgot password? Recover</a></Link>
				</div>
    </div>
  );
};

export default LoginPage;
