import Link from "next/link";

interface SidebarProps {
    isOpen: boolean;
}

export default function Sidebar ({isOpen}: SidebarProps) {
    return (
        <aside 
            className={`
                ${
                isOpen ? "translate-x-0" : "-translate-x-full"
                }
                fixed
                top-0
                left-0
                z-40
                h-screen
                w-64
                bg-slate-900
                p-6
                text-white
                transition-transform
                duration-300
                lg:translate-x-0
            `}
        >
            <h2 className="mb-8 text-2xl font-bold">
                Expense Tracker
            </h2>
            <nav>
                <ul className="space-y-4">
                    <li>
                        <Link
                            href="/dashboard"
                            className="block rounded-md px-3 py-2 hover:bg-slate-700 transition-all"
                        >
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/transactions"
                            className="block rounded-md px-3 py-2 hover:bg-slate-700 transition-all"
                        >
                            Transactions
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/login"
                            className="block rounded-md px-3 py-2 hover:bg-slate-700 transition-all"
                        >
                            Logout
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}