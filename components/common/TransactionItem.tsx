"use client";

import Button from "../ui/Button";
import formatCurrency from "@/utils/formatCurrency";
import formatDate from "@/utils/formatDate";

import type { Transaction } from "@/types/transaction";

interface TransactionItemProps {
    transaction: Transaction;
    onEdit: (transaction: Transaction) => void;
    onDelete: (id: number) => void;
}

export default function TransactionItem({
    transaction,
    onEdit,
    onDelete,
}: TransactionItemProps) {
    return (
        <div className="flex items-center justify-between border-b pb-4">

            <div>
                <h3 className="text-lg font-semibold">
                    {transaction.title}
                </h3>

                <p className="capitalize text-gray-500">
                    {transaction.category}
                </p>

                <p className="text-sm text-gray-400">
                    {formatDate(transaction.date)}
                </p>
            </div>

            <div className="flex items-center gap-4">

                <p
                    className={
                        transaction.type === "income"
                            ? "font-bold text-green-600"
                            : "font-bold text-red-600"
                    }
                >
                    {transaction.type === "income" ? "+" : "-"}

                    {formatCurrency(transaction.amount)}
                </p>

                <Button
                    onClick={() => onEdit(transaction)}
                >
                    Edit
                </Button>

                <Button
                    className="bg-red-600 hover:bg-red-700"
                    onClick={() => onDelete(transaction.id)}
                >
                    Delete
                </Button>

            </div>

        </div>
    );
}