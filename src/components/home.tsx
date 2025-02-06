import  { useState, useEffect } from "react";
import ScrollableColumn from "../muibook/scroll";
import { Bigconteyno, Bigcontenor2,  Contenor1,  Contenor3menu, Contenor3menu1, Contenor3menu2, Contenor3menu3, Conteynormenu1, Conteynormenu2, Menu1, Menu2, Menu3, Bigconteynor3, Contenor3menu4, Contenor3menu5, Contenor3menu6, B4menu, B4menu1, B4menu2, Bigcontenor5, Big5menu, Big5menu1, Big5menu2, Imagewrapper, Ioverlay, Bigcontenor6, Bigcontenor61, Bigcontenor62, Bigcontenor8, Bigcontenor81, Bigcontenor9, Bigcontenor91, Bigcontenor10, Bigcontenor101, Bigcontenor102, Bigcontenor11, Bigcontenor111, Bigcontenor112, Bigcontenor13, Bigcontenor131, Bigcontenor132, Divyurak1, Ovozlar, Ovozlar1,  
} from "./stylecomponent";
import savatcha from "../Rasm/savatcha.svg";
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
import savatcha1 from "../Rasm/savatchaicon.svg"
import kozcha from "../Rasm/koz.svg"
import ToggleFavoriteButton from "../muibook/likeuchun";
import Catagoriy from "./catagoriy";
import maslahat from "../Rasm/mmrasm.webp"
import BestCatagoriy from "./bestcatagory";
import IzohlarComponent from "./izohlar";
import BasicModal from "../muibook/modal";
import AccordionUsage from "../muibook/accardion";
import ambulance from "../Rasm/ambulance.svg"
import ambulance1 from "../Rasm/ordering.svg"
import ambulance2 from "../Rasm/onlineicon.svg"
import ambulance3 from "../Rasm/fully.svg"
import ambulance4 from "../Rasm/easy.svg"
import ambulance5 from "../Rasm/moreicon.svg"
import SearchPrescription from "./fileupdate";
import BlogpageComponent from "./blogpage";
import tezyordam from "../Rasm/tezyordam.jpg"
import tezyordam1 from "../Rasm/tezyordam1.webp"
import tezyordam2 from "../Rasm/tezyordam2.webp"
import tezyordam3 from "../Rasm/tezyordam3.jpg"
import Caruselbattlegraund from "./caruselbattlegraund";
import { Link } from "react-router-dom";
import { TBiodori, TDorilar } from "../mock/Tdorilar";

const HomeComponents = () => {

//catagoriy



// Kategoriya filteri
const [activeCategory, setActiveCategory] = useState<string | null>(null);
const handleFilterSelect = (category: string | null) => {
  setActiveCategory(category);
};

// Jins bo‘yicha filterlash
const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
const handleCategoryClick = (category: string) => {
  setSelectedCategory(category);
};

const categorySexMap: { [key: string]: string | null } = {
  'Baby And Infant': 'children',
  'Senior Care': 'unisex',
  'Women’s Care': 'women',
  'Men’s Care': 'men',
  'More...': null,
};

// **TDorilar** bo‘yicha mahsulotlarni filterlash
const filteredProducts: TDorilar[] = selectedCategory
  ? TBiodori.filter((product) => {
      const sexFilter = categorySexMap[selectedCategory];
      return sexFilter === null || product.sex === sexFilter || product.sex === 'unisex';
    })
  : TBiodori;

// **Karusel (Carousel) funksiyasi**
const [currentIndex, setCurrentIndex] = useState(0);
const itemsPerPage = 3;

const handleNext = () => {
  setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredProducts.length);
};

const handlePrev = () => {
  setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredProducts.length) % filteredProducts.length);
};

const visibleItems = filteredProducts.slice(currentIndex, currentIndex + itemsPerPage);

if (visibleItems.length < itemsPerPage) {
  visibleItems.push(...filteredProducts.slice(0, itemsPerPage - visibleItems.length));
}

// **Tanlangan mahsulot va vaqtni hisoblash (Countdown)**
const [selectedImage, setSelectedImage] = useState<TDorilar | null>(
  filteredProducts.length > 0 ? filteredProducts[0] : null
);

const [countdown, setCountdown] = useState({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

useEffect(() => {
  if (!selectedImage || typeof selectedImage.discountDuration !== "number") return;

  const targetTime = new Date();
  targetTime.setSeconds(targetTime.getSeconds() + selectedImage.discountDuration * 24 * 60 * 60); // 🔹 Kunlarni soniyaga o‘girish

  const updateCountdown = () => {
    const now = new Date();
    const timeDiff = targetTime.getTime() - now.getTime();

    if (timeDiff > 0) {
      setCountdown({
        days: Math.floor(timeDiff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((timeDiff % (1000 * 60)) / 1000),
      });
    } else {
      setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      clearInterval(timer);
    }
  };

  updateCountdown(); // 🔹 Dastlab yangilash
  const timer = setInterval(updateCountdown, 1000);

  return () => clearInterval(timer);
}, [selectedImage]); // 






  return (
    <div style={{display: 'flex', justifyContent: "center"}}>
    <Bigconteyno>
      
      
      
      <Caruselbattlegraund/>
    
      <Bigcontenor2>

       

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
  products={filteredProducts}
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
      {/* 🔹 Chegirma foizi to‘g‘ri chiqadi */}
      {selectedImage.discountedPrice !== null && (
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
            ((selectedImage.originalPrice - selectedImage.discountedPrice) /
              selectedImage.originalPrice) *
              100
          )}
          % OFF
        </div>
      )}

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
          ${(selectedImage.discountedPrice ?? selectedImage.originalPrice).toFixed(2)}
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
    <h6>Minutes</h6>
    <p>{countdown.seconds}</p>
    <h6>Seconds</h6>
  </Contenor3menu4>

  {selectedImage && (
    <Contenor3menu5>
      <h1>{selectedImage.name}</h1>
      <div style={{ display: "flex", alignItems: "end" }}>
        <h2>
          ${selectedImage.discountedPrice !== null
            ? selectedImage.discountedPrice.toFixed(2)
            : selectedImage.originalPrice.toFixed(2)}
        </h2>
        {selectedImage.discountedPrice !== null && (
          <h3
            style={{
              textDecoration: "line-through",
              marginLeft: "10px",
              color: "#999",
            }}
          >
            ${selectedImage.originalPrice.toFixed(2)}
          </h3>
        )}
      </div>
      <p>{selectedImage.description}</p>

      <Contenor3menu6>
        <button>
          <img src={savatcha} alt="Add to cart" />
          <h4>ADD TO CART</h4>
        </button>
        <img src={like} alt="Like" style={{ marginLeft: "20px" }} />
        <img src={tomon} alt="Navigate" style={{ marginLeft: "20px" }} />
      </Contenor3menu6>
    </Contenor3menu5>
  )}
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
<Link to="/shop">
  <button>SHOP NOW</button>
</Link>
</Big5menu>

<Big5menu1>
<p>EXTRA 9% SAVINGS ON ORDER</p>
<h1>For Weight 
Gain</h1>
<Link to="/shop" >
  <button>SHOP NOW</button>
</Link>

</Big5menu1>

<Big5menu2>
<p>FREE SHIPPING AND MORE</p>
<h1>Vitamin B12 
& B2</h1>
<Link to="/shop" >
  <button>SHOP NOW</button>
</Link>
</Big5menu2>

</Bigcontenor5>

<Catagoriy activeFilter={activeCategory} 
        onFilterSelect={handleFilterSelect} 
        itemsPerPage={3}/>


   <Bigcontenor6>

<Bigcontenor61>

<Bigcontenor62>
  <div style={{display: "flex", alignItems: "center", gap:"4px"}}>
    <p>STARTING WITH</p>
    <h2>  19$</h2>
  </div>

<h1>
Help you feel better 
in study and work
</h1>

<Link to="/shop" >
  <button>SHOP NOW</button>
</Link>

</Bigcontenor62>

<img src={maslahat} alt="logo" />

  </Bigcontenor61>

   </Bigcontenor6>

    <BestCatagoriy/>

    <IzohlarComponent/>

   <Bigcontenor8>
    <BasicModal/>
    <Bigcontenor81>
      <div style={{display: 'flex', marginTop: '39px', gap: '7px'}}><img src={yurak} alt="logo" />
      <p>Frequently Asked Questions</p>
      </div>
      <h1>You've Got Any Questions?</h1>
      <AccordionUsage />
    </Bigcontenor81>
   </Bigcontenor8>

   <Bigcontenor9>
  
  <Bigcontenor91>
   <img src={ambulance} alt="logo" />
   <h1>24/7 fast and safe</h1>
   <p>Delivery to any point
   of the city and regions</p>
  </Bigcontenor91>

  <Bigcontenor91>
   <img src={ambulance1} alt="logo" />
   <h1>Order the Hard to Find </h1>
   <p>Medicines and preparations </p>
  </Bigcontenor91>


  <Bigcontenor91>
   <img src={ambulance2} alt="logo" />
   <h1>Online consultation</h1>
   <p>And house calls with real doctors</p>
  </Bigcontenor91>


  <Bigcontenor91>
   <img src={ambulance3} alt="logo" />
   <h1>Fully original </h1>
   <p>With well-prepared and warranted products</p>
  </Bigcontenor91>

  <Bigcontenor91>
   <img src={ambulance4} alt="logo" />
   <h1>Easy and secure</h1>
   <p>Online payment with credit and debit card</p>
  </Bigcontenor91>


  <Bigcontenor91>
   <img src={ambulance5} alt="logo" />
   <h1>More than 20,000</h1>
   <p>Different product ranges</p>
  </Bigcontenor91>

   </Bigcontenor9>

   <Bigcontenor10>

<Bigcontenor101>
<p>Your Day-life Protection</p>
<h1>Protein Supplement</h1>
<Link to="/shop" >
  <button>SHOP NOW</button>
</Link>
<p>Starting With 19$</p>
</Bigcontenor101>

<Bigcontenor102>
<p>Starting With 19$</p>
<h1>Immunity Boosters</h1>
<Link to="/shop" >
  <button>SHOP NOW</button>
</Link>
<p>Get Up To 26%</p>
</Bigcontenor102>


   </Bigcontenor10>

   <Bigcontenor11>

   <Bigcontenor111>
    <h1>Your health, physical and emotional well-being is important to us. We are always by your side and have made it even easier for you to find the necessary vitamins.</h1>
     <h1>Find the right vitamin in seconds by scanning the prescription or entering the name.</h1>
     <h1>Stay healthy with Ipar!</h1>
     <p>Note: You must be log in to the website in order to upload a prescription</p>
   </Bigcontenor111>

   <Bigcontenor112>
<SearchPrescription/>

   </Bigcontenor112>

   </Bigcontenor11>

 <BlogpageComponent/>

  <Bigcontenor13>
   
   <Bigcontenor131>
 <div>
   <Divyurak1>
          <img src={yurak} alt="logo" />
          <p>our retail outlets</p>
        </Divyurak1>
        <h1>Professional Service & Care 
        In A Pleasant Ambience</h1>

       <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan</h2>
       </div>

   <Ovozlar>

   <Ovozlar1>
    <h4>14K+</h4>
    <h3>Happy Customers</h3>
   </Ovozlar1>

   <Ovozlar1>
    <h4>27K+</h4>
    <h3>Products Sold</h3>
   </Ovozlar1>

   <Ovozlar1>
    <h4>15+</h4>
    <h3>Years Experience</h3>
   </Ovozlar1>


   </Ovozlar>

   </Bigcontenor131>

   <Bigcontenor132>
  <img src={tezyordam} alt="icon" />
<img src={tezyordam1} alt="icon" />
<img src={tezyordam2} alt="icon" />
<img src={tezyordam3} alt="icon" />
   </Bigcontenor132>

  </Bigcontenor13>

    </Bigconteyno>
    </div>
  );
};

export default HomeComponents;
