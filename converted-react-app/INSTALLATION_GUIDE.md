# 📚 Hướng dẫn cài đặt từng bước

## Option 1: Tích hợp vào project React có sẵn

### Bước 1: Copy files vào project

```bash
# Di chuyển đến thư mục project của bạn
cd /path/to/your-react-project

# Copy components
cp -r /home/user/microservices-ecommerce/converted-react-app/components ./src/

# Copy pages
cp -r /home/user/microservices-ecommerce/converted-react-app/pages ./src/

# Copy types
cp -r /home/user/microservices-ecommerce/converted-react-app/types ./src/

# Copy data
cp -r /home/user/microservices-ecommerce/converted-react-app/data ./src/

# Copy App.tsx
cp /home/user/microservices-ecommerce/converted-react-app/App.tsx ./src/
```

### Bước 2: Cài đặt dependencies

```bash
npm install react-router-dom lucide-react
```

### Bước 3: Update main.tsx

Mở file `src/main.tsx` và đảm bảo nó như thế này:

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

### Bước 4: Update index.css

Thêm Tailwind imports vào đầu file `src/index.css`:

```css
@import "tailwindcss";

/* Phần còn lại của CSS */
```

### Bước 5: Chuẩn bị assets

Tạo thư mục và copy images:

```bash
# Tạo thư mục products
mkdir -p public/products

# Copy logo và featured image
# (Bạn cần chuẩn bị các file này)
```

### Bước 6: Chạy project

```bash
npm run dev
```

---

## Option 2: Tạo project mới từ đầu

### Bước 1: Tạo React project với Vite

```bash
# Tạo project mới
npm create vite@latest my-ecommerce-app -- --template react-ts

# Di chuyển vào project
cd my-ecommerce-app
```

### Bước 2: Cài đặt dependencies

```bash
# Cài dependencies chính
npm install react-router-dom lucide-react

# Cài Tailwind CSS
npm install -D tailwindcss @tailwindcss/vite autoprefixer postcss
```

### Bước 3: Cấu hình Tailwind CSS

Tạo file `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Update `vite.config.ts`:

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

### Bước 4: Copy converted files

```bash
# Copy components
cp -r /home/user/microservices-ecommerce/converted-react-app/components ./src/

# Copy pages
cp -r /home/user/microservices-ecommerce/converted-react-app/pages ./src/

# Copy types
cp -r /home/user/microservices-ecommerce/converted-react-app/types ./src/

# Copy data
cp -r /home/user/microservices-ecommerce/converted-react-app/data ./src/

# Copy App.tsx
cp /home/user/microservices-ecommerce/converted-react-app/App.tsx ./src/
```

### Bước 5: Update src/index.css

```css
@import "tailwindcss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

### Bước 6: Update src/main.tsx

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

### Bước 7: Chuẩn bị assets

```bash
# Tạo thư mục
mkdir -p public/products

# Copy hoặc tạo các file ảnh:
# public/logo.png
# public/featured.png
# public/klarna.png
# public/cards.png
# public/stripe.png
# public/products/*.png
```

### Bước 8: Chạy development server

```bash
npm run dev
```

Mở browser tại `http://localhost:5173`

---

## Checklist sau khi cài đặt

### ✅ Dependencies
- [ ] react-router-dom đã cài
- [ ] lucide-react đã cài
- [ ] tailwindcss đã config

### ✅ Files
- [ ] `src/components/` có đầy đủ 11 components
- [ ] `src/pages/` có đầy đủ 5 pages
- [ ] `src/types/` có index.ts
- [ ] `src/data/` có mockData.ts
- [ ] `src/App.tsx` đã update với routes

### ✅ Config
- [ ] `vite.config.ts` có Tailwind plugin
- [ ] `index.css` có @import "tailwindcss"
- [ ] `main.tsx` import App.tsx đúng

### ✅ Assets
- [ ] `public/logo.png` có
- [ ] `public/featured.png` có
- [ ] `public/products/` có product images

---

## Test các routes

Sau khi chạy `npm run dev`, test các route sau:

1. **Homepage**: `http://localhost:5173/`
   - Kiểm tra banner featured
   - Kiểm tra 8 products hiển thị
   - Click "View all products"

2. **Products Page**: `http://localhost:5173/products`
   - Kiểm tra category filter
   - Kiểm tra sort dropdown
   - Thử search

3. **Product Detail**: `http://localhost:5173/products/1`
   - Kiểm tra ảnh product
   - Đổi size, color
   - Click "Add to cart"

4. **Cart**: `http://localhost:5173/cart`
   - Kiểm tra cart items (mock data)
   - Click "Continue" để đến step 2
   - Fill shipping form

5. **Orders**: `http://localhost:5173/orders`
   - Kiểm tra mock orders hiển thị

---

## Troubleshooting

### Lỗi: "Cannot find module 'react-router-dom'"

```bash
npm install react-router-dom
```

### Lỗi: "lucide-react not found"

```bash
npm install lucide-react
```

### Tailwind không hoạt động

1. Check `vite.config.ts` có import tailwindcss plugin
2. Check `index.css` có `@import "tailwindcss"`
3. Restart dev server

### Images không hiển thị

1. Check images có trong `public/` folder
2. Path trong code phải match với file name
3. Restart dev server sau khi add images

### TypeScript errors

1. Check `tsconfig.json` có config đúng
2. Run `npm run build` để see errors
3. Fix type issues trong components

---

## Next Steps - Implement các features

### 1. Cart State Management

Tạo `src/contexts/CartContext.tsx`:

```tsx
import { createContext, useState, useContext, ReactNode } from 'react';
import { CartItemType } from '../types';

interface CartContextType {
  cart: CartItemType[];
  addToCart: (item: CartItemType) => void;
  removeFromCart: (item: CartItemType) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItemType[]>([]);

  const addToCart = (item: CartItemType) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (p) =>
          p.id === item.id &&
          p.selectedSize === item.selectedSize &&
          p.selectedColor === item.selectedColor
      );

      if (existingIndex !== -1) {
        const updated = [...prev];
        updated[existingIndex]!.quantity += item.quantity;
        return updated;
      }

      return [...prev, item];
    });
  };

  const removeFromCart = (item: CartItemType) => {
    setCart((prev) =>
      prev.filter(
        (p) =>
          !(
            p.id === item.id &&
            p.selectedSize === item.selectedSize &&
            p.selectedColor === item.selectedColor
          )
      )
    );
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};
```

Wrap App với CartProvider trong `main.tsx`:

```tsx
import { CartProvider } from './contexts/CartContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>,
)
```

Update components để sử dụng `useCart()`:

- `ProductCard.tsx`
- `ShoppingCartIcon.tsx`
- `CartPage.tsx`
- `ProductInteraction.tsx`

### 2. Toast Notifications

```bash
npm install react-hot-toast
```

Wrap với Toaster:

```tsx
import { Toaster } from 'react-hot-toast';

<CartProvider>
  <App />
  <Toaster position="bottom-right" />
</CartProvider>
```

Sử dụng trong components:

```tsx
import toast from 'react-hot-toast';

const handleAddToCart = () => {
  addToCart(item);
  toast.success('Added to cart!');
};
```

### 3. Form Validation (Optional)

```bash
npm install react-hook-form zod @hookform/resolvers
```

### 4. API Integration

Thay mock data bằng real API:

```tsx
// src/services/api.ts
const API_URL = import.meta.env.VITE_API_URL;

export const fetchProducts = async () => {
  const response = await fetch(`${API_URL}/products`);
  return response.json();
};

export const fetchProductById = async (id: string) => {
  const response = await fetch(`${API_URL}/products/${id}`);
  return response.json();
};
```

---

## Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

Deploy lên:
- Vercel
- Netlify
- GitHub Pages
- Your server

---

**Hoàn thành! 🎉**

Bây giờ bạn có một React e-commerce UI hoàn chỉnh. Hãy implement thêm các features như authentication, payment, real API để hoàn thiện ứng dụng!
