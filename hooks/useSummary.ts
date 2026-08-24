"use client";

import { useMemo } from "react";
import { useSelector } from "react-redux";

import type { RootState } from "@/store";

export default function useSummary() {
    const transactions = useSelector((state: RootState) => state.transaction.transactions);

    const totalIncome = useMemo(() => {
        return transactions.filter((transaction) => transaction.type === "income")
        .reduce((total, transaction) => total + transaction.amount, 0)
    }, [transactions]);

    const totalExpense = useMemo(() => {
        return transactions.filter((transaction) => transaction.type === "expense")
        .reduce((total, transaction) => { return total + transaction.amount;}, 0);
    }, [transactions]);

    const balance = useMemo(() => {
        return totalIncome - totalExpense;
    }, [totalIncome, totalExpense]);

    return { totalIncome, totalExpense, balance, };
}