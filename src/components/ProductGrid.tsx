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
    category: "Robes",
  },
  {
    id: 2,
    name: "Veste Bogolan",
    description: "Veste légère avec motifs géométriques",
    price: 159,
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae",
    category: "Vestes",
  },
  {
    id: 3,
    name: "Écharpe Bogolan",
    description: "Écharpe en coton avec motifs traditionnels",
    price: 49,
    image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26",
    category: "Accessoires",
  },
  // Add more products as needed
];

const categories = ["Tous", "Robes", "Vestes", "Accessoires"];

export const ProductGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filteredProducts = products.filter(
    (product) =>
      selectedCategory === "Tous" || product.category === selectedCategory
  );

  const handleAddToCart = (product: Product) => {
    // TODO: Implement cart functionality
    console.log("Added to cart:", product);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};