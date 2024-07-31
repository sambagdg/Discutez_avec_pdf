import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { FilePlus } from "lucide-react";

function Header() {
  return (
    <div className="flex items-center justify-between bg-gradient-to-br from-white to-indigo-100/50 shadow-sm p-5 border-b">
      <Link
        href="/dashboard"
        className="text-2xl"
      >
        Chat avec <span className="text-blue-600">PDF</span>
      </Link>

      <SignedIn>
        <div className="flex items-center justify-center space-x-3">
          <Button
            asChild
            variant="link"
            className="hidden md:flex"
          >
            <Link href="/dashboard/upgrade">Mise à niveau</Link>
          </Button>
          <Button
            asChild
            variant="outline"
          >
            <Link href="/dashboard">Mes documents</Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-blue-600"
          >
            <Link href="/dashboard/upload">
              <FilePlus className="text-blue-600" />
            </Link>
          </Button>

          <UserButton />
        </div>
      </SignedIn>
    </div>
  );
}

export default Header;
