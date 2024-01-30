import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useCartStore } from "@/store";

function NavBar() {
    //const useStore = useCartStore();

    return (
        <nav className="fixed top-0 z-50 flex items-center justify-between w-full px-8 py-2 text-gray-300 bg-slate-800">
            <Link
                href="/"
                className="flex items-center h-12 font-bold uppercase text-md"
            >
                Next Store
            </Link>
            <div className="flex items-center gap-8">
                <div className="relative flex items-center cursor-pointer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                    </svg>
                    <span className="absolute flex items-center justify-center w-5 h-5 text-sm font-bold bg-teal-600 rounded-full left-3 bottom-3">
                        2
                    </span>
                </div>
                <div>
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
            </div>
        </nav>
    );
}

export default NavBar;
