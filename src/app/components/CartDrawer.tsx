"use client";

import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/store";
import Image from "next/image";

const CartDrawer = () => {
    const useStore = useCartStore();
    return (
        <div
            onClick={() => useStore.toggleCart()}
            className="fixed top-0 left-0 z-50 w-full h-screen bg-black/25"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="absolute top-0 right-0 w-1/3 h-screen p-8 overflow-y-scroll bg-slate-600"
            >
                <button
                    onClick={() => useStore.toggleCart()}
                    className="text-sm font-bold text-teal-600"
                >
                    Voltar para loja
                </button>
                <div className="my-4 border-t border-gray-400"></div>
                {useStore.cart.map((item) => (
                    <div className="flex gap-4 py-4" key={item.id}>
                        <Image
                            src={item.image}
                            alt={item.name}
                            width={80}
                            height={80}
                            className="object-cover w-24"
                        />
                        <div>
                            <h2 className="truncate w-42">{item.name}</h2>
                            <h2>Quantidade: {item.quantity}</h2>
                            <p className="text-sm font-bold text-teal-600">
                                {formatPrice(item.price)}
                            </p>
                            <button
                                className="px-2 py-1 mt-2 mr-1 text-sm border rounded-md"
                                onClick={() => useStore.addProduct(item)}
                            >
                                Adicionar
                            </button>
                            <button
                                onClick={() => useStore.removeProduct(item)}
                                className="px-2 py-1 mt-2 text-sm border rounded-md"
                            >
                                Remover
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CartDrawer;
