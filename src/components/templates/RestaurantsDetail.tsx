import AddReview from "@/components/reusable/AddReview";
import CardRestaurants from "@/components/reusable/CardRestaurants";
import CardReview from "@/components/reusable/CardReview";
import { useAxios } from "@/hooks/useAxios";
import { getRestaurant } from "@/service/restaurantApi";
import type { IRestaurant, IReview } from "@/utils/Interface";
import { useParams } from "react-router-dom";

const RestaurantsDetail = () => {
  const { id } = useParams<{ id: string }>();
  const restaurantId = Number(id);
  const { data, loading, error } = useAxios<IRestaurant>(getRestaurant, [
    restaurantId,
  ]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(data?.reviews?.map((item: IReview) => item.comments));

  return (
    <main className="w-full mx-auto overflow-hidden max-w-[768px] mt-20">
      <AddReview />
      {data && (
        <CardRestaurants
          key={data.id}
          id={data.id}
          name={data.name}
          description={data.description}
          photoUrl={data.photoUrl}
          location={data.location}
          mapsUrl={data.mapsUrl}
          user={data.user}
        />
      )}
      <section className="mt-10 pb-52">
        <h1 className="mb-5 text-2xl font-bold text-neutral-900">Reviews</h1>
        <div className="flex flex-col gap-5">
          {data?.reviews?.length === 0 ? (
            <h1 className="text-2xl font-bold text-neutral-900">No Reviews</h1>
          ) : (
            data?.reviews?.map((item: IReview) => (
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
            ))
          )}
        </div>
      </section>
    </main>
  );
};

export default RestaurantsDetail;
