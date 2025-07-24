import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookCard from "@/components/books/BookCard";
import { featuredBooks } from "@/data/mockData";

const FeaturedSection = () => {
  const handleAddToCart = (book: any) => {
    console.log("Added to cart:", book.title);
    // Implement cart functionality
  };

  const handleToggleWishlist = (book: any) => {
    console.log("Toggled wishlist:", book.title);
    // Implement wishlist functionality
  };

  const handleQuickView = (book: any) => {
    console.log("Quick view:", book.title);
    // Implement quick view modal
  };

  return (
    <section className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Featured Books
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our hand-picked selection of exceptional books, from bestselling novels 
            to thought-provoking non-fiction that will inspire and educate.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {featuredBooks.slice(0, 8).map((book) => (
            <BookCard
              key={book.id}
              book={book}
              onAddToCart={handleAddToCart}
              onToggleWishlist={handleToggleWishlist}
              onQuickView={handleQuickView}
            />
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="border-2">
            View All Books
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;