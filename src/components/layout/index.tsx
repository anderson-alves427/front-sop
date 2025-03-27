import { Tooltip } from "antd";
import Link from "next/link";
import { ReactNode } from "react";
import { GrHomeRounded } from "react-icons/gr";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen w-screen">
      <header className="h-[10%] bg-blue-950 shadow-md flex justify-between items-center px-8 text-gray-100">
        <h1 className="font-semibold">Sistema Sop</h1>
        <Tooltip title="Início">
          <Link href="/">
            <GrHomeRounded size={20} />
          </Link>
        </Tooltip>
      </header>
      <div className="h-[90%] p-6">{children}</div>
    </div>
  );
}
