
import Header from "./Header.js";
import Home from "./Home.js";
import "./globals.css";

/**
 * todo
 * 
 * fix background image gradient
 * fix items image shrink on home
 */


export default async function Page() {
  return (

    <div className="Page">
      <Header/>
      <Home />
    </div>
    
  );
}
