import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen w-screen">
      <header className="h-[10%] bg-sky-800 shadow-md flex justify-between items-center px-8 text-gray-100">
        <h1 className="font-semibold">Sistema Sop</h1>
        <div>Icone</div>
      </header>
      <div className="h-[90%] p-6">{children}</div>
    </div>
  );
}
