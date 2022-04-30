import type { ChangeEvent, HTMLAttributes, FocusEvent } from "react";

export interface InputProps {
	onChange?: any;
	onBlur?: (e: FocusEvent<HTMLInputElement>) => void;

	name: string;
	$width?: string;
	$height?: string;
	$border?: string;
	$bottomborder?: string;
    $placeholder?: string;
	$margin?: string; 
	value?: string;
	error?: boolean;
	errorMessage?: string | undefined;
	sumbit?: boolean;
	id?: string;
	colorLabel?: string;

}

export interface ITextarea {
	name: string;
	$width?: string;
	$height?: string;
	$border?: string;
	$bottomborder?: string;
    $placeholder?: string;
	$margin?: string; 
	value?: string;
	error?: boolean;
	errorMessage?: string | undefined;
	sumbit?: boolean;
	id?: string;
	colorLabel?: string;
}

export interface IInputWrapper {
	$height?: string;

}
