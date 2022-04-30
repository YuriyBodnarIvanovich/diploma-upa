import type { FocusEvent } from "react";

export interface InputProps {
	onChange?: any;
	onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
	type?: string;
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
	bold?: boolean;
	italic?: boolean;
	fontSize?: number;
}

export interface ITextarea {
	name: string;
	$width?: string;
	$height?: string;
	$border?: string;
	type?: string;
	$bottomborder?: string;
    $placeholder?: string;
	$margin?: string; 
	value?: string;
	error?: boolean;
	errorMessage?: string | undefined;
	sumbit?: boolean;
	id?: string;
	colorLabel?: string;
	bold?: boolean;
	italic?: boolean;
	fontSize?: number;
}

export interface IInputWrapper {
	$height?: string;

}
