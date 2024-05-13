'use client'

import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { onOpen } from "@/features/loginSlice"
import { onCartOpen } from "@/features/modalSlice";
import { ShoppingCart } from "lucide-react";
import { Badge } from "./ui/badge";
import { useCallback } from "react";


const Navbar = () => {


    const dispatch = useAppDispatch();
    const { items } = useAppSelector((state) => state.cartSlice)
    const handleOpen = useCallback(() => {
        dispatch(onOpen())
    }, [dispatch])


    const handleCartOpen = useCallback(() => {
        dispatch(onCartOpen())
    }, [dispatch])


    return (
        <div
            className="bg-gray-800 text-white"
        >
            <div className="flex justify-between items-center p-4 container">

                <div className="text-2xl font-bold">LOGO</div>
                <div className="flex space-x-4">
                    <button
                        onClick={handleOpen}
                        className="hover:underline">Login</button>
                    <button
                        className="relative"
                        onClick={handleCartOpen}
                    >
                        <ShoppingCart size={24} />
                        <Badge className="absolute top-0 h-4 text-xs" >
                            {items.length}
                        </Badge>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar