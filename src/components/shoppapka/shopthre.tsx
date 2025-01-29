import { useEffect, useState } from "react";
import ToggleFavoriteButton from "../../muibook/likeuchun";
import { Imagewrapper1, Ioverlay, Shopthree, Shopthree1 } from "../stylecomponent";
import savatcha1 from "../../Rasm/savatchaicon.svg";
import kozcha from "../../Rasm/koz.svg";
import { TBiodori, TDorilar } from "../../mock/Tdorilar";
import StarRating from "../StarRating";

const Shopthre: React.FC<{ 
  checkedClassify: string[]; 
  priceRange: [number, number]; 
  checkedCategorie: string[]; 
  selectedRatings: number[];
  onFilterChange: (filtered: TDorilar[]) => void; 
}> = ({ checkedClassify, priceRange, checkedCategorie, selectedRatings, onFilterChange  }) => {
  const [currentPage, setCurrentPage] = useState(1); 
  const [showAllButtons, setShowAllButtons] = useState(false); 
  const itemsPerPage = 12; 

  const sortedData = [...TBiodori].sort((a, b) => a.id - b.id);

  const filterdata = sortedData.filter((data) => {
    const Category = checkedClassify.length > 0 ? checkedClassify.includes(data.classify) : true;
    const matchesPrice =
    (data.discountedPrice && data.discountedPrice >= priceRange[0] && data.discountedPrice <= priceRange[1]) ||
    (data.originalPrice >= priceRange[0] && data.originalPrice <= priceRange[1]);
    const Classfy = checkedCategorie.length > 0 ? checkedCategorie.includes(data.category) : true;
    const Ratings = selectedRatings.length > 0 ? selectedRatings.includes(Math.floor(data.rating)) : true;
    return Category && matchesPrice && Classfy && Ratings;
     
  });

  const totalPages = Math.ceil(filterdata.length / itemsPerPage);


   const currentItems = filterdata.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    onFilterChange(filterdata);
  }, [filterdata, onFilterChange]);

  return (
    <>
      <Shopthree>
        {currentItems.map((item) => (
          <Shopthree1 key={item.id}>
            <Imagewrapper1>
              <div style={{ position: "relative" }}>
              <img src={item.image} alt="image" />
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
              </div>
              <Ioverlay>
                <button>
                  <img src={savatcha1} alt="savatcha icon" />
                  <img src={kozcha} alt="ko'zcha icon" />
                  <ToggleFavoriteButton />
                </button>
              </Ioverlay>
            </Imagewrapper1>

            <StarRating rating={item.rating} />
            <h1>{item.name}</h1>
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
          </Shopthree1>
        ))}
      </Shopthree>

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

export default Shopthre;
