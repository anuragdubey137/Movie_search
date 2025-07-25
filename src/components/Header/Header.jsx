import { Film } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <nav className={`relative z-10 px-6 py-4 transition-all duration-1000 bg-[rgba(27,13,43,0.5)] ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between back ">
        <div className="flex items-center space-x-2 ">
          <Link to='/' className="flex items-center">
          <Film className="w-8 h-8 text-purple-400"></Film>
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent  hover:text-purple-600 cursor-pointer">
            CineVault
          </span>
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-8">
         
          
          <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                         
                             <li>
                                <NavLink
                                to = "/Movie"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-purple-700":"text-gray-600"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-700 lg:p-0`
                                    }
                                >
                                    Movies
                                </NavLink>
                            </li>
                             <li>
                                <NavLink
                                to = "/Reviews"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-purple-700":"text-gray-600"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-700 lg:p-0`
                                    }
                                >
                                    Reviews
                                </NavLink>
                            </li>
                              <li>
                                <NavLink
                                to = "/Trending"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-purple-700":"text-gray-600"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-700 lg:p-0`
                                    }
                                >
                                    Trending
                                </NavLink>
                            </li>
                                                                 <li>
                                <NavLink
                                to = "/Signin"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-purple-700":"text-gray-600"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-700 lg:p-0`
                                    }
                                >
                                    Signin
                                </NavLink>
                            </li>
                                            <li>
                                <NavLink
                                to = "/Signup"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-purple-700":"text-gray-600"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-700 lg:p-0 `
                                    }
                                >
                                    Create account
                                </NavLink>
                            </li>
 
 
          </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;