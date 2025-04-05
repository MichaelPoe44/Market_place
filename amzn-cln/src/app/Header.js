"use client";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from "next/link";
import { useStateValue } from "./StateProvider.js";



export default function Header() {
    const {state, dispatch} = useStateValue();





    return(
        <div className="header">
            <Link href="/">
                <img
                className="header_logo"
                src="white_amazon.png"
                />                
            </Link>


            <div className="header_search">
                <input className="header_searchInput" type="text"/>
                <SearchIcon className="header_searchIcon" />
            </div>



            <div className="header_nav">
                <div className="header_option">
                    <span className="header_optionLineOne">
                        Hello Guest </span>
                    
                    <span className="header_optionLineTwo">
                        Sign In</span>
                        
                </div>


                <div className="header_option">
                    <span className="header_optionLineOne">
                        Returns </span>
                    
                    <span className="header_optionLineTwo">
                        & Orders</span>

                </div>
        
                <div className="header_option">
                    <span className="header_optionLineOne">
                        Your </span>
                    
                    <span className="header_optionLineTwo">
                        Prime</span>

                </div>

                

                <Link href="/checkout">
                    <div className="header_optionBasket">
                            <ShoppingCartIcon />
                        <span className="header_optionLineTwo
                        header_basketCount">{state.basket?.length}</span>
                        
                    </div>
                </Link>
                
            </div>





        </div>
    )
}