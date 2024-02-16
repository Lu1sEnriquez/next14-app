import { Metadata } from "next";



export const metadata: Metadata = {
 title: 'about my page',
 description: 'aqui se mirara acerca de mi pagina',

};

function page() {
  return (
    <div>ABOUT</div>
  )
}

export default page