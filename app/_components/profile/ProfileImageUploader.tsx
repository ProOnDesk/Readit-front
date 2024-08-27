import { useUpdateAvatar } from "@/app/_hooks/useUpdateAvatar";
import { useUpdateUserBgImage } from "@/app/_hooks/useUpdateUserBgImage";
import { User } from "@/app/_redux/features/authApiSlice";
import { ChangeEvent, useRef, useState } from "react";
import toast from "react-hot-toast";
import { IoImagesOutline } from "react-icons/io5";

interface ProfileImageUploaderProps {
  uploadFor: "profile" | "background";
  user: User | undefined;
}

function ProfileImageUploader({ uploadFor, user }: ProfileImageUploaderProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [imageSrc, setImageSrc] = useState(user?.background_image || "");
  const [imageBgSrc, setImageBgSrc] = useState(user?.avatar || "");
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const types = ["PNG", "JPG", "JPEG", "GIF"];
  const { updateUserHookFn } = useUpdateAvatar();
  const { updateUserBgImageHookFn } = useUpdateUserBgImage();

  function handleFile(e: ChangeEvent<HTMLInputElement>) {
    const fileObj = e.target.files?.[0];
    const fileExtension = fileObj?.type.split("/")[1].toUpperCase();

    if (fileObj && types.includes(fileExtension!)) {
      setFile(fileObj);
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        if (uploadFor === "background") {
          setImageBgSrc(result);
          updateUserBgImageHookFn({ img: fileObj });
        } else {
          setImageSrc(result);
          updateUserHookFn({ avatar: fileObj });
        }
      };
      reader.readAsDataURL(fileObj);

      if (inputRef.current) {
        inputRef.current.value = "";
      }
    } else {
      toast.error("Zły typ pliku.");
    }
  }

  return (
    <div
      className={`flex items-center overflow-hidden justify-center w-full h-full ${
        uploadFor === "background" ? "" : "rounded-full"
      }`}
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
        {uploadFor === "background" ? (
          <img
            src={file ? imageBgSrc : user?.background_image || imageBgSrc}
            alt={`${user?.first_name} ${user?.last_name}`}
            className="w-full h-full object-cover object-center"
          />
        ) : (
          <img
            src={file ? imageSrc : user?.avatar || imageSrc}
            alt={`${user?.first_name} ${user?.last_name}`}
            className="w-full h-full object-cover object-center"
          />
        )}
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

export default ProfileImageUploader;
