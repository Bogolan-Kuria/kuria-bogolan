import { Navbar } from "@/components/Navbar";
import { Slideshow } from "@/components/Slideshow";
import { ProductGrid } from "@/components/ProductGrid";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Slideshow />
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8">
              Nos Collections
            </h2>
            <ProductGrid />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;