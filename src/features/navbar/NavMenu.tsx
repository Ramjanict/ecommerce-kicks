import { IoMdFlame } from "react-icons/io";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";

const navItems = [
  {
    type: "link",
    label: "New Drops",
    to: "/",
    icon: IoMdFlame,
    iconClass: "w-4 h-4 text-kicks-orange",
    className:
      " flex items-center gap-[1px] text-base font-semibold text-kicks-dark hover:text-kicks-blue transition-colors  cursor-pointer",
  },
  {
    type: "button",
    label: "Men",
    className:
      "flex items-center gap-1 text-kicks-dark text-base font-semibold text-kicks-dark hover:text-kicks-blue transition-colors cursor-pointer",
  },
  {
    type: "button",
    label: "Women",
    className:
      " flex items-center gap-1 text-kicks-dark text-base font-semibold text-kicks-dark hover:text-kicks-blue transition-colors cursor-pointer",
  },
];
const NavMenu = () => {
  return (
    <div className="hidden md:flex items-center gap-5 ">
      {navItems.map((item, index) => {
        if (item.type === "link") {
          const Icon = item.icon;
          return (
            <Link key={index} to={item.to || "/"} className={item.className}>
              {item.label}
              {Icon && <Icon className={item.iconClass} />}
            </Link>
          );
        }

        return (
          <button key={index} className={item.className}>
            {item.label}
            <MdOutlineArrowDropDown className=" w-5 h-5 " />
          </button>
        );
      })}
    </div>
  );
};

export default NavMenu;
