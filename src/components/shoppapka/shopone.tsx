import { TBiodori, TDorilar } from "../../mock/Tdorilar";
import StarRating from "../StarRating";
import { Shoponediv, Shoponediv1, Shoponediv2, Shoponediv3, Shoponediv4, Shoponediv5, Shoponediv6,
} from "../stylecomponent";
import QuantityField from "./quantity";
import savatcha from "../../Rasm/savatcha.svg";
import ikkitomon from "../../Rasm/iconikkitomon.svg";
import koz from "../../Rasm/Iconkoz.svg";
import FavoriteButton from "./likeuchunn";
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";


const Shoponecomponent: React.FC<{
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
          ? selectedRatings.includes(Math.floor(data.rating))
          : true;
      return categoryMatch && matchesPrice && categoryFilter && ratingsMatch;
    });
  }, [sortedData, checkedClassify, priceRange, checkedCategorie, selectedRatings]);

  const totalPages = Math.ceil(filterdata.length / itemsPerPage);

  // Hozirgi sahifadagi mahsulotlarni hisoblaymiz:
  const currentItems = useMemo(() => {
    return filterdata.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  }, [filterdata, currentPage, itemsPerPage]);

  // Agar checkedClassify o'zgarsa, currentPage ni 1 ga qaytaramiz:
  useEffect(() => {
    setCurrentPage(1);
  }, [checkedClassify]);

  // Filter natijasini ota komponentga yuborish:
  useEffect(() => {
    onFilterChange(filterdata);
  }, [filterdata, onFilterChange]);

  return (
    <Shoponediv>
      {currentItems.map((item) => (

        <Shoponediv1 key={item.id}>

<Shoponediv2 style={{ position: "relative" }}>
  <img src={item.image} alt="product"  />

  {item.discountedPrice && item.discountedPrice < item.originalPrice && (
    <div
    style={{
      width:"44",
      height:"32",
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
     - {Math.round(
        ((item.originalPrice - item.discountedPrice) / item.originalPrice) * 100
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
        width:"48",
        height:"32",
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


</Shoponediv2>


          <Shoponediv3>
            <h1>{item.name}</h1>
            <StarRating rating={item.rating} />

            <p>
              {item.discountedPrice && item.discountedPrice !== item.originalPrice ? (
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
                flexDirection: "column",
                height: "auto",
                gap: "12px",
              }}
            >
              <h2>{item.description}</h2>

              <div style={{ display: "flex", gap: "15px" }}>
                <h2>
                  Product Capacity: <h3>{item.productCapacity}</h3>
                </h2>
                <h2>
                  Origin: <h3>{item.origin}</h3>
                </h2>
                <h2>
                  Product Code: <h3>{item.productCode}</h3>
                </h2>
              </div>
            </div>

            <Shoponediv4>

              <QuantityField />

              <Shoponediv5>
                <button>
                  <img src={savatcha} alt="Add to cart" />
                  <h4>ADD TO CART</h4>
                </button>
              </Shoponediv5>

              <Shoponediv6>
                <FavoriteButton />
                <img src={ikkitomon} alt="" />
               <Link to={`/product/${item.id}`} key={item.id}> <img src={koz} alt="" /></Link>
              </Shoponediv6>

            </Shoponediv4>

          </Shoponediv3>

        </Shoponediv1>

      ))}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          gap: "10px",
        }}
      >
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: "1px solid #ccc",
              backgroundColor: currentPage === index + 1 ? "#80B4FF" : "#fff",
              color: currentPage === index + 1 ? "#fff" : "#898989",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </Shoponediv>
  );
};

export default Shoponecomponent;

