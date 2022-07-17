import { signOut } from "next-auth/react";

export const SignOut = () => {
  return (
    <button
      onClick={async () => await signOut()}
      className="flex items-center justify-center w-64 py-1 text-white bg-black rounded-md dark:bg-white dark:text-black"
    >
      <p>Sign Out</p>
    </button>
  );
};
