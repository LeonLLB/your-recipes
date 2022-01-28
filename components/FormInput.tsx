import { FunctionComponent } from "react"
import { FormDataInterface } from "../hooks/useValidate"

interface PropsInterface {
    Icon: FunctionComponent<any>,
    Errors: any[],
    onFocusOut: (e:any)=>void,
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
    definedValues?: any[]
}

const FormInput = ({Icon,Errors,onFocusOut,Type,Name,Label,onInputChange,className,classNameMain,classNameField,classNameLabel,definedValues,list,value,...rest}:PropsInterface) => {
	return (<div>
		<div className={`${classNameMain} form-element bg-gray-100 divide-x divide-gray-600`}>
			<div className="icon-container">
			<Icon className="h-6 w-6" />
			</div>
			<div className={`${classNameField} field`}>
			<input
				placeholder=" "
				type={Type}
				name={Name}
				id={Name}
				className={`input-element ${className}`}
				onChange={onInputChange}
				onBlur={onFocusOut}
				{...rest}
			/>
			<label htmlFor={Name} className={`label-element ${classNameLabel}`}>
				<span className="content-label">{Label || Name}</span>
			</label>
			</div>
		</div>
		{Errors && <div className="flex flex-col space-y-2">
			{(Errors[Name] && !Errors[Name].required) && <span className="text-red-700 text-sm">Este campo es requerido</span>}
			{(Errors[Name] && value !== '' && !Errors[Name].minLentgh?.state) && <span className="text-red-700 text-sm">El campo debe de tener un minimo de {Errors[Name].minLentgh?.value} caracteres</span>}
			{(Errors[Name] && value !== '' && !Errors[Name].maxLentgh?.state) && <span className="text-red-700 text-sm">El campo debe de tener un maximo de {Errors[Name].maxLentgh?.value} caracteres</span>}
			{(Errors[Name] && value !== '' && !Errors[Name].min?.state) && <span className="text-red-700 text-sm">El campo debe de ser mayor a {Errors[Name].min?.value}</span>}
			{(Errors[Name] && value !== '' && !Errors[Name].max?.state) && <span className="text-red-700 text-sm">El campo debe de ser menor a {Errors[Name].max?.value}</span>}
			{(Errors[Name] && value !== '' && !Errors[Name].minMaxWords?.state) && <span className="text-red-700 text-sm">El campo debe de tener entre {Errors[Name].minMaxWords?.value[0]} y {Errors[Name].minMaxWords?.value[1]} palabras</span>}
			{(Errors[Name] && value !== '' && !Errors[Name].regex?.state) && <span className="text-red-700 text-sm">El campo no cumple con el patron {Errors[Name].regex?.exp}</span>}
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

export default FormInput