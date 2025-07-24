import { useState } from "react";
import { ArrowLeft, Heart, Share2, Star, ShoppingCart, BookOpen, Calendar, Globe, User } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { featuredBooks } from "@/data/mockData";

const BookDetail = () => {
  // In a real app, this would come from route params
  const book = featuredBooks[0];
  const [quantity, setQuantity] = useState(1);
  const [selectedFormat, setSelectedFormat] = useState<'paperback' | 'hardcover' | 'ebook' | 'audiobook'>(book.format);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES'
    }).format(price);
  };

  const relatedBooks = featuredBooks.filter(b => b.id !== book.id && b.category === book.category).slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Button variant="ghost" size="sm" className="p-0 h-auto">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Shop
          </Button>
          <span>/</span>
          <span>{book.category}</span>
          <span>/</span>
          <span className="text-foreground">{book.title}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Book Cover */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-book-page rounded-lg book-shadow overflow-hidden">
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnail gallery would go here */}
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-[3/4] bg-book-page rounded border opacity-60 hover:opacity-100 cursor-pointer transition-opacity">
                  <div className="w-full h-full flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-muted-foreground" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Book Details */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2">{book.category}</Badge>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">
                {book.title}
              </h1>
              <p className="text-xl text-muted-foreground">by {book.author}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(book.rating)
                          ? 'text-yellow-500 fill-current'
                          : 'text-muted-foreground'
                      }`}
                    />
                  ))}
                </div>
                <span className="font-medium">{book.rating}</span>
                <span className="text-muted-foreground">({book.reviewCount} reviews)</span>
              </div>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-foreground">
                  {formatPrice(book.price)}
                </span>
                {book.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    {formatPrice(book.originalPrice)}
                  </span>
                )}
              </div>
              {book.originalPrice && (
                <Badge variant="destructive">
                  Save {formatPrice(book.originalPrice - book.price)}
                </Badge>
              )}
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${book.inStock ? 'bg-green-500' : 'bg-red-500'}`} />
              <span className="text-sm">
                {book.inStock ? `In Stock (${book.stockQuantity} available)` : 'Out of Stock'}
              </span>
            </div>

            {/* Format Selection */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Format</label>
              <div className="flex gap-2">
                {(['paperback', 'hardcover', 'ebook'] as const).map(format => (
                  <Button
                    key={format}
                    variant={selectedFormat === format ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedFormat(format)}
                    className="capitalize"
                  >
                    {format}
                  </Button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Quantity</label>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  -
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(quantity + 1)}
                  disabled={quantity >= book.stockQuantity}
                >
                  +
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                size="lg"
                className="w-full gradient-hero"
                disabled={!book.inStock}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={isWishlisted ? "text-red-500 border-red-500" : ""}
                >
                  <Heart className={`h-4 w-4 mr-2 ${isWishlisted ? 'fill-current' : ''}`} />
                  {isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}
                </Button>
                
                <Button variant="outline" size="lg">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            {/* Book Info */}
            <Card>
              <CardContent className="p-4 space-y-3">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Pages:</span>
                    <span>{book.pages}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Published:</span>
                    <span>{new Date(book.publishedDate).getFullYear()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Language:</span>
                    <span>{book.language}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Publisher:</span>
                    <span>{book.publisher}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="description" className="mb-16">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="reviews">Reviews ({book.reviewCount})</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
          </TabsList>
          
          <TabsContent value="description" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <p className="text-foreground leading-relaxed">
                  {book.description}
                </p>
                
                <div className="mt-6">
                  <h4 className="font-semibold mb-3">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {book.tags.map(tag => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reviews" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground">Reviews coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="details" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <dt className="font-semibold">ISBN</dt>
                    <dd className="text-muted-foreground">{book.isbn}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Format</dt>
                    <dd className="text-muted-foreground capitalize">{book.format}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Pages</dt>
                    <dd className="text-muted-foreground">{book.pages}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Language</dt>
                    <dd className="text-muted-foreground">{book.language}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Publisher</dt>
                    <dd className="text-muted-foreground">{book.publisher}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Published Date</dt>
                    <dd className="text-muted-foreground">{book.publishedDate}</dd>
                  </div>
                </dl>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Related Books */}
        {relatedBooks.length > 0 && (
          <section>
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
              Related Books
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedBooks.map(relatedBook => (
                <Card key={relatedBook.id} className="book-hover cursor-pointer">
                  <CardContent className="p-4">
                    <div className="aspect-[3/4] bg-book-page rounded mb-3 overflow-hidden">
                      <img
                        src={relatedBook.image}
                        alt={relatedBook.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-semibold text-sm line-clamp-2 mb-1">
                      {relatedBook.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {relatedBook.author}
                    </p>
                    <p className="font-bold">{formatPrice(relatedBook.price)}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default BookDetail;