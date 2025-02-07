"use client";
import Main from "@/components/Main";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function Home() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("accessToken")) {
      router.push("/dashboard");
    }
  }, []);

  return (
    <div>
      <Main />
    </div>
  );
}

export default Home;
