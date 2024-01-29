import { ProductType } from "@/types/ProductType";

async function getProducts() {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

export default async function Home() {
    const products = await getProducts();
    console.log(products);
    https: return (
        <div className="px-8 pt-8 mx-auto max-w-7xl xl:px-0 ">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-6">
                {products.map((product: ProductType) => (
                    <div key={product.id}>{product.title}</div>
                ))}
            </div>
        </div>
    );
}
