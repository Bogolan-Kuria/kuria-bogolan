import { useState } from "react";
import { ProductCard, Product } from "./ProductCard";
import { Button } from "@/components/ui/button";

const products: Product[] = [
  {
    id: 1,
    name: "Robe Bogolan Moderne",
    description: "Robe élégante aux motifs traditionnels",
    price: 189,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446",
    category: "Vêtement",
  },
  {
    id: 2,
    name: "Veste Bogolan",
    description: "Veste légère avec motifs géométriques",
    price: 159,
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae",
    category: "Vêtement",
  },
  {
    id: 3,
    name: "Écharpe Bogolan",
    description: "Écharpe en coton avec motifs traditionnels",
    price: 49,
    image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26",
    category: "Accessoire",
  },
  {
    id: 4,
    name: "Coussin Bogolan",
    description: "Coussin décoratif en tissu bogolan",
    price: 39,
    image: "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb",
    category: "Literie",
  },
  {
    id: 5,
    name: "Sandales Bogolan",
    description: "Sandales avec motifs bogolan",
    price: 79,
    image: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95",
    category: "Chaussure",
  },
];

interface ProductGridProps {
  selectedCategory?: string;
}

export const ProductGrid = ({ selectedCategory = "Tous" }: ProductGridProps) => {
  const filteredProducts = products.filter(
    (product) =>
      selectedCategory === "Tous" || product.category === selectedCategory
  );

  const handleAddToCart = (product: Product) => {
    // TODO: Implement cart functionality
    console.log("Added to cart:", product);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
};