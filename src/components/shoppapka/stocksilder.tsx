const StockSlider = ({ totalQuantity, stock }: { totalQuantity: number; stock: number }) => {
    if (stock === 0) {
      return <h4>Not Sold</h4>;
    }
  
    return (
      <div>
        
       
        <p>Hurry! Only <h4> {stock} </h4> left in Stock</p>
          
        
        
        <div style={{ width: "697px", height: "20px", background: "#ccc", borderRadius: "10px", overflow: "hidden", marginTop: "10px" }}>
          <div
            style={{
              width: `${(stock / totalQuantity) * 100}%`, 
              height: "100%",
              background: "#FFC12B",
              transition: "width 0.5s ease-in-out",
            }}
          ></div>
        </div>
      </div>
    );
  };
  
  export default StockSlider;
  
  

