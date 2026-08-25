"use client";

import {useMemo} from "react";

import type { Transaction } from "@/types/transaction";

import formatCurrency from "@/utils/formatCurrency";

import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
    Legend,
} from "recharts";

interface ExpenseChartProps {
    transactions: Transaction[];
}

const COLORS = ["#22c55e", "#ef4444"];

export default function ExpenseChart({transactions}: ExpenseChartProps) {

    const chartData = useMemo(() => {

        const income = transactions.filter((transaction) => transaction.type === "income")
            .reduce((total, transaction) => total + transaction.amount, 0);

        const expense = transactions.filter((transaction) => transaction.type === "expense")
            .reduce((total, transaction) => {
                return total + transaction.amount
            }, 0)

        return [
            {
                name: "Income",
                value: income,
            },
            {
                name: "Expense",
                value: expense
            },
        ];
    }, [transactions]);

    const total = chartData.reduce((sum, item) => sum + item.value, 0);

    const incomeValue =
    chartData.find((item) => item.name === "Income")?.value ?? 0;

    const expenseValue =
    chartData.find((item) => item.name === "Expense")?.value ?? 0;

    const incomePercentage = 
        total === 0 ? 0 : (incomeValue / total) * 100;

    const expensePercentage = 
        total === 0 ? 0 : (expenseValue / total) * 100;

    return(
        <div className="rounded-xl bg-white p-6 shadow">
            <h2 className="mb-6 text-2xl font-bold">
                Financial Analytics
            </h2>

            <div className="h-80">
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            data={chartData}
                            dataKey="value"
                            nameKey="name"
                            outerRadius={110}
                            label
                        >
                            {chartData.map((entry, index) => (
                                <Cell
                                    key={entry.name}
                                    fill={COLORS[index]}
                                />
                            ))}
                        </Pie>

                        <Tooltip />

                        <Legend />

                    </PieChart>
                </ResponsiveContainer>
            </div>

            <div className="mt-6 space-y-3">
                <div>
                    <p className="text-green-600 font-semibold">
                        Income :{" "} 
                        {incomePercentage.toFixed(1)}%
                    </p>

                    <p className="text-sm text-gray-500">
                        {formatCurrency(incomeValue)}
                    </p>
                </div>

                <div>
                    <p className="text-red-600 font-semibold">
                        Expense :{" "}
                        {expensePercentage.toFixed(1)}%
                    </p>
                    
                    <p className="text-sm text-gray-500">
                        {formatCurrency(expenseValue)}
                    </p>
                </div>
            </div>
        </div>
    )
}