import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ProductGrid } from "@/components/ProductGrid";

const Collections = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const categories = ["Tous", "Vêtement", "Literie", "Accessoire", "Chaussure"];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-8">Nos Collections</h1>
          <div className="flex flex-wrap gap-2 justify-center mb-8">
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
          <ProductGrid selectedCategory={selectedCategory} />
        </div>
      </main>
    </div>
  );
};

export default Collections;