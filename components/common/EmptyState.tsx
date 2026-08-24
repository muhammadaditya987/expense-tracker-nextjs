"use client";

interface EmpetyStateProps {
    title: string;
    description: string;
}

export default function EmpetyState ({title, description}: EmpetyStateProps) {
    return(
        <div className="flex flex-col items-center justify-center py-16">
            <div className="mb-4 text-6xl">
                📊
            </div>

            <h2 className="text-2xl font-bold">
                {title}
            </h2>

            <p className="mt-2 text-center text-gray-500">
                {description}
            </p>

        </div>
    )
}