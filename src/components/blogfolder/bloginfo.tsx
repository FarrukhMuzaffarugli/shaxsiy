
import { useParams } from "react-router-dom";
import { Bigconteyno, Blogdanger, Blogdangerimg, Blogdiv, Bloginfo, Bloginfo1,  Bloginfoimg, Bloginfoimginfo, Bloginfotext, Blogtag, Blogtagimg, Blogtagshare, BlogText, Comments, Comments1, HomeText,  } from "../stylecomponent"
import { blogdata } from "../../mock/blog";
import kulrangizoh from '../../Rasm/kulrangizoh.svg'
import facebok from '../../Rasm/logofacebook.svg'
import instagramimg from '../../Rasm/Logoinstagram.svg'
import tviter from '../../Rasm/Logotwitter.svg'
import pingramimg from '../../Rasm/Logopinterest.svg'
import Commentscomponent from "./commentscomponent";

import BlogCatagorysearch from "./blogCatagorysearch";



 
 
 const BloginfoConponent = () => {

  

// Share qilish funksiyasi
const handleShare = (platform: string) => {
    const currentUrl = window.location.href; // Blogning joriy URL manzili
    let shareUrl = "";
  
    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;
        break;
      case "instagram":
        shareUrl = `https://www.instagram.com/?url=${currentUrl}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${currentUrl}`;
        break;
      case "pinterest":
        shareUrl = `https://pinterest.com/pin/create/button/?url=${currentUrl}`;
        break;
      default:
        break;
    }
  
    // Share linkni yangi tabda ochish
    window.open(shareUrl, "_blank");
  };

//comentla sonii hisoblash

  interface Reply {
    user: string;
    avatar: string;
    message: string;
    date: string;
    replies?: Reply[];
  }
  
  interface CommentData {
    user: string;
    avatar: string;
    message: string;
    date: string;
    replies?: Reply[];
  }


  const getTotalComments = (comments: CommentData[]): number => {
    let total = 0;
  
    const countReplies = (commentList: CommentData[] | Reply[]) => {
      commentList.forEach((comment) => {
        total += 1; // Har bir izohni qo‘shish
        if (comment.replies && comment.replies.length > 0) {
          countReplies(comment.replies); // Javoblarni rekursiv qo‘shish
        }
      });
    };
  
    countReplies(comments);
    return total;
  };



    const { id } = useParams<{ id: string }>();  // URL dan id ni olish
    const blog = blogdata.find((item) => item.id === id);
  
    if (!blog) {
      return <h2>Blog topilmadi!</h2>;
    }

  

  return (

    

  <Bigconteyno>


  <Blogdiv>
        <h1>Blog</h1>
        <p>
          <HomeText>Home/ Blog</HomeText> / <BlogText> The Family During the COVID-19 Pandemic</BlogText>
        </p>
      </Blogdiv>



<Bloginfo >



<Bloginfo1>

<Bloginfoimg>
    <img src={blog.image} alt="image" />
</Bloginfoimg>

<Bloginfoimginfo>
    <p>By:<h6>{blog.postedBy}</h6> </p>

    <p>
  {new Date(blog.postedDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",   
    day: "numeric",
  })}
</p>

<div style={{display:"flex", gap: '2px'}}>
    <img src={kulrangizoh} alt="logo" />
    <p>{getTotalComments(blog.comments)} Comments</p>

</div>

</Bloginfoimginfo>

<h1>{blog.title}</h1>

<Bloginfotext>
    <p>{blog.description}</p>
</Bloginfotext>

<Blogdanger>
    <h1>{blog.highlight}</h1>
</Blogdanger>

<Bloginfotext>
    <p>With this potential discomfort in mind, Aloisia Beauty has developed a highly effective serum that leads to the same visibly noticeable benefits without the Vitamin C: Our renew Concentrated Serum. But don’t just take it from us: According to a third-party, independent evaluation of 32 consumers, 86% reported that their skin looks plumper and brighter and 97% reported brighter</p>
</Bloginfotext>

<Blogdangerimg>
    <img src={blog.relatedImages[0]} alt="" />
    <img src={blog.relatedImages[1]} alt="" />
</Blogdangerimg>

<Bloginfotext>
    <p>Together, the antioxidants infused into this lightweight treatment give you the benefits you would achieve with Vitamin C - and give your skin the same bright, glowing, even-toned results but without the reactivity. So while there are other alternatives out there that can provide some of these desired benefits, RENEW Concentrated Serum is the ultimate holy grail for those who are sensitive to Vitamin C. </p>
</Bloginfotext>

<Blogtagshare>

<Blogtag>

    <h2>Tag</h2>

  
<div style={{ display: "flex", gap: "10px", height: '40px'}}>
  {blog?.tags?.map((tag, index) => (
    <button key={index}>
      {tag}
    </button>
  ))}
</div>
</Blogtag>

<Blogtag>
<h2>Share</h2>

<Blogtagimg>
  <img
    src={facebok}
    alt="Facebook"
    onClick={() => handleShare("facebook")}
    style={{ cursor: "pointer" }}
  />
  <img
    src={instagramimg}
    alt="Instagram"
    onClick={() => handleShare("instagram")}
    style={{ cursor: "pointer" }}
  />
  <img
    src={tviter}
    alt="Twitter"
    onClick={() => handleShare("twitter")}
    style={{ cursor: "pointer" }}
  />
  <img
    src={pingramimg}
    alt="Pinterest"
    onClick={() => handleShare("pinterest")}
    style={{ cursor: "pointer" }}
  />
</Blogtagimg>


</Blogtag>


</Blogtagshare>

<Comments>

<Comments1>
<h2>{getTotalComments(blog.comments)} comments</h2>

</Comments1>

<Commentscomponent/>
{/* <Yangicomentcomponent/> */}

</Comments>



</Bloginfo1>




<BlogCatagorysearch/>


</Bloginfo>



  </Bigconteyno>

  )
}
export default BloginfoConponent