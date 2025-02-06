import { useEffect, useMemo, useState } from "react";
import { TBiodori, TDorilar } from "../../mock/Tdorilar";
import StarRating from "../StarRating";
import {
  Shoponediv4,
  Shoponediv5,
  Shoponediv6,
  Shoptwodiv,
  Shoptwodiv1,
} from "../stylecomponent";
import QuantityField from "./quantity";
import savatcha from "../../Rasm/savatcha.svg";
import FavoriteButton from "./likeuchunn";
import { Link } from "react-router-dom";

const Shopthu: React.FC<{
  checkedClassify: string[];
  priceRange: [number, number];
  checkedCategorie: string[];
  selectedRatings: number[];
  onFilterChange: (filtered: TDorilar[]) => void;
}> = ({
  checkedClassify,
  priceRange,
  checkedCategorie,
  selectedRatings,
  onFilterChange,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showAllButtons, setShowAllButtons] = useState(false);
  const itemsPerPage = 4;

  // sortedData-ni memoizatsiya qilamiz:
  const sortedData = useMemo(() => {
    return [...TBiodori].sort((a, b) => a.id - b.id);
  }, [TBiodori]);

  // filterdata-ni memoizatsiya qilamiz:
  const filterdata = useMemo(() => {
    return sortedData.filter((data) => {
      const categoryMatch =
        checkedClassify.length > 0
          ? checkedClassify.includes(data.classify)
          : true;
      const matchesPrice =
        (data.discountedPrice &&
          data.discountedPrice >= priceRange[0] &&
          data.discountedPrice <= priceRange[1]) ||
        (data.originalPrice >= priceRange[0] &&
          data.originalPrice <= priceRange[1]);
      const categoryFilter =
        checkedCategorie.length > 0
          ? checkedCategorie.includes(data.category)
          : true;
      const ratingsMatch =
        selectedRatings.length > 0
          ? selectedRatings.includes(Math.round(data.rating))
          : true;
      return categoryMatch && matchesPrice && categoryFilter && ratingsMatch;
    });
  }, [sortedData, checkedClassify, priceRange, checkedCategorie, selectedRatings]);

  // Hozirgi sahifadagi mahsulotlarni hisoblaymiz:
  const currentItems = useMemo(() => {
    return filterdata.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  }, [filterdata, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(filterdata.length / itemsPerPage);

  // Filter natijasini ota komponentga yuborish:
  useEffect(() => {
    onFilterChange(filterdata);
  }, [filterdata, onFilterChange]);

  return (
    <>
      <Shoptwodiv>
        
        {currentItems.map((item) => (
          <Shoptwodiv1 key={item.id}>
            <Link to={`/product/${item.id}`} key={item.id}>
            <div style={{ position: "relative" }}>
              <img src={item.image} alt="rasm" />
              {item.discountedPrice &&
                item.discountedPrice < item.originalPrice && (
                  <div
                    style={{
                      width: "44",
                      height: "32",
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      backgroundColor: "#FFC12B",
                      color: "var(--Gray-Scale-0, #FFF)",
                      padding: " 8px",
                      borderRadius: "5px",
                      textAlign: "right",
                      fontFamily: "Montserrat",
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight: "16px",
                    }}
                  >
                    -{" "}
                    {Math.round(
                      ((item.originalPrice - item.discountedPrice) /
                      item.originalPrice) *
                        100
                    )}
                    %
                  </div>
                )}

              {item.discountDuration !== undefined &&
                item.dateAdded &&
                new Date().getTime() - new Date(item.dateAdded).getTime() <=
                item.discountDuration * 24 * 60 * 60 * 1000 && (
                  <div
                    style={{
                      width: "48",
                      height: "32",
                      position: "absolute",
                      top: "50px",
                      right: "10px",
                      backgroundColor: "#80B4FF",
                      padding: " 8px",
                      borderRadius: "5px",
                      color: "var(--Gray-Scale-0, #FFF)",
                      textAlign: "right",
                      fontFamily: "Montserrat",
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: 500,
                      lineHeight: "16px",
                    }}
                  >
                    New
                  </div>
                )}
            </div></Link>

            <div style={{ padding: "0 10px" }}>
              <h1>{item.name}</h1>

              <StarRating rating={item.rating} />

              <p>
                {item.discountedPrice &&
                item.discountedPrice !== item.originalPrice ? (
                  <>
                    <span style={{ marginRight: "8px" }}>
                      ${item.discountedPrice.toFixed(2)}
                    </span>
                    <span
                      style={{
                        textDecoration: "line-through",
                        color: "var(--Gray-Scale-40, #898989)",
                        fontFamily: "Jost",
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "24px",
                        letterSpacing: "0.08px",
                      }}
                    >
                      ${item.originalPrice.toFixed(2)}
                    </span>
                  </>
                ) : (
                  <span>${item.originalPrice.toFixed(2)}</span>
                )}
              </p>

           

              <div
                style={{
                  display: "flex",
                  flexDirection:"column",
                  marginTop: "16px",
                }}
              >
                <h4>
                  Product Capacity: <h3>{item.productCapacity}</h3>
                </h4>
                <h4>
                  Origin: <h3>{item.origin}</h3>
                </h4>
                <h4>
                  Product Code: <h3>{item.productCode}</h3>
                </h4>
              </div>

              <Shoponediv4>
                <QuantityField />

                <Shoponediv5>
                  <button>
                    <img src={savatcha} alt="Add to cart" />
                    <h5>ADD TO CART</h5>
                  </button>
                </Shoponediv5>

                <Shoponediv6>
                  <FavoriteButton />
                </Shoponediv6>
              </Shoponediv4>
            </div>
          </Shoptwodiv1>
        ))}
      </Shoptwodiv>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        {Array.from({ length: totalPages }, (_, index) => index + 1)
          .slice(0, showAllButtons ? totalPages : 5)
          .map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "1px solid #ccc",
                backgroundColor: currentPage === page ? "#80B4FF" : "#fff",
                color: currentPage === page ? "#fff" : "#898989",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              {page}
            </button>
          ))}

        {totalPages > 5 && !showAllButtons && (
          <button
            onClick={() => setShowAllButtons(true)}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: "1px solid #ccc",
              backgroundColor: "#fff",
              color: "#000",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            &gt;
          </button>
        )}
      </div>
    </>
  );
};

export default Shopthu;
