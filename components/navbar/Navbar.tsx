import Link from "next/link";

export const Navbar = () => {

    console.log('Nabvar creado');
    
  return (
    <nav
      className="flex bg-blue-800 bg-opacity-30
    p-2 m-2 rounded "
    >
     <span>Home</span>   

    <div className=" flex flex-1">

    </div>
     <Link className="mr-2" href="/about">about</Link>
     <Link className="mr-2" href="/pricing">pricing</Link>
     <Link className="mr-2" href="/contact">contact</Link>
    </nav>
  );
};
