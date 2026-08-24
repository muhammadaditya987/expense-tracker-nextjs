
interface NavbarProps {
    onToggleSidebar: () => void;
}


export default function Navbar({onToggleSidebar}: NavbarProps) {
    return(
        <header className="border-b bg-white shadow-sm">
            <div className="flex items-center justify-between px-8 py-4">
                <button
                    onClick={onToggleSidebar}
                    className="mr-4 text-2xl lg:hidden"
                >
                    ☰
                </button>
                <h1 className="text-2xl font-bold text-blue-600">
                Expense Tracker
                </h1>

                <div className="flex items-center gap-3">
                    <div className="text-right">
                        <p className="font-semibold">
                        Muhammad Aditya
                        </p>

                        <p className="text-sm text-gray-500">
                        Frontend Developer
                        </p>
                    </div>

                    <div
                        className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        bg-blue-600
                        text-lg
                        font-bold
                        text-white
                        "
                    >
                        M
                    </div>
                </div>
            </div>
        </header>
    )
}