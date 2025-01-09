import { useState } from "react";
import { Izoxdata } from "../mock/izohlarmock";
import { Bigcontenor73, Bigcontenor74 } from "../components/stylecomponent";

const PaginatedCarousel = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(Izoxdata.length / itemsPerPage);

  const getCurrentItems = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return Izoxdata.slice(startIndex, endIndex);
  };

  const handleDotClick = (index: number) => {
    setCurrentPage(index);
  };

  return (
    <Bigcontenor73>
      <div style={{ display: "flex", justifyContent: "center", gap: "30px" }}>
        {getCurrentItems().map((item) => (
          <Bigcontenor74 key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.profession}</p>
            <div>
              <span>
                {Array.from({ length: Math.floor(item.rate) }).map((_, index) => (
                  <span key={index} style={{ color: "gold" }}>
                    &#9733;
                  </span>
                ))}
                {item.rate % 1 !== 0 && (
                  <span style={{ color: "gold" }}>&#9734;</span>
                )}
              </span>
            </div>
            <p>{item.description}</p>
          </Bigcontenor74>
        ))}
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "30px",
          display: "flex",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        {Array.from({ length: totalPages }).map((_, index) => (
          <span
            key={index}
            onClick={() => handleDotClick(index)}
            style={{
              display: "inline-block",
              width: "10px",
              height: "10px",
              backgroundColor: currentPage === index ? "black" : "gray",
              borderRadius: "50%",
              cursor: "pointer",
            }}
          ></span>
        ))}
      </div>
    </Bigcontenor73>
  );
};

export default PaginatedCarousel;
