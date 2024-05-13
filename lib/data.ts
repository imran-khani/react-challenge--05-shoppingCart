import { ProductTypes } from "@/types";
import axios from "axios";


export const fetchData = async (): Promise<ProductTypes[]> => {
    const res = axios.get("https://fakestoreapi.com/products")
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.error(err);
        });
    return res;

};
