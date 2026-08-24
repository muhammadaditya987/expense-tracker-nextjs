import {InputHTMLAttributes,} from "react";

interface Inputprops extends InputHTMLAttributes<HTMLInputElement> {
    type?: string;
    placeholder?: string;
    label?: string;
}

export default function Input({
    type="text", 
    placeholder,
    label,
    ...props
}: Inputprops) {
    return(
        <div>
            {label && (
                <label className="mb-2 block font-medium">
                    {label}
                </label>
            )}
            <input 
                type={type} 
                {...props}
                placeholder={placeholder}
                className="
                    w-full
                    rounded-lg
                    border
                    border-gray-300
                    px-4
                    py-2
                    outline-none
                    transition
                    focus:border-blue-500
                "
            />
        </div>
    )
}