import Image from "next/image";
import SearchComponent from "@/app/components/SearchComponent";
import LogoComponent from "@/app/components/LogoComponent";
import FavoritesComponent from "@/app/components/FavoritesComponent";

export default function Home() {
  return (
    <main className="xl:container p-5 lg:p-10 h-screen">
        <LogoComponent/>
        <SearchComponent/>
        <FavoritesComponent/>
    </main>
  );
}
