import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { User, Package, Heart, Settings, Eye, EyeOff } from "lucide-react";

const Account = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This would come from your auth state

  // Mock user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+254 700 123 456",
    joinDate: "January 2024"
  };

  const recentOrders = [
    { id: "ORD001", date: "2024-01-15", status: "Delivered", total: 2350, items: 2 },
    { id: "ORD002", date: "2024-01-10", status: "Processing", total: 1200, items: 1 },
    { id: "ORD003", date: "2024-01-05", status: "Delivered", total: 950, items: 1 },
  ];

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-md mx-auto">
            <Card>
              <CardHeader className="text-center">
                <User className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl font-serif">Welcome Back</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="login" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="login">Login</TabsTrigger>
                    <TabsTrigger value="register">Register</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="login" className="space-y-4 mt-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Input 
                          id="password" 
                          type={showPassword ? "text" : "password"} 
                          placeholder="Your password" 
                        />
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute right-0 top-0 h-full px-3"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full" 
                      onClick={() => setIsLoggedIn(true)}
                    >
                      Login
                    </Button>
                    
                    <div className="text-center">
                      <Button variant="link" className="text-sm">
                        Forgot password?
                      </Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="register" className="space-y-4 mt-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="regEmail">Email</Label>
                      <Input id="regEmail" type="email" placeholder="your@email.com" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+254 700 000 000" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="regPassword">Password</Label>
                      <div className="relative">
                        <Input 
                          id="regPassword" 
                          type={showPassword ? "text" : "password"} 
                          placeholder="Create password" 
                        />
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute right-0 top-0 h-full px-3"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full"
                      onClick={() => setIsLoggedIn(true)}
                    >
                      Create Account
                    </Button>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
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
          <h1 className="text-4xl font-serif font-bold mb-2">My Account</h1>
          <p className="text-muted-foreground">Manage your profile and view your orders</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="h-20 w-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <User className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold">{user.name}</h3>
                  <p className="text-sm text-muted-foreground">Member since {user.joinDate}</p>
                </div>
                
                <nav className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start">
                    <User className="h-4 w-4 mr-2" />
                    Profile
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Package className="h-4 w-4 mr-2" />
                    Orders
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <a href="/wishlist">
                      <Heart className="h-4 w-4 mr-2" />
                      Wishlist
                    </a>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </Button>
                </nav>
                
                <Button 
                  variant="outline" 
                  className="w-full mt-6"
                  onClick={() => setIsLoggedIn(false)}
                >
                  Logout
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="profile" className="w-full">
              <TabsList>
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="orders">Orders</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              
              <TabsContent value="profile" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="profileFirstName">First Name</Label>
                        <Input id="profileFirstName" defaultValue="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="profileLastName">Last Name</Label>
                        <Input id="profileLastName" defaultValue="Doe" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="profileEmail">Email</Label>
                      <Input id="profileEmail" type="email" defaultValue={user.email} />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="profilePhone">Phone Number</Label>
                      <Input id="profilePhone" type="tel" defaultValue={user.phone} />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input id="address" placeholder="Your delivery address" />
                    </div>
                    
                    <Button>Update Profile</Button>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="orders" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Order History</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentOrders.map((order) => (
                        <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <h4 className="font-semibold">Order #{order.id}</h4>
                            <p className="text-sm text-muted-foreground">{order.date}</p>
                            <p className="text-sm">{order.items} items</p>
                          </div>
                          <div className="text-right">
                            <Badge 
                              variant={order.status === "Delivered" ? "default" : "secondary"}
                            >
                              {order.status}
                            </Badge>
                            <p className="font-semibold mt-1">
                              KSH {order.total.toLocaleString()}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="settings" className="mt-6">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Change Password</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <Input id="currentPassword" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input id="newPassword" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm Password</Label>
                        <Input id="confirmPassword" type="password" />
                      </div>
                      <Button>Update Password</Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Notifications</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Email Notifications</h4>
                          <p className="text-sm text-muted-foreground">Receive updates about your orders</p>
                        </div>
                        <Button variant="outline" size="sm">Enable</Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">SMS Notifications</h4>
                          <p className="text-sm text-muted-foreground">Get delivery updates via SMS</p>
                        </div>
                        <Button variant="outline" size="sm">Enable</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Account;