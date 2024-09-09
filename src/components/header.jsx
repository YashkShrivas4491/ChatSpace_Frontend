import { Link } from "react-router-dom";
import chatlogo from "../assets/chatlogo.jpeg";
import { Button } from "./ui/button";
const Header = () => {
  return (
    <nav className="py-4 flex justify-between items-center ml-8">
      <Link to="/">
        <img
          src={chatlogo}
          alt="chat Logo"
          className="h-20 bg-blend-multiply"
        />
      </Link>
      <div className="flex mr-8">
        <Button>Enjoy Chat ✨</Button>
      </div>
    </nav>
  );
};

export default Header;
