import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa";
import { Autoplay, FreeMode, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../../App.css";

// Get apiFunction and the endpoint
import { apiConnector } from "../../services/apiConnector";
import { ratingsEndpoints } from "../../services/apis";

function ReviewSlider() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const truncateWords = 15;

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        const { data } = await apiConnector(
          "GET",
          ratingsEndpoints.REVIEWS_DETAILS_API
        );
        if (data?.success) {
          setReviews(data?.data);
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, []);

  // Responsive breakpoints for different screen sizes
  const swiperBreakpoints = {
    320: { slidesPerView: 1, spaceBetween: 20 },
    640: { slidesPerView: 2, spaceBetween: 20 },
    768: { slidesPerView: 3, spaceBetween: 25 },
    1024: { slidesPerView: 4, spaceBetween: 25 },
  };

  return (
    <div className="w-full py-12">
      {isLoading ? (
        <div className="flex justify-center items-center h-48">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-100"></div>
        </div>
      ) : (
        <div className="max-w-maxContent mx-auto px-4">
          <Swiper
            breakpoints={swiperBreakpoints}
            loop={true}
            freeMode={true}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            modules={[FreeMode, Pagination, Autoplay]}
            className="pb-12"
          >
            {reviews.length > 0 ? (
              reviews.map((review, i) => (
                <SwiperSlide key={i}>
                  <div className="flex flex-col gap-4 bg-richblack-800 p-6 rounded-lg h-full transition-transform hover:shadow-lg hover:shadow-richblack-500/20 hover:-translate-y-1">
                    <div className="flex items-center gap-4">
                      <img
                        src={
                          review?.user?.image ||
                          `https://api.dicebear.com/5.x/initials/svg?seed=${review?.user?.firstName} ${review?.user?.lastName}`
                        }
                        alt={`${review?.user?.firstName} ${review?.user?.lastName}`}
                        className="h-12 w-12 rounded-full object-cover border-2 border-yellow-100"
                      />
                      <div className="flex flex-col">
                        <h1 className="font-semibold text-richblack-5">{`${review?.user?.firstName} ${review?.user?.lastName}`}</h1>
                        <h2 className="text-sm font-medium text-richblack-300">
                          {review?.course?.courseName}
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-yellow-100 text-lg">
                        {review.rating.toFixed(1)}
                      </h3>
                      <ReactStars
                        count={5}
                        value={review.rating}
                        size={18}
                        edit={false}
                        activeColor="#ffd700"
                        emptyIcon={<FaStar />}
                        fullIcon={<FaStar />}
                      />
                    </div>

                    <p className="font-medium text-richblack-25 flex-grow">
                      {review?.review.split(" ").length > truncateWords
                        ? `${review?.review
                            .split(" ")
                            .slice(0, truncateWords)
                            .join(" ")}...`
                        : review?.review}
                    </p>
                  </div>
                </SwiperSlide>
              ))
            ) : (
              <div className="text-center text-richblack-300 py-8">
                No reviews available yet.
              </div>
            )}
          </Swiper>
        </div>
      )}
    </div>
  );
}

export default ReviewSlider;