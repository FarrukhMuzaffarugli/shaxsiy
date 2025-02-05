import React, { useState, useEffect } from "react";
import CarouselArrows from "../../muibook/carusel";
import {
  B4menu12,
  B4menu2,
  B4menuc,
  Bigcontenor44,
  Bigcontenor4navbar,
  Bigconteyno,
  Imagewrapper,
  Ioverlay,
  N4navbar,
  N4navbar1,
} from "../stylecomponent";

import arrow from "../../Rasm/Arrow.svg";
import ToggleFavoriteButton from "../../muibook/likeuchun";
import StarRating from "../StarRating";
import savatcha1 from "../../Rasm/savatchaicon.svg";
import kozcha from "../../Rasm/koz.svg";
import smalllogo from "../../Rasm/small title.svg";
import { TBiodori, TDorilar } from "../../mock/Tdorilar";

const FamilycatigoryComponent: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<TDorilar[]>(TBiodori); 
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const itemsPerPage = 20;

  // 🔄 Mahsulotlarni `sex` bo‘yicha filtrlash
  const handleCategoryClick = (category: string) => {
    setActiveCategory(category === "More..." ? null : category);
  };

  useEffect(() => {
    if (activeCategory) {
      let sexCategory: "men" | "women" | "children" | "unisex" | null = null;

      switch (activeCategory) {
        case "Baby And Infant":
          sexCategory = "children";
          break;
        case "Senior Care":
          sexCategory = "unisex";
          break;
        case "Women’s Care":
          sexCategory = "women";
          break;
        case "Men’s Care":
          sexCategory = "men";
          break;
        default:
          sexCategory = null;
      }

      const filtered = sexCategory
        ? TBiodori.filter((product) => product.sex === sexCategory || product.sex === "unisex")
        : TBiodori;

      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(TBiodori);
    }

    setCurrentIndex(0);
  }, [activeCategory]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= filteredProducts.length ? 0 : prevIndex + itemsPerPage
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerPage < 0
        ? filteredProducts.length - itemsPerPage
        : prevIndex - itemsPerPage
    );
  };

  const visibleItems = filteredProducts.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Bigconteyno>
        <Bigcontenor44>
          <Bigcontenor4navbar>
            <N4navbar>
              <div>
                <img src={smalllogo} alt="logo" />
              </div>
              <h1>Family Vitamin</h1>
            </N4navbar>

            <N4navbar1>
              <CarouselArrows onPrev={handlePrev} onNext={handleNext} />
            </N4navbar1>
          </Bigcontenor4navbar>

          <div
            style={{
              display: "flex",
              gap: "30px",
              marginTop: "50px",
              height: "100%",
            }}
          >
            <B4menu12>
              {["Baby And Infant", "Senior Care", "Women’s Care", "Men’s Care", "More..."].map(
                (category, index) => (
                  <div
                    key={index}
                    style={{ display: "flex", gap: "8px", cursor: "pointer" }}
                    onClick={() => handleCategoryClick(category)}
                  >
                    <img src={arrow} alt="arrow" />
                    <h1>{category}</h1>
                  </div>
                )
              )}
            </B4menu12>

            <B4menuc>
              {visibleItems.length > 0 ? (
                visibleItems.map((dorilar) => (
                  <B4menu2 key={dorilar.id}>
                    <Imagewrapper>
                      <img src={dorilar.image} alt={dorilar.name} />
                      <Ioverlay>
                        <button>
                          <img src={savatcha1} alt="savatcha icon" />
                          <img src={kozcha} alt="ko'zcha icon" />
                          <ToggleFavoriteButton />
                        </button>
                      </Ioverlay>
                    </Imagewrapper>

                    <StarRating rating={dorilar.rating} />
                    <h6>{dorilar.name}</h6>

                    {dorilar.discountedPrice !== null ? (
                      <div>
                        <span
                          style={{
                            textDecoration: "line-through",
                            marginRight: "8px",
                          }}
                        >
                          {dorilar.originalPrice}$
                        </span>
                        <span style={{ color: "red" }}>{dorilar.discountedPrice}$</span>
                      </div>
                    ) : (
                      <h2>{dorilar.originalPrice}$</h2>
                    )}
                  </B4menu2>
                ))
              ) : (
                <h3 style={{ textAlign: "center", color: "gray" }}>
                  Mahsulotlar mavjud emas
                </h3>
              )}
            </B4menuc>
          </div>
        </Bigcontenor44>
      </Bigconteyno>
    </div>
  );
};

export default FamilycatigoryComponent;



