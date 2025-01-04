import React, { useState, useEffect } from "react";
import ScrollableColumn from "../muibook/scroll";
import { products } from "../mockdate/tabletka";
import {
  Bigconteyno,
  Bigconteynor,
  Bigconteynormenu,
  Bigcontenor2,
  Contenor,
  Contenor1,
  Contenor2,
  Contenor3menu,
  Contenor3menu1,
  Contenor3menu2,
  Contenor3menu3,
  Conteynormenu1,
  Conteynormenu2,
  Menu1,
  Menu2,
  Menu3,
  Bigconteynor3,
  Contenor3menu4,
  Contenor3menu5,
  Contenor3menu6,
  B4menu,
  B4menu1,
  B4menu2,
  Bigcontenor5,
  Big5menu,
  Big5menu1,
  Big5menu2,
  Imagewrapper,
  Ioverlay,
} from "./stylecomponent";
import savatcha from "../Rasm/savatcha.svg";
import burs from "../Rasm/brgr.svg";
import barg from "../Rasm/barg.svg";
import yurak from "../Rasm/yuraklog.svg";
import img1 from "../Rasm/Services.svg";
import img2 from "../Rasm/Services1.svg";
import img3 from "../Rasm/Services2.svg";
import img4 from "../Rasm/gynecology.svg";
import img5 from "../Rasm/kunchechak.jpg";
import like from "../Rasm/like.svg";
import tomon from "../Rasm/ikkitomon.svg";
import { Bigcontenor4 } from "./stylecomponent";
import { Bigcontenor4navbar } from "./stylecomponent";
import { N4navbar } from "./stylecomponent";
import smalllogo from "../Rasm/small title.svg"
import { N4navbar1 } from "./stylecomponent";
import CarouselArrows from "../muibook/carusel";
import arrow from "../Rasm/Arrow.svg"
import StarRating from "./StarRating";
import { Biodori } from "../mock/Doridate";
import savatcha1 from "../Rasm/savatchaicon.svg"
import kozcha from "../Rasm/koz.svg"
// import yurakcha from "../Rasm/likecha.svg"
import ToggleFavoriteButton from "../muibook/likeuchun";


const HomeComponents = () => {

// filterlash jinsga qarab
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  }; const categorySexMap: { [key: string]: string | null } = {
    'Baby And Infant': 'children',
    'Senior Care': 'unisex', 
    'Women’s Care': 'women',
    'Men’s Care': 'men',
    'More...': null, 
  };
  const filteredProducts = selectedCategory
    ? Biodori.filter((product) => {
        const sexFilter = categorySexMap[selectedCategory];
        if (sexFilter === null) {
          return true; 
        }
       
        if (sexFilter === 'women' || sexFilter === 'men') {
          return product.sex === sexFilter || product.sex === 'unisex' || product.sex === 'children';
        }
        return product.sex === sexFilter;
      })
    : Biodori;






//caruselfilterlashi 
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;
    const handleNext = () => {
      setCurrentIndex((prevIndex) => {
        
        if (prevIndex + 1 >= Biodori.length) {
          return 0; 
        }
        return prevIndex + 1;
      });
    }
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => {
       
        if (prevIndex - 1 < 0) {
          return Biodori.length - 1;
        }
        return prevIndex - 1;
      });
    };
    const visibleItems = filteredProducts.slice(currentIndex, currentIndex + itemsPerPage);







    //time uchun 
  const [selectedImage, setSelectedImage] = useState(products[0]);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (!selectedImage) return;

    const targetTime = new Date();
    targetTime.setDate(targetTime.getDate() + selectedImage.discountDuration);

    const timer = setInterval(() => {
      const now = new Date();
      const timeDiff = targetTime - now;

      if (timeDiff > 0) {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [selectedImage]);

  return (
    <Bigconteyno>
      
      <Bigconteynor>
        <Bigconteynormenu>
          <p>Online medical supplies</p>
          <h1>Get Your Vitamins</h1>
          <h1>& Minerals</h1>
          <button>SHOP NOW</button>
        </Bigconteynormenu>
      </Bigconteynor>

      <Bigcontenor2>
        <Contenor>
          <img src={burs} alt="logo" />
        </Contenor>

        <Contenor1>
          <Conteynormenu1>
            <img src={yurak} alt="logo" />
            <h1>Welcome to Ipar</h1>
          </Conteynormenu1>
          <h2>Our Best Vitamin Services</h2>
          <Conteynormenu2>
            <Menu1>
              <Menu3>
                <img src={img1} alt="icon" />
                <h3>Good for the heart</h3>
                <p>
                  Ipar Kunchechak medicine is beneficial for heart health,
                  improving blood circulation, strengthening heart muscles, and
                  supporting the heart’s proper functioning while reducing
                  stress.
                </p>
              </Menu3>
              <Menu3>
                <img src={img2} alt="icon" />
                <h3>Improve health</h3>
                <p>
                  Ipar Kunchechak medicine provides overall health benefits by
                  improving blood circulation, enhancing immune system function,
                  reducing inflammation, and promoting relaxation. It supports
                  heart health, strengthens muscles, and aids in maintaining
                  general well-being.
                </p>
              </Menu3>
            </Menu1>

            <Menu2>
              <h3>
                "Kunchechak" bioactive tablet. 🍃🌸Ingredients: Pomegranate
                peel, red frog powder.
              </h3>
              <img src={img5} alt="icon" />
              <h3>
                You too can test your health with the reliable Kunchechak and
                live a healthy and beautiful life!
              </h3>
            </Menu2>

            <Menu1>
              <Menu3>
                <img src={img3} alt="icon" />
                <h3>Strong bones</h3>
                <p>
                  Ipar Kunchechak medicine supports bone health and improves
                  joint flexibility. It helps reduce inflammation in joints,
                  strengthens bones, and promotes mobility, making it beneficial
                  for overall skeletal health.
                </p>
              </Menu3>
              <Menu3>
                <img
                  src={img4}
                  alt="icon"
                  style={{
                    border: "1px dashed #fad414",
                    borderRadius: "50%",
                    padding: "5px",
                  }}
                />
                <h3>Gynecological health</h3>
                <p>
                  Ipar Kunchechak medicine is beneficial for gynecological
                  health by reducing inflammation, supporting the healthy
                  functioning of the uterus and ovaries, regulating the
                  menstrual cycle, and strengthening the overall reproductive
                  system.
                </p>
              </Menu3>
            </Menu1>
          </Conteynormenu2>
        </Contenor1>

        <Contenor2>
          <img src={barg} alt="logo" />
        </Contenor2>
      </Bigcontenor2>

      <Bigconteynor3>
        <Conteynormenu1>
          <img src={yurak} alt="logo" />
          <h1>Best offers</h1>
        </Conteynormenu1>
        <h2>Best Vitamin Offer For Our Customers</h2>

        <Contenor3menu>
          <Contenor3menu1>
            <ScrollableColumn
              visibleProducts={products}
              onImageSelect={(product) => setSelectedImage(product)}
            />
          </Contenor3menu1>

          <Contenor3menu2>
            {selectedImage && (
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  border: "2px solid #000",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={selectedImage.image}
                  alt="Selected"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "5px",
                    left: "5px",
                    backgroundColor: "rgba(255, 0, 0, 0.7)",
                    color: "#fff",
                    padding: "2px 8px",
                    fontSize: "12px",
                    borderRadius: "5px",
                  }}
                >
                  {Math.round(
                    ((selectedImage.originalPrice -
                      selectedImage.discountedPrice) /
                      selectedImage.originalPrice) *
                      100
                  )}
                  % OFF
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "5px",
                    left: "5px",
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    color: "#fff",
                    padding: "5px",
                    borderRadius: "5px",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      fontSize: "12px",
                      textDecoration: "line-through",
                      margin: 0,
                    }}
                  >
                    ${selectedImage.originalPrice.toFixed(2)}
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      margin: 0,
                    }}
                  >
                    ${selectedImage.discountedPrice.toFixed(2)}
                  </p>
                </div>
              </div>
            )}
          </Contenor3menu2>

          <Contenor3menu3>
            <Contenor3menu4>
              <p>{countdown.days}</p>
              <h6>Days</h6>
              <p>{countdown.hours}</p>
              <h6>Hours</h6>
              <p>{countdown.minutes}</p>
              <h6>Minuts</h6>
              <p>{countdown.seconds}</p>
              <h6>seconds</h6>
            </Contenor3menu4>

            <Contenor3menu5>
              <h1>{selectedImage.name}</h1>
              <div style={{ display: "flex", alignItems: "end" }}>
                <h2>${selectedImage.discountedPrice}</h2>
                <h3
                  style={{
                    textDecoration: "line-through",
                    marginLeft: "10px",
                    color: "#999",
                  }}
                >
                  ${selectedImage.originalPrice}
                </h3>
              </div>
              <p>{selectedImage.description}</p>

              <Contenor3menu6>
                <button>
                  <img src={savatcha} alt="Add to cart" />
                  <h4>ADD TO CART</h4>
                </button>
                <img src={like} alt="Like" style={{ marginLeft: "20px" }} />
                <img
                  src={tomon}
                  alt="Navigate"
                  style={{ marginLeft: "20px" }}
                />
              </Contenor3menu6>
            </Contenor3menu5>
          </Contenor3menu3>
        </Contenor3menu>
      </Bigconteynor3>


<Bigcontenor4>

<Bigcontenor4navbar>
    <N4navbar>
        <div><img src={smalllogo} alt="logo"/></div>
        <h1>Family Vitamin</h1>
    </N4navbar>
    <N4navbar1>

    <CarouselArrows onPrev={handlePrev} onNext={handleNext} />
    </N4navbar1>
</Bigcontenor4navbar>

<B4menu>

    <B4menu1>
        <div
          style={{ display: "flex", gap: "8px", cursor: "pointer" }}
          onClick={() => handleCategoryClick('Baby And Infant')}
        >
          <img src={arrow} alt="arrow" />
          <h1>Baby And Infant</h1>
        </div>

        <div
          style={{ display: "flex", gap: "8px", cursor: "pointer" }}
          onClick={() => handleCategoryClick('Senior Care')}
        >
          <img src={arrow} alt="arrow" />
          <h1>Senior Care</h1>
        </div>

        <div
          style={{ display: "flex", gap: "8px", cursor: "pointer" }}
          onClick={() => handleCategoryClick('Women’s Care')}
        >
          <img src={arrow} alt="arrow" />
          <h1>Women’s Care</h1>
        </div>

        <div
          style={{ display: "flex", gap: "8px", cursor: "pointer" }}
          onClick={() => handleCategoryClick('Men’s Care')}
        >
          <img src={arrow} alt="arrow" />
          <h1>Men’s Care</h1>
        </div>

        <div
          style={{ display: "flex", gap: "8px", cursor: "pointer" }}
          onClick={() => handleCategoryClick('More...')}
        >
          <img src={arrow} alt="arrow" />
          <h1>More...</h1>
        </div>
      </B4menu1>

      {visibleItems.map((dorilar) => (
  <B4menu2 key={dorilar.id}>
    <Imagewrapper>
      <img src={dorilar.image} alt={dorilar.name} />
      <Ioverlay>
        <button>
       <img src={savatcha1} alt="icon" />
       <img src={kozcha} alt="icon" />
       {/* <img src={yurakcha} alt="icon" /> */}
<ToggleFavoriteButton/>
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
))}





</B4menu>

</Bigcontenor4>

<Bigcontenor5>


<Big5menu>
<p>SUPER SALE</p>
<h1>20% All
band CNH</h1>
<button>SHOP NOW</button>
</Big5menu>

<Big5menu1>
<p>EXTRA 9% SAVINGS ON ORDER</p>
<h1>For Weight 
Gain</h1>
<button>SHOP NOW</button>

</Big5menu1>

<Big5menu2>
<p>FREE SHIPPING AND MORE</p>
<h1>Vitamin B12 
& B2</h1>
<button>SHOP NOW</button>
</Big5menu2>

</Bigcontenor5>

<Bigcontenor4>

<Bigcontenor4navbar>
    <N4navbar>
        <div><img src={smalllogo} alt="logo"/></div>
        <h1>Personal Care</h1>
    </N4navbar>
    <N4navbar1>

    <CarouselArrows onPrev={handlePrev} onNext={handleNext} />
    </N4navbar1>
</Bigcontenor4navbar>

<B4menu>

    <B4menu1>
        <div
          style={{ display: "flex", gap: "8px", cursor: "pointer" }}
          onClick={() => handleCategoryClick('for bones')}
        >
          <img src={arrow} alt="arrow" />
          <h1>for bones</h1>
        </div>

        <div
          style={{ display: "flex", gap: "8px", cursor: "pointer" }}
          onClick={() => handleCategoryClick('for skin')}
        >
          <img src={arrow} alt="arrow" />
          <h1>for skin</h1>
        </div>

        <div
          style={{ display: "flex", gap: "8px", cursor: "pointer" }}
          onClick={() => handleCategoryClick('for hair')}
        >
          <img src={arrow} alt="arrow" />
          <h1>for hair</h1>
        </div>

        <div
          style={{ display: "flex", gap: "8px", cursor: "pointer" }}
          onClick={() => handleCategoryClick('for body')}
        >
          <img src={arrow} alt="arrow" />
          <h1>for body</h1>
        </div>

        <div
          style={{ display: "flex", gap: "8px", cursor: "pointer" }}
          onClick={() => handleCategoryClick('More...')}
        >
          <img src={arrow} alt="arrow" />
          <h1>More...</h1>
        </div>
      </B4menu1>

      {visibleItems.map((dorilar) => (
  <B4menu2 key={dorilar.id}>
    <Imagewrapper>
      <img src={dorilar.image} alt={dorilar.name} />
      <Ioverlay>
        <button>
       <img src={savatcha1} alt="icon" />
       <img src={kozcha} alt="icon" />
       {/* <img src={yurakcha} alt="icon" /> */}
<ToggleFavoriteButton/>
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
))}





</B4menu>

</Bigcontenor4>

    </Bigconteyno>
  );
};

export default HomeComponents;
