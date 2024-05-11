import React from "react";
import Link from "next/link";
import RemoveFavoriteItem from "@/app/components/RemoveFavoriteItem";

const FavoriteItem = ({item}) => {

  return (
    <div
      className="aspect-square bg-slate-800 rounded-3xl hover:shadow-lg hover:shadow-cyan-500/50 px-2 py-4 flex flex-col justify-between overflow-hidden relative group">
      <div className="text-6xl text-center">{item.icon}</div>
      <div className="font-bold text-center">{item.title}</div>
      <div className="truncate text-left text-sm text-gray-400"
           dir="ltr">{item.url}
      </div>
      <Link href={item.url}
            className="absolute left-0 top-0 w-full h-full" />
    <RemoveFavoriteItem id={item.id}/>
    </div>
  );
};

export default FavoriteItem;