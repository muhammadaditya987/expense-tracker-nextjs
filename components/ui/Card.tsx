import type {BaseProps} from "@/types/common";

export default function Card({children}: BaseProps) {
    return(
        <div className=" rounded-xl bg-white p-6 shadow-md">
            {children}
        </div>
    )
}