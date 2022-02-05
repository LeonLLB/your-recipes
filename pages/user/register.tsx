import Link from 'next/link'
import {
	Email,
	Lock,
	AccountCircle
} from '@styled-icons/material'
import CompleteFormInput from "../../components/FormInput";
import useForm from "../../hooks/useForm";
import useValidate from "../../hooks/useValidate";

const RegisterPage = () => {

	
	const [form, onInputChange] = useForm({
		email:'',
		password:'',
		confirmPassword:'',
		firstName:'',
		lastName:''
	})
	
	const {Errors, isItValid, validate} = useValidate({
		email:{
			required:true,
			regex:{
				exp: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
				example: 'xxx@xxx.com'
			}
		},
		password:{
			required:true,
			minLength:5,
		},
		confirmPassword:{
			required:true,
			minLength:5,
			mustMatch:{
				comparable:form.password,
				comparableLabel:'Password'
			}
		},
		firstName:{
			required:true,
		},
		lastName:{
			required:true,
		}
	})

	const onRegisterRequest = (e: React.MouseEvent<HTMLButtonElement>) :void => {
		e.preventDefault();


	}

  return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-5 p-2 place-items-center">
			<div id="register-moto" className='flex flex-col w-3/5 space-y-2'>
				<span className="italic text-2xl text-center font-bold">Your recipes!</span>
				<span className="italic text-xl text-center font-thin">Sign un for commenting, reacting, and marking down your favorites recipes for later!... only on your recipes!</span>			
			</div>
      <div id="register-container" className='flex flex-col space-y-2 w-11/12 sm:w-3/5 md:w-72 lg:w-3/5'>
				<CompleteFormInput onFocusOut={validate} Errors={Errors} Icon={Email} Type='email' Name='email' Label='Email' onInputChange={onInputChange} value={form.email} classNameField='w-full' classNameContentLabel='!left-1'/>
				<CompleteFormInput onFocusOut={validate} Errors={Errors} Icon={Lock} Type='password' Name='password' Label='Password' onInputChange={onInputChange} value={form.password} classNameField='w-full' classNameContentLabel='!left-1'/>
				<CompleteFormInput onFocusOut={validate} Errors={Errors} Icon={Lock} Type='password' Name='confirmPassword' Label='Confirm Password' onInputChange={onInputChange} value={form.confirmPassword} classNameField='w-full' classNameContentLabel='!left-1'/>
				<CompleteFormInput onFocusOut={validate} Errors={Errors} Icon={AccountCircle} Type='text' Name='firstName' Label='First Name' onInputChange={onInputChange} value={form.firstName} classNameField='w-full' classNameContentLabel='!left-1'/>
				<CompleteFormInput onFocusOut={validate} Errors={Errors} Icon={AccountCircle} Type='text' Name='lastName' Label='Last Name' onInputChange={onInputChange} value={form.lastName} classNameField='w-full' classNameContentLabel='!left-1'/>
				
				<button onClick={onRegisterRequest} className='btn-simple-1'>Sign up!</button>
				<Link href='/user/login'><a className='btn-text-1 text-center'>Already have an account? Log in!</a></Link>
				<Link href='/user/forgot-password'><a className='btn-text-1 text-center'>Forgot password? Recover</a></Link>
				</div>
    </div>
	);
};

export default RegisterPage;
