import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const CardComment = () => {
  return (
    <Card className="w-full py-3 bg-secondary">
      <CardHeader>
        <CardTitle className="text-base font-medium text-neutral-900">
          Comments by @username
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base font-normal text-muted-foreground">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi,
          harum. Reiciendis, aliquid? Dicta, est praesentium.
        </CardDescription>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <CardDescription>24 May 2023</CardDescription>
      </CardFooter>
    </Card>
  );
};

export default CardComment;
