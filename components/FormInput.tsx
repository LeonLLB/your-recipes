import { FunctionComponent } from "react"

interface PropsInterface {
    Icon?: FunctionComponent<any>,
    Errors: {},
    onFocusOut: ({})=>void,
    Type: string,
    Name: string,
    Label: string,
    value:any,
    onInputChange: (e:any)=>void,
    list?:any,
    className?: string,
    classNameMain?: string,
    classNameField?: string,
    classNameLabel?: string,
		classNameContentLabel?: string,
    definedValues?: any[]
}

const CompleteFormInput = ({Icon,Errors,onFocusOut,Type,Name,Label,onInputChange,className,classNameMain,classNameField,classNameLabel,classNameContentLabel,definedValues,list,value}:PropsInterface) => {
	return (<div>
		<div className={`${classNameMain} form-element bg-gray-100 divide-x divide-gray-600`}>
			{ Icon &&
				<div className="icon-container">
					<Icon className="h-6 w-6" />
				</div>
			}
			<div className={`${classNameField} field`}>
			<input
				placeholder=" "
				type={Type}
				name={Name}
				id={Name}
				className={`input-element ${className}`}
				onChange={onInputChange}
				onBlur={onFocusOut}
			/>
			<label htmlFor={Name} className={`label-element ${classNameLabel}`}>
				<span className={`content-label ${classNameContentLabel}`}>{Label || Name}</span>
			</label>
			</div>
		</div>
		{Errors && <div className="flex flex-col space-y-2">
			{(Errors[Name] && Errors[Name].required === false) && <span className="text-red-700 text-sm">This field is required</span>}
			{(Errors[Name] && value !== '' && Errors[Name].minLength?.state === false) && <span className="text-red-700 text-sm">The mininum length of this field is {Errors[Name].minLength?.value} characters</span>}
			{(Errors[Name] && value !== '' && Errors[Name].maxLength?.state === false) && <span className="text-red-700 text-sm">The maximun length of this field is {Errors[Name].maxLength?.value} characters</span>}
			{(Errors[Name] && value !== '' && Errors[Name].min?.state === false) && <span className="text-red-700 text-sm">The mininum value is {Errors[Name].min?.value}</span>}
			{(Errors[Name] && value !== '' && Errors[Name].max?.state === false) && <span className="text-red-700 text-sm">The maximun value is {Errors[Name].max?.value}</span>}
			{(Errors[Name] && value !== '' && Errors[Name].regex?.state === false) && <span className="text-red-700 text-sm">The field doesn't match this pattern: {Errors[Name].regex?.example}</span>}
			{(Errors[Name] && value !== '' && Errors[Name].mustMatch?.state === false) && <span className="text-red-700 text-sm">The field doesn't match with: {Errors[Name].mustMatch?.comparableLabel} </span>}
		</div>}
		{	(definedValues && definedValues.length > 0) &&
			<datalist id={list}>
				{	definedValues.map((valor,i) => (
					<option key={i} value={valor}/>
				))}
			</datalist>
		}
	</div>)
}

export default CompleteFormInput