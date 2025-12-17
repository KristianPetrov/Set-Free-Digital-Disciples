"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ProductSize } from "@/lib/products";
import { products } from "@/lib/products";

export interface CartItem {
  productId: string;
  size: ProductSize;
  quantity: number;
}

interface CartContextValue {
  items: CartItem[];
  itemCount: number;
  subtotalCents: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (item: CartItem) => void;
  removeItem: (productId: string, size: ProductSize) => void;
  setItemQuantity: (productId: string, size: ProductSize, quantity: number) => void;
  clear: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "sfd-cart-v1";

export default function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // hydrate from localStorage
  useEffect(() => {
    try {
      const raw = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
      if (raw) {
        const parsed = JSON.parse(raw) as CartItem[];
        if (Array.isArray(parsed)) setItems(parsed);
      }
    } catch {
      // ignore
    }
  }, []);

  // persist to localStorage
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
      }
    } catch {
      // ignore
    }
  }, [items]);

  const addItem = useCallback((newItem: CartItem) => {
    setItems((prev) => {
      const idx = prev.findIndex((i) => i.productId === newItem.productId && i.size === newItem.size);
      if (idx >= 0) {
        const copy = prev.slice();
        copy[idx] = { ...copy[idx], quantity: copy[idx].quantity + newItem.quantity };
        return copy;
      }
      return [...prev, newItem];
    });
  }, []);

  const removeItem = useCallback((productId: string, size: ProductSize) => {
    setItems((prev) => prev.filter((i) => !(i.productId === productId && i.size === size)));
  }, []);

  const setItemQuantity = useCallback((productId: string, size: ProductSize, quantity: number) => {
    setItems((prev) => prev.map((i) => (i.productId === productId && i.size === size ? { ...i, quantity } : i)));
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const itemCount = useMemo(() => items.reduce((sum, i) => sum + i.quantity, 0), [items]);
  const subtotalCents = useMemo(() => {
    return items.reduce((sum, i) => {
      const product = products.find((p) => p.id === i.productId);
      if (!product) return sum;
      return sum + product.priceCents * i.quantity;
    }, 0);
  }, [items]);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const toggleCart = useCallback(() => setIsOpen((v) => !v), []);

  const value = useMemo<CartContextValue>(() => ({
    items,
    itemCount,
    subtotalCents,
    isOpen,
    openCart,
    closeCart,
    toggleCart,
    addItem,
    removeItem,
    setItemQuantity,
    clear,
  }), [items, itemCount, subtotalCents, isOpen, openCart, closeCart, toggleCart, addItem, removeItem, setItemQuantity, clear]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within <CartProvider>");
  return ctx;
}





