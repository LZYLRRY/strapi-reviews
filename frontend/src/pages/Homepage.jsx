import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

export default function Homepage() {
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/reviews"
  );

  // Add this to see the exact data structure
  console.log("Full response:", data);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  const reviews = data?.data;

  // Add this additional console log
  console.log("Reviews array:", reviews);

  if (!reviews) return <div>No reviews found</div>;

  return (
    <div>
      {reviews.map((review) => {
        // Add this to debug each review object
        console.log("Individual review:", review);

        return (
          <div key={review.id} className="review-card">
            <h2>{review?.attributes?.title}</h2>
            <small>Console list</small>
            <p>{review?.attributes?.body}</p>
            <Link to={`/details/${review.id}`}>Read More</Link>
          </div>
        );
      })}
    </div>
  );
}
