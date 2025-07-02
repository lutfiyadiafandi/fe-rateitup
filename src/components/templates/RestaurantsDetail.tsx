import CardRestaurants from "../reusable/CardRestaurants";
import CardReview from "../reusable/CardReview";

const RestaurantsDetail = () => {
  return (
    <main className="w-full mx-auto overflow-hidden max-w-[768px] mt-20">
      <CardRestaurants />
      <section className="mt-10 pb-52">
        <h1 className="mb-5 text-2xl font-bold text-neutral-900">Reviews</h1>
        <div className="flex flex-col gap-5">
          <CardReview />
          <CardReview />
          <CardReview />
        </div>
      </section>
    </main>
  );
};

export default RestaurantsDetail;
