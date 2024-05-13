import ProductCard from "@/components/ProductCard"
import { fetchData } from "@/lib/data"

const Shop = async () => {
    const data = await fetchData();

    if (data.length < 1) return (
        <div className="container mx-auto py-24">
            <h1 className="text-4xl font-bold text-center">
                Loading...
            </h1>
        </div>
    )
    return (
        <div className="container mx-auto py-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 2xl:grid-cols-6">
                {data?.map((product) => (
                    <ProductCard buyOption="Add to Cart" key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Shop;