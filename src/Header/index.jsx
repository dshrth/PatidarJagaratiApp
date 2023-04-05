import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { Button } from "@mui/material";

export default function Header() {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 text-center justify-center NavColor ">
        <div className="flex items-center flex-shrink-0 text-white mr-6"></div>

        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto  NavElement ">
          <div className="text-sm lg:flex-grow ">
            <Link to="/">
              {" "}
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0   hover:text-white mr-4 active:text-yellow-500"
              >
                HOME
              </a>{" "}
            </Link>
            <Link to="/blog">
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4 active:text-yellow-500"
              >
                BLOG
              </a>{" "}
            </Link>
            <Link to="/matrominal">
              {" "}
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0  hover:text-white mr-4 active:text-yellow-500"
              >
                MATRIMONIAL
              </a>{" "}
            </Link>
            <Link to="/giveadvertisement">
              {" "}
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0  hover:text-white mr-4 active:text-yellow-500"
              >
                GIVE ADVERTISEMENT
              </a>{" "}
            </Link>
            <Link to="/contactus">
              {" "}
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0  hover:text-white mr-4 active:text-yellow-500"
              >
                CONTACT US
              </a>{" "}
            </Link>
            <Link to="/prizes">
              {" "}
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0  hover:text-white mr-4 active:text-yellow-500"
              >
                PRIZES
              </a>{" "}
            </Link>
            <Link to="/signup">
              {" "}
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0  hover:text-white mr-4 active:text-yellow-500"
              >
                <Button variant="contained">SignIn</Button>
              </a>{" "}
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
