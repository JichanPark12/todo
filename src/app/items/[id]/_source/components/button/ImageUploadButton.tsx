"use client";

import PlusIcon from "@/components/icon/PlusIcon";

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ImageUploadButton = ({ onChange }: Props) => {
  return (
    <label className="w-[64px] h-[64px] rounded-full flex items-center justify-center bg-slate-2 cursor-pointer">
      <input
        type="file"
        className="hidden"
        aria-hidden="true"
        onChange={onChange}
      />
      <PlusIcon width={17} height={17} stroke="slate-5" />
    </label>
  );
};

export default ImageUploadButton;
