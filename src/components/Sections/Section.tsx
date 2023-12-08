import { ReactNode, useState } from "react";

export interface SectionProps {
  children: ReactNode;
  title: string;
  header?: ReactNode;
  footer?: ReactNode;
}

export default function Section({
  children,
  title,
  header,
  footer,
}: SectionProps) {
  return (
    <div className="flex flex-col h-[50%] bg-white">
      <h1 className="p-2 text-black font-bold">{title}</h1>
      {header && <div className="">{header}</div>}
      <div className="flex-grow overflow-auto">{children}</div>
      {footer && <div className="">{footer}</div>}
    </div>
  );
}
