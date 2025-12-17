"use client";

import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "./CartProvider";

export default function CartButton() {
  const { itemCount, toggleCart } = useCart();
  return (
    <Button variant="secondary" size="sm" onClick={toggleCart}>
      <ShoppingCart className="mr-2 h-4 w-4" />
      Cart
      {itemCount > 0 ? (
        <Badge variant="outline" className="ml-2">
          {itemCount}
        </Badge>
      ) : null}
    </Button>
  );
}



