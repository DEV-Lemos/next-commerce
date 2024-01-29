"use client";
import Image from "next/image";
import { useState } from "react";
import { ProductType } from "@/types/ProductType";

type ProductImageProps = {
    product: ProductType;
    fill?: boolean;
};

export default function ProductImage({ product, fill }: ProductImageProps) {
    const [load, setLoad] = useState(true);
    return fill ? (
        <Image
            src={product.image}
            fill
            alt="product.title"
            className={`object-cover ${
                load
                    ? "scale-110 blur-3xl grayscale"
                    : "scale-100 blur-0 grayscale-0"
            }`}
            onLoadingComplete={() => setLoad(false)}
        />
    ) : (
        <Image
            src={product.image}
            width={400}
            height={700}
            alt="product.title"
            className={`object-cover ${
                load
                    ? "scale-110 blur-3xl grayscale"
                    : "scale-100 blur-0 grayscale-0"
            }`}
            onLoadingComplete={() => setLoad(false)}
        />
    );
}
