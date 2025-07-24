import { useState } from "react";
import { ShoppingCart, User, Search, Menu, Book, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [cartItems] = useState(3); // Mock cart count
  const [wishlistItems] = useState(5); // Mock wishlist count

  const categories = [
    { name: "Fiction", href: "/shop?category=fiction" },
    { name: "Non-Fiction", href: "/shop?category=non-fiction" },
    { name: "Educational", href: "/shop?category=educational" },
    { name: "Children's Books", href: "/shop?category=children" },
    { name: "Digital Books", href: "/shop?category=digital" },
    { name: "African Literature", href: "/shop?category=african" },
  ];

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Book className="h-8 w-8 text-primary" />
            <span className="text-2xl font-serif font-bold text-foreground">
              Smave Books
            </span>
          </div>

          {/* Search bar - hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search for books, authors, or categories..."
                className="pl-10 bg-secondary/50 border-0 focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-primary">
                    Categories
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-96 gap-3 p-4">
                      {categories.map((category) => (
                        <NavigationMenuLink
                          key={category.name}
                          href={category.href}
                          className="block space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            {category.name}
                          </div>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <a href="/shop" className="text-foreground hover:text-primary transition-colors">
              Shop
            </a>
            <a href="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Action buttons */}
          <div className="flex items-center space-x-3">
            {/* Wishlist */}
            <Button variant="ghost" size="icon" className="relative" asChild>
              <a href="/wishlist">
                <Heart className="h-5 w-5" />
                {wishlistItems > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs bg-accent">
                    {wishlistItems}
                  </Badge>
                )}
              </a>
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="icon" className="relative" asChild>
              <a href="/cart">
                <ShoppingCart className="h-5 w-5" />
                {cartItems > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs bg-primary">
                    {cartItems}
                  </Badge>
                )}
              </a>
            </Button>

            {/* User account */}
            <Button variant="ghost" size="icon" asChild>
              <a href="/account">
                <User className="h-5 w-5" />
              </a>
            </Button>

            {/* Mobile menu */}
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search books..."
              className="pl-10 bg-secondary/50 border-0"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;