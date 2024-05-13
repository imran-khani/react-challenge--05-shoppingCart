'use client'

import { ProductTypes } from "@/types"

interface TotalPriceProps {
    items: ProductTypes[]
}

const TotalPrice = ({ items }: TotalPriceProps) => {

    const getTotal = (cartItem: ProductTypes[]) => {
        let totalQuantity = 0;
        let totalPrice = 0;
        cartItem.forEach((item) => {
            totalQuantity += item.quantity!;
            totalPrice += item.price! * item.quantity!;
        });
        return { totalPrice, totalQuantity };
    };
    const { totalPrice, totalQuantity } = getTotal(items);

    return (
        <div className="flex gap-x-2 justify-between">
            <div className="flex flex-col">
                <span className="text-sm text-gray-500">Total Quantity</span>
                <span className="text-lg font-bold">{totalQuantity}</span>
            </div>
            <div className="flex flex-col">
                <span className="text-sm text-gray-500">Total Price</span>
                <span className="text-lg font-bold">{
                    new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                    }).format(totalPrice)
                }</span>
            </div>
        </div>
    )
}

export default TotalPrice