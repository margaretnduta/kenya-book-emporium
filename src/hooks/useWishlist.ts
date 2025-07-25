import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

export interface WishlistItem {
  id: string;
  book_id: string;
  book: {
    id: string;
    title: string;
    author: string;
    price: number;
    original_price?: number;
    image_url: string;
    rating: number;
    stock_quantity: number;
  };
}

export const useWishlist = () => {
  const { user } = useAuth();
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchWishlistItems = async () => {
    if (!user) {
      setWishlistItems([]);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('wishlist_items' as any)
        .select(`
          id,
          book_id,
          book:books(
            id,
            title,
            author,
            price,
            original_price,
            image_url,
            rating,
            stock_quantity
          )
        `)
        .eq('user_id', user.id);

      if (error) throw error;
      setWishlistItems((data as any) || []);
    } catch (error) {
      console.error('Error fetching wishlist items:', error);
    }
  };

  const addToWishlist = async (bookId: string) => {
    if (!user) {
      toast.error('Please sign in to add items to wishlist');
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase
        .from('wishlist_items' as any)
        .insert([{
          user_id: user.id,
          book_id: bookId
        }]);

      if (error) throw error;
      await fetchWishlistItems();
      toast.success('Added to wishlist');
    } catch (error) {
      console.error('Error adding to wishlist:', error);
      toast.error('Failed to add to wishlist');
    } finally {
      setLoading(false);
    }
  };

  const removeFromWishlist = async (bookId: string) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('wishlist_items' as any)
        .delete()
        .eq('user_id', user.id)
        .eq('book_id', bookId);

      if (error) throw error;
      await fetchWishlistItems();
      toast.success('Removed from wishlist');
    } catch (error) {
      console.error('Error removing from wishlist:', error);
      toast.error('Failed to remove from wishlist');
    }
  };

  const isInWishlist = (bookId: string): boolean => {
    return wishlistItems.some(item => item.book_id === bookId);
  };

  const toggleWishlist = async (bookId: string) => {
    if (isInWishlist(bookId)) {
      await removeFromWishlist(bookId);
    } else {
      await addToWishlist(bookId);
    }
  };

  const wishlistCount = wishlistItems.length;

  useEffect(() => {
    fetchWishlistItems();
  }, [user]);

  // Set up real-time subscription
  useEffect(() => {
    if (!user) return;

    const channel = supabase
      .channel('wishlist-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'wishlist_items',
          filter: `user_id=eq.${user.id}`
        },
        () => {
          fetchWishlistItems();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [user]);

  return {
    wishlistItems,
    wishlistCount,
    loading,
    addToWishlist,
    removeFromWishlist,
    toggleWishlist,
    isInWishlist,
    fetchWishlistItems
  };
};