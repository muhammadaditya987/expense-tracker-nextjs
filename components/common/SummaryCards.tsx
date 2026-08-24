"use client";

import formatCurrency from "@/utils/formatCurrency";
import Card from "../ui/Card";

import useSummary from "@/hooks/useSummary";

export default function SummaryCards() {

    const { totalIncome, totalExpense, balance, } = useSummary();

    return (

        <div className="mb-8 grid gap-6 md:grid-cols-3">
            <Card>
                <p className="text-gray-500">
                    Total Income
                </p>

                <h2 className="mt-2 text-3xl font-bold text-green-600">
                    Rp {formatCurrency(totalIncome)}
                </h2>

            </Card>

            <Card>

                <p className="text-gray-500">
                    Total Expense
                </p>

                <h2 className="mt-2 text-3xl font-bold text-red-600">
                    Rp {formatCurrency(totalIncome)}
                </h2>

            </Card>

            <Card>

                <p className="text-gray-500">
                    Balance
                </p>

                <h2 className="mt-2 text-3xl font-bold text-blue-600">
                    Rp {formatCurrency(totalIncome)}
                </h2>

            </Card>
        </div>
    );

}