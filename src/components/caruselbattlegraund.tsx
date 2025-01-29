import  { useState } from "react";
import { Bigconteynor, IndicatorWrapper, Dot, Bigconteynormenu, Bigconteynormenuu } from "./stylecomponent";
import { Link } from "react-router-dom";

const images = [ 
 "https://avatars.mds.yandex.net/get-znatoki/1506847/2a0000018553757288f073b98f7d71a78985/orig",
  "https://avatars.mds.yandex.net/i?id=9e09de6bb43846bc40d023f86ef719b1_l-5252083-images-thumbs&n=13",
  "https://i.ytimg.com/vi/_wWQkEMF3yA/maxresdefault.jpg",

];

const Caruselbattlegraund = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <Bigconteynor bgImage={images[currentIndex]}>

  
  <Bigconteynormenuu>
  
  </Bigconteynormenuu>

      <Bigconteynormenu>
        <p>Online medical supplies</p>
        <h1>Get Your Vitamins</h1>
        <h1>& Minerals</h1>
        <Link to="/shop" >
  <button>SHOP NOW</button>
</Link>
      </Bigconteynormenu>

      

      <IndicatorWrapper>
        {images.map((_, index) => (
          <Dot
            key={index}
            active={index === currentIndex}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </IndicatorWrapper>
    </Bigconteynor>
  );
};

export default Caruselbattlegraund;
