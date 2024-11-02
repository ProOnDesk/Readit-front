import Image from "next/image";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { IoImagesOutline } from "react-icons/io5";

interface ProfileImageUploaderProps {
  file: File | null;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
}

function CollectionsImageUploader({
  file,
  setFile,
}: ProfileImageUploaderProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [imageSrc, setImageSrc] = useState(
    file ? URL.createObjectURL(file) : ""
  );
  const inputRef = useRef<HTMLInputElement | null>(null);
  const types = ["PNG", "JPG", "JPEG"];

  async function handleFile(e: ChangeEvent<HTMLInputElement>) {
    const fileObjInput = e.target.files?.[0];
    const fileExtension = fileObjInput?.type.split("/")[1].toUpperCase();

    if (fileObjInput && types.includes(fileExtension!)) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setImageSrc(result);
        setFile(fileObjInput);
      };
      reader.readAsDataURL(fileObjInput);

      if (inputRef.current) {
        inputRef.current.value = "";
      }
    } else {
      toast.error("Zły typ pliku.");
    }
  }

  return (
    <div
      className={`flex items-center overflow-hidden justify-center w-full aspect-video my-8`}
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragOver(true);
      }}
      onDragLeave={() => {
        !file && setIsDragOver(false);
      }}
      onMouseEnter={() => setIsDragOver(true)}
      onMouseLeave={() => setIsDragOver(false)}
    >
      <label
        className={`relative overflow-hidden flex flex-col items-center justify-center w-full h-full cursor-pointer text-center duration-300 transition-colors  ${
          isDragOver ? "bg-blackSecond/5" : "bg-white"
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          onChange={handleFile}
        />
        <Image
          src={imageSrc || "/placeholder.png"}
          alt={"Zdjęcie zestawu"}
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover object-center"
        />
        <div
          className={`pointer-events-none absolute h-full w-full  flex justify-center items-center transition-all duration-300 ${
            isDragOver
              ? "opacity-100 bg-blackSecond/50"
              : "opacity-0 bg-transparent"
          }`}
        >
          <span className="text-mainGreenSecond h-2/3 w-full max-h-16">
            <IoImagesOutline className="w-full h-full" />
          </span>
        </div>
      </label>
    </div>
  );
}

export default CollectionsImageUploader;
