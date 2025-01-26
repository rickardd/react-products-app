import { create } from "zustand";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  available: boolean;
}

interface StoreState {
  products: Product[];
  filteredProducts: Product[];
  loading: boolean;
  error: string | null;
  fetchProducts: () => Promise<void>;
  filterProductsByName: (searchTerm: string) => void;
  filterProductsByCategory: (categories: string[]) => void;
}

export const useStore = create<StoreState>((set) => ({
  products: [],
  filteredProducts: [],
  loading: false,
  error: null,
  fetchProducts: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log();

      set({ products: data, filteredProducts: data, loading: false });
    } catch (error) {
      set({ loading: false, error: "Failed to fetch products" });
    }
  },
  filterProductsByName: (name: string) => {
    set((state) => {
      const filtered = state.products.filter((product) => {
        const matchesSearch = product.title.toLowerCase().includes(name.toLowerCase());
        console.log("matchesSearch", matchesSearch);
        return matchesSearch;
        // const matchesCategory = category.length === 0 || category.includes(product.category);
        // return matchesSearch && matchesCategory;
      });
      return { filteredProducts: filtered };
    });
  },
  filterProductsByCategory: (categories: string[]) => {
    set((state) => {
      const filtered = state.filteredProducts.filter((product) => {
        const matchedCategory = product.category.toLowerCase().includes(categories[0].toLowerCase());
        console.log("matchedCategory", matchedCategory);
        return matchedCategory;
      });
      return { filteredProducts: filtered };
    });
  },
}));
