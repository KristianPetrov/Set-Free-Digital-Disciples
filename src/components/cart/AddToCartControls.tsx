"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useCart } from "@/components/cart/CartProvider";
import type { ProductSize } from "@/lib/products";

export default function AddToCartControls({
  productId,
  sizes,
}: {
  productId: string;
  sizes: ProductSize[];
}) {
  const { addItem, openCart } = useCart();
  const [size, setSize] = useState<ProductSize | undefined>(sizes[0]);

  return (
    <div className={cn("space-y-3")}>
      <div>
        <label className="text-sm text-muted-foreground">Size</label>
        <Select value={size} onValueChange={(v) => setSize(v as ProductSize)}>
          <SelectTrigger className="mt-1 w-44">
            <SelectValue placeholder="Select size" />
          </SelectTrigger>
          <SelectContent>
            {sizes.map((s) => (
              <SelectItem key={s} value={s}>
                {s}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Button
        disabled={!size}
        onClick={() => {
          if (!size) return;
          addItem({ productId, size, quantity: 1 });
          openCart();
        }}
      >
        Add to cart
      </Button>
    </div>
  );
}
