import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { reviewSchema, type ReviewForm } from "@/utils/Schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createReview } from "@/service/reviewApi";
import { toast } from "sonner";

const CreateReview = ({
  restaurantId,
  refetch,
}: {
  restaurantId: number;
  refetch: () => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ReviewForm>({
    resolver: zodResolver(reviewSchema),
  });

  const onSubmit = async (data: ReviewForm) => {
    try {
      await createReview(restaurantId, data);
      toast("Add review successfully", {
        style: {
          border: "1px solid #22c55e",
          padding: "16px",
          color: "#22c55e",
        },
        icon: "✅",
        description: "Thanks for your contribution",
      });
      reset();
      // setTimeout(() => {
      // }, 1500);
      refetch();
    } catch (error: any) {
      toast("Add review failed", {
        style: {
          border: "1px solid #ef4444",
          padding: "16px",
          color: "#ef4444",
        },
        icon: "❌",
        description: `${error.response.data.message}`,
      });
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="default"
          size={"lg"}
          className="p-4 text-xl font-medium text-white rounded-lg"
        >
          Add Review
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <DialogHeader>
            <DialogTitle>Add Review</DialogTitle>
            <DialogDescription>
              Add a new review for the restaurant
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="title">Title</Label>
              <Input id="title" type="text" required {...register("title")} />
              {errors.title && (
                <span className="text-xs text-red-500">
                  {errors.title.message}
                </span>
              )}
            </div>
            <div className="grid gap-3">
              <Label htmlFor="text">Text</Label>
              <Textarea id="text" required {...register("text")} />
              {errors.text && (
                <span className="text-xs text-red-500">
                  {errors.text.message}
                </span>
              )}
            </div>
            <div className="grid gap-3">
              <Label htmlFor="rating">Rating (1-5)</Label>
              <Input
                id="rating"
                type="number"
                min={1}
                max={5}
                required
                {...register("rating", { valueAsNumber: true })}
              />
              {errors.rating && (
                <span className="text-xs text-red-500">
                  {errors.rating.message}
                </span>
              )}
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Creating..." : "Create Review"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateReview;
