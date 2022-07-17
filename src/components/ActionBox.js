import { GithubButton } from "./GithubButton";
import { SignOut } from "./SignOut";
import { useSession } from "next-auth/react";
import { MintButton } from "./Mint";
import { useEffect } from "react";
export const ActionBox = () => {
  const { data: session } = useSession();
  useEffect(() => {
    console.log(session);
  }, [session]);
  return (
    <div className="flex items-center justify-center my-8 border-2 border-black rounded-lg dark:border-white md:ml-8 h-80 w-80 md:h-96">
      {!session && <GithubButton />}
      {session && (
        <div className="flex flex-col items-center justify-between h-full p-4">
          <div className="text-center">
            <p className="mb-4 text-lg text-center">
              Welcome, <strong>{session.user.name}</strong>
            </p>
            <p className="font-mono text-sm">
              You can mint ILOS tokens by clicking the button below. Remember
              you can only mint ILOS tokens once. Also, you are required to be
              on Polygon Testnet.
            </p>
          </div>
          <div>
            <MintButton />
            <SignOut />
          </div>
        </div>
      )}
    </div>
  );
};
