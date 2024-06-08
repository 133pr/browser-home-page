"use client";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import { AiFillCheckCircle, AiFillPlusSquare, AiFillX } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { BiSolidXCircle } from "react-icons/bi";
import EmojiModal from "@/app/components/EmojiModal";

const AddFavorite = () => {
  const [edit, setEdit] = useState(false);
  const [open, setOpen] = useState(false);
  const [emoji, setEmoji] = useState("🧐");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const router = useRouter();
  const handleEmojiSelect = (em) => {
    setEmoji(em);
  };

  const handleChangeName = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeUrl = (e) => {
    setUrl(e.target.value);
  };

  const onSubmit = async () => {
    const item = {
      icon: emoji,
      url,
      title,
    };
    await fetch("/api/favorites", {
      method: "post",
      body: JSON.stringify(item),
    }).then((res) => {

    });
    setEdit(false);
    router.refresh();
  };

  return (
    <div
      className="aspect-square bg-slate-800 rounded-3xl hover:shadow-lg hover:shadow-cyan-500/50 px-2 py-4 flex flex-col justify-between group relative">
      {edit && (
        <>
          <div className="text-4xl lg:text-6xl mx-auto lg:w-[60px] lg:h-[60px]">
            <span onClick={() => setOpen(true)}>{emoji}</span>
          </div>
          <input
            className="font-bold text-center h-8"
            onChange={handleChangeName}
            value={title}
            placeholder="عنوان سایت"
          />
          <input
            type="url"
            className="truncate text-left text-sm px-2 h-8"
            placeholder="https://"
            onChange={handleChangeUrl}
            value={url}
            dir="ltr"
          />
          <div
            className="absolute left-4 top-4 cursor-pointer lg:opacity-0 group-hover:opacity-100"
            onClick={onSubmit}
          >
            <AiFillCheckCircle className="fill-green-600 text-2xl hover:text-3xl" />
          </div>
          <div
            className="absolute right-4 top-4 cursor-pointer lg:opacity-0 group-hover:opacity-100"
            onClick={() => setEdit(false)}
          >
            <BiSolidXCircle className="fill-red-600 text-2xl hover:text-3xl" />
          </div>
        </>
      )}
      {!edit && (
        <>
          <div className="m-auto cursor-pointer" onClick={() => setEdit(true)}>
            <AiFillPlusSquare className="fill-slate-200 text-7xl" />
          </div>
        </>
      )}
        <EmojiModal handleEmojiSelect={handleEmojiSelect} open={open} setOpen={setOpen}/>
    </div>
  );
};

export default AddFavorite;
