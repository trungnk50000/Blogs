"use client";

import clsx from "clsx";
import { useSelectedLayoutSegment } from "next/navigation";
import { ComponentProps } from "react";
import type { pathnames } from "@/config";
import { Link } from "@/navigation";

export default function NavigationLink<
  Pathname extends keyof typeof pathnames,
>({ href, ...rest }: ComponentProps<typeof Link<Pathname>>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
  const isActive = pathname === href;

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      className={clsx(
        "inline-block px-2 py-3 transition-colors text-sm font-medium capitalize xl:text-lg",
        isActive ? "text-primary" : "text-[#75787e]"
      )}
      href={href}
      {...rest}
    />
  );
}
