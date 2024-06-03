"use client";
import { getCsrfToken, useSession, signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const CheckAuth = () => {
  const router = useRouter();
  const [csrfToken, setCsrfToken] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const { status, data: session } = useSession();
  const getCsrf = async () => {
    const token = await getCsrfToken();
    setCsrfToken(token);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await signIn("credentials", {
      redirect: false,
      callbackUrl: "/",
      email: email,
      password: password
    });
    router.refresh()
  };


  useEffect(() => {
    getCsrf();
  }, []);

  if (status === "unauthenticated") {
    return (<div className="w-screen h-screen fixed backdrop-blur flex items-center justify-center z-10">
      <div className={`bg-slate-700 w-[300px] aspect-square p-3 rounded-3xl shadow-md shadow-cyan-500/50`}>
        <form method="post" onSubmit={onSubmit}
              className="flex flex-col h-full justify-between">
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
          <div className="flex gap-3 flex-col">
            <label>
              ایمیل
              <input name="email" type="text" className={`w-full mt-2 py-2 px-2`} value={email} dir={'ltr'}
                     onChange={e => setEmail(e.target.value)} />
            </label>
            <label>
              رمزعبور
              <input name="password" type="password" className={`w-full mt-2 py-2 px-2`} value={password} dir={'ltr'}
                     onChange={e => setPassword(e.target.value)} />
            </label>
          </div>
          <button type="submit"
                  className="px-4 py-2 bg-slate-900 rounded-full hover:shadow-md hover:shadow-cyan-500/50">
            ورود
          </button>
        </form>
      </div>
    </div>);
  }

};

export default CheckAuth;