"use client";
import {useRouter} from "next/navigation";
import googleIcon from "@/public/google.svg";
import Image from "next/image";

const SearchComponent = () => {
    const router = useRouter();
    const onSubmit = (e) => {
        e.preventDefault();
        const search = e.target[0].value;
        router.push(`https://www.google.com/search?q=${search}`);
    };
    return (
        <form onSubmit={onSubmit} className="bg-slate-900 py-10 px-5 rounded-3xl shadow-lg">
            <label htmlFor="google_search" className="relative">
                <div className="flex rounded-full py-3 px-5 bg-slate-800 gap-2">
                    <input className={`flex-1 bg-slate-500 pr-10 rounded-full placeholder:text-white text-white`} name="google_search" id="google_search" placeholder="جستجو در گوگل"/>
                    <button className="text-white px-4 py-2 hover:bg-slate-900 rounded-full hover:shadow-md hover:shadow-cyan-500/50">جستجو</button>
                </div>
                <div className="flex gap-2 mb-2 absolute right-7 top-1/2 -translate-y-1/2">
                    <Image src={googleIcon} alt={""}/>
                </div>
            </label>
        </form>
    );
};

export default SearchComponent;