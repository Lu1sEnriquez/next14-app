import { CartCounter } from "@/shopping-cart/components";


export const metadata = {
 title: 'Shopping Cart',
 description: 'un simple contador',
};
function CounterPage() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <span>Productos en el carrito</span>
     <CartCounter value={10}></CartCounter>
    </div>
  );
}

export default CounterPage;
