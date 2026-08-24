import type {BaseProps} from "@/types/common";

export default function MainLayout({children}: BaseProps) {
    return(
        <main className="min-h-screen bg-gray-100">
            <div className="mx-auto max-w-7xl px-6 py-10">
                {children}
            </div>
        </main>
    )
}