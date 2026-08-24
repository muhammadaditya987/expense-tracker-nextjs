"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";

import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";

import { transactions } from "@/constants/transactions";


export default function DashboardPage() {

    return(
            
            <DashboardLayout>
                <Container>
                    <div className="py-8">

                    <h1 className="mb-2 text-3xl md:text-4xl font-bold">
                        Expense Tracker Dashboard
                    </h1>

                    <p className="mb-8 text-gray-500">
                        Welcome Back, Muhammad 👋
                    </p>

                    <div className="mb-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">

                        <Card>
                            <h3 className="text-gray-500">
                                Total Balance
                            </h3>

                            <p className="mt-2 text-3xl font-bold">
                                Rp9.925.000
                            </p>
                        </Card>

                        <Card>
                            <h3 className="text-gray-500">
                                Income
                            </h3>

                            <p className="mt-2 text-3xl font-bold text-green-600">
                                Rp10.000.000
                            </p>
                        </Card>

                        <Card>
                            <h3 className="text-gray-500">
                                Expense
                            </h3>

                            <p className="mt-2 text-3xl font-bold text-red-600">
                                Rp75.000
                            </p>
                        </Card>

                    </div>

                    <Card>

                        <h2 className="mb-5 text-2xl font-bold">
                        Recent Transactions
                        </h2>

                        <div className="space-y-4">

                        {transactions.map((transaction) => (

                            <div
                            key={transaction.id}
                            className="flex items-center justify-between border-b pb-3"
                            >

                                <p className="font-medium">
                                    {transaction.title}
                                </p>

                                <p
                                    className={
                                    transaction.type === "income"
                                        ? "font-bold text-green-600"
                                        : "font-bold text-red-600"
                                    }
                                >
                                    {transaction.type === "income"
                                    ? "+"
                                    : "-"}
                                    Rp
                                    {transaction.amount.toLocaleString("id-ID")}
                                </p>

                            </div>

                        ))}

                        </div>

                    </Card>
                    </div>
                </Container>
            </DashboardLayout>

    )
}