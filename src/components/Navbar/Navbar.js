import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="https://setrio.ro/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-20 w-auto"
              src="https://setrio.ro/wp-content/uploads/2020/04/logo-setrio.png"
              alt=""
            />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
