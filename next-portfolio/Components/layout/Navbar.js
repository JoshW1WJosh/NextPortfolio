import Link from 'next/link';

import classes from "./Navbar.module.css";


function Navbar (props) {

  if (!props.isLoggedIn) {
    let navLink =
      <Link href='/login'>Login</Link>
  } else {
    let navLink =
      <Link href='/logout'>Logout</Link>
  }
  return (
    <ul>
      <li>
        <Link href='/'>Home</Link>
      </li>
      <li>
        <Link href='/summary'>Website Summery</Link>
      </li>
      <li>
        <Link href='/vlogs'>Dev Process Vlogs</Link>
      </li>
      <li>
        <Link href='/products'>Products</Link>
      </li>
      <li>
        <Link href='/cart'>Cart Icon</Link>
      </li>
      <li>
        { navLink }
      </li>
    </ul>
  );
}

export default 'Navbar';