import { Bigconteyno } from "../stylecomponent";
import Catagoriyperson from "./personcatagoriy";
import { useState } from "react";

const Personalcomponent = () => {
  
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  
  const handleFilterSelect = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Bigconteyno>
        <Catagoriyperson
          activeFilter={activeCategory}
          onFilterSelect={handleFilterSelect}
          itemsPerPage={20} 
        />
      </Bigconteyno>
    </div>
  );
};

export default Personalcomponent;
