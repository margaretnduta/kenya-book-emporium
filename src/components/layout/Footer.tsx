import { Book, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Book className="h-6 w-6 text-primary" />
              <span className="text-xl font-serif font-bold">Smave Books</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Kenya's premier online bookstore, bringing you the finest collection 
              of books from local and international authors. Discover, learn, and grow 
              with Smave Books.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/shop" className="text-muted-foreground hover:text-primary transition-colors">Browse Books</a></li>
              <li><a href="/categories" className="text-muted-foreground hover:text-primary transition-colors">Categories</a></li>
              <li><a href="/bestsellers" className="text-muted-foreground hover:text-primary transition-colors">Best Sellers</a></li>
              <li><a href="/new-arrivals" className="text-muted-foreground hover:text-primary transition-colors">New Arrivals</a></li>
              <li><a href="/digital-books" className="text-muted-foreground hover:text-primary transition-colors">Digital Books</a></li>
              <li><a href="/gift-cards" className="text-muted-foreground hover:text-primary transition-colors">Gift Cards</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/help" className="text-muted-foreground hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="/shipping" className="text-muted-foreground hover:text-primary transition-colors">Shipping Info</a></li>
              <li><a href="/returns" className="text-muted-foreground hover:text-primary transition-colors">Returns & Exchanges</a></li>
              <li><a href="/track-order" className="text-muted-foreground hover:text-primary transition-colors">Track Your Order</a></li>
              <li><a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter for the latest book releases and exclusive offers.
            </p>
            <div className="space-y-2">
              <Input 
                placeholder="Your email address" 
                className="bg-background border-border"
              />
              <Button className="w-full gradient-hero">Subscribe</Button>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+254 700 123 456</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@smavebooks.co.ke</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 Smave Books. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;