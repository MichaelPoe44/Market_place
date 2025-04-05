
import "./Home.css";
import Product from "./Product.js";



export default function Home(){
    return (      
        <div className="home">
        
            <div className="home_container">
                <img
                alt="Fast, free shipping
                Unlimited streaming & more
                Join Prime"
                className="home_image"
                src="amazon_background.jpg"
                />


            <div className="home_row">
                <Product
                    id="1946483"
                    title="Game of Thrones" 
                    price={19.99}
                    image="GOT_cover.jpeg"
                    rating={4}
                />
                <Product 
                    id="5789970"
                    title={"Frigidaire 5 in 1 Large Air Fryer Toaster Oven Combo - 12.6 Qt Total Capacity, 3.7 Qt Basket - 7 Preprogrammed Recipes, Airfryer Accessories Included, Black"}
                    price={74.99}
                    image={"Air_fryer.webp"}
                    rating={2}
                />
            </div>
            <div className="home_row">
                <Product 
                    id="0295725"
                    title={"Apple Watch Series 7 (GPS, 41mm) Starlight Aluminum Case with Starlight Sport Band, Regular"}
                    price={299.99}
                    image={"Applewatch.webp"}
                    rating={3}
                />
                <Product 
                    id="7970961"
                    title={"Apple AirPods 4 Wireless Earbuds, Bluetooth Headphones, Personalized Spatial Audio, Sweat and Water Resistant, USB-C Charging Case, H2 Chip, Up to 30 Hours of Battery Life"}
                    price={117.00}
                    image={"Airpods.webp"}
                    rating={1}
                />
                <Product 
                    id="2219721"
                    title={"ASICS Men's Gel-Excite 10 Running Shoes"}
                    price={85.00}
                    image={"Shoes.webp"}
                    rating={2}
                />
            </div>
            <div className="home_row">
                <Product
                    id="3022464"
                    title={"SAMSUNG 49\" Odyssey QD-OLED (G93SC) Series Curved Gaming Monitor, 240Hz, 0.03ms,Dual QHD,DisplayHDR True Black 400,AMD FreeSync Premium Pro,Height Adjustable Stand"}
                    price={1599.99}
                    image={"Monitor.webp"}
                    rating={5}
                />
            </div>



            </div>
        </div>
    )}
