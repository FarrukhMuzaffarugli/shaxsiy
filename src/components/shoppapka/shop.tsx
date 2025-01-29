import { TBiodori, TDorilar } from "../../mock/Tdorilar"
import { NestedList, NestedList1, NestedList3, NestedList4, RatingFilter } from "../../muibook/nested"
import { filterTagStyle, Shoopdiv, Shoopdiv1, Shoopdiv2, Shoopdiv3, Shoopdiv4, Shoopdivleft, Shoopdivleft1, Shoopdivleft2, Shoopdivright, Shoopdivright1, Shoopdivrightnav, Shoopdivrightnav1 } from "../stylecomponent"
import img from '../../Rasm/1.svg'
import img1 from '../../Rasm/2 Columns.svg'
import img3 from '../../Rasm/4.svg'
import img5 from '../../Rasm/5.svg'
import Shoponecomponent from "./shopone"
import Shopthre from "./shopthre"
import Shopthu from "./shopthu"
import Shopninecomponent from "./shopnine"
import React from "react";
import { useState } from "react"



const Shopcomponent = () => {

  

  const [active, setactive] = useState(1);
  const [checkedClassify, setcheckedClassify] = React.useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([1, 2000]);
  const [checkedCategorie, setcheckedCategorie] = React.useState<string[]>([]);
  const [selectedRatings, setSelectedRatings] = React.useState<number[]>([]);
  const [filteredData, setFilteredData] = useState<TDorilar[]>(TBiodori);

  

  const handleFilterChange = (filtered: TDorilar[]) => {
    setFilteredData(filtered);
  };



  const [filterKey, setFilterKey] = useState<number>(0);
  const clearFilters = () => { setcheckedClassify([]); setcheckedCategorie([]); setSelectedRatings([]); setPriceRange([1, 2000]);
    setFilterKey((prevKey) => prevKey + 1);};
  
    

  const Handlemenu = () => {
    setactive(1);
  };

  const HandleVmenu = () => {
    setactive(3);
  };

  const HandleLmenu = () => {
    setactive(2);
  };

  const HandleTmenu = () => {
    setactive(4);
  };

  

  return (
    
   

    <Shoopdiv>

        <Shoopdiv1>
            <h1>Shop</h1>
            <p>Home/ <p>Shop</p></p>
            
        </Shoopdiv1>

      
        
  <Shoopdiv2 >

{ active != 4?
    <Shoopdiv3>
        
     <Shoopdivleft>
        <NestedList key={filterKey} uzatishClassify={setcheckedClassify}/>
     </Shoopdivleft>

     <Shoopdivleft1>
    <NestedList1 key={filterKey} onPriceChange={setPriceRange}/>
     </Shoopdivleft1>

     <Shoopdivleft>
        <NestedList3 key={filterKey} uzatishCategorie={setcheckedCategorie}/>
     </Shoopdivleft>

    <Shoopdivleft2>
     <RatingFilter key={filterKey} uzatishRatings={setSelectedRatings}/>
    </Shoopdivleft2>

   
    
    

    <Shoopdivleft2>
      <NestedList4/>
    </Shoopdivleft2>


    </Shoopdiv3> : " "  
  }
 
 
<Shoopdiv4>

      <Shoopdivright>

      <Shoopdivrightnav>
      <div style={{ display: "flex",
       gap: "20px",
       border: "solid 1px #D9D9D9",
       height: "56px", 
       alignItems: "center",
       borderRadius: "5px",
       padding: "18px 16px"
      }}>

  <img
    src={img}
    alt="icon"
    className="hover-icon"
    onClick={Handlemenu} />

  <img
    src={img1}
    alt="icon"
    className="hover-icon"
    onClick={HandleLmenu}
    />

  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="21"
    viewBox="0 0 20 21"
    className="hover-icon"
    onClick={HandleVmenu}
    >
  <rect x="0.000976562" y="0.0566406" width="5.45457" height="5.45457" fill="#D9D9D9"/>
  <rect x="7.27344" y="0.0566406" width="5.45457" height="5.45457" fill="#D9D9D9"/>
  <rect x="14.5469" y="0.0566406" width="5.45457" height="5.45457" fill="#D9D9D9"/>
  <rect x="0.000976562" y="7.32959" width="5.45457" height="5.45457" fill="#D9D9D9"/>
  <rect x="7.27344" y="7.32959" width="5.45457" height="5.45457" fill="#D9D9D9"/>
  <rect x="14.5469" y="7.32959" width="5.45457" height="5.45457" fill="#D9D9D9"/>
  <rect x="0.000976562" y="14.6021" width="5.45457" height="5.45457" fill="#D9D9D9"/>
  <rect x="7.27344" y="14.6021" width="5.45457" height="5.45457" fill="#D9D9D9"/>
  <rect x="14.5469" y="14.6021" width="5.45457" height="5.45457" fill="#D9D9D9"/>
  </svg>

  <img
    src={img3}
    alt="icon"
    className="hover-icon"
    onClick={HandleTmenu}
    />

</div>

<p>
  Showing 1-
  {active === 1  ? 4 : active === 2 ? 4 : active === 4 ? 16 : 12}{" "} {filteredData.length} of  result
</p>

      </Shoopdivrightnav>

      <Shoopdivrightnav1>
        <h1>Default Sorting</h1>
        <img src={img5} alt="icon" />
      </Shoopdivrightnav1>

      </Shoopdivright>

      <Shoopdivright1>
     
      {checkedClassify.length > 0 && (
        <span style={filterTagStyle}>
          Category: {checkedClassify.join(", ")}
        </span>
      )}

      {checkedCategorie.length > 0 && (
        <span style={filterTagStyle}>
          Classify: {checkedCategorie.join(", ")}
        </span>
      )}

      {selectedRatings.length > 0 && (
        <span style={filterTagStyle}>
          Rating: {selectedRatings.join(", ")} ⭐
        </span>
      )}

      {priceRange[0] !== 10 || priceRange[1] !== 10000 ? (
        <span style={filterTagStyle}>
          Price: ${priceRange[0]} - ${priceRange[1]}
        </span>
      ) : null}

<button
          onClick={clearFilters}
         
        >
          <p>Clear All</p>
        </button>
    
      </Shoopdivright1>

{ active==1? 
  <Shoponecomponent checkedClassify={checkedClassify} priceRange={priceRange} checkedCategorie={checkedCategorie} selectedRatings={selectedRatings} onFilterChange={handleFilterChange}/> 
  :active==2? <Shopthu checkedClassify={checkedClassify} priceRange={priceRange} checkedCategorie={checkedCategorie} selectedRatings={selectedRatings} onFilterChange={handleFilterChange}/> 
   : active==3? <Shopthre  checkedClassify={checkedClassify} priceRange={priceRange} checkedCategorie={checkedCategorie} selectedRatings={selectedRatings} onFilterChange={handleFilterChange}/> : <Shopninecomponent/>}



      

    </Shoopdiv4>



</Shoopdiv2>

</Shoopdiv>


   )
   
}
export default Shopcomponent