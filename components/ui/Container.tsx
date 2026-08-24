import type {BaseProps} from "@/types/common";


export default function Container({children}: BaseProps) {
    return(
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            {children}
        </div>
    )
}