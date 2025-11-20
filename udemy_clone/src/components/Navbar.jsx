import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Udemy</div>

      <input className="search" type="text" placeholder="Search for anything" />

      <div className="nav-links">
        <span>Categories</span>
        <span>Login</span>
        <span>Sign up</span>
      </div>
    </nav>
  );
}
