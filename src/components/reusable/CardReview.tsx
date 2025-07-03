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
import type { IComment, IReview } from "@/utils/Interface";
import { formatDate } from "@/lib/utils";

const CardReview = ({
  id,
  title,
  text,
  rating,
  createdAt,
  user,
  comments,
}: IReview) => {
  const [action, setAction] = useState(false);
  const [seeComments, setSeeComments] = useState(false);

  return (
    <Card className="py-6">
      <CardHeader>
        <CardTitle className="text-lg font-medium text-neutral-900">
          Reviews by {user.username}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-lg font-medium text-neutral-900">
          {title}
        </CardTitle>
        <CardDescription className="text-base font-normal text-muted-foreground">
          {text}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <Rating value={rating} />
        <CardDescription>{formatDate(createdAt)}</CardDescription>
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
            {comments?.map((comment: IComment) => (
              <CardComment
                key={comment.id}
                id={comment.id}
                text={comment.text}
                createdAt={comment.createdAt}
                user={comment.user}
                review={comment.review}
              />
            ))}
          </div>
          <AddComment />
        </section>
      )}
    </Card>
  );
};

export default CardReview;
