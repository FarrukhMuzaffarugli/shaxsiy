import React, { useState } from "react";
import { Divider } from "./stylecomponent";

const SearchPrescription: React.FC = () => {

  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
//   const [searchQuery, setSearchQuery] = useState<string>("");


//   const handleSearch = () => {
//     if (!searchQuery) {
//       alert("Please enter a prescription or drug name!");
//       return;
//     }
//     console.log("Searching for:", searchQuery);
//   };

  
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setUploadedFile(event.target.files[0]);
      console.log("Uploaded file:", event.target.files[0]);
    }
  };

  
  const handleExport = () => {
    if (!uploadedFile) {
      alert("No file to export!");
      return;
    }
    console.log("Exporting file:", uploadedFile);
   
  };

  return (
    <div
      style={{
        width: "441px",
        height: "100%",
        backgroundColor: "#f9f9f9",
        borderRadius: "15px",
        margin: "20px auto",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        display: "flex",
        alignItems:"center",
        flexDirection: "column",
       
      }}
    >
     
      <h2
  style={{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    background: "var(--Primary-50, #FFC12B)", 
    color: "#ffffff", 
    width: "441px", 
    height: "78px", 
    flexShrink: 0, 
    borderRadius: "15px", 
  }}
>
        Search Prescription
      </h2>

     
      {/* <div>
        <input
          type="text"
          placeholder="Enter prescription or drug name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: "90%",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            marginBottom: "10px",
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </div> */}

      
      <div
        style={{
          border: "2px dashed #ddd",
          width: "291px",
         height: "123px",
          borderRadius: "5px",
          marginTop:"32px"
          
        }}
      >
       <input
  id="fileInput"
  type="file"
  accept="image/*,application/pdf"
  onChange={handleFileUpload}
  style={{ display: "none" }} // inputni yashirish
/>
<label
  htmlFor="fileInput"
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: "var(--Gray-Scale-70, #454545)", 
    fontFamily: "Jost, sans-serif", 
    fontSize: "20px", 
    fontStyle: "normal", 
    fontWeight: 500, 
    lineHeight: "28px", 
    letterSpacing: "0.03px", 
    borderRadius: "5px", 
    height:"123px",
  }}
>
  Upload a file
</label>
        
      </div>

      {/* Yuklash tugmasi */}

      < Divider>Or</Divider>
      <button
  onClick={handleExport}
  style={{
    width: "392px", 
    height: "61px", 
    flexShrink: 0,
    borderRadius: "5px", 
    cursor: "pointer", 
    border: "1px solid var(--Background-Elevation-Light-02, #CCC)",
    color: "var(--Gray-Scale-50, #727272)", 
    fontFamily: "Jost, sans-serif",
    fontSize: "14px", 
    fontStyle: "normal", 
    fontWeight: 400, 
    lineHeight: "20px",
    letterSpacing: "0.035px",
  }}
>
  Export the picture Lorem ipsum dolor sit amet
</button>


<button
  onClick={() => alert("File uploaded successfully!")}
  style={{
    marginTop: "27px",
    padding: "10px 20px",
    background: "var(--Gradient-color, linear-gradient(180deg, #8DC8FF 0%, #80B4FF 100%))", 
    boxShadow: "0px 6px 10px 0px rgba(121, 99, 104, 0.14)",
    color: "var(--Gray-Scale-0, #FFF)", 
    fontFamily: "Jost, sans-serif", 
    fontSize: "16px", 
    fontStyle: "normal",
    fontWeight: 600, 
    lineHeight: "24px", 
    letterSpacing: "0.08px", 
    textTransform: "uppercase",
    border: "none", 
    borderRadius: "66px", 
    cursor: "pointer", 
    width: "164px", 
    height: "56px", 
  }}
>
  UPLOAD FILE
</button>


     

    </div>
  );
};

export default SearchPrescription;