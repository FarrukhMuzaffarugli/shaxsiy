import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { B4menu, B4menu12, B4menu2, Bigcontenor4, Bigcontenor4navbar, Bigconteyno, Imagewrapper, Ioverlay, N4navbar, N4navbar1 } from "./stylecomponent";
import CarouselArrows from "../muibook/carusel";
import arrow from "../Rasm/Arrow.svg";
import ToggleFavoriteButton from "../muibook/likeuchun";
import StarRating from "./StarRating";
import savatcha1 from "../Rasm/savatchaicon.svg";
import kozcha from "../Rasm/koz.svg";
import smalllogo from "../Rasm/small title.svg";
import { TBiodori } from "../mock/Tdorilar";

interface CatagoriyProps {
  activeFilter: string | null;
  onFilterSelect: (category: string) => void;
  itemsPerPage?: number;
}

const Catagoriy: React.FC<CatagoriyProps> = ({ activeFilter, onFilterSelect, itemsPerPage = 3 }) => {
  const filteredProducts = activeFilter
    ? TBiodori.filter((product) =>
        product.category.toLowerCase() === activeFilter.toLowerCase()
      )
    : TBiodori;

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const currentProducts = filteredProducts.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  const handleNext = () => {
    setCurrentIndex((prevIndex: number) =>
      prevIndex + 1 >= filteredProducts.length ? 0 : prevIndex + 1
    );
  };
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex: number) =>
      prevIndex - 1 < 0 ? filteredProducts.length - 1 : prevIndex - 1
    );
  };
  useEffect(() => {

    setCurrentIndex(0);
  }, [activeFilter]);
  

  const handleFilterClick = (category: string) => {
    if (onFilterSelect && typeof onFilterSelect === "function") {
      // "More..." uchun null jo'natish
      if (category === "More...") {
        onFilterSelect(""); // Null o'rniga bo'sh string foydalaning
      } else {
        onFilterSelect(category);
      }
    }
  };
  

  return (
    <Bigconteyno>
      <Bigcontenor4>
        <Bigcontenor4navbar>
          <N4navbar>
            <div>
              <img src={smalllogo} alt="logo" />
            </div>
            <h1>Personal Care</h1>
          </N4navbar>

          <N4navbar1>
            <CarouselArrows onPrev={handlePrev} onNext={handleNext} />
          </N4navbar1>
        </Bigcontenor4navbar>

        <B4menu>
          <B4menu12>
            {[ "for bones", "for skin", "for hair", "for body", "More..." ].map((category, index) => (
              <div
                key={`${category}-${index}`}
                style={{ display: "flex", gap: "8px", cursor: "pointer" }}
                onClick={() => handleFilterClick(category)}
              >
                <img src={arrow} alt="arrow" />
                <h1>{category}</h1>
              </div>
            ))}
          </B4menu12>

          {currentProducts.length > 0 ? (
            currentProducts.map((dorilar) => (
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
                    <span style={{ textDecoration: "line-through", marginRight: "8px" }}>
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
            <h3 style={{ textAlign: "center", color: "gray" }}>Not available</h3>
          )}
        </B4menu>
      </Bigcontenor4>
    </Bigconteyno>
  );
};

Catagoriy.propTypes = {
  activeFilter: PropTypes.string,
  onFilterSelect: PropTypes.func.isRequired,
  itemsPerPage: PropTypes.number,
};

Catagoriy.defaultProps = {
  activeFilter: null,
  itemsPerPage: 3,
};

export default Catagoriy;



