import Banner from "./Banner";
import Logo from "./Logo";
import '../styles/Header.css'

function Header(){
  return <div className="header"><Banner/><Logo/></div>
}

export default Header;