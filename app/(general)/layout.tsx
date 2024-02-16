import { Navbar } from "@/components";

export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
    <Navbar/>
    <main className="h-screen flex flex-col justify-center items-center ">
         <h1 className="text-black w-full">LAYOUT</h1>
         {children}
    </main>
    </>
  );
}