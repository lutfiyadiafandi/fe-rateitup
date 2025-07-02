import { Link } from "react-router-dom";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "../ui/card";
import Logo from "@/assets/react.svg";
import { Button } from "../ui/button";
import { MapPin, SquarePen, Trash } from "lucide-react";

const CardRestaurants = () => {
  return (
    <Card>
      <CardContent className="relative w-full aspect-video bg-primary rounded-t-xl">
        <Link to={"/restaurants"}>
          <img
            src={Logo}
            alt="Image"
            className="absolute inset-0 object-cover w-full h-full"
          />
        </Link>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-1.5 pb-4">
        <CardTitle className="text-xl font-semibold text-neutral-900">
          Name Restaurants
        </CardTitle>

        <CardDescription className="text-base font-normal text-muted-foreground">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi,
          harum. Reiciendis, aliquid? Dicta, est praesentium.
        </CardDescription>
        <CardAction className="flex items-center justify-between w-full gap-2">
          <Link to={"https://www.google.com/maps"} target="_blank">
            <Button type="button" size={"sm"} variant={"link"}>
              <MapPin />
              Location
            </Button>
          </Link>
          <div className="flex gap-2">
            <Button
              type="button"
              size={"lg"}
              variant={"outline"}
              className="bg-emerald-400"
            >
              <SquarePen />
            </Button>
            <Button type="button" size={"lg"} variant={"destructive"}>
              <Trash />
            </Button>
          </div>
        </CardAction>
      </CardFooter>
    </Card>
  );
};

export default CardRestaurants;
