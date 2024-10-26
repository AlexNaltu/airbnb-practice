import React from "react";
import { getRecommendations } from "../lib/actions";
import Image from "next/image";

const Recommendation = async () => {
  const recommendations = await getRecommendations();
  console.log(recommendations);
  return (
    <div>
      {recommendations.data.map((recommendation, i) => (
        <div key={i}>
          <h1>{recommendation.entry.title}</h1>
          <Image
            src={recommendation.entry.images.webp?.large_image_url!}
            alt="image"
            width={300}
            height={300}
          />
        </div>
      ))}
    </div>
  );
};

export default Recommendation;
