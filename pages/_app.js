// import Navbar from "@/components/navbar";
// import Cart from "@/components/cart";
// import "@/styles/globals.css";
// import Footer from "@/components/footer";

// export default function App({ Component, pageProps }) {
//   return 
//   <>
//   <Navbar />
//   <Component {...pageProps} />;
//   <Cart />
//   <Footer />
//   </>
// }


import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import Services from "@/components/services";
import CART from '@/components/cart'
import Footer from "@/components/footer";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Component {...pageProps} />
        {/* <LogoCarousel />
        <Services />
        <Slider /> */}
      {router.pathname === "/" && (
          <>
            {/* <LogoCarousel /> */}
          <CART />
            
            {/* <Services /> */}
            
            
          </>
        )}
      
      </main>
      
      <Footer />
    </div>
  );
}
