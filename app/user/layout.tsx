import React, { ReactNode } from "react";

interface getUserLayoutProps {
  children: ReactNode;
}

export default function UserLayout({ children }: getUserLayoutProps) {
  return <>{children}</>;
}
