import { ProductType } from "@/types/ProductType";

type ProductProps = {
    product: ProductType;
};

export default function Poruct({ product }: ProductProps) {
    return (
        <div className="flex flex-col p-5 text-gray-300 shadow-lg h-96 bg-slate-800">
            <div className="relative flex-1 max-h-72">{product.image}</div>
            <div className="flex justify-between my-3 font-bold">
                {product.title}
            </div>
            <button className="text-white bg-teal-600 rounded-md px-3.5 py-2.5 text-sm text-center">
                Adicionar ao Carrinho
            </button>
        </div>
    );
}
