import Link from "next/link";
const MenuList = () => {
  return (
    <ul>
      <li className="menu-icon">
        <Link href="/">Home</Link>
      </li>
      <li className="menu-icon">
        <Link href="/about">About</Link>
      </li>
      <li className="menu-icon">
        <Link href="/shop">Properties</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  );
};

export default MenuList;
