import { GithubButton } from "./GithubButton";
import { useSession } from "next-auth/react";
export const ActionBox = () => {
  const { data: session } = useSession();
  return (
    <div className="flex items-center justify-center my-8 border-2 border-black rounded-lg dark:border-white md:ml-8 h-80 w-80 md:h-96">
      {!session && <GithubButton />}
    </div>
  );
};
