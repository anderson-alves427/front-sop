import { ReactNode } from "react";

interface LayoutDefaultFunctionProps {
  children: ReactNode;
}

export default function LayoutDefaultFunction({
  children,
}: LayoutDefaultFunctionProps) {
  return (
    <div className="bg-white shadow-md rounded-lg py-3 px-2">
      <div className="flex justify-between">{children}</div>
    </div>
  );
}
