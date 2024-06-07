import { Vazirmatn } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/app/auth/Provider";
import SettingsComponent from "@/app/components/SettingsComponent";
import { cookies } from "next/headers";

const vazir = Vazirmatn({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "New Tab | %s",
    default: "New Tab",
  },
  description: "every thing you want it.",
};

export default async function RootLayout({ children }) {
  const { items, error } = await fetch(`${process.env.API_URL}/api/settings`, {
    headers: {
      Cookie: cookies()
    }
  })
    .then(async (r) => await r.json())
    .catch(r => {
      return {
        user: {
          name: "",
        },
        passed: {
          title: "",
          icon: "",
          date: new Date(),
        },
      }
    })


  return (
    <html lang="fa" dir={"rtl"}>
    <body className={`${vazir.className} bg-slate-950`}>
    <AuthProvider>
      <SettingsComponent data={items}/>
      {children}
    </AuthProvider>
    </body>
    </html>
  );
}
