import AddFavorite from "@/app/components/AddFavorite";
import FavoriteItem from "@/app/components/FavoriteItem";
import { cookies } from "next/headers";

const FavoritesComponent = async () => {
  const { items, error } = await fetch(`${process.env.API_URL}/api/favorites`, {
    headers: {
      Cookie: cookies()
    }
  })
    .then(async (r) => await r.json());
  return (
    <div
      className="bg-slate-900 py-10 px-3 lg:px-5 rounded-3xl shadow-lg min-h-[60%] grid grid-cols-2 lg:grid-cols-4 gap-5 relative col-span-2 order-2 lg:order-1 mb-5 lg:mb-0">
      {
        items.map((item, i) => {
          return (
            <div key={i}>
              <FavoriteItem item={item} />
            </div>
          );
        })
      }
      {
        Array.apply(0, Array(8 - items.length)).map((item, i) => {
          return (
            <AddFavorite key={i}/>
          )
        })
      }
    </div>
  );
};

export default FavoritesComponent;
