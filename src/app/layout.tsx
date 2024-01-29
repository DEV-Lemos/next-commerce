import { Inter } from "next/font/google";
import "../app/globals.css";
import NavBar from "./components/Navbar";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Next E-commerce",
    description: "E-Commerce",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={clsx(inter.className, "bg-slate-700")}>
                <NavBar />
                <main className="h-screen p-16 bg-slate-700">{children}</main>
            </body>
        </html>
    );
}
