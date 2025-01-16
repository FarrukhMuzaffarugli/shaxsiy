// 📦 Commentscomponent.js
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Comments2, Comments3, Comments4, Comments5, Comments6, Replymsg, Inputlar, Yangicomment } from "../stylecomponent";
import savatcha from "../../Rasm/savatcha.svg";
import { blogdata } from "../../mock/blog";

// 🔵 Javoblar interfeysi
interface Reply {
  user: string;
  avatar: string;
  message: string;
  date: string;
  replies?: Reply[];
}

// 🔵 Komment interfeysi
interface Comment {
  user: string;
  avatar: string;
  message: string;
  date: string;
  replies?: Reply[];
}

const Commentscomponent = () => {
  const { id } = useParams<{ id: string }>();
  const [replyBox, setReplyBox] = useState<{ commentIndex: number | null; replyChain: number[] }>({
    commentIndex: null,
    replyChain: [],
  });
  const [replyText, setReplyText] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [commentText, setCommentText] = useState<string>("");
  const [comments, setComments] = useState<Comment[]>(blogdata.find((item) => item.id === id)?.comments || []);

  if (!comments.length) return <h2>Blog topilmadi!</h2>;

  // 🔵 Sana formatlash
  const formatCommentDate = (dateString: string): string =>
    new Date(dateString).toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone || "Asia/Seoul",
    });

  // 🔵 Javob qo‘shish
  const handleAddReply = (commentIndex: number, replyChain: number[]) => {
    if (!replyText.trim()) return;

    const newReply: Reply = {
      user: "Noname",
      avatar: "https://via.placeholder.com/40",
      message: replyText,
      date: new Date().toISOString(),
    };

    const updatedComments = [...comments];

    const addReplyRecursive = (replies: Reply[] | undefined, chain: number[]): Reply[] =>
      chain.length === 0
        ? replies ? [...replies, newReply] : [newReply]
        : replies?.map((reply, index) =>
            index === chain[0] ? { ...reply, replies: addReplyRecursive(reply.replies, chain.slice(1)) } : reply
          ) || [];

    updatedComments[commentIndex].replies = addReplyRecursive(updatedComments[commentIndex].replies, replyChain);

    setComments(updatedComments);
    setReplyText("");
    setReplyBox({ commentIndex: null, replyChain: [] });
  };

  // 🔵 Yangi komment qo‘shish
  const handleAddComment = () => {
    if (!userName.trim() || !commentText.trim()) return;

    const newComment: Comment = {
      user: userName,
      avatar: "https://via.placeholder.com/40",
      message: commentText,
      date: new Date().toISOString(),
      replies: [],
    };
    setComments([newComment, ...comments]);
    setUserName("");
    setUserEmail("");
    setCommentText("");
  };

  // 🔵 Replylarni chiqarish
  const renderReplies = (replies: Reply[] | undefined, commentIndex: number, replyChain: number[] = []) =>
    replies?.map((reply, replyIndex) => {
      const currentChain = [...replyChain, replyIndex];
      return (
        <div key={`reply-${commentIndex}-${currentChain.join("-")}`}>
          <Comments4>
            <img src={reply.avatar} alt={reply.user} />
            <Comments5>
              <Replymsg>
                <div>
                  <p>{formatCommentDate(reply.date)}</p>
                  <h2>{reply.user}</h2>
                </div>
                <h3 onClick={() => setReplyBox({ commentIndex, replyChain: currentChain })}>Reply</h3>
              </Replymsg>
              <h6>{reply.message}</h6>
            </Comments5>
          </Comments4>
          {replyBox.commentIndex === commentIndex && JSON.stringify(replyBox.replyChain) === JSON.stringify(currentChain) && (
            <Comments6>
              <input
                type="text"
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Javob yozing..."
              />
              <button onClick={() => handleAddReply(commentIndex, currentChain)}>Send</button>
            </Comments6>
          )}
          {renderReplies(reply.replies, commentIndex, currentChain)}
        </div>
      );
    });

  // 🔵 Kommentlar va yangi sharh qo‘shish
  return (
    <div>
      <Comments2>
        {comments.map((comment, index) => (
          <div key={index}>
            <Comments3>
              <img src={comment.avatar} alt={comment.user} />
              <Comments5>
                <Replymsg>
                  <div>
                    <p>{formatCommentDate(comment.date)}</p>
                    <h2>{comment.user}</h2>
                  </div>
                  <h3 onClick={() => setReplyBox({ commentIndex: index, replyChain: [] })}>Reply</h3>
                </Replymsg>
                <h6>{comment.message}</h6>
              </Comments5>
            </Comments3>
            {replyBox.commentIndex === index && replyBox.replyChain.length === 0 && (
              <Comments6>
                <input
                  type="text"
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Javob yozing..."
                />
                <button onClick={() => handleAddReply(index, [])}>Send</button>
              </Comments6>
            )}
            {renderReplies(comment.replies, index)}
          </div>
        ))}
      </Comments2>
      <Yangicomment>
        <h3>Add A Review</h3>
        <Inputlar>
          <input type="email" placeholder="Your email*" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
          <input type="text" placeholder="Your name*" value={userName} onChange={(e) => setUserName(e.target.value)} />
        </Inputlar>
        <textarea placeholder="Your comment*" value={commentText} onChange={(e) => setCommentText(e.target.value)} />
        <button onClick={handleAddComment}><img src={savatcha} alt="icon" /> Write your review</button>
      </Yangicomment>
    </div>
  );
};

export default Commentscomponent;












