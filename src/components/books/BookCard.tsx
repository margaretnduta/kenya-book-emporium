import { useState } from "react";
import { Heart, ShoppingCart, Star, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  category: string;
  isDigital?: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
  inStock: boolean;
}

interface BookCardProps {
  book: Book;
  onAddToCart?: (book: Book) => void;
  onToggleWishlist?: (book: Book) => void;
  onQuickView?: (book: Book) => void;
}

const BookCard = ({ book, onAddToCart, onToggleWishlist, onQuickView }: BookCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = async () => {
    if (!book.inStock) return;
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API call
    onAddToCart?.(book);
    setIsLoading(false);
  };

  const handleToggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    onToggleWishlist?.(book);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES'
    }).format(price);
  };

  const discountPercentage = book.originalPrice 
    ? Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100)
    : 0;

  return (
    <Card className="group relative overflow-hidden book-hover bg-gradient-card border-0 book-shadow">
      <div className="absolute top-3 right-3 z-10 flex flex-col gap-2">
        {book.isNew && (
          <Badge className="bg-primary text-primary-foreground">New</Badge>
        )}
        {book.isBestseller && (
          <Badge className="bg-accent text-accent-foreground">Bestseller</Badge>
        )}
        {discountPercentage > 0 && (
          <Badge variant="destructive">-{discountPercentage}%</Badge>
        )}
        {book.isDigital && (
          <Badge variant="secondary">Digital</Badge>
        )}
      </div>

      <div className="absolute top-3 left-3 z-10">
        <Button
          variant="ghost"
          size="icon"
          className={`h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm transition-all duration-300 ${
            isWishlisted 
              ? 'text-red-500 hover:text-red-600' 
              : 'text-muted-foreground hover:text-red-500'
          }`}
          onClick={handleToggleWishlist}
        >
          <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </Button>
      </div>

      <CardContent className="p-0">
        {/* Book cover */}
        <div className="relative aspect-[3/4] overflow-hidden bg-book-page">
          <img
            src={book.image}
            alt={book.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Overlay actions */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => onQuickView?.(book)}
              className="bg-background/90 text-foreground hover:bg-background"
            >
              <Eye className="h-4 w-4 mr-1" />
              Quick View
            </Button>
          </div>

          {!book.inStock && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <Badge variant="secondary" className="text-lg">Out of Stock</Badge>
            </div>
          )}
        </div>

        {/* Book details */}
        <div className="p-4 space-y-3">
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground uppercase tracking-wide">
              {book.category}
            </p>
            <h3 className="font-serif font-semibold text-foreground line-clamp-2 leading-tight">
              {book.title}
            </h3>
            <p className="text-sm text-muted-foreground">{book.author}</p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${
                    i < Math.floor(book.rating)
                      ? 'text-yellow-500 fill-current'
                      : 'text-muted-foreground'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              ({book.reviewCount})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-bold text-foreground">
                  {formatPrice(book.price)}
                </span>
                {book.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    {formatPrice(book.originalPrice)}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Add to cart button */}
          <Button
            onClick={handleAddToCart}
            disabled={!book.inStock || isLoading}
            className="w-full gradient-hero disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                Adding...
              </div>
            ) : !book.inStock ? (
              'Out of Stock'
            ) : (
              <>
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookCard;