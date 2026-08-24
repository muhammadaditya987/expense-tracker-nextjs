"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector  } from "react-redux";

import type { AppDispatch, RootState } from "@/store";
import { toast } from "sonner";

import { addTransaction, updateTransaction,} from "@/store/slices/transactionSlice";

import Button from "../ui/Button";
import Input from "../ui/Input";

export default function TransactionForm() {

    const dispatch = useDispatch<AppDispatch>();
    const editingTransaction = useSelector((state: RootState) => state.transaction.editingTransaction)

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const [type, setType] = useState<"income" | "expense">("income");
    const [date, setDate] = useState("");

    //useEffect inilah yang menyebabkan transaction lama, tampil di Inputan.
    useEffect(() => {
        if(editingTransaction) {
            setTitle(editingTransaction.title); //Isi state title dengan title milik editingTransaction.
            setAmount(editingTransaction.amount.toString());
            setCategory(editingTransaction.category);
            setType(editingTransaction.type);
            setDate(editingTransaction.date);
        }
    }, [editingTransaction]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        if (!title.trim() || !amount || !category.trim() || !date) {
            alert("Semua data wajib diisi.");
            return;
        }

        if (Number(amount) <= 0) {
            alert("Amount harus lebih dari 0.");
            return;
        }

        if(editingTransaction) {
            dispatch(updateTransaction({
                //"Property id diisi dengan nilai id yang ada di dalam editingTransaction."
                id: editingTransaction.id,
                title,
                amount: Number(amount),
                category,
                type,
                date,
            }));

            toast.success("Transaction updated successfully!");

        } else {
            dispatch(addTransaction({
                id: Date.now(),
                title,
                amount: Number(amount),
                category,
                type,
                date,
            }));

            toast.success("Transaction added successfully!");
        };

        setTitle("");
        setAmount("");
        setCategory("");
        setType("income");
        setDate("");

    }

    return (

        <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-xl border bg-white p-6 shadow"
        >

            <Input
                label="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <Input
                label="Amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />

            <Input
                label="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />

            <div>

                <label className="mb-2 block font-medium">
                    Type
                </label>

                <select
                    value={type}
                    onChange={(e) =>
                        setType(
                            e.target.value as "income" | "expense"
                        )
                    }
                    className="w-full rounded-lg border border-gray-300 p-3"
                >

                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
            </div>

            <Input
                label="Date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />

            <Button type="submit">
                {editingTransaction ? "Update Transaction" : "Add Transaction"}
            </Button>

        </form>

    );
}