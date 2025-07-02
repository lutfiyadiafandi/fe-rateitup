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
import { restaurantSchema, type RestaurantForm } from "@/utils/Schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef } from "react";

const AddRestaurant = () => {
  const dialogCloseRef = useRef<HTMLButtonElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<RestaurantForm>({
    resolver: zodResolver(restaurantSchema),
  });

  const onSubmit = async (data: RestaurantForm) => {
    // TODO: handle API call here
    console.log(data);
    reset();
    dialogCloseRef.current?.click();
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Create Restaurant</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <DialogHeader>
            <DialogTitle>Add Restaurant</DialogTitle>
            <DialogDescription>
              Add a new restaurant to the recomendation
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" required {...register("name")} />
              {errors.name && (
                <span className="text-xs text-red-500">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div className="grid gap-3">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                required
                {...register("description")}
              />
              {errors.description && (
                <span className="text-xs text-red-500">
                  {errors.description.message}
                </span>
              )}
            </div>
            <div className="grid gap-3">
              <Label htmlFor="photoUrl">Link Photo</Label>
              <Input
                id="photoUrl"
                type="url"
                required
                {...register("photoUrl")}
              />
              {errors.photoUrl && (
                <span className="text-xs text-red-500">
                  {errors.photoUrl.message}
                </span>
              )}
            </div>
            <div className="grid gap-3">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                type="text"
                required
                {...register("location")}
              />
              {errors.location && (
                <span className="text-xs text-red-500">
                  {errors.location.message}
                </span>
              )}
            </div>
            <div className="grid gap-3">
              <Label htmlFor="mapsUrl">Link Maps</Label>
              <Input
                id="mapsUrl"
                type="url"
                required
                {...register("mapsUrl")}
              />
              {errors.mapsUrl && (
                <span className="text-xs text-red-500">
                  {errors.mapsUrl.message}
                </span>
              )}
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button ref={dialogCloseRef} type="button" className="hidden" />
            </DialogClose>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Creating..." : "Create Restaurant"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddRestaurant;
