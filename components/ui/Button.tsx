import { ButtonHTMLAttributes, ReactNode } from "react";

interface Buttonprops extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    disabled?: boolean;
}

export default function Button({
    children, 
    className="",
    disabled = false,
    ...props
}: Buttonprops) {
    return(
        <button
            disabled={disabled}
            {...props}
            className=
                {`w-full 
                rounded-lg 
                bg-blue-600 
                px-4 
                py-3 
                font-semibold 
                text-white 
                transition 
                hover:bg-blue-700 
                md:w-auto
                ${className}
            `}
        >
            {children}
        </button>
    );
}