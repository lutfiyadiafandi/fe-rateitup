import AddReview from "@/components/reusable/AddReview";
import CardRestaurants from "@/components/reusable/CardRestaurants";
import CardReview from "@/components/reusable/CardReview";
import Data from "@/utils/data.json";

const RestaurantsDetail = () => {
  const id = window.location.pathname.split("/")[2];
  const param = parseInt(id);
  const item: any = Data.find((item) => item.id === param);
  console.log(id);
  console.log(param);
  console.log(item);
  return (
    <main className="w-full mx-auto overflow-hidden max-w-[768px] mt-20">
      <AddReview />
      <CardRestaurants
        key={item.id}
        id={item.id}
        name={item.name}
        description={item.description}
        photoUrl={item.photoUrl}
        location={item.location}
        mapsUrl={item.mapsUrl}
        user={item.user}
      />
      <section className="mt-10 pb-52">
        <h1 className="mb-5 text-2xl font-bold text-neutral-900">Reviews</h1>
        <div className="flex flex-col gap-5">
          {item.reviews.map((item: any) => (
            <CardReview
              key={item.id}
              id={item.id}
              title={item.title}
              text={item.text}
              rating={item.rating}
              createdAt={item.createdAt}
              user={item.user}
              comments={item.comments}
              restaurant={item.restaurant}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default RestaurantsDetail;
