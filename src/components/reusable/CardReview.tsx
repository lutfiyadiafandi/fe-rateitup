import { Send, SquarePen, Trash } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Rating } from "../ui/rating";
import CardComment from "./CardComment";
import { useState } from "react";
import { Textarea } from "../ui/textarea";

const CardReview = () => {
  const [action, setAction] = useState(false);
  const [seeComments, setSeeComments] = useState(false);
  return (
    <Card className="py-6">
      <CardHeader>
        <CardTitle className="text-lg font-medium text-neutral-900">
          Reviews by @username
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-lg font-medium text-neutral-900">
          Title Reviews
        </CardTitle>
        <CardDescription className="text-base font-normal text-muted-foreground">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi,
          harum. Reiciendis, aliquid? Dicta, est praesentium.
        </CardDescription>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <Rating value={3} />
        <CardDescription>24 May 2023</CardDescription>
        <CardAction className="flex items-center">
          {action ? (
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
          ) : (
            <Button
              type={"button"}
              size={"sm"}
              variant={"link"}
              onClick={() => setSeeComments(!seeComments)}
            >
              See All Comments
            </Button>
          )}
        </CardAction>
      </CardFooter>
      {seeComments && (
        <section className="px-10">
          <div className="flex flex-col gap-3">
            <CardComment />
            <CardComment />
            <CardComment />
          </div>
          <div className="flex items-center w-full gap-2 mt-5">
            <Textarea name="comment" placeholder="Write a comment..." />
            <Button type={"submit"} variant={"default"} className="size-14">
              <Send />
            </Button>
          </div>
        </section>
      )}
    </Card>
  );
};

export default CardReview;
