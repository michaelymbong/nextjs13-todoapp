import { Link } from "../types";
import Card from "./Card";
import SidebarLink from "./SidebarLink";

const links: Link[] = [
  { label: "Home", icon: "Grid", link: "/home" },
  {
    label: "Calendar",
    icon: "Calendar",
    link: "/calendar",
  },
  { label: "Profile", icon: "User", link: "/profile" },
  {
    label: "Settings",
    icon: "Settings",
    link: "/settings",
  },
];

const Sidebar = () => {
  return (
    <Card className="h-full w-40 flex items-center justify-between flex-wrap">
      {links.map((link) => (
        <SidebarLink link={link} key={`sidebar-link-${link.label}`} />
      ))}
    </Card>
  );
};

export default Sidebar;
