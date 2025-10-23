import { ProductType, OrderType } from '../types';

export const mockProducts: ProductType[] = [
  {
    id: 1,
    name: "Adidas CoreFit T-Shirt",
    shortDescription: "Premium cotton t-shirt with CoreFit technology for ultimate comfort.",
    description: "Experience unparalleled comfort with our Adidas CoreFit T-Shirt. Made from premium breathable cotton, this shirt features moisture-wicking technology and a modern fit that's perfect for both workouts and casual wear.",
    price: 39.9,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/1g.png",
      purple: "/products/1p.png",
      green: "/products/1gr.png",
    },
    categorySlug: "t-shirts",
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-01-15"),
  },
  {
    id: 2,
    name: "Puma Ultra Warm Zip",
    shortDescription: "Insulated jacket with premium zip closure and water-resistant fabric.",
    description: "Stay warm and dry with the Puma Ultra Warm Zip. This jacket features advanced insulation technology, water-resistant fabric, and a sleek design that transitions seamlessly from outdoor activities to urban settings.",
    price: 89.9,
    sizes: ["s", "m", "l", "xl"],
    colors: ["gray", "green"],
    images: {
      gray: "/products/2g.png",
      green: "/products/2gr.png"
    },
    categorySlug: "jackets",
    createdAt: new Date("2024-01-16"),
    updatedAt: new Date("2024-01-16"),
  },
  {
    id: 3,
    name: "Nike Air Essentials Pullover",
    shortDescription: "Soft fleece pullover with iconic Nike Air branding and comfort fit.",
    description: "The Nike Air Essentials Pullover combines classic style with modern comfort. Crafted from soft fleece material, this pullover features ribbed cuffs, a relaxed fit, and the iconic Nike Air branding for a timeless athletic look.",
    price: 69.9,
    sizes: ["s", "m", "l"],
    colors: ["green", "blue", "black"],
    images: {
      green: "/products/3gr.png",
      blue: "/products/3b.png",
      black: "/products/3bl.png",
    },
    categorySlug: "jackets",
    createdAt: new Date("2024-01-17"),
    updatedAt: new Date("2024-01-17"),
  },
  {
    id: 4,
    name: "Nike Dri Flex T-Shirt",
    shortDescription: "Lightweight performance tee with Dri-FIT technology for moisture management.",
    description: "Elevate your workout with the Nike Dri Flex T-Shirt. This performance tee features Nike's signature Dri-FIT technology to keep you dry and comfortable, along with a lightweight, breathable fabric perfect for intense training sessions.",
    price: 29.9,
    sizes: ["s", "m", "l"],
    colors: ["white", "pink"],
    images: {
      white: "/products/4w.png",
      pink: "/products/4p.png"
    },
    categorySlug: "t-shirts",
    createdAt: new Date("2024-01-18"),
    updatedAt: new Date("2024-01-18"),
  },
  {
    id: 5,
    name: "Under Armour StormFleece",
    shortDescription: "Weather-resistant fleece with UA Storm technology repels water.",
    description: "Face any weather with confidence in the Under Armour StormFleece. This innovative jacket features UA Storm technology that repels water without sacrificing breathability, plus a soft fleece interior for maximum warmth and comfort.",
    price: 99.9,
    sizes: ["s", "m", "l"],
    colors: ["red", "orange", "black"],
    images: {
      red: "/products/5r.png",
      orange: "/products/5o.png",
      black: "/products/5bl.png",
    },
    categorySlug: "jackets",
    createdAt: new Date("2024-01-19"),
    updatedAt: new Date("2024-01-19"),
  },
  {
    id: 6,
    name: "Nike Air Max 270",
    shortDescription: "Iconic sneakers with Max Air cushioning for all-day comfort.",
    description: "Step into legendary comfort with the Nike Air Max 270. These iconic sneakers feature Nike's largest Max Air unit yet, delivering unparalleled cushioning and support. The sleek design and premium materials make them perfect for both athletic activities and everyday wear.",
    price: 129.9,
    sizes: ["40", "42", "43", "44"],
    colors: ["gray", "white"],
    images: {
      gray: "/products/6g.png",
      white: "/products/6w.png"
    },
    categorySlug: "shoes",
    createdAt: new Date("2024-01-20"),
    updatedAt: new Date("2024-01-20"),
  },
  {
    id: 7,
    name: "Adidas Ultraboost Pulse",
    shortDescription: "Premium running shoes with Boost cushioning and responsive energy return.",
    description: "Experience the ultimate in running performance with the Adidas Ultraboost Pulse. These premium running shoes feature revolutionary Boost cushioning technology that returns energy with every step, a Primeknit upper for adaptive fit, and Continental rubber outsoles for superior traction.",
    price: 149.9,
    sizes: ["40", "42", "43"],
    colors: ["gray", "pink"],
    images: {
      gray: "/products/7g.png",
      pink: "/products/7p.png"
    },
    categorySlug: "shoes",
    createdAt: new Date("2024-01-21"),
    updatedAt: new Date("2024-01-21"),
  },
  {
    id: 8,
    name: "Levi's Classic Denim",
    shortDescription: "Timeless denim jeans with authentic 5-pocket styling and durable construction.",
    description: "Embrace classic American style with Levi's Classic Denim. These authentic jeans feature the iconic 5-pocket design, durable denim construction, and a comfortable fit that has made Levi's a wardrobe staple for generations. Perfect for any casual occasion.",
    price: 79.9,
    sizes: ["s", "m", "l"],
    colors: ["blue", "green"],
    images: {
      blue: "/products/8b.png",
      green: "/products/8gr.png"
    },
    categorySlug: "dresses",
    createdAt: new Date("2024-01-22"),
    updatedAt: new Date("2024-01-22"),
  },
  {
    id: 9,
    name: "Ray-Ban Aviator Sunglasses",
    shortDescription: "Classic aviator sunglasses with UV protection and metal frame.",
    description: "Protect your eyes in timeless style with Ray-Ban Aviator Sunglasses. These iconic shades feature 100% UV protection, lightweight metal frames, and premium lenses that reduce glare while maintaining visual clarity.",
    price: 159.9,
    sizes: ["m"],
    colors: ["gray", "black"],
    images: {
      gray: "/products/9g.png",
      black: "/products/9bl.png"
    },
    categorySlug: "accessories",
    createdAt: new Date("2024-01-23"),
    updatedAt: new Date("2024-01-23"),
  },
  {
    id: 10,
    name: "Herschel Little America Backpack",
    shortDescription: "Spacious laptop backpack with classic mountaineering style.",
    description: "The Herschel Little America Backpack combines vintage mountaineering style with modern functionality. Features a padded laptop sleeve, signature striped lining, adjustable drawstring closure, and comfortable padded shoulder straps.",
    price: 99.9,
    sizes: ["m"],
    colors: ["black", "blue", "green"],
    images: {
      black: "/products/10bl.png",
      blue: "/products/10b.png",
      green: "/products/10gr.png"
    },
    categorySlug: "bags",
    createdAt: new Date("2024-01-24"),
    updatedAt: new Date("2024-01-24"),
  }
];

export const mockOrders: OrderType[] = [
  {
    _id: "ORD-001-2024",
    userId: "user_1",
    email: "john.doe@example.com",
    amount: 7980, // in cents
    status: "success",
    products: [
      {
        name: "Adidas CoreFit T-Shirt",
        quantity: 1,
        price: 3990,
      },
      {
        name: "Nike Air Max 270",
        quantity: 1,
        price: 3990,
      }
    ],
    createdAt: new Date("2024-02-15"),
    updatedAt: new Date("2024-02-15"),
  },
  {
    _id: "ORD-002-2024",
    userId: "user_1",
    email: "john.doe@example.com",
    amount: 8990,
    status: "success",
    products: [
      {
        name: "Puma Ultra Warm Zip",
        quantity: 1,
        price: 8990,
      }
    ],
    createdAt: new Date("2024-02-20"),
    updatedAt: new Date("2024-02-20"),
  },
  {
    _id: "ORD-003-2024",
    userId: "user_1",
    email: "john.doe@example.com",
    amount: 19980,
    status: "failed",
    products: [
      {
        name: "Under Armour StormFleece",
        quantity: 1,
        price: 9990,
      },
      {
        name: "Herschel Little America Backpack",
        quantity: 1,
        price: 9990,
      }
    ],
    createdAt: new Date("2024-03-01"),
    updatedAt: new Date("2024-03-01"),
  }
];
