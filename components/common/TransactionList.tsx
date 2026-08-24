"use client";

import Card from "../ui/Card";
import EmptyState from "./EmptyState";

import type { Transaction } from "@/types/transaction";

import TransactionItem from "./TransactionItem";

interface TransactionListProps {
    transactions: Transaction[];
    onEdit: (transaction: Transaction) => void; //onEdit adalah sebuah function yang menerima satu Transaction dan tidak mengembalikan nilai
    onDelete: (id: number) => void;
} //kesimpulannya, 2 tipe diatas mengharapkan dibuatkan function. functionnya dibuat pada saat tombol diklik.

export default function TransactionList({transactions, onEdit, onDelete,}: TransactionListProps) {

    if (transactions.length === 0) {
        return (
            <Card>
                <EmptyState
                    title="Belum ada transaksi."
                    description="Silahkan tambahkan transaksi pertama anda."
                />
            </Card>
        );
    }

    return (

        <Card>
            <div className="space-y-5">
                {transactions.map((transaction) => (
                    <TransactionItem
                        key={transaction.id}
                        transaction={transaction}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                ))}
            </div>
        </Card>

    );

}