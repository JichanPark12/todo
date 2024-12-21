"use client";

import Image from "next/image";
import ImageUploadButton from "./button/ImageUploadButton";
import { useRef, useState } from "react";
import { link } from "@/api/link";

interface Props {
  imageUrl: string;
}

const TodoImage = ({ imageUrl }: Props) => {
  const [uploadImg, setUploadImg] = useState<string>(imageUrl);

  const imageUrlRef = useRef<HTMLInputElement>(null);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (!files) return;

    const file = files[0];
    const name = file.name.split(".")[0];

    if (!/^[a-zA-Z]+$/.test(name)) {
      alert("이미지 이름은 영어로만 이루어져야 합니다.");
      return;
    }

    if (!file.type.startsWith("image/")) {
      alert("이미지 파일만 업로드 가능합니다.");
      return;
    }

    console.log(file);
    const formData = new FormData();
    formData.append("image", file);

    const { url }: { url: string } = await fetch(`${link}/images/upload`, {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    setUploadImg(url);

    const imageInput = imageUrlRef.current;
    if (!imageInput) return;

    imageInput.value = url;
  };

  return (
    <div
      className={`${uploadImg ? "" : "border-dashed border-2"} md:w-[384px] h-[311px] w-full  rounded-2xl border-slate-3 relative flex items-center justify-center`}
    >
      <input type="text" name="imageUrl" className="hidden" ref={imageUrlRef} />
      {uploadImg ? (
        <Image
          src={uploadImg}
          alt="이미지 업로드 사진"
          fill={true}
          className="rounded-2xl"
        />
      ) : (
        <Image
          src={"/image/imageUpload.png"}
          alt="이미지 디폴트트"
          height={64}
          width={64}
        />
      )}
      <div className=" absolute bottom-[16px] right-[16px]">
        <ImageUploadButton onChange={handleImageChange} />
      </div>
    </div>
  );
};

export default TodoImage;
