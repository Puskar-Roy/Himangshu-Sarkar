"use client";

import React from "react";
import { Button } from "./ui/button";
import { FaAddressCard } from "react-icons/fa";
import { useRouter } from "next/navigation";

interface ActionButtonProps {
  actionText: string;
}

export default function ActionButton({ actionText }: ActionButtonProps) {
  const router = useRouter();

  function navigateTo(path: string) {
    router.push(path);
  }
  return (
    <Button onClick={() => navigateTo("/#contact")}>
      <FaAddressCard className="mr-2 h-4 w-4" />
      {actionText}
    </Button>
  );
}
