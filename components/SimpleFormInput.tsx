import { FunctionComponent } from "react"

interface PropsInterface {
    Icon?: FunctionComponent<any>,
    onFocusOut?: (e:any)=>void,
    Type: string,
    Name: string,
    Label: string,
    onInputChange: (e:any)=>void,
    className?: string,
    classNameMain?: string,
    classNameField?: string,
    classNameLabel?: string,
    classNameContentLabel?: string,
	value?:any
}

const SimpleFormInput = ({Icon,onFocusOut,Type,Name,Label,onInputChange,className,classNameMain,classNameField,classNameLabel,classNameContentLabel,value}:PropsInterface) => {
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
				value={value}
			/>
			<label htmlFor={Name} className={`label-element ${classNameLabel}`}>
				<span className={`content-label ${classNameContentLabel}`}>{Label || Name}</span>
			</label>
			</div>
		</div>
	</div>)
}

export default SimpleFormInput