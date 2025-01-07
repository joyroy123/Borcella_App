"use client";

import useCart from "@/lib/hooks/useCart";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const SuccessfulPayment = () => {
  const cart = useCart();

  useEffect(() => {
    cart.clearCart();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-5 mt-40">
      <Image
        src={"/payment.png"}
        width={400}
        height={400}
        className="rounded-lg w-80 h-80 object-cover"
        alt="Payment Successfull"
      />
      <p className="text-heading4-bold text-red-1">Successfully Payment</p>
      <p>Thank you for your purchase</p>
      <Link
        href="/"
        className="p-4 border text-base-bold rounded-xl shadow-md hover:bg-black hover:text-white"
      >
        CONTINUE TO SHOPPING
      </Link>
    </div>
  );
};

export default SuccessfulPayment;
