import img1 from "../Rasm/kunchechak.jpg";
import img2 from "../Rasm/trasm2.webp";
import img3 from "../Rasm/trasm3.webp";
import img4 from "../Rasm/trasm4.webp";
import img5 from "../Rasm/trasm5.webp";
import img6 from "../Rasm/trasm6.webp";
import img7 from "../Rasm/trasm7.webp";
import img8 from "../Rasm/trasm8.webp";
import img9 from "../Rasm/trasm9.jpg";
import img10 from "../Rasm/trasm10.webp";
import img11 from "../Rasm/trasm11.webp";
import img12 from "../Rasm/trasm12.webp";
import img13 from "../Rasm/trasm13.jpg";
import img14 from "../Rasm/trasm14.webp";
import img15 from "../Rasm/trasm15.webp";
import img16 from "../Rasm/trasm16.webp";
import img17 from "../Rasm/trasm17.webp";
import img18 from "../Rasm/trasm18.webp";
import img19 from "../Rasm/trasm19.webp";
import img20 from "../Rasm/trasm20.webp";

export interface TDorilar {
    id: number;
    name: string;
    originalPrice: number; 
    discountedPrice: number | null; 
    discountDuration?: number; 
    description: string;
    benefits: string[];
    ingredients: string[];
    usage: string;
    category: string;
    stock: number;
    image: string;
    rating: number; 
    sex?: "unisex" | "men" | "women" | "children";
  };


export const TBiodori: TDorilar[] = [
    {
      id: 1,
      name: "Suncella Intimate Care Tablet",
      originalPrice: 19.99,
      discountedPrice: parseFloat((19.99 * 0.8).toFixed(2)),
      discountDuration: 7,
      description: "Ayollar intim sog'lig'ini qo'llab-quvvatlash uchun maxsus ishlab chiqarilgan tabletka.",
      benefits: ["Gormonal muvozanatni tiklash", "Mikroflorani qo'llab-quvvatlash", "Yallig'lanishni kamaytirish"],
      ingredients: ["Laktobakteriyalar", "Vitamin C", "Tabiiy o'simlik ekstraktlari"],
      usage: "Kuniga 1 tabletka ovqatdan keyin qabul qiling.",
      category: "For Body",
      sex: "women",
      stock: 50,
      image: img1,
      rating: 4,
    },
    {
      id: 2,
      name: "Dermacure Skin Brightening Cream",
      originalPrice: 15.99,
      discountedPrice: 12.79,
      discountDuration: 10,
      description: "Yuz terisini oqartiruvchi va tozalovchi krem.",
      benefits: ["Teringizni yorqinlashtiradi", "Quyoshdan himoya qiladi", "Namlikni tiklaydi"],
      ingredients: ["Vitamin E", "Hyaluronic Acid", "Natural Oils"],
      usage: "Kuniga 2 marta toza teriga surting.",
      category: "For Skin",
      stock: 100,
      image: img2,
      rating: 4.5,
    },
    {
      id: 3,
      name: "NutriHair Growth Serum",
      originalPrice: 25.99,
      discountedPrice: null,
      description: "Soch o'sishini tezlashtiruvchi va soch ildizlarini mustahkamlovchi vosita.",
      benefits: ["Soch to'kilishini kamaytiradi", "Soch ildizlarini kuchaytiradi", "Qalin sochlar"],
      ingredients: ["Biotin", "Keratin", "Essential Oils"],
      usage: "Soch ildizlariga massaj qilib qo'llang.",
      category: "For Hair",
      stock: 30,
      image: img3,
      rating: 4.8,
    },
    {
      id: 4,
      name: "CalciBone Strength Capsules",
      originalPrice: 18.99,
      discountedPrice: 15.19,
      discountDuration: 5,
      description: "Suyaklarni mustahkamlash uchun kaltsiy qo'shimchasi.",
      benefits: ["Suyak zichligini oshiradi", "Vitamin D bilan boyitilgan", "Suyaklarni himoya qiladi"],
      ingredients: ["Kaltsiy karbonat", "Vitamin D3", "Magniy"],
      usage: "Kuniga 1-2 kapsula qabul qiling.",
      category: "For Bones",
      stock: 60,
      image: img4,
      rating: 4.3,
    },
    {
      id: 5,
      name: "PureSkin Detox Face Mask",
      originalPrice: 14.99,
      discountedPrice: 11.99,
      discountDuration: 3,
      description: "Teringizni chuqur tozalash va ortiqcha yog'ni ketkazish uchun yuz maskasi.",
      benefits: ["Chuqur tozalash", "Yog'ni muvozanatlash", "Teringizni yangilash"],
      ingredients: ["Green Tea", "Charcoal", "Aloe Vera"],
      usage: "Yuzingizga suring va 15 daqiqa qoldiring, keyin yuvib tashlang.",
      category: "For Skin",
      stock: 40,
      image: img5,
      rating: 4.6,
    },
    {
      id: 6,
      name: "HairGrove Anti-Dandruff Shampoo",
      originalPrice: 10.99,
      discountedPrice: 8.79,
      discountDuration: 7,
      description: "Kiprik va qoshlarni parvarishlash uchun shampun.",
      benefits: ["Qichishishni kamaytiradi", "Soch ildizlarini kuchaytiradi"],
      ingredients: ["Zinc Pyrithione", "Essential Oils"],
      usage: "Sochingizni namlang va shampunni suring, yaxshilab yuving.",
      category: "For Hair",
      stock: 70,
      image: img6,
      rating: 4.7,
    },
    {
      id: 7,
      name: "BonePlus Vitamin D Chewables",
      originalPrice: 20.99,
      discountedPrice: 16.79,
      discountDuration: 5,
      description: "Bolalar va kattalar uchun suyak rivojlanishini yaxshilovchi vitaminlar.",
      benefits: ["Suyaklarni mustahkamlaydi", "D vitamin bilan boyitilgan"],
      ingredients: ["Vitamin D3", "Kaltsiy", "Magnezium"],
      usage: "Kuniga 1 tabletka chaynang.",
      category: "For Bones",
      sex: "unisex",
      stock: 120,
      image: img7,
      rating: 4.4,
    },
    {
      id: 8,
      name: "GlowLift Anti-Aging Serum",
      originalPrice: 35.99,
      discountedPrice: null,
      description: "Yuz terisining elastikligini tiklovchi va yoshartiruvchi serum.",
      benefits: ["Chuqur namlantirish", "Teri hujayralarini yangilash"],
      ingredients: ["Retinol", "Hyaluronic Acid", "Peptides"],
      usage: "Kecha teriga suring, ertalab yuving.",
      category: "For Skin",
    stock: 45,
    image: img8,
    rating: 4.9,
  },
  {
    id: 9,
    name: "FullFlex Joint Support Tablets",
    originalPrice: 22.99,
    discountedPrice: 18.39,
    discountDuration: 10,
    description: "Bo'g'im og'riqlarini kamaytirish va moslashuvchanlikni yaxshilash uchun qo'shimcha.",
    benefits: ["Bo'g'im og'riqlarini kamaytiradi", "Moslashuvchanlikni oshiradi"],
    ingredients: ["Glucosamine", "Chondroitin", "MSM"],
    usage: "Kuniga 2 tabletka ovqatdan keyin qabul qiling.",
    category: "For Body",
    stock: 80,
    image: img9,
    rating: 4.6,
  },
    {
      id: 10,
      name: "HerbalCalm Relaxation Tea",
      originalPrice: 12.99,
      discountedPrice: 10.39,
      discountDuration: 7,
      description: "Asablarni tinchlantiruvchi va dam olishga yordam beruvchi o'simlikli choy.",
      benefits: ["Asablarni tinchlantiradi", "Uyquni yaxshilaydi", "Stressni kamaytiradi"],
      ingredients: ["Chamomile", "Lavender", "Mint"],
      usage: "Kuniga 1-2 chashka iching.",
      category: "For Body",
      stock: 100,
      image: img10,
      rating: 4.7,
    },
    {
      id: 11,
      name: "HydroBoost Moisturizing Lotion",
      originalPrice: 18.99,
      discountedPrice: 14.99,
      discountDuration: 5,
      description: "Teringizni chuqur namlantirish uchun losyon.",
      benefits: ["Namlikni tiklaydi", "Quruq terini yumshatadi"],
      ingredients: ["Hyaluronic Acid", "Vitamin E", "Aloe Vera"],
      usage: "Kuniga 2 marta teriga surting.",
      category: "For Skin",
      stock: 75,
      image: img11,
      rating: 4.8,
    },
    {
      id: 12,
      name: "ReviveScalp Treatment Oil",
      originalPrice: 24.99,
      discountedPrice: null,
      description: "Soch ildizlarini oziqlantiruvchi va sochni parvarish qiluvchi moy.",
      benefits: ["Quruq bosh terisini yumshatadi", "Soch o'sishini rag'batlantiradi"],
      ingredients: ["Coconut Oil", "Tea Tree Oil", "Rosemary"],
      usage: "Soch ildizlariga qo'llang va massaj qiling.",
      category: "For Hair",
      stock: 50,
      image: img12,
      rating: 4.5,
    },
    {
      id: 13,
      name: "MultiBone Complete Supplement",
      originalPrice: 29.99,
      discountedPrice: 23.99,
      discountDuration: 7,
      description: "Suyak va bo'g'imlar uchun keng spektrli qo'shimcha.",
      benefits: ["Suyaklarni mustahkamlaydi", "Moslashuvchanlikni oshiradi"],
      ingredients: ["Calcium", "Vitamin D3", "Collagen"],
      usage: "Kuniga 2 tabletka ovqat bilan birga qabul qiling.",
      category: "For Bones",
      stock: 90,
      image: img13,
      rating: 4.6,
    },
    {
      id: 14,
      name: "GlowRadiance Vitamin C Serum",
      originalPrice: 28.99,
      discountedPrice: 22.99,
      discountDuration: 4,
      description: "Yuz terisini parvarish qilish va yorqinlashtirish uchun serum.",
      benefits: ["Yorqinlikni oshiradi", "Quyosh dog'larini kamaytiradi"],
      ingredients: ["Vitamin C", "Aloe Vera", "Glycerin"],
      usage: "Teringizga kechasi qo'llang.",
      category: "For Skin",
      stock: 65,
      image: img14,
      rating: 4.9,
    },
    {
      id: 15,
      name: "HairVital Protein Shampoo",
      originalPrice: 16.99,
      discountedPrice: 13.59,
      discountDuration: 6,
      description: "Sochni mustahkamlovchi va protein bilan oziqlantiruvchi shampun.",
      benefits: ["Sochni mustahkamlaydi", "Soch sinishini kamaytiradi"],
      ingredients: ["Keratin", "Argan Oil", "Protein Extracts"],
      usage: "Sochingizni namlang va shampunni qo'llang, keyin yuving.",
      category: "For Hair",
      stock: 80,
      image: img15,
      rating: 4.8,
    },
    {
      id: 16,
      name: "BoneCare Magnesium Capsules",
      originalPrice: 19.99,
      discountedPrice: 15.99,
      discountDuration: 5,
      description: "Suyak zichligini oshiruvchi magniy qo'shimchasi.",
      benefits: ["Suyaklarni mustahkamlaydi", "Quvvatni oshiradi"],
      ingredients: ["Magnesium", "Zinc", "Vitamin K2"],
      usage: "Kuniga 1 kapsula iching.",
      category: "For Bones",
      stock: 110,
      image: img16,
      rating: 4.5,
    },
    {
      id: 17,
      name: "SkinRevive Night Cream",
      originalPrice: 26.99,
      discountedPrice: null,
      description: "Terni kechasi tiklovchi va oziqlantiruvchi krem.",
      benefits: ["Namlikni tiklaydi", "Teringizni elastik qiladi"],
      ingredients: ["Shea Butter", "Vitamin E", "Collagen"],
      usage: "Toza yuzga kechasi surting.",
      category: "For Skin",
      stock: 40,
      image: img17,
      rating: 4.6,
    },
    {
      id: 18,
      name: "HairRestore Scalp Serum",
      originalPrice: 22.99,
      discountedPrice: 18.39,
      discountDuration: 7,
      description: "Soch ildizlarini mustahkamlovchi va oziqlantiruvchi serum.",
      benefits: ["Soch o'sishini rag'batlantiradi", "Quruq bosh terisini yumshatadi"],
      ingredients: ["Argan Oil", "Peppermint Oil", "Biotin"],
      usage: "Kechasi soch ildizlariga suring.",
      category: "For Hair",
      stock: 55,
      image: img18,
      rating: 4.8,
    },
    {
      id: 19,
      name: "HydraSkin Face Wash",
      originalPrice: 11.99,
      discountedPrice: 9.59,
      discountDuration: 3,
      description: "Yuzni chuqur tozalash va namlantirish uchun yuz yuvish geli.",
      benefits: ["Chuqur tozalash", "Teringizni yangilash"],
      ingredients: ["Aloe Vera", "Green Tea", "Vitamin B5"],
      usage: "Kuniga 2 marta yuzingizni yuvishda foydalaning.",
      category: "For Skin",
      stock: 120,
      image: img19,
      rating: 4.7,
    },
    {
      id: 20,
      name: "CalMag Bone Builder",
      originalPrice: 24.99,
      discountedPrice: 19.99,
      discountDuration: 8,
      description: "Kaltsiy va magniy bilan suyaklarni mustahkamlovchi qo'shimcha.",
      benefits: ["Suyak zichligini oshiradi", "Quvvatni oshiradi"],
      ingredients: ["Calcium", "Magnesium", "Vitamin D3"],
      usage: "Kuniga 2 tabletka qabul qiling.",
      category: "For Bones",
      stock: 70,
      image: img20,
      rating: 4.4,
    },
  ];
