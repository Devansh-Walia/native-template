import { HTMLInputTypeAttribute, MouseEventHandler, ReactElement } from 'react'
import { FieldError } from 'react-hook-form'

export interface InputProps {
	style?: React.CSSProperties
	type?: HTMLInputTypeAttribute
	placeholder?: string
	required?: boolean

	/** Adds label text */
	label?: string

	/** Adds react-hook-form's register */
	register?: React.InputHTMLAttributes<HTMLInputElement>

	/** Add react-hook-form error object */
	error?: FieldError

	value?: string | undefined
}
