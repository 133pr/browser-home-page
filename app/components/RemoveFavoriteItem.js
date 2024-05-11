"use client"
import { AiFillCheckCircle, AiFillDelete } from "react-icons/ai";
import { useRouter } from "next/navigation";

const RemoveFavoriteItem = ({id}) => {
  const router = useRouter()

  const onSubmit = async () => {
    await fetch("/api/favorites/" + id, {
      method: "delete",
    });
    router.refresh()
  };
  return (
    <div className="absolute left-4 top-4 cursor-pointer opacity-0 group-hover:opacity-100" onClick={onSubmit}>
      <AiFillDelete className="fill-red-600 text-2xl hover:text-3xl" />
    </div>
  );
};

export default RemoveFavoriteItem;