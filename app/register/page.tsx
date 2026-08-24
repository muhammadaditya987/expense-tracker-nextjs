import Link from "next/link";

import MainLayout from "@/components/layout/MainLayout";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function RegisterPage() {
    return(
        <MainLayout>
            <Container>
                <div className="flex min-h-[80vh] items-center justify-center">
                    <Card>
                        <div className="w-95 space-y-5">
                            <div className="text-center">
                                <h1 className="text-3xl font-bold">
                                    Expense Tracker
                                </h1>
                                <p className="mt-2 text-gray-500">
                                    Create New Account
                                </p>
                            </div>

                            <Input
                                placeholder="Masukkan Nama..."
                            />

                            <Input
                                type="email"
                                placeholder="Masukkan Email..."
                            />

                            <Input
                                type="password"
                                placeholder="Masukkan Password..."
                            />
                            <Input
                                type="password"
                                placeholder="Konfirmasi Password..."
                            />

                            <Button>
                                Register
                            </Button>

                            <p className="text-center text-sm text-gray-500">
                                Already have an account? {" "}
                                <Link
                                    href="/login"
                                    className="font-semibold text-blue-600 hover:underline"
                                >
                                    Login
                                </Link>
                            </p>
                        </div>
                    </Card>
                </div>
            </Container>
        </MainLayout>
    )
}