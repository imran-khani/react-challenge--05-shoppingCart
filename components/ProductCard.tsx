'use client'

import { ProductTypes } from "@/types";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
import { Button } from "./ui/button";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addToCart } from "@/features/cartSlice";
import toast from "react-hot-toast";
import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";


interface Props {
    product: ProductTypes;
    buyOption: string;
}

const ProductCard = ({ product, buyOption }: Props) => {
    const [sameProductTotal, setSameProductTotal] = useState<number | null>(null);

    const dispatch = useAppDispatch();
    const { items } = useAppSelector((state) => state.cartSlice);


    const handleBuy = () => {
        dispatch(addToCart(product));

        const itemInCart = items.find((item) => item.id === product.id);
        if (itemInCart) {
            return ;
        } else {
            toast.success('Item added to cart');
        }
    }

    if (!product) return null;

    useEffect(() => {
        if (items) {
            const itemInCart = items.find((item) => item.id === product.id);
            setSameProductTotal(itemInCart?.quantity || null);
        }
    }, [items, product]);

    return (
        <Card className="h-92 relative">
            <CardHeader>
                <CardTitle>
                    <span>
                        ${product.price}
                    </span>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="relative w-full aspect-square">
                    <Image
                        fill
                        className="object-contain"
                        src={product.image}
                        alt={product.title}
                        blurDataURL={product.image}
                    />
                </div>
                <div className="absolute top-0 right-0">
                    {sameProductTotal && (
                        <span className="bg-indigo-500 text-white text-xs rounded-full py-1 px-2 absolute top-2 right-2">
                            {sameProductTotal}
                        </span>
                    )}
                </div>
            </CardContent>
            <CardFooter className="flex-col">
                <p className="text-sm leading-relaxed line-clamp-1">
                    {product.title}
                </p>
                <Button
                    variant='default'
                    className="mt-4 flex gap-x-2"
                    onClick={handleBuy}
                    disabled = {sameProductTotal === product.quantity}
                >
                    {buyOption}
                    <ShoppingCart size={20} />
                </Button>
            </CardFooter>
        </Card>

    );
};

export default ProductCard;