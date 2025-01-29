import { blogdata } from "../../mock/blog";
import FreeSoloCreateOption from "../../muibook/searchinput";
import { Bloginfo2, Yangicatagory, Yangicatagory1, Yangicatagory2, Yangicatagory3, Yangicatagory4, Yangicatagory5, Yangicomment1 } from "../stylecomponent";
import { Link, useParams } from "react-router-dom";

const BlogCatagorysearch = () => {
  const { id } = useParams<{ id: string }>();


  const uniqueCategories: string[] = Array.from(new Set(blogdata.map(item => item.category).filter(Boolean)));


  const uniqueTags: string[] = Array.from(
    new Set(blogdata.flatMap(item => item.tags || []).filter(Boolean))
  );


  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <Bloginfo2>
      
      <FreeSoloCreateOption />
      
      <Yangicomment1>
        <h2>Categories</h2>

       
        <div style={{ display: "flex", justifyContent: "space-between", width: '100%', height: '24px' }}>
          <h5>All Categories</h5> 
          <p>({blogdata.length})</p>
        </div>

       
        {uniqueCategories.map((category, index) => (
          <Yangicatagory key={index}>
            <div style={{ display: "flex", justifyContent: "space-between", width: '100%', height: '24px' }}>
              <h5>{category}</h5> 
              <p>({blogdata.filter(item => item.category === category).length})</p>
            </div>
          </Yangicatagory>
        ))}
      </Yangicomment1>

      <Yangicatagory1>
        <h2>Recent Posts</h2>


        {blogdata
          .filter(post => post.id !== id)
          .slice(0, 5)
          .map((post, index) => (
            <Link to={`/blog/${post.id}`} key={index}>
              <Yangicatagory2>
                <img src={post.image} alt={post.title} />
                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px', gap: '13px' }}>
                  <p>{formatDate(post.postedDate)}</p>
                  <h6>{post.title}</h6>
                </div>
              </Yangicatagory2>
            </Link>
          ))}
      </Yangicatagory1>

      <Yangicatagory3>
  <h2>Tags</h2>
  <Yangicatagory4>
    {uniqueTags.map((tag, index) => (
      <button key={index}>{tag}</button>
    ))}
  </Yangicatagory4>
</Yangicatagory3>

<Yangicatagory5>
<p>Starting with 19$</p>
  <h1>Immunity Boosters</h1>
</Yangicatagory5>


    </Bloginfo2>
  );
};

export default BlogCatagorysearch;






