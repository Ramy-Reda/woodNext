import { useRef } from "react";
import { useEffect } from "react";
import index from "../styles/index.module.css";
import Link from "next/link";

export default function Nav() {
    const nav = useRef();

    console.log(nav.current);

    useEffect(() => {
        window.onscroll = () => {
            if (window.scrollY) {
                nav.current.style.background = "#ecfdff";
                nav.current.style.
                boxShadow = " 0 0 3px rgba(0, 0, 0, 0.5)";
            } else if (window.scrollY == 0) {
                nav.current.style.background = "transparent";
                nav.current.style.
                boxShadow = "none";
            }
        }
    },[]);

    return (
        <div className={index.container_fluid}>
            <div className={index.container}>
                <div ref={nav} className={index.nav}>
                    <div className={index.arro}>
                        Ramy Reda.
                    </div>
                    <div className={index.linkes}>
                        <ul>
                            <li>
                                <Link href="/"> Home </Link>
                            </li>
                            <li  className={index.hideShop}>
                                <Link href="/Shop"> Shop <i className="fa-solid fa-caret-down"></i> </Link>
                                <div className={index.box}>
                                    <Link href="ShopCatogery"> Shop Catogery</Link>
                                    <Link href="ProductDetails"> Product Details</Link>
                                </div>
                            </li>
                            <li  className={index.hidepage}>
                                <Link href="/Pages"> Pages <i className="fa-solid fa-caret-down"></i>  </Link>
                                <div className={index.box}>
                                    <Link href="Pages/Login"> Login</Link>
                                    <Link href="Pages/Tracking"> Tracking</Link>
                                    <Link href="Pages/ProductCheckOut"> Product Check Out</Link>
                                    <Link href="Pages/ShopingCart">Shoping Cart</Link>
                                    <Link href="Pages/confermation">confermation</Link>
                                    <Link href="Pages/Elements">Elements</Link>
                                </div>
                            </li>
                            <li className={index.hideBlog}>
                                <Link href="/Bolg"> Bolg <i className="fa-solid fa-caret-down"></i> </Link>
                                <div className={index.box}>
                                    <Link href="Bolg/BlogPage">Blog</Link>
                                    <Link href="Bolg/Single Blog">SingleBlog</Link>
                                </div>
                            </li>
                            <li>
                                <Link href="/Contact"> Contact </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={index.helps}>
                        <span><i className="fa-solid fa-magnifying-glass"></i></span>
                        <span><i className="fa-regular fa-heart"></i></span>
                        <span className={index.buyNum}><i className="fa-solid fa-cart-shopping"></i>
                            <p>20</p>
                        </span>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    )
}
