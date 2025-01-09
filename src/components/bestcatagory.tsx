import React, { useEffect, useState } from "react";
import {
  B4menu,
  B4menu2,
  Bigcontenor4,
  Bigcontenor4navbar,
  Bigconteyno,
  Imagewrapper,
  Ioverlay,
  N4navbar,
  N4navbar1,
} from "./stylecomponent";
import CarouselArrows from "../muibook/carusel";
import savatcha1 from "../Rasm/savatchaicon.svg";
import kozcha from "../Rasm/koz.svg";
import smalllogo from "../Rasm/small title.svg";
import ToggleFavoriteButton from "../muibook/likeuchun";
import StarRating from "./StarRating";
import { TBiodori } from "../mock/Tdorilar";

const BestCatagoriy: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const itemsPerPage = 4; // Har bir sahifada 4 ta mahsulot ko'rsatiladi

  // Reyting bo'yicha mahsulotlarni tartiblash
  const sortedProducts = [...TBiodori].sort((a, b) => b.rating - a.rating);

  // Hozirgi sahifadagi mahsulotlarni kesish
  const currentProducts = sortedProducts.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  const handleNext = () => {
    setCurrentIndex((prevIndex: number) =>
      prevIndex + 1 >= sortedProducts.length ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex: number) =>
      prevIndex - 1 < 0 ? sortedProducts.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    setCurrentIndex(0);
  }, []);

  
  

  return (
    <Bigconteyno>
      <Bigcontenor4>
        <Bigcontenor4navbar>
          <N4navbar>
            <div>
              <img src={smalllogo} alt="logo" />
            </div>
            <h1>Best Sellers</h1>
          </N4navbar>

          <N4navbar1>
            <CarouselArrows onPrev={handlePrev} onNext={handleNext} />
          </N4navbar1>
        </Bigcontenor4navbar>

        <B4menu>
          {currentProducts.length > 0 ? (
            currentProducts.map((dorilar) => (
              <B4menu2 key={dorilar.id}>
                <Imagewrapper>
                  <img src={dorilar.image} alt={dorilar.name} />
                  {dorilar.discountedPrice && (
                    <span
                      style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        background: "red",
                        color: "white",
                        padding: "2px 8px",
                        borderRadius: "5px",
                        fontSize: "12px",
                      }}
                    >
                      {Math.round(
                        ((dorilar.originalPrice - dorilar.discountedPrice) /
                          dorilar.originalPrice) *
                          100
                      )}
                      % OFF
                    </span>
                  )}
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
                    <span style={{ color: "red" }}>
                      {dorilar.discountedPrice}$
                    </span>
                  </div>
                ) : (
                  <h2>{dorilar.originalPrice}$</h2>
                )}
              </B4menu2>
            ))
          ) : (
            <h3 style={{ textAlign: "center", color: "gray" }}>
              Not available
            </h3>
          )}
        </B4menu>
      </Bigcontenor4>
    </Bigconteyno>
  );
};

export default BestCatagoriy;
