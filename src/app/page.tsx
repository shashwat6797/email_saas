"use client";

import { Button } from "@/components/ui/button";

export default function Home() {
  const handleButton = async () => {
    console.log("fuck you");
  };
  return <Button onClick={handleButton}>Hello</Button>;
}
