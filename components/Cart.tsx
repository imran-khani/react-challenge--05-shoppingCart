'use client';

import {
    Sheet,
    SheetContent,
} from '@/components/ui/sheet';
import { onClose } from '@/features/modalSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Trash2 } from 'lucide-react';
import Image from 'next/image';
import { decreaseQuantitiy, increaseQuantity, removeTodo } from '@/features/cartSlice';
import toast from 'react-hot-toast';
import TotalPrice from './TotalPrice';
import Link from 'next/link';

const Cart = () => {
    const { isCartOpen } = useAppSelector((state) => state.modalSlice);

    const { items } = useAppSelector((state) => state.cartSlice);

    const [isOpen, setIsOpen] = useState(isCartOpen);

    const dispatch = useAppDispatch();

    useEffect(() => {
        setIsOpen(isCartOpen);
    }, [isCartOpen]);

    const handleOpenChange = (open: boolean) => {
        setIsOpen(open);
        dispatch(onClose());
    };

    const handleRemoveItem = (id: number) => {
        dispatch(removeTodo({ id }));
    };
    const handleMinus = (id: number) => {
        dispatch(decreaseQuantitiy({ id }));
    }
    const handlePlus = (id: number) => {
        dispatch(increaseQuantity({ id }));
    }

    return (
        <Sheet open={isOpen} onOpenChange={handleOpenChange}>
            <SheetContent className="py-20 overflow-y-auto">
                {items.length < 1 ? (
                    <div className="flex flex-col items-center justify-center space-y-5">
                        <h3 className="text-lg font-bold">Your cart is empty</h3>
                        <p className="text-sm text-gray-500">
                            Looks like you haven't added any items to the cart yet.
                        </p>
                    </div>
                ) : (
                    <div className="flex flex-col space-y-5">
                        {items?.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center justify-between gap-x-2"
                            >
                                <div className="flex items-center space-x-5 flex-1 ">
                                    <div className="relative aspect-square h-28">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-y-2">
                                        <h3 className="text-xs font-bold line-clamp-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-xs text-indigo-700">${item.price}</p>
                                        <div className="flex items-center">
                                            <Button
                                                variant={'ghost'}
                                                className="text-indigo-700 px-2 h-7"
                                                disabled={item.quantity === 1}
                                                onClick={() => handleMinus(item.id)}
                                            >
                                                -
                                            </Button>
                                            <span className="text-sm">{item.quantity}</span>
                                            <Button
                                                variant={'ghost'}
                                                className="text-indigo-700 px-2 h-7"
                                                onClick={() => handlePlus(item.id)}
                                            >
                                                +
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <Button
                                        onClick={() => handleRemoveItem(item.id)}
                                        variant={'ghost'}
                                        className="text-red-500 px-2 h-7"
                                    >
                                        <Trash2 size={20} />
                                    </Button>
                                </div>
                            </div>
                        ))}

                        <TotalPrice items={items} />
                        <Link className='text-xs text-gray-500 underline' href="/cart">view all products</Link>

                        <div className="w-full">
                            <Button
                                onClick={() => toast.success('Checkout feature is not available yet.')}
                                className='w-full'>Checkout</Button>
                        </div>
                    </div>
                )}
            </SheetContent>
        </Sheet>
    );
};

export default Cart;