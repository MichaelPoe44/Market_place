"use client";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from "next/link";
import { useStateValue } from "./StateProvider.js";
import {auth} from "./firebase.js"





export default function Header() {
    const {state, dispatch} = useStateValue();

    const handleAuthentication = () => {
        if (state.user){
            auth.signOut();
        }
    }



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
                <Link  href={state.user ? "/" : "/login"}>
                    <div onClick={handleAuthentication} className="header_option">
                        <span className="header_optionLineOne">
                            Hello {state.user ? state.user.email : "Guest"}
                        </span>
                    
                        <span className="header_optionLineTwo">{state.user ?
                         "Sign Out" : "Sign In"}
                        </span>
                        
                    </div>
                </Link>


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