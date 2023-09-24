import type {
    HTMLInputTypeAttribute
} from "react";

import { useField } from "remix-validated-form";

/**
 * FormInput Type
 */
type FormInputProps = {
    name: string;
    label: string;
    placeholder?: string;
    isRequired?: boolean;
    type?: HTMLInputTypeAttribute;
};

/**
 * 
 * @param param0 
 * @returns JSX.Element
 */
export const FormInput = ({
    name,
    label,
    placeholder,
    isRequired = false,
    type = "text"
}: FormInputProps) => {
    const { error, getInputProps } = useField(name);
    return (
        <div className="flex flex-col rounded-md p-2 mb-2">
            <label
                className="text-gray-700"
                htmlFor={name}>
                {label}
            </label>
            <input
                className="px-4 py-2 my-2 border border-gray-300 rounded-md"
                {...getInputProps({
                    id: name,
                    type,
                    required: isRequired,
                    placeholder
                })} />
            {error && (
                <span className="text-xs text-red-500">{error}</span>
            )}
        </div>
    );
};