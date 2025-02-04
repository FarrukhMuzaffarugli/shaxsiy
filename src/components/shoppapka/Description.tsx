import { TDorilar } from "../../mock/Tdorilar";
import { Deccriptiondiv, Deccriptiondiv1, Shoopdiv } from "../stylecomponent";
import barner from "../../Rasm/Bannerproduct.svg"
interface DescriptionProps {
  product: TDorilar;
}

const DescriptionComponent = ({ product }: DescriptionProps) => {
  return (
    <Shoopdiv>
      <Deccriptiondiv>
        <p>{product.description}</p>
        <p>
          {product.benefits
            .map((e) => `${e} `)
            .toString()
            .split(",")}
        </p>
        <p>
          {product.ingredients
            .map((e) => `${e} `)
            .toString()
            .split(",")}
        </p>
        <p>{product.usage}</p>
      </Deccriptiondiv>

      <Deccriptiondiv1>
        <h1>Get Your 
Vitamins & 
Minerals</h1>
      </Deccriptiondiv1>


      <Deccriptiondiv style={{marginTop:"-50px"}}>
        <p>{product.info}</p>
      </Deccriptiondiv>

      <div style={{width:"100%", height:"654px"}}>
        <img src={barner} alt="" />
      </div>
     

    </Shoopdiv>
  );
};
export default DescriptionComponent;
