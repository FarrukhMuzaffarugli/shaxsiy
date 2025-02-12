import  { useMemo } from "react";
import { TDorilar, TBiodori } from "../../mock/Tdorilar";
import { 
  Deccriptiondiv, 
  Deccriptiondiv1, 
  Deccriptiondiv2, 
  Deccriptiondiv3, 
  Imagewrapper1, 
  Ioverlay, 
  N4navbar, 
  Shoopdiv, 
  Shopthree1 
} from "../stylecomponent";
import barner from "../../Rasm/Bannerproduct.svg";
import smalllogo from "../../Rasm/small title.svg";
import { Link } from "react-router-dom";
import ToggleFavoriteButton from "../../muibook/likeuchun";
import savatcha1 from "../../Rasm/savatchaicon.svg";
import kozcha from "../../Rasm/koz.svg";
import StarRating from "../StarRating";

interface DescriptionProps {
  product: TDorilar;
}

const DescriptionComponent = ({ product }: DescriptionProps) => {

  const relatedProducts = useMemo(() => {
    
    const sameCategoryProducts = TBiodori.filter(
      (p) => p.category === product.category && p.id !== product.id
    );
  
    return sameCategoryProducts.slice(0, 4);
  }, [product.category, product.id]);

  return (
    <Shoopdiv>
      <Deccriptiondiv>
        <p>{product.description}</p>
        <p>
          {product.benefits.map((e) => `${e} `).toString().split(",")}
        </p>
        <p>
          {product.ingredients.map((e) => `${e} `).toString().split(",")}
        </p>
        <p>{product.usage}</p>
      </Deccriptiondiv>

      <Deccriptiondiv1>
        <h1>
          Get Your <br />
          Vitamins & <br />
          Minerals
        </h1>
      </Deccriptiondiv1>

      <Deccriptiondiv style={{ marginTop: "-50px" }}>
        <p>{product.info}</p>
      </Deccriptiondiv>

      <div style={{ width: "100%", height: "654px" }}>
        <img src={barner} alt="Banner" />
      </div>

      
      <Deccriptiondiv>
        <p>{product.contraindications}</p>
      </Deccriptiondiv>

      <Deccriptiondiv2>
        
        <N4navbar style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div>
            <img src={smalllogo} alt="Logo" />
          </div>
          <h1>Related Products</h1>
        </N4navbar>

       <Deccriptiondiv3>
      
        {relatedProducts.map((related) => (
        <Shopthree1 key={related.id}>
          
           
          <Imagewrapper1>
            <div style={{ position: "relative" }}>
              <img src={related.image} alt="image" />
              {related.discountedPrice && related.discountedPrice < related.originalPrice && (
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
        ((related.originalPrice - related.discountedPrice) / related.originalPrice) * 100
      )}
      %
    </div>
  )}

  {related.discountDuration !== undefined &&
  related.dateAdded &&
  new Date().getTime() - new Date(related.dateAdded).getTime() <=
  related.discountDuration * 24 * 60 * 60 * 1000 && (
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
                  <Link to={`/product/${related.id}`} key={related.id}> <img src={kozcha} alt="ko'zcha icon" /></Link>
                  <ToggleFavoriteButton />
                </button>
              </Ioverlay>
            </Imagewrapper1>
           
            <StarRating rating={related.rating} />
            <h1>{related.name}</h1>
            <p>
              {related.discountedPrice && related.discountedPrice !== related.originalPrice ? (
                <>
                  <span style={{ marginRight: "8px" }}>
                    ${related.discountedPrice.toFixed(2)}
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
                    ${related.originalPrice.toFixed(2)}
                  </span>
                </>
              ) : (
                <span>${related.originalPrice.toFixed(2)}</span>
              )}
            </p>
         
        </Shopthree1>
         ))}
         </Deccriptiondiv3>


      </Deccriptiondiv2>

    </Shoopdiv>
  );
};

export default DescriptionComponent;

