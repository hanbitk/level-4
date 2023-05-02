import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPostByID } from "../redux/modules/posts";
import { StContainer } from "../styles/Container.styles";
import {
  StPostTitle,
  StPostDescription,
  iconStyle,
  linkStyle
} from "../styles/FeedDetail.styles";
import { MdArrowBackIos, MdOutlineEditNote } from "react-icons/md";

function FeedDetail() {
  const post = useSelector((state) => state.posts.post);
  console.log(post.title);
  const dispatch = useDispatch();

  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    dispatch(getPostByID(id));
  }, [dispatch, id]);

  return (
    <StContainer
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <div style={iconStyle}>
        <Link to="/feeds" style={linkStyle}>
          <MdArrowBackIos style={{ fontSize: "20px" }} />
        </Link>
        <button onClick={() => alert("수정")}>
          <MdOutlineEditNote style={{ fontSize: "30px" }} />
        </button>
      </div>

      <div>
        <StPostTitle>{post.title}</StPostTitle>
        <StPostDescription>
          <p>{post.description}</p>
        </StPostDescription>
      </div>
    </StContainer>
  );
}

export default FeedDetail;
