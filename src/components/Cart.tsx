import { useState } from "react";
import { SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { CartItem } from "./CartItem";
import { Product } from "./ProductCard";

export const Cart = () => {
  const [items, setItems] = useState<(Product & { quantity: number })[]>([]);

  const updateQuantity = (id: number, quantity: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="flex flex-col h-full">
      <SheetHeader>
        <SheetTitle>Panier</SheetTitle>
      </SheetHeader>

      <div className="flex-1 overflow-auto py-4">
        {items.length === 0 ? (
          <p className="text-center text-gray-500 mt-4">
            Votre panier est vide
          </p>
        ) : (
          items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onUpdateQuantity={updateQuantity}
              onRemove={removeItem}
            />
          ))
        )}
      </div>

      {items.length > 0 && (
        <div className="border-t pt-4">
          <div className="flex justify-between mb-4">
            <span className="font-medium">Total</span>
            <span className="font-bold">{total} €</span>
          </div>
          <Button className="w-full">Passer la commande</Button>
        </div>
      )}
    </div>
  );
};