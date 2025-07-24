import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Book, Users, Award, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Smave Books
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted partner in the world of literature, bringing you the finest collection of books from Kenya and beyond.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-4">
              At Smave Books, we believe that every book has the power to transform lives, spark imagination, and build bridges between cultures. Our mission is to make quality literature accessible to every reader in Kenya and East Africa.
            </p>
            <p className="text-lg text-muted-foreground">
              We are committed to promoting local authors, supporting literacy initiatives, and fostering a love for reading across all age groups and communities.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Library with books"
              className="rounded-lg shadow-lg w-full h-80 object-cover"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <Book className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Quality</h3>
                <p className="text-muted-foreground">We curate only the finest books from renowned authors and publishers.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p className="text-muted-foreground">Building a vibrant community of readers and book lovers.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-muted-foreground">Delivering exceptional service and customer satisfaction.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Passion</h3>
                <p className="text-muted-foreground">Our love for books drives everything we do.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-secondary rounded-lg p-8 md:p-12 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Founded in 2020, Smave Books started as a small initiative to make quality books more accessible to Kenyan readers. What began as a passion project has grown into one of East Africa's leading online bookstores.
            </p>
            <p className="text-lg text-muted-foreground">
              Today, we serve thousands of customers across Kenya and beyond, offering everything from bestselling novels to educational materials, children's books to African literature. Our commitment to promoting literacy and supporting local authors remains at the heart of everything we do.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">Join Our Reading Community</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover your next favorite book, connect with fellow readers, and be part of Kenya's growing literary community.
          </p>
          <Button size="lg" className="mr-4" asChild>
            <a href="/shop">Browse Books</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="/contact">Contact Us</a>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;