import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

function NavBar() {
    return (
        <nav className="fixed top-0 z-50 flex items-center justify-between w-full px-8 py-2 text-gray-300 bg-slate-800">
            <Link
                href="/"
                className="flex items-center h-12 font-bold uppercase text-md"
            >
                Next Store
            </Link>
            <div className="flex items-center gap-8">
                <SignedIn>
                    <UserButton />
                </SignedIn>
                <SignedOut>
                    <SignInButton mode="modal">
                        <button className="px-3 py-2 uppercase border border-gray-400 rounded-md">
                            Fazer Login
                        </button>
                    </SignInButton>
                </SignedOut>
            </div>
        </nav>
    );
}

export default NavBar;
