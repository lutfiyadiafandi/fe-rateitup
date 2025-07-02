import Logo from "@/assets/react.svg";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { CircleUserRound, LogIn, UserPlus } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <header className="w-full h-20 mx-auto overflow-hidden max-w-[1240px] border-b bg-background rounded-xl border-neutral-200">
      <nav className="flex items-center justify-between w-full h-full px-4 py-2">
        <div className="flex items-center">
          <Link to="/">
            <img src={Logo} alt="Logo" className="w-8 h-8" />
          </Link>
        </div>
        <h1 className="text-2xl font-bold text-neutral-900">Rate It Up</h1>
        <div className="flex items-center gap-4">
          {isLogin ? (
            <Link to="/profile">
              <Button
                type="submit"
                size={"lg"}
                className="w-28"
                variant={"secondary"}
              >
                <CircleUserRound />
                Profile
              </Button>
            </Link>
          ) : (
            <>
              <Link to="/login">
                <Button
                  type="submit"
                  size={"lg"}
                  className="w-28"
                  variant={"default"}
                >
                  <LogIn />
                  Log In
                </Button>
              </Link>
              <Link to={"/register"}>
                <Button
                  type="submit"
                  size={"lg"}
                  className="w-28"
                  variant={"default"}
                >
                  <UserPlus />
                  Register
                </Button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
