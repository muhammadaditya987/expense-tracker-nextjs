"use client";

import { useState, useEffect, useMemo } from "react";

import { useDispatch, useSelector } from "react-redux";

import type { AppDispatch, RootState } from "@/store";
import {toast} from "sonner";

import {deleteTransaction, setEditTransaction, loadTransactions} from "@/store/slices/transactionSlice";

export default function useTransactions() {

    const dispatch = useDispatch<AppDispatch>();
    const transactions = useSelector((state: RootState) => state.transaction.transactions);
    const [search, setSearch] = useState("");
    const [filterType, setFilterType] = useState<"all" | "income" | "expense">("all");


            // GET ITEM LOCALSTORAGE
    useEffect(() => {
        const storedTransactions = localStorage.getItem("transactions");

        if(!storedTransactions) return;

        dispatch(loadTransactions(JSON.parse(storedTransactions)));
    }, [dispatch]);

            // SET ITEM LOCALSTORAGE
    useEffect(() => {
        localStorage.setItem("transactions", JSON.stringify(transactions))
    }, [transactions]);

            // FILTER
    const filteredTransactions = useMemo(() => {

        return transactions.filter((transaction) => {
            const matchSearch = 
                transaction.title.toLocaleLowerCase().includes(search.toLowerCase()) || 
                transaction.category.toLowerCase().includes(search.toLocaleLowerCase());

            const matchType =
                filterType === "all" ? true : transaction.type === filterType;

            return matchSearch && matchType;
            
        })
    }, [transactions, search, filterType])


            // DELETE
    const handleDelete = (id: number) => {
        const confirmDelete = window.confirm("Apakah yakin ingin menghapus transaksi ini?");

        if(!confirmDelete) return;
        
        dispatch(deleteTransaction(id));
        toast.success("Transaction deleted successfully!");
    };


            // EDIT
    const handleEdit = (id: number) => {
        const transaction = transactions.find((item) => item.id === id);

        if(!transaction) return;
        dispatch(setEditTransaction(transaction))
    }

    return {transactions, filteredTransactions, search, setSearch, filterType, setFilterType, handleDelete, handleEdit,}
}