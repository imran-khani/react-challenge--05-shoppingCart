import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center pb-24">
        <h1 className="md:text-4xl font-bold text-center">
            Welcome to the Redux Shopping Cart
        </h1>
       <Link
       href={'/shop'}
       >
       <Button>
              Shop Now
       </Button>
       </Link>
    </main>
  );
}
