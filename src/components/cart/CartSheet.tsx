"use client";

import { useMemo } from "react";
import { useCart } from "./CartProvider";
import { products, formatPrice } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle } from "@/components/ui/sheet";

export default function CartSheet() {
  const { items, itemCount, subtotalCents, isOpen, closeCart, setItemQuantity, removeItem } = useCart();

  const detailedItems = useMemo(() => {
    return items.map((i) => ({
      ...i,
      product: products.find((p) => p.id === i.productId)!,
    })).filter((x) => Boolean(x.product));
  }, [items]);

  return (
    <Sheet open={isOpen} onOpenChange={(o) => !o && closeCart()}>
      <SheetContent side="right" className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Cart ({itemCount})</SheetTitle>
        </SheetHeader>
        <div className="mt-4 space-y-4">
          {detailedItems.length === 0 ? (
            <p className="text-sm text-muted-foreground">Your cart is empty.</p>
          ) : (
            detailedItems.map(({ product, size, quantity }) => (
              <div key={`${product.id}-${size}`} className="flex gap-3 items-start">
                <img src={product.images[0]} alt={product.name} className="h-16 w-16 rounded object-cover border" />
                <div className="flex-1">
                  <div className="font-medium leading-tight">{product.name}</div>
                  <div className="text-xs text-muted-foreground">Size {size}</div>
                  <div className="mt-1 text-sm">{formatPrice(product.priceCents)}</div>
                  <div className="mt-2 flex items-center gap-2">
                    <label className="text-xs text-muted-foreground">Qty</label>
                    <input
                      type="number"
                      min={1}
                      value={quantity}
                      className="w-16 rounded border bg-background px-2 py-1 text-sm"
                      onChange={(e) => setItemQuantity(product.id, size, Math.max(1, Number(e.target.value || 1)))}
                    />
                    <Button variant="ghost" size="sm" onClick={() => removeItem(product.id, size)}>Remove</Button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <Separator className="my-4" />
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Subtotal</span>
          <span className="font-medium">{formatPrice(subtotalCents)}</span>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">Taxes and shipping calculated at checkout.</p>
        <SheetFooter className="mt-4">
          <Button
            className="w-full"
            disabled={detailedItems.length === 0}
            onClick={async () => {
              try {
                const res = await fetch("/api/checkout", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    items: detailedItems.map((d) => ({ productId: d.product.id, size: d.size, quantity: d.quantity })),
                  }),
                });
                const data = await res.json();
                if (data?.url) window.location.href = data.url as string;
              } catch {
                // noop
              }
            }}
          >
            Checkout
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}


