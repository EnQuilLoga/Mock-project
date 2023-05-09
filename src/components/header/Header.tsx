import * as React from "react";
import junnoLogo from "../../assets/junno-logo.jpg";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import bannerSubmenu from "../../assets/custom_banner_submenu.jpg";

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  return (
    <header className="container mx-auto pt-7">
      <div className="header-pc hidden md:block">
        <div className="flex">
          <div className="logo grow-0 mr-8">
            <img src={junnoLogo} alt="logo" />
          </div>
          <div className="grow">
            <div className="flex items-center justify-between">
              <div className="search w-1/2 lg:w-4/6">
                <div className="flex">
                  <input
                    type="text"
                    id="first_name"
                    className="border border-gray-300 text-gray-900 text-sm rounded-l-md block w-full p-2.5 outline-none"
                    placeholder="Enter your search key..."
                  />
                  <button className="bg-red-500 px-5 py-2 rounded-r-md hover:bg-slate-800">
                    <i className="fas fa-search text-white"></i>
                  </button>
                </div>
              </div>
              <div className="contact flex items-center">
                <div className="call flex items-center lg:mx-8">
                  <div className="text-3xl mr-3">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <p className="font-light text-sm">Call Us:</p>
                    <a href="tel:(+123)456789" className="font-bold hover:text-red-500">
                      (+123)456789
                    </a>
                  </div>
                </div>
                <div className="flex md:gap-x-6">
                  <div className="cursor-pointer group">
                    <div className="relative">
                      <i className="fas fa-heart text-3xl group-hover:text-red-600"></i>
                      <span className="absolute text-white bg-red-500 w-5 h-5 text-center text-xs font-bold leading-5 bottom-0 -right-2 rounded-full">
                        0
                      </span>
                    </div>
                  </div>
                  <div className="cursor-pointer group">
                    <div className="relative">
                      <i className="fas fa-shopping-cart text-3xl group-hover:text-red-600"></i>
                      <span className="absolute text-white bg-red-500 w-5 h-5 text-center text-xs font-bold leading-5 bottom-0 -right-2 rounded-full">
                        0
                      </span>
                    </div>
                  </div>
                  <div className="cursor-pointer group">
                    <div className="relative">
                      <i className="fas fa-user text-3xl group-hover:text-red-600"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <nav>
              <ul className="flex items-center text-xs gap-x-3 lg:gap-x-5 lg:text-sm xl:gap-x-7 xl:text-base">
                <li className="hover:text-red-500 font-bold my-5">
                  <NavLink
                    to={"/"}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-red-500" : ""
                    }
                  >
                    HOME
                  </NavLink>
                </li>
                {/* nav1 */}
                <li className="group relative">
                  <div className="group-hover:text-red-500 font-bold py-5">
                    <NavLink
                      to={"bags-shoes"}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending " : isActive ? "text-red-500" : ""
                      }
                    >
                      BAGS & SHOES <i className="fas fa-angle-down text-xs"></i>
                    </NavLink>
                  </div>
                  <div className="bg-white text-gray-500 border absolute opacity-0 -z-10 translate-y-0 invisible transition ease-linear delay-300 group-hover:opacity-100 group-hover:visible group-hover:z-50 ">
                    <div>
                      <div>
                        <Link to={"shoes"} className="hover:text-red-500 font-bold text-black">
                          SHOES
                        </Link>
                        <ul>
                          <li className="hover:text-red-500">
                            <Link to={"women-shoes"}>Women Shoes</Link>
                          </li>
                          <li className="hover:text-red-500">
                            <Link to={"men-shoes"}>Men Shoes</Link>
                          </li>
                          <li className="hover:text-red-500">
                            <Link to={"boots"}>Boots</Link>
                          </li>
                          <li className="hover:text-red-500">
                            <Link to={"casual-shoes"}>Casual Shoes</Link>
                          </li>
                          <li className="hover:text-red-500">
                            <Link to={"flip-flops"}>Flip Flops</Link>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <Link
                          to={"luggage-bags"}
                          className="hover:text-red-500 font-bold text-black"
                        >
                          LUGGAGE & BAGS
                        </Link>
                        <ul>
                          <li className="hover:text-red-500">
                            <Link to={"stylish-backpacks"}>Stylish Backpacks</Link>
                          </li>
                          <li className="hover:text-red-500">
                            <Link to={"shoulder-bags"}>Shoulder Bags</Link>
                          </li>
                          <li className="hover:text-red-500">
                            <Link to={"crossbody-bags"}>Crossbody Bags</Link>
                          </li>
                          <li className="hover:text-red-500">
                            <Link to={"briefcases"}>Briefcases</Link>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <Link
                          to={"other-bags-accessories"}
                          className="hover:text-red-500 font-bold text-black"
                        >
                          OTHER BAGS & ACCESSORIES
                        </Link>
                        <ul>
                          <li className="hover:text-red-500">
                            <Link to={"cosmetic-bags-cases"}>Cosmetic Bags & Cases</Link>
                          </li>
                          <li className="hover:text-red-500">
                            <Link to={"wallets-card-holders"}>Wallets & Card Holders</Link>
                          </li>
                          <li className="hover:text-red-500">
                            <Link to={"luggage-covers"}>Luggage Covers</Link>
                          </li>
                          <li className="hover:text-red-500">
                            <Link to={"passport-covers"}>Passport Covers</Link>
                          </li>
                          <li className="hover:text-red-500">
                            <Link to={"bag-parts-accessories"}>Bag Parts & Accessories</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <img src={bannerSubmenu} alt="banner submenu" />
                    </div>
                  </div>
                </li>
                {/* end nav1 */}
                <li className="group relative">
                  <div className="group-hover:text-red-500 font-bold py-5">
                    <NavLink
                      to={"bags-shoes"}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending " : isActive ? "text-red-500" : ""
                      }
                    >
                      SHOES <i className="fas fa-angle-down text-xs"></i>
                    </NavLink>
                  </div>
                  <div className="bg-white text-gray-500 border absolute opacity-0 -z-10 translate-y-0 invisible transition ease-linear delay-300 group-hover:opacity-100 group-hover:visible group-hover:z-50">
                    <div>
                      <ul>
                        <li className="hover:text-red-500">
                          <Link to={"women-shoes"}>Women Shoes</Link>
                        </li>
                        <li className="hover:text-red-500">
                          <Link to={"men-shoes"}>Men Shoes</Link>
                        </li>
                        <li className="hover:text-red-500">
                          <Link to={"boots"}>Boots</Link>
                        </li>
                        <li className="hover:text-red-500">
                          <Link to={"casual-shoes"}>Casual Shoes</Link>
                        </li>
                        <li className="hover:text-red-500">
                          <Link to={"flip-flops"}>Flip Flops</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* end submenu */}
                </li>
                <li className="group relative">
                  <div className="group-hover:text-red-500 font-bold py-5">
                    <NavLink
                      to={"bags-shoes"}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending " : isActive ? "text-red-500" : ""
                      }
                    >
                      OTHER BAGS & ACCESSORIES <i className="fas fa-angle-down text-xs"></i>
                    </NavLink>
                  </div>
                  <div className="bg-white text-gray-500 border absolute opacity-0 -z-10 translate-y-0 invisible transition ease-linear delay-300 group-hover:opacity-100 group-hover:visible group-hover:z-50">
                    <div>
                      <ul>
                        <li className="hover:text-red-500">
                          <Link to={"cosmetic-bags-cases"}>Cosmetic Bags & Cases</Link>
                        </li>
                        <li className="hover:text-red-500">
                          <Link to={"wallets-card-holders"}>Wallets & Card Holders</Link>
                        </li>
                        <li className="hover:text-red-500">
                          <Link to={"luggage-covers"}>Luggage Covers</Link>
                        </li>
                        <li className="hover:text-red-500">
                          <Link to={"passport-covers"}>Passport Covers</Link>
                        </li>
                        <li className="hover:text-red-500">
                          <Link to={"bag-parts-accessories"}>Bag Parts & Accessories</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="hover:text-red-500 font-bold py-5">
                  <NavLink
                    to={"contact-us"}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-red-500" : ""
                    }
                  >
                    CONTACT US
                  </NavLink>
                </li>
                <li className="hover:text-red-500 font-bold py-5">
                  <NavLink
                    to={"about-us"}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-red-500" : ""
                    }
                  >
                    ABOUT US
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="header-mobile block md:hidden">hihihi</div>
    </header>
  );
}
