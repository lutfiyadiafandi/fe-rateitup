import AddReview from "@/components/reusable/AddReview";
import CardRestaurants from "@/components/reusable/CardRestaurants";
import CardReview from "@/components/reusable/CardReview";
import { useAxios } from "@/hooks/useAxios";
import { getRestaurant } from "@/service/restaurantApi";
import type { IRestaurant, IReview } from "@/utils/Interface";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "../ui/button";

const RestaurantsDetail = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLogin(!!token);
  }, []);

  const { id } = useParams<{ id: string }>();
  const restaurantId = Number(id);
  const { data, loading, error, refetch } = useAxios<IRestaurant>(
    getRestaurant,
    [restaurantId],
    []
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <main className="w-full mx-auto overflow-hidden max-w-[768px] mt-20">
      {isLogin ? (
        <AddReview id={restaurantId} refetch={refetch} />
      ) : (
        <Link to="/login">
          <Button type="button" variant={"default"}>
            Create Review
          </Button>
        </Link>
      )}
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
            <p>No reviews yet</p>
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
                refetch={refetch}
                isUser={false}
              />
            ))
          )}
        </div>
      </section>
    </main>
  );
};

export default RestaurantsDetail;
