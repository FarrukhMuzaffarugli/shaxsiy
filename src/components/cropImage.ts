
interface CropOptions {
    rotation?: number;         // Rasmni aylantirish (graduslarda)
    flip?: { horizontal: boolean; vertical: boolean };  // Gorizontal/vertikal aylantirish
    format?: "image/jpeg" | "image/png";               // Format tanlash
    quality?: number;          // JPEG uchun sifat (0 - 1)
  }
  
  export default function getCroppedImg(
    imageSrc: string,
    pixelCrop: any,
    options: CropOptions = {}
  ): Promise<Blob> {
    const { rotation = 0, flip = { horizontal: false, vertical: false }, format = "image/jpeg", quality = 0.9 } = options;
  
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.crossOrigin = "anonymous"; // CORS xatolarini oldini olish
      image.src = imageSrc;
  
      image.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
  
        if (!ctx) {
          return reject(new Error("Canvas context not found"));
        }
  
        // Rasm o‘lchamini hisoblash
        const safeArea = Math.max(image.width, image.height) * 2;
  
        canvas.width = safeArea;
        canvas.height = safeArea;
  
        ctx.translate(safeArea / 2, safeArea / 2); // Rasm markazida aylantirish
        ctx.rotate((rotation * Math.PI) / 180);    // Gradusda aylantirish
  
        // Rasmni gorizontal va vertikal aylantirish
        ctx.scale(flip.horizontal ? -1 : 1, flip.vertical ? -1 : 1);
  
        ctx.drawImage(
          image,
          -image.width / 2,
          -image.height / 2
        );
  
        // Kesilgan rasm
        const croppedCanvas = document.createElement("canvas");
        const croppedCtx = croppedCanvas.getContext("2d");
  
        if (!croppedCtx) {
          return reject(new Error("Kesilgan canvas context topilmadi"));
        }
  
        croppedCanvas.width = pixelCrop.width;
        croppedCanvas.height = pixelCrop.height;
  
        croppedCtx.drawImage(
          canvas,
          pixelCrop.x,
          pixelCrop.y,
          pixelCrop.width,
          pixelCrop.height,
          0,
          0,
          pixelCrop.width,
          pixelCrop.height
        );
  
        // Kesilgan rasmni blobga o‘tkazish
        croppedCanvas.toBlob(
          (blob) => {
            if (!blob) {
              return reject(new Error("Blob yaratilmadi"));
            }
            resolve(blob);
          },
          format,
          quality
        );
      };
  
      image.onerror = () => reject(new Error("Rasm yuklanmadi"));
    });
  }
  