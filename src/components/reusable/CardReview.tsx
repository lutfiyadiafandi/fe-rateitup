import { SquarePen, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { Rating } from "@/components/ui/rating";
import CardComment from "@/components/reusable/CardComment";
import AddComment from "@/components/reusable/AddComment";

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
                type={"button"}
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
          <AddComment />
        </section>
      )}
    </Card>
  );
};

export default CardReview;
