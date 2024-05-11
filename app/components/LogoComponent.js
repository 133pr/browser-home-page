import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/authOptions";
const LogoComponent = async () => {
  const session = await getServerSession(authOptions)

  return (
    <div className="mb-5 relative z-20">
      <h1 className="text-3xl font-mono text-center" dir="ltr">
        {session?.user?.name || '133_Family'}
      </h1>
    </div>
  );
};

export default LogoComponent;