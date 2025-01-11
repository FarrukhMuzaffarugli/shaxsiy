import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  B4menu12,
  B4menu2,
  B4menuc,
  Bigconteyno,
  Bigcontenor4navbar,
  Imagewrapper,
  Ioverlay,
  N4navbar,
  N4navbar1,
  Bigcontenor44,
} from "../stylecomponent";
import CarouselArrows from "../../muibook/carusel";
import arrow from "../../Rasm/Arrow.svg";
import ToggleFavoriteButton from "../../muibook/likeuchun";
import StarRating from "../StarRating";
import savatcha1 from "../../Rasm/savatchaicon.svg";
import kozcha from "../../Rasm/koz.svg";
import smalllogo from "../../Rasm/small title.svg";
import { TBiodori } from "../../mock/Tdorilar";

interface CatagoriypersonProps {
  activeFilter: string | null;
  onFilterSelect: (category: string) => void;
  itemsPerPage?: number;
}

const Catagoriyperson: React.FC<CatagoriypersonProps> = ({
  activeFilter,
  onFilterSelect,
  itemsPerPage = 20,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [filteredProducts, setFilteredProducts] = useState(TBiodori); // 🔥 Mahsulotlarni holatda saqlash

  // 🔄 Mahsulotlarni filtrlash funksiyasi
  const filterProducts = (category: string | null) => {
    if (category) {
      const filtered = TBiodori.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(TBiodori); // 🔥 Kategoriya tanlanmasa, hammasini ko‘rsatish
    }
  };

  // 🔄 Filter o'zgarganda mahsulotlarni yangilash
  useEffect(() => {
    filterProducts(activeFilter);
    setCurrentIndex(0); // 🔄 Har safar filter yangilanganda boshidan boshlash
  }, [activeFilter]);

  // 🔄 Mahsulotlarni aylantirish (carousel)
  const handleNext = () => {
    setCurrentIndex((prevIndex: number) =>
      prevIndex + itemsPerPage >= filteredProducts.length
        ? 0
        : prevIndex + itemsPerPage
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex: number) =>
      prevIndex - itemsPerPage < 0
        ? filteredProducts.length - itemsPerPage
        : prevIndex - itemsPerPage
    );
  };

  // 🔄 Hozirgi mahsulotlar
  const currentProducts = filteredProducts.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  // 🔄 Kategoriya tanlash
  const handleFilterClick = (category: string) => {
    onFilterSelect(category === "More..." ? "" : category);
  };

  return (
    <Bigconteyno>
      <Bigcontenor44>
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

        <div
          style={{
            display: "flex",
            gap: "30px",
            marginTop: "50px",
            height: "100%",
          }}
        >
          <B4menu12>
            {["for bones", "for skin", "for hair", "for body", "More..."].map(
              (category, index) => (
                <div
                  key={`${category}-${index}`}
                  style={{ display: "flex", gap: "8px", cursor: "pointer" }}
                  onClick={() => handleFilterClick(category)}
                >
                  <img src={arrow} alt="arrow" />
                  <h1>{category}</h1>
                </div>
              )
            )}
          </B4menu12>

          <B4menuc>
            {currentProducts.length > 0 ? (
              currentProducts.map((dorilar, index) => (
                <B4menu2 key={`${dorilar.id}-${index}`}>
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
          </B4menuc>
        </div>
      </Bigcontenor44>
    </Bigconteyno>
  );
};

Catagoriyperson.propTypes = {
  activeFilter: PropTypes.string,
  onFilterSelect: PropTypes.func.isRequired,
  itemsPerPage: PropTypes.number,
};

Catagoriyperson.defaultProps = {
  activeFilter: null,
  itemsPerPage: 20,
};

export default Catagoriyperson;
