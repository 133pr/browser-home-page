import EmojiPicker from "emoji-picker-react";
import { useEffect, useState } from "react";
import { RxIconjarLogo } from "react-icons/rx";
import { BiX } from "react-icons/bi";

const EmojiModal = ({ open, handleEmojiSelect, setOpen, defaultValue }) => {
  const [selectedEmoji, setSelectedEmoji] = useState(defaultValue || "🧐");
  const [show, setShow] = useState(false);
  const handleEmojiClick = (emojiEvent) => {
    const emoji = emojiEvent.emoji;
    setSelectedEmoji(emoji);
    handleEmojiSelect(emoji);
    setOpen(false);
    setShow(false);
  };

  const handleClose = () => {
    handleEmojiSelect(selectedEmoji);
    setOpen(false);
    setShow(false);
  };

  useEffect(() => {
    if (open) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [open]);

  if (show)
    return (
      <div className="z-50 fixed left-0 top-0 w-full h-full bg-black/40 flex justify-center items-center">
        <div>
          <button onClick={handleClose}>
            <BiX size={34}/>
          </button>
          <EmojiPicker
            open={true}
            theme={"dark"}
            onEmojiClick={handleEmojiClick}
            searchDisabled={true}
            skinTonesDisabled={true}
            height={500}
            width={400}
          />
        </div>
      </div>
    );
};

export default EmojiModal;
