import { ProductType } from "@/types/ProductType";
import Image from "next/image";
import ProductImage from "./PorductImage";
import { formatPrice } from "@/lib/utils";
import { useStore } from "zustand";
import AddCart from "./AddCart";
import Link from "next/link";

type ProductProps = {
    product: ProductType;
};

export default function Product({ product }: ProductProps) {
    return (
        <Link href={`/product/${product.id}`}>
            <div className="flex flex-col p-5 text-gray-300 shadow-lg h-96 bg-slate-800">
                <div className="relative flex-1 max-h-72">
                    <ProductImage product={product} fill />
                </div>
                <div className="flex justify-between my-3 font-bold">
                    <p className="w-40 truncate ">{product.name}</p>
                    <p className="text-teal-300 text-md">
                        {formatPrice(product.price)}
                    </p>
                </div>
                <AddCart product={product} />
            </div>
        </Link>
    );
}
