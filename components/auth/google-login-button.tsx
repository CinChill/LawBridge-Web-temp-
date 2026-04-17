"use client";

import { uiText } from "@/constants/ui-text";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export function GoogleLoginButton() {
  const router = useRouter();

  async function handleGoogleLogin() {
    try {
      await signInWithPopup(auth, googleProvider);
      router.replace("/dashboard");
    } catch (error) {
      console.error("Google login error:", error);
    }
  }

  return (
    <button
      type="button"
      onClick={handleGoogleLogin}
      className="inline-flex h-12 w-full items-center justify-center rounded-[10px] border border-[#E5E7EB] bg-white px-4 text-sm font-medium text-slate-700 shadow-sm outline-none transition-colors duration-200 hover:bg-[#F9FAFB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1]/20 focus-visible:ring-offset-2"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="mr-2.5 h-[18px] w-[18px]"
      >
        <path
          d="M21.805 10.023H12v3.955h5.61c-.242 1.27-.967 2.347-2.06 3.07v2.55h3.334c1.95-1.796 3.076-4.442 3.076-7.598 0-.66-.056-1.292-.155-1.977Z"
          fill="#4285F4"
        />
        <path
          d="M12 22c2.79 0 5.13-.924 6.84-2.502l-3.334-2.55c-.925.621-2.11.99-3.506.99-2.691 0-4.97-1.817-5.783-4.26H2.77v2.63A10.326 10.326 0 0 0 12 22Z"
          fill="#34A853"
        />
        <path
          d="M6.217 13.678A6.207 6.207 0 0 1 5.894 12c0-.582.116-1.143.323-1.678v-2.63H2.77A10.011 10.011 0 0 0 1.7 12c0 1.61.387 3.135 1.07 4.308l3.447-2.63Z"
          fill="#FBBC05"
        />
        <path
          d="M12 6.061c1.517 0 2.88.522 3.953 1.546l2.966-2.966C17.125 2.97 14.785 2 12 2A10.326 10.326 0 0 0 2.77 7.692l3.447 2.63C7.03 7.878 9.31 6.061 12 6.061Z"
          fill="#EA4335"
        />
      </svg>
      {uiText.auth.shared.googleContinue}
    </button>
  );
}
