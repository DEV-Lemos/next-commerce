"use client";
import { useCartStore } from "@/store";

export default function Cart() {
    const useStore = useCartStore();
    return (
        <>
            <div
                onClick={() => useStore.toggleCart()}
                className="relative flex items-center cursor-pointer"
            >
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
            {!useStore.isOpen && (
                <div
                    onClick={() => useStore.toggleCart()}
                    className="fixed top-0 left-0 z-50 w-full h-screen bg-black/25"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="absolute top-0 right-0 w-1/3 h-screen p-12 overflow-y-scroll bg-slate-600"
                    >
                        <h1>Meu carrinho</h1>
                        {useStore.cart.map((item) => (
                            <div key={item.id}>{item.name}</div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
