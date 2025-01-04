import suncellaImg from "../ipardorilar/106335761_w640_h640_tabletki-kun-chechak.webp";
import zincImg from "../ipardorilar/Ip45WnXgcXY.jpg";
import superCleanseImg from "../ipardorilar/supercleans.jpeg";
import luteinImg from "../ipardorilar/cb8279ba560315bcaf1739dcd7.jpeg";

export interface Product {
  id: number;
  name: string;
  originalPrice: number; 
  discountedPrice: number; 
  discountDuration: number; 
  description: string;
  benefits: string[];
  ingredients: string[];
  usage: string;
  category: string;
  stock: number;
  image: string;
  rating: number; 
}

export const products: Product[] = [
  {
    id: 1,
    name: "Suncella Intimate Care Tablet",
    originalPrice: 19.99,
    discountedPrice: parseFloat((19.99 * 0.8).toFixed(2)),
    discountDuration: 7, 
    description:
      "Suncella - ayollar intim sog'lig'ini qo'llab-quvvatlash uchun maxsus ishlab chiqarilgan tabletka. U gormonal muvozanatni saqlaydi va mikroflorani yaxshilashga yordam beradi.",
    benefits: [
      "Gormonal muvozanatni tiklash",
      "Mikroflorani qo'llab-quvvatlash",
      "Yallig'lanishni kamaytirish",
    ],
    ingredients: ["Laktobakteriyalar", "Vitamin C", "Tabiiy o'simlik ekstraktlari"],
    usage: "Kuniga 1 tabletka ovqatdan keyin qabul qiling.",
    category: "Women's Health",
    stock: 50,
    image: suncellaImg,
    rating: 4, 
  },
  {
    id: 2,
    name: "Zinc",
    originalPrice: 14.99,
    discountedPrice: parseFloat((14.99 * 0.8).toFixed(2)), 
    discountDuration: 10, 
    description:
      "Zinc - immunitetni qo'llab-quvvatlash va umumiy sog'liqni yaxshilash uchun minerallardan biri. U teri, soch va tirnoqlar salomatligi uchun muhim rol o'ynaydi.",
    benefits: [
      "Immunitetni mustahkamlash",
      "Teri va soch salomatligini qo'llab-quvvatlash",
      "Antioksidant xususiyatlarga ega",
    ],
    ingredients: ["Zinc Gluconate (50mg)", "Tabiiy yordamchi moddalar"],
    usage: "Kuniga 1 tabletka ovqatdan keyin qabul qiling.",
    category: "General Health",
    stock: 100,
    image: zincImg,
    rating: 5,
  },
  {
    id: 3,
    name: "Super Cleanse",
    originalPrice: 24.99,
    discountedPrice: parseFloat((24.99 * 0.8).toFixed(2)),
    discountDuration: 5,
    description:
      "Super Cleanse - organizmni tozalash, ichak faoliyatini yaxshilash va toksinlardan xalos qilish uchun mo‘ljallangan maxsus qo‘shimcha. U tabiiy tarkibiy qismlardan iborat.",
    benefits: [
      "Organizmni toksinlardan tozalash",
      "Ichak faoliyatini yaxshilash",
      "Energiya darajasini oshirish",
      "Tana vaznini boshqarishga yordam beradi",
    ],
    ingredients: [
      "Aloe Vera",
      "Milk Thistle (Oqqayiq o'simligi)",
      "Dandelion Root (Qoqi o'ti)",
      "Psyllium Husk",
    ],
    usage: "Kuniga 2 kapsula ovqatdan keyin qabul qiling.",
    category: "Detox & Cleanse",
    stock: 75,
    image: superCleanseImg,
    rating: 3,
  },
  {
    id: 4,
    name: "Lutein",
    originalPrice: 18.99,
    discountedPrice: parseFloat((18.99 * 0.8).toFixed(2)), 
    discountDuration: 14, 
    description:
      "Lutein - ko'z salomatligini qo'llab-quvvatlovchi va ko'rish qobiliyatini yaxshilash uchun muhim bo'lgan antioksidant. U ko'zlarni UV nurlardan va zararli bo'lgan erkin radikallardan himoya qiladi.",
    benefits: [
      "Ko'z salomatligini qo'llab-quvvatlaydi",
      "Ko'rish qobiliyatini yaxshilashga yordam beradi",
      "UV va ko'zga zararli bo'lgan erkin radikallardan himoya qiladi",
    ],
    ingredients: ["Lutein (20mg)", "Zeaxanthin (5mg)", "Vitamin E", "Omega-3 Fatty Acids"],
    usage: "Kuniga 1 kapsula ovqat bilan qabul qiling.",
    category: "Eye Health",
    stock: 120,
    image: luteinImg,
    rating: 4,
  },
];
