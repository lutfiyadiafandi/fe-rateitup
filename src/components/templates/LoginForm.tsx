import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import Logo from "@/assets/react.svg";

const LoginForm = () => {
  return (
    <main className="flex items-center justify-center min-h-screen overflow-x-hidden">
      <Card className="flex flex-col w-full max-w-3xl gap-6">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-4xl font-bold text-neutral-900">
                  Welcome back
                </h1>
                <p className="text-base font-normal text-muted-foreground text-balance">
                  Login to your account
                </p>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Username..."
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Password..."
                  required
                />
              </div>
              <Button type="submit" className="w-full" variant={"default"}>
                Login
              </Button>

              <div className="text-sm text-center">
                Don't have an account?
                <Link to={"/register"} className="underline underline-offset-4">
                  {" "}
                  Sign up
                </Link>
              </div>
            </div>
          </form>
          <div className="relative hidden bg-muted md:block">
            <Link to={"/"}>
              <img
                src={Logo}
                alt="Image"
                className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
              />
            </Link>
          </div>
        </CardContent>
      </Card>
    </main>
  );
};

export default LoginForm;
