"use client";
import { BsX } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";

const SettingModal = ({ closeModal, data }) => {
  const [showEmoji, setShowEmoji] = useState(-1);
  const router = useRouter();
  const session = useSession();
  const submit = (form) => {
    form.preventDefault();
    let item = {};
    const elements = document.getElementById("setting-form").elements;
    for (const element of elements) {
      switch (element.tagName) {
        case "INPUT":
          item = {
            ...item,
            [element.name]: element.value,
          };
          break;
        default:
          break;
      }
    }
    fetch("/api/settings/", {
      method: "post",
      body: JSON.stringify(item),
    }).then(async (res) => {
      await session.update({ name: item.user_name });
      router.refresh();
      closeModal();
    });
  };

  const convertDateTimeLocal = (date) => {
    return `${new Date(date).getFullYear()}-${`${
      new Date(date).getMonth() + 1
    }`.padStart(2, 0)}-${`${new Date(date).getDate()}`.padStart(
      2,
      0,
    )}T${`${new Date(date).getHours()}`.padStart(
      2,
      0,
    )}:${`${new Date(date).getMinutes()}`.padStart(2, 0)}`;
  };

  const formItems = [
    {
      label: "عمومی",
      type: "hr",
    },
    {
      label: "نام نمایشی",
      defaultValue: data?.user?.name,
      name: "user_name",
      type: "text",
    },
    {
      label: "چی گذشته",
      type: "hr",
    },
    {
      label: "عنوان",
      defaultValue: data?.passed?.title,
      name: "passed_title",
      type: "text",
    },
    {
      label: "زمان",
      defaultValue: convertDateTimeLocal(data?.passed?.date),
      name: "passed_time",
      type: "datetime-local",
    },
    {
      label: "آیکن",
      defaultValue: data?.passed?.icon,
      name: "passed_icon",
      type: "emoji",
    },
  ];

  return (
    <div className="fixed right-0 top-0 w-full h-full flex items-center justify-center bg-black/40 z-50 drop-shadow-xl">
      <div className="bg-slate-900 py-10 px-5 rounded-3xl shadow-lg w-full lg:w-2/3 relative group">
        <div>
          <h3 className="text-center text-2xl mb-5">تنظیمات</h3>
          <span
            className="absolute right-5 top-5 hover:scale-110 opacity-0 group-hover:opacity-100"
            role="button"
            onClick={closeModal}
          >
            <BsX size={24} />
          </span>
        </div>
        <form id="setting-form" onSubmit={submit} method="POST">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-8">
            {formItems.map((item, index) => {
              if (item.type === "emoji") {
                return (
                  <div key={item.name} onFocus={() => setShowEmoji(index)}>
                    <label className="mb-2">{item.label}</label>
                    <input
                      className="px-2 py-3 w-full text-center"
                      defaultValue={item.defaultValue}
                      name={item.name}
                      type={item.type}
                    />
                    <EmojiPicker
                      open={showEmoji === index}
                      theme={"dark"}
                      onEmojiClick={(emoji) => {
                        document.getElementsByName(item.name)[0].value =
                          emoji.emoji;
                        setShowEmoji(-1);
                      }}
                      searchDisabled={true}
                      skinTonesDisabled={true}
                    />
                  </div>
                );
              } else if (item.type === "hr") {
                return (
                  <div
                    key={index}
                    className="col-span-full flex flex-row items-center gap-5"
                  >
                    <hr key={index} className="flex-1" />
                    <span className="mx-auto min-w-24 text-center text-xl">{item.label}</span>
                    <hr key={index} className="flex-1" />
                  </div>
                );
              } else {
                return (
                  <div key={item.name}>
                    <label className="mb-2">{item.label}</label>
                    <input
                      className="px-2 py-3 w-full text-center"
                      defaultValue={item.defaultValue}
                      name={item.name}
                      type={item.type}
                    />
                  </div>
                );
              }
            })}
          </div>
          <div className="mt-10 text-left">
            <button className="px-4 py-2 hover:bg-slate-900 rounded-full shadow-md shadow-cyan-500/50 hover:shadow-inner">
              ذخیره
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SettingModal;
