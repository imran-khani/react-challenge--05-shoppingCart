type productQuantity = {
    quantity: number
}

export type ProductTypes = productQuantity & {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    category: string;
}