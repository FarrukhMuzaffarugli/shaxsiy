import React, { useState, useCallback } from "react";
import axios from "axios";
import Cropper from "react-easy-crop";
import { Divider, UploadButton } from "./stylecomponent";
import getCroppedImg from "./cropImage"; 

const SearchPrescription: React.FC = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState<boolean>(false);
  const [comment, setComment] = useState<string>("");

  // Cropper state
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);

  // Fayl yuklash
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setUploadedFile(file);
      setPreviewUrl(URL.createObjectURL(file)); // Rasm preview
      setIsPreviewOpen(true); // Preview modalini ochish
    }
  };

  // Drag va Drop qo'llab-quvvatlash
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      const file = event.dataTransfer.files[0];
      setUploadedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setIsPreviewOpen(true);
    }
  };

  // Crop qilingan rasmni olish
  const onCropComplete = useCallback((_: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  // Rasmni kesib olish
  const handleCropImage = async () => {
    try {
      if (previewUrl && croppedAreaPixels) {
        const croppedImage = await getCroppedImg(previewUrl, croppedAreaPixels);
        const croppedFile = new File([croppedImage], "cropped_image.jpg", { type: "image/jpeg" });
        setUploadedFile(croppedFile);
        setPreviewUrl(URL.createObjectURL(croppedFile));
        setIsPreviewOpen(false);
      }
    } catch (error) {
      console.error("Kesishda xatolik:", error);
    }
  };

  // Yuklangan rasmni BEKOR QILISH
  const handleCancelUpload = () => {
    setUploadedFile(null);     // Yuklangan faylni tozalash
    setPreviewUrl(null);       // Preview URL-ni tozalash
    setIsPreviewOpen(false);   // Preview oynasini yopish
    setCrop({ x: 0, y: 0 });   // Crop parametrlarini tiklash
    setZoom(1);                // Zoomni tiklash
  };

  // Rasm va sharhni serverga yuborish
  const handleExport = async () => {
    if (!uploadedFile && comment.trim() === "") {
      alert("Rasm yoki sharh kiriting!");
      return;
    }

    const formData = new FormData();
    if (uploadedFile) {
      formData.append("file", uploadedFile);
    }
    if (comment.trim() !== "") {
      formData.append("comment", comment);
    }

    try {
      const response = await axios.post("https://your-server-endpoint/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Yuborildi:", response.data);
      alert("Muvaffaqiyatli yuborildi!");
    } catch (error) {
      console.error("Xatolik:", error);
      alert("Yuborishda xatolik.");
    }
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
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2
        style={{
          fontFamily: "Jost",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "var(--Primary-50, #FFC12B)",
          color: "#ffffff",
          width: "441px",
          height: "78px",
          borderRadius: "15px",
        }}
      >
        Search Prescription
      </h2>

      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        style={{
          border: "2px dashed #ddd",
          width: "291px",
          height: "123px",
          borderRadius: "5px",
          marginTop: "32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <input
          id="fileInput"
          type="file"
          accept="image/*,application/pdf"
          onChange={handleFileUpload}
          style={{ display: "none" }}
        />
        <label htmlFor="fileInput" style={{ cursor: "pointer" }}>
          {uploadedFile ? uploadedFile.name : "Upload a file"}
        </label>
      </div>

      <Divider>Or</Divider>

      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Export the picture Lorem ipsum dolor sit amet"
        style={{
          width: "392px",
          height: "61px",
          borderRadius: "5px",
          textAlign: "center",
        }}
      />

      <UploadButton onClick={handleExport} style={{ marginTop: "20px" }}>
        UPLOAD FILE
      </UploadButton>

      {isPreviewOpen && previewUrl && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div style={{ position: "relative", width: "500px", height: "500px" }}>
            <Cropper
              image={previewUrl}
              crop={crop}
              zoom={zoom}
              aspect={1}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />
            <button
              onClick={handleCropImage}
              style={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
                backgroundColor: "green",
                color: "white",
                padding: "10px 20px",
              }}
            >
              OK
            </button>
            <button
              onClick={handleCancelUpload}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                backgroundColor: "red",
                color: "white",
                padding: "10px 20px",
              }}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPrescription;



