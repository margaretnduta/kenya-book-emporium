export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  category: string;
  description: string;
  isbn: string;
  pages: number;
  language: string;
  publisher: string;
  publishedDate: string;
  isDigital?: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
  inStock: boolean;
  stockQuantity: number;
  tags: string[];
  format: 'paperback' | 'hardcover' | 'ebook' | 'audiobook';
}

export interface CartItem {
  book: Book;
  quantity: number;
}

export interface WishlistItem {
  book: Book;
  addedDate: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  bookCount: number;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  paymentMethod: 'mpesa' | 'card' | 'bank_transfer';
  paymentStatus: 'pending' | 'completed' | 'failed';
  shippingAddress: Address;
  createdAt: string;
  updatedAt: string;
}

export interface Address {
  street: string;
  city: string;
  county: string;
  postalCode: string;
  country: string;
  phone: string;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  addresses: Address[];
  orders: Order[];
  wishlist: WishlistItem[];
  isAdmin: boolean;
  createdAt: string;
  updatedAt: string;
}