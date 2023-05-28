import style from './Post.module.css'
const Post = (props) => {
  return (
    <div className={style.item}>
      <img src={props.photo}></img>
      {props.message}
      <div>
        <span>{props.LikeCount} Enot like it!</span>
      </div>
    </div>

  );

}
export default Post;