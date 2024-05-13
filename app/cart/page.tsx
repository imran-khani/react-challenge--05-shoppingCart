'use client'

import ProductCard from "@/components/ProductCard";
import { useAppSelector } from "@/lib/hooks";


const CartPage = () => {
    const { items } = useAppSelector((state) => state.cartSlice);
  return (
    <div
    className="container py-24 mx-auto"
    >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3">
            {
                items.map((item)=>(
                    <ProductCard buyOption="Checkout" key={item.id} product={item} />
                ))
            }
        </div>
    </div>
  )
}

export default CartPage