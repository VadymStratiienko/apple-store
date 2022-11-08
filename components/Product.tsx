import React from "react";
import { urlFor } from "../sanity";
import Image from "next/image";

interface Props {
  product: Product;
}

function Product({ product }: Props) {
  return (
    <div className="flex h-fit w-[320px] select-none flex-col space-y-3 rounded-xl bg-[#35383C] p-8 md:h-[500px] md:w-[400px] md:p-10">
      <div className="relative h-64 w-full md:h-72">
        <Image
          src={urlFor(product.image[0]).url()}
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
}

export default Product;
