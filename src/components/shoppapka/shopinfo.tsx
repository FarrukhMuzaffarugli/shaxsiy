import { useParams } from "react-router-dom";
import { TBiodori } from "../../mock/Tdorilar";
import { Shoopdiv, Shoopdiv1, Shopinfo, Shopinfo1, Shopinfo11, Shopinfo12, Shopinfo2,  Shopinfo5,  Shoponediv4, Shoponediv5, Shoponediv6 } from "../stylecomponent";
import ProductStarRating from "./startrating";
import StockSlider from "./stocksilder";
import QuantityField from "./quantity";
import FavoriteButton from "./likeuchunn";
import savatcha from "../../Rasm/savatcha.svg";
import ikkitomon from "../../Rasm/iconikkitomon.svg";
import { ProductVariants } from "./tanlash";
import BasicTabs from "../../muibook/tabs";

const ShopinfoComponent = () => {
    const { id } = useParams<{ id: string }>(); 
    const product = TBiodori.find((item) => item.id.toString() === id); 
  
    if (!product) {
      return <h2>Mahsulot topilmadi!</h2>;
    }

  return (
    <Shoopdiv>

      <Shoopdiv1>
        <h1>Shop</h1>
        <p>Home / Shop / <p>{product.name}</p> </p>
      </Shoopdiv1>

      <Shopinfo>

       <Shopinfo1>

        <Shopinfo11>
           
            <div style={{ position: "relative" }}>
              <img src={product.image} alt="image" />
              {product.discountedPrice && product.discountedPrice < product.originalPrice && (
    <div
    style={{
      width:"44",
      height:"32",
      position: "absolute",
      top: "30px",
      left: "30px",
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
        ((product.originalPrice - product.discountedPrice) / product.originalPrice) * 100
      )}
      %
    </div>
  )}

  {product.discountDuration !== undefined &&
  product.dateAdded &&
  new Date().getTime() - new Date(product.dateAdded).getTime() <=
  product.discountDuration * 24 * 60 * 60 * 1000 && (
    <div
      style={{
        width:"48",
        height:"32",
        position: "absolute",
        top: "70px",
        left: "30px",
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
        </Shopinfo11>

        <Shopinfo12>
         
        {product.additionalImages.map((img, index) => (
  <img key={index} src={img} alt={`${product.name} image ${index + 1}`} />
))}
{product.productVideo && (
  <video controls width="161px" height="162px">
    <source src={product.productVideo as string | undefined} type="video/mp4" />
    Brauzeringiz videoni qo‘llab-quvvatlamaydi.
  </video>
)}


         
        </Shopinfo12>

       </Shopinfo1>

<div>
       <Shopinfo2>
        <h1>{product.name}</h1>
        <div style={{ display: 'flex', alignItems: "center", width: '400px' }}>
  <span style={{ paddingRight: "10px" }}>
    <ProductStarRating rating={product.rating} />
  </span>

  <span style={{ borderLeft: "1px solid #ccc", paddingLeft: "10px", paddingRight: "10px" }}>
   <p> <p> {product.reviews?.length || 0} </p> Customer reviews</p> 
  </span>

  <span style={{ borderLeft: "1px solid #ccc", paddingLeft: "10px" }}>
   <p> Sold: <p> {product.soldQuantity} </p></p>
  </span>
</div>
        <p>{product.description}</p>

        <div style={{padding: "0 10px "}}>
  {product.benefits.map((item, index) => (
    <h6 key={index}>
      <span style={{ marginRight: "15px" }}>•</span> {item}
    </h6>
  ))}
</div>
      
{product.stock > 0 ? <h3><h3>✅</h3>In Stock</h3> : <h4><h4>❌</h4> Not Sold</h4>}

<StockSlider totalQuantity={product.totalQuantity} stock={product.stock} />

{/* <div style={{display:"flex", gap: "16px"}}>

<h2>Classification</h2>

<div style={{gap: "12px", display:"flex"}}>
{product.variants.map((variant, index) => (
  <button key={index}>
    {variant.size}
  </button>
))}</div>





</div> */}

<ProductVariants 
  variants={product.variants} 
  deliveryTime={product.deliveryTime}  
  freeShippingThreshold={product.freeShippingThreshold} 
  
/>


       </Shopinfo2>

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
  
</Shoponediv6>

</Shoponediv4>

<Shopinfo5>
<p>Product Capacity :<p>{product.productCapacity}</p></p>
<p>Origin: <p>{product.origin}</p></p>
<p>Product Code : <p>{product.productCode}</p></p>
  
</Shopinfo5>

</div>   




      </Shopinfo>

      <BasicTabs product = {product}/>
      
    
    </Shoopdiv>
  );
};

export default ShopinfoComponent;
