"use client";

import useTransactions from "@/hooks/useTransactions";

import DashboardLayout from "@/components/layout/DashboardLayout";
import Container from "@/components/ui/Container";
import TransactionForm from "@/components/common/TransactionForm";
import TransactionList from "@/components/common/TransactionList";
import SummaryCards from "@/components/common/SummaryCards";
import Input from "@/components/ui/Input";

export default function TransactionsPage() {

    const { transactions, filteredTransactions, search, setSearch, 
    filterType, setFilterType, handleDelete, handleEdit,} 
    = useTransactions();

    return (
        <DashboardLayout>
            <Container>
                <div className="py-8">
                    {/* Judul Halaman */}
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold">
                            Transactions
                        </h1>

                        <p className="mt-2 text-gray-500">
                            Total Transaction : {transactions.length}
                        </p>
                    </div>

                    {/* Tampilan Amount */}
                    <SummaryCards />

                    {/* SEARCH TRANSACTION */}
                    <div className="mb-6">
                        <Input 
                            type="text"
                            placeholder="Search Transaction..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    {/* SEARCH TYPE */}
                    <div className="mb-6">
                        <select 
                            value={filterType}
                            onChange={(e) => setFilterType(e.target.value as "all" | "income" | "expense")}
                            className="
                                w-full
                                rounded-lg
                                border
                                border-gray-300
                                px-4
                                py-3
                            "
                        >
                            <option value="all">All</option>
                            <option value="income">Income</option>
                            <option value="expense">Expense</option>
                        </select>
                    </div>

                    {/* Form Tambah Transaksi */}
                    <div className="mb-8">
                        <TransactionForm />
                    </div>

                    {/* List Transaksi */}
                    <TransactionList
                        transactions={filteredTransactions}
                        onEdit={(transaction) => handleEdit(transaction.id)}
                        onDelete={handleDelete}
                    />

                </div>

            </Container>
        </DashboardLayout>
    );
}