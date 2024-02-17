import Image from "next/image";
import { redirect } from "next/navigation";

export default function HomePage() {

  redirect("/dashboard/counter");

  return (
    <>
      <h1>HOLA MUNDO</h1>
    </>
  );
}
