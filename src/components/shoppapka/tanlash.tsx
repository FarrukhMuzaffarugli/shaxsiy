import { useState } from "react";
import { Shopinfo3 } from "../stylecomponent";
import delivery from '../../Rasm/delivery.svg';



interface Variant {
   size: string; 
    price: number;
    discountedPrice: number | null;

}
interface ProductVariantsProps {
  variants: Variant[];
  deliveryTime: string;
  freeShippingThreshold: number; 

}


interface ProductVariantsProps {
  variants: Variant[];
}

export const ProductVariants: React.FC<ProductVariantsProps> = ({  variants,
  freeShippingThreshold, }) => {
  const middleIndex = Math.floor(variants.length / 2);
  const [selectedIndex, setSelectedIndex] = useState<number>(middleIndex);

  return (
     
    <div style={{display: 'flex', flexDirection:"column", gap: "41px"}}>

    <div style={{ display: "flex", gap: "16px" }}>
      <h2>Classification</h2>
      <div style={{ display: "flex", gap: "12px" }}>

        {variants.map((variant, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            style={{
              background: selectedIndex === index ? "#FFC12B" : "white",
              color: selectedIndex === index ? "white" : "black",
             
              
             
            }}
          >
            {variant.size}

          </button>
        ))}

      </div>
    </div>

<div>


<Shopinfo3>

<h5>
              {variants[selectedIndex].discountedPrice !=null ? (
                <>
                  <span style={{ marginRight: "8px" }}>
                    ${variants[selectedIndex].discountedPrice}
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
                    ${variants[selectedIndex].price}
                  </span>
                </>
              ) : (
                <span>${variants[selectedIndex].price.toFixed(2)}</span>
              )}
</h5>

<span style={{ fontSize: "16px", color: "#999" }}>|</span>

<div style={{display:'flex', justifyContent:'center', alignItems: 'center', gap: '8px'}}>
<img src={delivery} alt="" />
<h5><h5>Free delivery from ${freeShippingThreshold}</h5></h5>
</div>

            </Shopinfo3>

</div>

</div>

  );
};
