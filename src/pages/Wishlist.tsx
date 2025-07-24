import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, Star, Trash2 } from "lucide-react";

interface WishlistItem {
  id: string;
  title: string;
  author: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  inStock: boolean;
}

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([
    {
      id: "1",
      title: "The River and the Source",
      author: "Margaret Ogola",
      price: 1200,
      originalPrice: 1500,
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      rating: 4.8,
      inStock: true
    },
    {
      id: "2",
      title: "Weep Not Child",
      author: "Ngugi wa Thiong'o",
      price: 950,
      image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      rating: 4.6,
      inStock: true
    },
    {
      id: "3",
      title: "The Beautiful Ones Are Not Yet Born",
      author: "Ayi Kwei Armah",
      price: 1100,
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      rating: 4.4,
      inStock: false
    },
    {
      id: "4",
      title: "Purple Hibiscus",
      author: "Chimamanda Ngozi Adichie",
      price: 1350,
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      rating: 4.9,
      inStock: true
    },
    {
      id: "5",
      title: "Half of a Yellow Sun",
      author: "Chimamanda Ngozi Adichie",
      price: 1400,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      rating: 4.7,
      inStock: true
    }
  ]);

  const removeFromWishlist = (id: string) => {
    setWishlistItems(items => items.filter(item => item.id !== id));
  };

  const addToCart = (item: WishlistItem) => {
    // Here you would typically add to cart logic
    console.log("Adding to cart:", item.title);
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-12">
          <div className="text-center">
            <Heart className="h-24 w-24 text-muted-foreground mx-auto mb-6" />
            <h1 className="text-3xl font-serif font-bold mb-4">Your Wishlist is Empty</h1>
            <p className="text-muted-foreground mb-8">
              Save books you love to your wishlist and never lose track of them.
            </p>
            <Button size="lg" asChild>
              <a href="/shop">Discover Books</a>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-serif font-bold mb-4 flex items-center">
            <Heart className="h-10 w-10 text-primary mr-3" />
            My Wishlist
          </h1>
          <p className="text-muted-foreground">
            {wishlistItems.length} {wishlistItems.length === 1 ? 'book' : 'books'} saved for later
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistItems.map((item) => (
            <Card key={item.id} className="group relative overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                
                {/* Remove from wishlist button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 bg-background/80 hover:bg-background"
                  onClick={() => removeFromWishlist(item.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>

                {/* Stock status */}
                {!item.inStock && (
                  <Badge variant="destructive" className="absolute top-2 left-2">
                    Out of Stock
                  </Badge>
                )}

                {/* Sale badge */}
                {item.originalPrice && (
                  <Badge className="absolute bottom-2 left-2 bg-accent">
                    Sale
                  </Badge>
                )}
              </div>

              <CardContent className="p-4">
                <div className="mb-2">
                  <h3 className="font-semibold line-clamp-2 mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.author}</p>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm ml-1">{item.rating}</span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="font-semibold text-primary">
                      KSH {item.price.toLocaleString()}
                    </span>
                    {item.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through ml-2">
                        KSH {item.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-2">
                  {item.inStock ? (
                    <Button 
                      className="w-full" 
                      onClick={() => addToCart(item)}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  ) : (
                    <Button variant="secondary" className="w-full" disabled>
                      Notify When Available
                    </Button>
                  )}
                  
                  <Button variant="outline" className="w-full" asChild>
                    <a href={`/book/${item.id}`}>View Details</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Continue Shopping */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="/shop">Continue Shopping</a>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Wishlist;