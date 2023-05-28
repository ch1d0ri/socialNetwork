import style from './MyPosts.module.css'
import Post from './Posts/Post';
import React from 'react'



const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} LikeCount={p.LikeCount} photo={p.photo}/>)
    let newPostElement = React.createRef();

    let posting = () => {
        props.addPost();
    }
    let onPostChange = () =>{
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}  value={props.text}/>
                </div>
                <div>
                    <button onClick={posting}>send post</button>
                </div>
            </div>
            <div>
                New post
            </div>
            <div className={style.item}>
                {postsElements}
            </div>
        </div>

    );

}
export default MyPosts;