import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/authOptions";
const LogoComponent = async () => {
  const session = await getServerSession(authOptions)
  return (
    <div className="mb-5 relative z-20">
      <h1 className="text-3xl text-center truncate mx-auto max-w-[250px] lg:max-w-[800px]">
        {session?.user?.name || session?.user?.email || '133_Family'}
      </h1>
    </div>
  );
};

export default LogoComponent;