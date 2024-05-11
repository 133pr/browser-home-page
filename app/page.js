import SearchComponent from "@/app/components/SearchComponent";
import LogoComponent from "@/app/components/LogoComponent";
import FavoritesComponent from "@/app/components/FavoritesComponent";
import PassedConponent from "@/app/components/PassedConponent";

export default function Home() {
  return (
    <main className="xl:container p-5 lg:p-10 h-screen">
      <LogoComponent />
      <SearchComponent />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-5 lg:gap-x-5 mt-5">
        <FavoritesComponent />
        <PassedConponent />
      </div>
    </main>
  );
}
