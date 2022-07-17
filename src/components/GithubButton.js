import { signIn } from "next-auth/react";
export const GithubButton = () => {
  return (
    <button
      onClick={async () => await signIn()}
      className="flex items-center justify-center px-12 py-1 text-white bg-black rounded-md dark:bg-white dark:text-black"
    >
      <p>Sign In with GitHub</p>
    </button>
  );
};
