import img1 from "../Rasm/kunchechak.jpg";
import img2 from "../Rasm/superclear.jpg";
import img3 from "../Rasm/detoksin.jpg";
import img4 from "../Rasm/vitamin-s.webp";
import img5 from "../Rasm/coloncleans.jpeg";
import img6 from "../Rasm/multivitamin.png";
import img7 from "../Rasm/detskij.jpg";
import img8 from "../Rasm/vitamind.jpg";
import img9 from "../Rasm/detsk-multivit-i-multimin.jpg";
import img10 from "../Rasm/onionextra.webp";
import img11 from "../Rasm/roseoil.webp";
import img12 from "../Rasm/hair.jpg";
import img13 from "../Rasm/vitaminC.webp";
import img14 from "../Rasm/levenderoil.webp";
import img15 from "../Rasm/multivit.png";
import img16 from "../Rasm/gojiberry.webp";
import img17 from "../Rasm/vitaminee.jpg";
import img18 from "../Rasm/vitaminee.jpg";
import img19 from "../Rasm/gojiberry.webp";
import img20 from "../Rasm/roseoil.webp";
import img21 from "../Rasm/hair.jpg";
import img22 from "../Rasm/superclear.jpg";
import img23 from "../Rasm/kunchechak.jpg";
import img24 from "../Rasm/coloncleans.jpeg";
import img25 from "../Rasm/detskij.jpg";
import img26 from "../Rasm/levenderoil.webp";
import img27 from "../Rasm/multivit.png";
import img28 from "../Rasm/onionextra.webp";
import img29 from "../Rasm/vitaminC.webp";
import img30 from "../Rasm/vitamin-s.webp";


export interface Dorilar {
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

export  const Biodori: Dorilar[] = [
    {
      id: 1,
      name: "Suncella Intimate Care Tablet",
      originalPrice: 19.99,
      discountedPrice: parseFloat((19.99 * 0.8).toFixed(2)), // Chegirma bilan
      discountDuration: 7,
      description:
        "Suncella - ayollar intim sog'lig'ini qo'llab-quvvatlash uchun maxsus ishlab chiqarilgan tabletka.",
      benefits: [
        "Gormonal muvozanatni tiklash",
        "Mikroflorani qo'llab-quvvatlash",
        "Yallig'lanishni kamaytirish",
      ],
      ingredients: ["Laktobakteriyalar", "Vitamin C", "Tabiiy o'simlik ekstraktlari"],
      usage: "Kuniga 1 tabletka ovqatdan keyin qabul qiling.",
      category: "Women's Health",
      sex: "women", // Ayollar uchun
      stock: 50,
      image: img1,
      rating: 4,
    },
    
    {
      id: 2,
      name: "Super Cleanse",
      originalPrice: 29.99,
      discountedPrice: null,
      description:
        "Ichaklarni samarali tozalash va organizmni detoks qilish uchun maxsus vosita.",
      benefits: ["Ichaklarni tozalash", "Organizmni detoks qilish"],
      ingredients: ["Tabiiy tolalar", "Zanjabil ekstrakti"],
      usage: "Kuniga 1 marta ertalab qabul qiling.",
      category: "Digestive Health",
      sex: "unisex", // Erkak va ayollarga mos
      stock: 100,
      image: img2,
      rating: 4.5,
    },
    {
      id: 3,
      name: "Detoxing",
      originalPrice: 34.99,
      discountedPrice: null,
      description: "Organizmni toksinlardan tozalash uchun samarali vosita.",
      benefits: ["Toksinlarni chiqarish", "Immunitetni oshirish"],
      ingredients: ["Ko'mir kukuni", "Qora choy ekstrakti"],
      usage: "Kuniga 1-2 marta qabul qiling.",
      category: "Detox",
      sex: "unisex", // Erkak va ayollarga mos
      stock: 75,
      image: img3,
      rating: 4.2,
    },
    {
      id: 4,
      name: "Kids Vitamin C Plus",
      originalPrice: 2746,
      discountedPrice: parseFloat((2746 * 0.85).toFixed(2)),
      discountDuration: 7,
      description: "Bolalar uchun maxsus Vitamin C kompleksi.",
      benefits: ["Immunitetni mustahkamlash", "Organizmni toksinlardan tozalash"],
      ingredients: ["Vitamin C", "Sink", "Apelsin ekstrakti"],
      usage: "Kuniga 1 tabletka ovqat bilan qabul qiling.",
      category: "Children's Health",
      sex: "children", // Bolalar uchun
      stock: 90,
      image: img4,
      rating: 5,
    },
    {
      id: 5,
      name: "colon cleance",
      originalPrice: 2128,
      discountedPrice: null,
      description:
        "Multikarotin kompleksi - ko‘z sog‘ligini saqlash va immunitetni qo‘llab-quvvatlash uchun.",
      benefits: ["Ko‘z sog‘ligini qo‘llab-quvvatlash", "Antioksidant himoya"],
      ingredients: ["Beta-karotin", "Vitamin E"],
      usage: "Kuniga 1 tabletka ovqatdan keyin qabul qiling.",
      category: "Vision Health",
      sex: "unisex", // Erkak va ayollarga mos
      stock: 70,
      image: img5,
      rating: 3,
    },
    {
      id: 6,
      name: "Ultimate Multivitamin",
      originalPrice: 3520,
      discountedPrice: parseFloat((3520 * 0.9).toFixed(2)),
      discountDuration: 10,
      description:
        "Yoshlar va kattalar uchun energiya va sog'liqni saqlashda yordam beradigan multivitamin kompleksi.",
      benefits: ["Kundalik energiya qo‘llab-quvvatlash", "Teri uchun foydali"],
      ingredients: ["Vitamin B kompleksi", "Magneziy"],
      usage: "Kuniga 2 tabletka ovqatdan keyin qabul qiling.",
      category: "Adults' Health",
      sex: "unisex", // Erkak va ayollarga mos
      stock: 65,
      image: img6,
      rating: 4.7,
    },
    {
      id: 7,
      name: "Kids Concentrate Vegetable",
      originalPrice: 2024,
      discountedPrice: null,
      description:
        "Bolalar uchun maxsus o'simlik konsentrati, organizmni qo‘llab-quvvatlash uchun.",
      benefits: ["Vitaminlar va minerallarni ta'minlash", "O‘simlik tolalar"],
      ingredients: ["Brokkoli ekstrakti", "Tabiiy tolalar"],
      usage: "Kuniga 1 qoshiq suv yoki sharbat bilan aralashtiring.",
      category: "Children's Health",
      sex: "children", // Bolalar uchun
      stock: 50,
      image: img7,
      rating: 4.5,
    },
    {
      id: 8,
      name: "Kids Calcium Magnesium + D",
      originalPrice: 2024,
      discountedPrice: null,
      description:"Bolalar uchun maxsus kaltsiy va magniy kompleksi, suyak sog'lig'i uchun.",
    benefits: ["Suyaklarni mustahkamlash", "Immun tizimini qo'llab-quvvatlash"],
    ingredients: ["Kaltsiy", "Magneziy", "Vitamin D"],
    usage: "Kuniga 1-2 tabletka ovqatdan keyin qabul qiling.",
    category: "Children's Health",
    sex: "children", // Bolalar uchun
    stock: 80,
    image: img8,
    rating: 4.6,
  },
  {
    id: 9,
    name: "Kids Multivitamin and Multiminerals",
    originalPrice: 3696,
    discountedPrice: null,
    description:
      "Bolalar uchun maxsus ishlab chiqarilgan multivitamin va multimineral kompleksi.",
    benefits: ["Immunitetni mustahkamlash", "O‘sishni qo‘llab-quvvatlash"],
    ingredients: ["Vitamin A, C, D", "Sink"],
    usage: "Kuniga 1 tabletka ovqat bilan qabul qiling.",
    category: "Children's Health",
    sex: "children", // Bolalar uchun
    stock: 80,
    image: img9,
    rating: 4.6,
  },
  {
    id: 10,
    name: "Onion Extract",
    originalPrice: 3168,
    discountedPrice: null,
    description: "Soch va terini parvarish qilish uchun tabiiy ekstrakt.",
    benefits: ["Soch va teri uchun foydali", "Vitaminlarni mustahkamlash"],
    ingredients: ["Tabiiy piyoz ekstrakti"],
    usage: "Kuniga 1 qoshiq ovqat bilan.",
    category: "Hair Care",
    sex: "unisex", // Erkak va ayollarga mos
    stock: 70,
    image: img10,
    rating: 4.5,
  },
  {
    id: 11,
    name: "Rose Oil",
    originalPrice: 31.99,
    discountedPrice: null,
    description:
      "Tabiiy gul moyi teri uchun maxsus parvarish vositasi.",
    benefits: ["Terini namlantirish", "Yallig'lanishni kamaytirish"],
    ingredients: ["Tabiiy gul moyi", "Vitamin E"],
    usage: "Teriga yupqa qatlam qilib surting.",
    category: "Skin Care",
    sex: "women", // Ayollar uchun
    stock: 60,
    image: img11,
    rating: 4.7,
  },
  {
    id: 12,
    name: "Hair and Nails Biotin",
    originalPrice: 25.99,
    discountedPrice: null,
    description: "Soch va tirnoqlarni mustahkamlash uchun biotin kompleksi.",
    benefits: ["Soch o‘sishini rag‘batlantiradi", "Tirnoqlarni mustahkamlaydi"],
    ingredients: ["Biotin", "Sink", "Vitamin B7"],
    usage: "Kuniga 1 tabletka ovqat bilan qabul qiling.",
    category: "Hair & Nails",
    sex: "unisex", // Erkak va ayollarga mos
    stock: 75,
    image: img12,
    rating: 4.8,
  },
  {
    id: 13,
    name: "Vitamin C Effervescent",
    originalPrice: 15.99,
    discountedPrice: null,
    description: "Vitamin C qo‘shimchasi, shirin gazlangan shaklda.",
    benefits: ["Energiya darajasini oshirish", "Immunitetni kuchaytirish"],
    ingredients: ["Vitamin C", "Tabiiy limon ekstrakti"],
    usage: "1 tabletkani suvga eritib, iching.",
    category: "Immunity",
    sex: "unisex", // Erkak va ayollarga mos
    stock: 85,
    image: img13,
    rating: 4.9,
  },
  {
    id: 14,
    name: "Evening Primrose Oil",
    originalPrice: 19.99,
    discountedPrice: parseFloat((19.99 * 0.85).toFixed(2)),
    discountDuration: 7,
    description: "Ayollar gormonal sog‘ligini qo‘llab-quvvatlash uchun maxsus qo‘shimcha.",
    benefits: ["Gormonal balansni saqlaydi", "Yallig‘lanishga qarshi ta’sir ko‘rsatadi"],
    ingredients: ["Primula moyi", "Vitamin E"],
    usage: "Kuniga 1 kapsula ovqatdan keyin qabul qiling.",
    category: "Women's Health",
    sex: "women", // Ayollar uchun
    stock: 70,
    image: img14,
    rating: 4.8,
    },
    {
      id: 15,
      name: "Kids Multivitamin Gummies",
      originalPrice: 12.99,
      discountedPrice: parseFloat((12.99 * 0.9).toFixed(2)), // Chegirma bilan
      discountDuration: 10,
      description: "Bolalar uchun maxsus tayyorlangan multivitaminli saqichlar.",
      benefits: ["Immunitetni kuchaytiradi", "Shirin va mazali"],
      ingredients: ["Vitamin A, C, D", "Tabiiy tolalar"],
      usage: "Kuniga 2 dona saqich iste'mol qiling.",
      category: "Children's Health",
      sex: "children", // Bolalar uchun
      stock: 100,
      image: img15,
      rating: 4.6,
    },
    {
      id: 16,
      name: "Goji Berry Extract",
      originalPrice: 16.99,
      discountedPrice: null,
      description:
        "Goji berry ekstrakti immunitetni oshirish va energiya darajasini ko‘tarish uchun tabiiy mahsulot.",
      benefits: ["Immunitetni oshirish", "Antioksidantlar bilan boyitilgan"],
      ingredients: ["Goji berry ekstrakti"],
      usage: "Kuniga 1 qoshiq qabul qiling.",
      category: "Immunity",
      sex: "unisex", // Erkak va ayollarga mos
      stock: 50,
      image: img16,
      rating: 4.5,
    },
    {
      id: 17,
      name: "Blackcurrant Extract",
      originalPrice: 18.99,
      discountedPrice: parseFloat((18.99 * 0.85).toFixed(2)), // Chegirma bilan
      discountDuration: 7,
      description:
        "Yallig‘lanishga qarshi va antioksidant himoya uchun qora smorodina ekstrakti.",
      benefits: ["Antioksidant himoya", "Yallig‘lanishga qarshi"],
      ingredients: ["Qora smorodina ekstrakti"],
      usage: "Kuniga 1 qoshiq ovqat bilan.",
      category: "Antioxidants",
      sex: "unisex", // Erkak va ayollarga mos
      stock: 65,
      image: img17,
      rating: 4.7,
    },
    {
      id: 18,
      name: "Vitamin D Supplement",
      originalPrice: 15.99,
      discountedPrice: null,
      description:
        "Suyak sog‘ligi va immunitetni mustahkamlash uchun D vitamini qo‘shimchasi.",
      benefits: ["Suyaklarni mustahkamlash", "Immunitetni oshirish"],
      ingredients: ["Vitamin D3"],
      usage: "Kuniga 1 tabletka ovqat bilan.",
      category: "Bone Health",
      sex: "unisex", // Erkak va ayollarga mos
      stock: 80,
      image: img18,
      rating: 4.9,
    },
   
        {
          id: 19,
          name: "Cistanche Complex",
          originalPrice: 25.99,
          discountedPrice: null,
          description: "Immunitet va umumiy energiyani oshirish uchun tabiiy kompleks.",
          benefits: ["Immunitetni kuchaytirish", "Yallig‘lanishga qarshi himoya"],
          ingredients: ["Cistanche ekstrakti", "Vitamin C"],
          usage: "Kuniga 1 tabletka ovqat bilan qabul qiling.",
          category: "Immunity",
          sex: "unisex", // Erkak va ayollarga mos
          stock: 60,
          image: img19,
          rating: 4.6,
        },
        {
          id: 20,
          name: "Lycopene",
          originalPrice: 18.99,
          discountedPrice: parseFloat((18.99 * 0.9).toFixed(2)), // Chegirma bilan
          discountDuration: 7,
          description:
            "Teri sog‘lig‘ini saqlash va antioksidant himoya uchun tabiiy likopen.",
          benefits: ["Antioksidant himoya", "Teri himoyasi"],
          ingredients: ["Tabiiy likopen", "Vitamin E"],
          usage: "Kuniga 1 kapsula ovqat bilan.",
          category: "Skin Care",
          sex: "unisex", // Erkak va ayollarga mos
          stock: 70,
          image: img20,
          rating: 4.7,
        },
        {
          id: 21,
          name: "Lavender Oil",
          originalPrice: 30.99,
          discountedPrice: null,
          description:
            "Tinchlanish va stressni kamaytirish uchun tabiiy lavanda moyi.",
          benefits: ["Stressni kamaytirish", "Tinchlantirish"],
          ingredients: ["Tabiiy lavanda moyi"],
          usage: "Teri yoki massaj uchun foydalaning.",
          category: "Relaxation",
          sex: "women", // Ayollar uchun
          stock: 50,
          image: img21,
          rating: 4.8,
        },
        {
          id: 22,
          name: "Green Tea Extract",
          originalPrice: 16.99,
          discountedPrice: parseFloat((16.99 * 0.85).toFixed(2)), // Chegirma bilan
          discountDuration: 5,
          description:
            "Organizmni detoks qilish va energiya darajasini oshirish uchun yashil choy ekstrakti.",
          benefits: ["Organizmni tozalash", "Energiya qo‘llab-quvvatlash"],
          ingredients: ["Yashil choy ekstrakti"],
          usage: "Kuniga 1 kapsula suv bilan qabul qiling.",
          category: "Detox",
          sex: "unisex", // Erkak va ayollarga mos
          stock: 75,
          image: img22,
          rating: 4.5,
        },
        {
          id: 23,
          name: "Astaxanthin",
          originalPrice: 19.99,
          discountedPrice: null,
          description:
            "Ko‘z sog‘lig‘ini saqlash va immunitetni mustahkamlash uchun astaksantin.",
          benefits: ["Ko‘z sog‘lig‘ini qo‘llab-quvvatlash", "Immunitetni oshirish"],
          ingredients: ["Tabiiy astaksantin"],
          usage: "Kuniga 1 tabletka ovqat bilan qabul qiling.",
          category: "Vision Health",
          sex: "unisex", // Erkak va ayollarga mos
          stock: 60,
          image: img23,
          rating: 4.6,
        },
        {
          id: 24,
          name: "Vitamin B Complex",
          originalPrice: 21.99,
          discountedPrice: null,
          description: "Energiyani oshirish va stressni kamaytirish uchun B vitamini kompleksi.",
          benefits: ["Energiya darajasini oshirish", "Stressni kamaytirish"],
          ingredients: ["Vitamin B1, B2, B6, B12"],
          usage: "Kuniga 1 kapsula ovqat bilan qabul qiling.",
          category: "Energy",
          sex: "unisex", // Erkak va ayollarga mos
          stock: 85,
          image: img24,
          rating: 4.7,
        },
        {
          id: 25,
          name: "Coenzyme Q10",
          originalPrice: 35.99,
          discountedPrice: null,
          description:
            "Yurak sog‘lig‘ini qo‘llab-quvvatlash va energiyani oshirish uchun koenzim Q10.",
          benefits: ["Yurakni qo‘llab-quvvatlash", "Energiya ishlab chiqarishni ko‘paytirish"],
          ingredients: ["Koenzim Q10"],
          usage: "Kuniga 1 kapsula ovqat bilan qabul qiling.",
          category: "Heart Health",
          sex: "unisex", // Erkak va ayollarga mos
          stock: 40,
          image: img25,
          rating: 4.8,
        },
        {
          id: 26,
          name: "Omega 3",
          originalPrice: 25.99,
          discountedPrice: parseFloat((25.99 * 0.9).toFixed(2)), // Chegirma bilan
          discountDuration: 10,
          description: "Yurak va miya faoliyatini qo‘llab-quvvatlash uchun Omega-3.",
          benefits: ["Yurak va miya faoliyati", "Immunitetni oshirish"],
          ingredients: ["Omega-3 yog‘ kislotasi"],
          usage: "Kuniga 2 kapsula ovqat bilan qabul qiling.",
          category: "Heart & Brain",
          sex: "unisex", // Erkak va ayollarga mos
          stock: 100,
          image: img26,
          rating: 4.9,
        },
    
            {
              id: 27,
              name: "Vitamin E",
              originalPrice: 22.99,
              discountedPrice: null,
              description:
                "Teri va soch sog‘lig‘ini saqlash uchun E vitamini qo‘shimchasi.",
              benefits: ["Teri va soch sog‘lig‘ini qo‘llab-quvvatlash", "Antioksidant himoya"],
              ingredients: ["Vitamin E", "Tabiiy ekstraktlar"],
              usage: "Kuniga 1 kapsula ovqat bilan qabul qiling.",
              category: "Skin Care",
              sex: "women", // Ayollar uchun
              stock: 80,
              image: img27,
              rating: 4.7,
            },
            {
              id: 28,
              name: "Glucosamine MSM + Vitamin D3",
              originalPrice: 29.99,
              discountedPrice: parseFloat((29.99 * 0.9).toFixed(2)), // Chegirma bilan
              discountDuration: 7,
              description:
                "Bo‘g‘im sog‘lig‘ini qo‘llab-quvvatlash uchun glyukozamin va D3 vitamini qo‘shimchasi.",
              benefits: ["Bo‘g‘imlarni mustahkamlash", "Yallig‘lanishni kamaytirish"],
              ingredients: ["Glucosamine", "MSM", "Vitamin D3"],
              usage: "Kuniga 1 kapsula ovqat bilan qabul qiling.",
              category: "Joint Health",
              sex: "unisex", // Erkak va ayollarga mos
              stock: 50,
              image: img28,
              rating: 4.6,
            },
            {
              id: 29,
              name: "Sea Buckthorn Extract",
              originalPrice: 19.99,
              discountedPrice: null,
              description:
                "Immunitetni oshirish va terini sog‘lomlashtirish uchun dengiz itburuni ekstrakti.",
              benefits: ["Immunitetni oshirish", "Teri salomatligi"],
              ingredients: ["Sea Buckthorn ekstrakti"],
              usage: "Kuniga 1 qoshiq ovqat bilan iste'mol qiling.",
              category: "Immunity",
              sex: "unisex", // Erkak va ayollarga mos
              stock: 70,
              image: img29,
              rating: 4.8,
            },
            {
              id: 30,
              name: "Vitamin C+",
              originalPrice: 24.99,
              discountedPrice: parseFloat((24.99 * 0.85).toFixed(2)), // Chegirma bilan
              discountDuration: 5,
              description:
                "Immunitetni oshirish va terini himoya qilish uchun C vitamini qo‘shimchasi.",
              benefits: ["Immunitetni qo‘llab-quvvatlash", "Teri himoyasi"],
              ingredients: ["Vitamin C", "Tabiiy ekstraktlar"],
              usage: "Kuniga 1 tabletka ovqat bilan iste'mol qiling.",
              category: "Immunity",
              sex: "unisex", // Erkak va ayollarga mos
              stock: 90,
              image: img30,
              rating: 4.9,
            },
          ];