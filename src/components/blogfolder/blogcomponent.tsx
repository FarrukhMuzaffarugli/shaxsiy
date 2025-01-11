import  { useState } from "react";
import { BadgeContainer, Bigcontenor124, Bigcontenor1241, Bigcontenor125, Bigconteyno, Blogdiv, Blogdiv1, Blogdiv2, Blogdiv3, Blogdiv4, BlogText, HomeText
} from "../stylecomponent";
import papka from "../../Rasm/papka.svg";
import izohimg from "../../Rasm/commentimg.svg";
import { blogdata } from "../../mock/blog";
import { Link } from "react-router-dom";

const BlogComponent = () => {
  const itemsPerPage = 9;  
  const [currentPage, setCurrentPage] = useState(1); 


  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentPosts = blogdata.slice(indexOfFirstPost, indexOfLastPost);


  const totalPages = Math.ceil(blogdata.length / itemsPerPage);


  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Bigconteyno>
   
      <Blogdiv>
        <h1>Blog</h1>
        <p>
          <HomeText>Home</HomeText> / <BlogText>Blog</BlogText>
        </p>
      </Blogdiv>

   
      <Blogdiv1>
        {currentPosts.map((blog) => (
            <Link to={`/blog/${blog.id}`} key={blog.id}>
          <Blogdiv2 key={blog.id}>
       
            <Blogdiv4>
              <div style={{ position: "relative", display: "inline-block" }}>
                <img src={blog.image} alt="blog" style={{ display: "block" }} />
                <BadgeContainer>
                  {new Date(blog.postedDate).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </BadgeContainer>
              </div>
            </Blogdiv4>

       
            <Blogdiv3>
              <div style={{ display: "flex", gap: "29px", alignItems: "center" }}>
             
                <Bigcontenor1241>
                  <img src={papka} alt="category" />
                  <h5>{blog.category}</h5>
                </Bigcontenor1241>

               
                <Bigcontenor124>
                  <img src={izohimg} alt="comments" />
                  <h5>{blog.comments.length < 10 ? `0${blog.comments.length}` : blog.comments.length} Comments</h5>
                </Bigcontenor124>
              </div>

           
              <h1>{blog.title}</h1>

              
              <Bigcontenor125>
                <img src={blog.comments[0]?.avatar} alt="avatar" />
                <h5>By</h5>
                <h6>{blog.postedBy}</h6>
              </Bigcontenor125>
            </Blogdiv3>
          </Blogdiv2>
          </Link>
        ))}
      </Blogdiv1>

     
      <div style={{ display: "flex", justifyContent: "center", marginTop: "50px", gap: "12px" }}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageClick(index + 1)}
            style={{
              width: "46px",
              height: "46px",
              borderRadius: "50%",
              backgroundColor: currentPage === index + 1 ? "#80B4FF" : "#f0f0f0",
              color: currentPage === index + 1 ? "#fff" : "#000",
              border: "none",
              cursor: "pointer",
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </Bigconteyno>
  );
};

export default BlogComponent;
