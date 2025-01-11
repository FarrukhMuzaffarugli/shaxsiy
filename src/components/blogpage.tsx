import  { useState } from "react";
import {
    BadgeContainer,
  Bigcontenor12,
  Bigcontenor121,
  Bigcontenor122,
  Bigcontenor123,
  Bigcontenor124,
  Bigcontenor1241,
  Bigcontenor125,
  Divyurak1,
} from "./stylecomponent";
import yurak from "../Rasm/yuraklog.svg";
import frame from "../Rasm/ongFrame.svg";
import frame1 from "../Rasm/chapFrame.svg";
import papka from "../Rasm/papka.svg";
import izohimg from "../Rasm/commentimg.svg";
import { blogdata } from "../mock/blog";

const BlogpageComponent = () => {
  // State for pagination
  const [startIndex, setStartIndex] = useState(0);

  // Number of items to display
  const ITEMS_PER_PAGE = 3;

// Function to go to the next set of blogs
const handleNext = () => {
    if (startIndex + ITEMS_PER_PAGE < blogdata.length) {
      setStartIndex(startIndex + 1);
    } else {
      setStartIndex(0); // Go back to the beginning
    }
  };
  
  // Function to go to the previous set of blogs
  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    } else {
      setStartIndex(blogdata.length - ITEMS_PER_PAGE); // Go to the end
    }
  };
  

  // Slice the blogdata to show only 3 items
  const visibleBlogs = blogdata.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <Bigcontenor12>
      
      <Bigcontenor121>
        <Divyurak1>
          <img src={yurak} alt="logo" />
          <p>Our Blog</p>
        </Divyurak1>

        <h1>Latest News</h1>
        <h6>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et.
        </h6>
        <div style={{ marginTop: "30px" }}>
          <img src={frame} alt="logo" onClick={handlePrev} style={{ cursor: "pointer" }} />
          <img src={frame1} alt="logo" onClick={handleNext} style={{ cursor: "pointer" }} />
        </div>
      </Bigcontenor121>

     
      {visibleBlogs.map((blog) => (
        <Bigcontenor122 key={blog.id}>
          <div style={{ position: "relative", display: "inline-block" }}>
  <img src={blog.image} alt="blog" style={{ display: "block",  }} />
  <BadgeContainer>
    {new Date(blog.postedDate).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    })}
  </BadgeContainer>
</div>

          <Bigcontenor123>
            
            <div style={{ display: "flex", gap: "29px", alignItems: "center" }}>

              <Bigcontenor1241>
                <img src={papka} alt="category" />
                <h5>{blog.category}</h5>
              </Bigcontenor1241>

              <Bigcontenor124>
                <img src={izohimg} alt="comments" />
                <h5>{blog.comments.length} Comments</h5>
              </Bigcontenor124>
            </div>

            <h1>{blog.title}</h1>

            <Bigcontenor125>
            <img src={blog.comments[0]?.avatar} alt="" />
              <h5>By</h5>
              <h6>{blog.postedBy}</h6>
            </Bigcontenor125>

          </Bigcontenor123>

        </Bigcontenor122>
        
      ))}
    </Bigcontenor12>
  );
};

export default BlogpageComponent;
