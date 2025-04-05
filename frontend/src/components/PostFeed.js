import React from "react";
import AdComponent from "./AdComponent";
import ads from "../data/ads";

const PostFeed = ({ posts }) => {
  const renderFeed = () => {
    const feed = [];
    let adCounter = 0; // To track which ad to show next

    for (let i = 0; i < posts.length; i++) {
      // Render the post exactly as it is
      feed.push(
        <div key={`post-${posts[i].id}`} className="post">
          <h2>{posts[i].title}</h2>
          <p>{posts[i].content}</p>
        </div>
      );

      // Insert an ad after every 2 posts, but only if there are more posts to follow
      if ((i + 1) % 2 === 0 && i + 1 < posts.length) {
        const ad = ads[adCounter % ads.length]; // Rotate through ads
        feed.push(<AdComponent key={`ad-${ad.id}-${i}`} ad={ad} />);
        adCounter++; // Move to the next ad
      }
    }

    return feed;
  };

  return <div className="post-feed">{renderFeed()}</div>;
};

export default PostFeed;