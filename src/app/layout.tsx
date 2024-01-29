import { Inter } from "next/font/google";
import "../app/globals.css";
import NavBar from "./components/Navbar";

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
            <body className={inter.className}>
                <NavBar />
                <main className="bg-slate-700 h-screen p-16">{children}</main>
            </body>
        </html>
    );
}
