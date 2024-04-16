import Image from "next/image";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full bg-slate-100">
      <main className="pt-10">{children}</main>
    </div>
  );
}
