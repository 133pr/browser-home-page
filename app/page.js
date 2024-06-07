import SearchComponent from "@/app/components/SearchComponent";
import LogoComponent from "@/app/components/LogoComponent";
import FavoritesComponent from "@/app/components/FavoritesComponent";
import PassedComponent from "@/app/components/PassedComponent";
import { cookies } from "next/headers";

export default async function Home() {
  const passed = await fetch(`${process.env.API_URL}/api/passed`, {
    headers: {
      Cookie: cookies()
    }
  })
    .then(async (r) => await r.json());

  return (
    <>
      <main className="xl:container p-5 lg:p-10 h-screen">
        <LogoComponent />
        <SearchComponent />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-5 lg:gap-x-5 mt-5">
          <FavoritesComponent />
          <PassedComponent item={passed.item} />
        </div>
      </main>
    </>
  );
}
