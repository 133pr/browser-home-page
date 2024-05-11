import {Vazirmatn} from "next/font/google";
import "./globals.css";
import AuthProvider from "@/app/auth/Provider";

const vazir = Vazirmatn({subsets: ["latin"]});

export const metadata = {
    title: {
        template: 'New Tab | %s',
        default: 'New Tab'
    },
    description: "every thing you want it.",
};

export default function RootLayout({children}) {
    return (<html lang="fa" dir={"rtl"}>
    <body className={`${vazir.className} bg-slate-950`}>
    <AuthProvider>
        {children}
    </AuthProvider>
    </body>
    </html>);
}
