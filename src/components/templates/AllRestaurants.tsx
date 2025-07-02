import AddRestaurant from "../reusable/AddRestaurant";
import AddReview from "../reusable/AddReview";
import CardRestaurants from "../reusable/CardRestaurants";

const AllRestaurants = () => {
  return (
    <main className="w-full mx-auto overflow-hidden max-w-[768px] mt-20">
      <AddRestaurant />
      <AddReview />
      <section className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <CardRestaurants />
        <CardRestaurants />
        <CardRestaurants />
      </section>
    </main>
  );
};

export default AllRestaurants;
