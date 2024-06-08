"use client";
import {useRouter} from "next/navigation";
import googleIcon from "@/public/google.svg";
import Image from "next/image";
import { IoIosSearch } from "react-icons/io";

const SearchComponent = () => {
    const router = useRouter();
    const onSubmit = (e) => {
        e.preventDefault();
        const search = e.target[0].value;
        router.push(`https://www.google.com/search?q=${search}`);
    };
    return (
        <form onSubmit={onSubmit} className="bg-slate-900 py-10 px-3 lg:px-5 rounded-3xl shadow-lg overflow-hidden">
            <label htmlFor="google_search" className="relative">
                <div className="flex rounded-full py-3 px-2 lg:px-5 bg-slate-800 gap-2 max-w-full">
                    <input className={`flex-1 pr-10`} name="google_search" id="google_search" placeholder="جستجو در گوگل"/>
                    <button className="px-4 py-2 hover:bg-slate-900 rounded-full hover:shadow-md hover:shadow-cyan-500/50 hidden lg:inline">جستجو</button>
                    <button className="px-4 py-2 bg-slate-900 rounded-full shadow-md shadow-cyan-500/50 inline lg:hidden">
                        <IoIosSearch />
                    </button>
                </div>
                <div className="flex gap-2 mb-2 absolute right-4 lg:right-7 top-1/2 -translate-y-1/2">
                    <Image src={googleIcon} alt={""}/>
                </div>
            </label>
        </form>
    );
};

export default SearchComponent;