import { NavLink } from "react-router-dom";

const general = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Services",
    route: "/services",
  },
  {
    name: "Orders",
    route: "/orders",
  },
  {
    name: "Fund account",
    route: "/fund",
  },
  {
    name: "Affiliates Center",
    route: "/affiliates",
  },
];
const help = [
  {
    name: "Help & FAQ",
    route: "/help",
  },
  {
    name: "Contact us",
    route: "/contact",
  },
  {
    name: "Settings",
    route: "/settings",
  },
];

function NavLinks() {
  return (
    <div>
      <nav className="w-full h-full flex flex-col">
        <ul className="py-4">
          <h1 className="text-center w-1/2 uppercase text-secondary font-medium">
            general
          </h1>
          {general.map((link) => (
            <li key={link.route}>
              <NavLink to={link.route}>
                <div className="flex justify-start items-start gap-3">
                  {link.icon}
                  <span className="text-[1.1rem] lgss:text-[.8rem] font-semibold lgss:leading-6 leading-7 whitespace-nowrap">
                    {link.name}
                  </span>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
        <ul className="py-4">
          <h1 className="text-center w-1/2 uppercase text-secondary font-medium">
            help
          </h1>
          {help.map((link) => (
            <li key={link.route}>
              <NavLink to={link.route} className={`flex text-[.8rem]`}>
                <div className="flex justify-start items-start gap-3">
                  {link.icon}
                  <span className="text-[1.1rem] lgss:text-[.8rem] font-semibold lgss:leading-6 leading-7 whitespace-nowrap">
                    {link.name}
                  </span>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default NavLinks;
