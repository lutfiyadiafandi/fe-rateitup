import { Link } from "react-router-dom";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { MapPin, SquarePen, Trash } from "lucide-react";
import type { IRestaurant } from "@/utils/Interface";

const CardRestaurants = ({
  id,
  name,
  description,
  photoUrl,
  location,
  mapsUrl,
  user,
}: IRestaurant) => {
  return (
    <Card>
      <CardContent className="relative w-full aspect-video bg-primary rounded-t-xl">
        <Link to={`/restaurants/${id}`}>
          <img
            src={photoUrl}
            alt={name}
            className="absolute inset-0 object-cover w-full h-full"
          />
        </Link>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-1.5 pb-4">
        <CardTitle className="text-xl font-semibold text-neutral-900">
          {name}
        </CardTitle>
        <CardDescription className="text-base font-normal text-muted-foreground">
          {description}
        </CardDescription>
        <CardAction className="flex items-center justify-between w-full gap-2">
          <Link to={mapsUrl} target="_blank">
            <Button type="button" size={"sm"} variant={"link"}>
              <MapPin />
              {location}
            </Button>
          </Link>
          {/* <div className="flex gap-2">
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
          </div> */}
        </CardAction>
      </CardFooter>
    </Card>
  );
};

export default CardRestaurants;
