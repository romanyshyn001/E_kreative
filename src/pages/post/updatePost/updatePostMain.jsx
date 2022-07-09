import React, { useState } from "react";
import { updatePostLoading } from "../../../redux/slices/article";
import { useDispatch, useSelector } from "react-redux/es/exports";
import s from './../s.module.css'
import {  useParams } from "react-router-dom";

const UpdatePost = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const user = JSON.parse(window.localStorage.getItem('user'));

    const {post} = useSelector((state) => {
        return {
            post: state.posts.post.find(p => p.id == params.id)
        }}
        )

const [title, setTitle] = useState(post.title)
const [body, setBody] = useState(post.body)

const titleChange = (e) => {
    setTitle(e.target.value)
    // console.log('TARGET TITLE=>', e.target.value)
}
const bodyChange = (e) => {
    setBody(e.target.value)
    // console.log('TARGET BODY=>', e.target.value)
}
    console.log('user', user.id)

    const onSavePostClicked = () => {
        if (title && body) {
          const options = {
            id: params.id, title: title, body: 
            body, userId: user.id, createdAt: null, updatedAt: null}  
          
            dispatch(updatePostLoading(options))
        //   console.log('options => ', options)
        }
      }


    return (
        <section>
          <h2>Edit Post</h2>
          <form>
            <label htmlFor="postTitle">Post Title:</label>
            <input
              type="text"
              id="postTitle"
              name="postTitle"
              value={title}
              onChange={titleChange}
            />
            <label htmlFor="postContent">Content:</label>
            <textarea
              id="postContent"
              name="postContent"
              value={body}
              onChange={bodyChange}
            />
          </form>
          <button type="button" onClick={onSavePostClicked}>
            Save Post
          </button>
        </section>
      )
}
export default UpdatePost














{/* <button className={s.btn} type="submit" onClick={''}                     >
                Edit Post
            </button> */}
            {/* <form onSubmit={updatePost}>
                    <div className='my-2'>
                        <label>Title</label>
                        <div>
                            <input
                                type='text'
                                className='border border-gray-500 p-1 w-full'
                                value={props.post.title}
                                onChange={(e) =>
                                    console.log('e onChange =>', e)
                                }
                            />
                        </div>
                    </div>

                    <div >
                        <label>Description</label>
                        <div>
                            <textarea
                                value={props.post.body}
                                onChange={(e) =>
                                   console.log('e onChange =>', e)
                                }
                            ></textarea>
                        </div>
                    </div>

                    <div>
                    </div>
                </form> */}


                            {/* {post.map(p => <div>
            {p.id == params.id
            ? <div>
                 <form onSubmit={updatePost}>
                    <div className='my-2'>
                        <label>Title</label>
                        <div>
                            <input
                                type='text'
                                className='border border-gray-500 p-1 w-full'
                                value={p.title}
                                onChange={(e) =>
                                    console.log('e onChange =>', e)
                                }
                            />
                        </div>
                    </div>

                    <div >
                        <label>Description</label>
                        <div>
                            <textarea
                                value={p.body}
                                onChange={(e) =>
                                   console.log('e onChange =>', e)
                                }
                            ></textarea>
                        </div>
                    </div>

                    <button type='submit'>
                            Edit Post
                    </button>
                </form>
            </div>
            : null}
        </div>)} */}


        // {post.map(p => <div>
        //     {p.id == params.id
        //     ? <div>
        //          <form onSubmit={updatePost}>
        //             <div className='my-2'>
        //                 <label>Title</label>
        //                 <div>
        //                     <input
        //                         type='text'
        //                         className='border border-gray-500 p-1 w-full'
        //                         value={p.title}
        //                         onChange={(e) => console.log(e.target.value)}
        //                     />
        //                 </div>
        //             </div>

        //             <div >
        //                 <label>Description</label>
        //                 <div>
        //                     <textarea
        //                         value={p.body}
        //                         onChange={(e) =>
        //                            console.log('e onChange =>', e)
        //                         }
        //                     ></textarea>
        //                 </div>
        //             </div>

        //             <button type='submit'>
        //                     Edit Post
        //             </button>
        //         </form>
        //     </div>
        //     : null}
        // </div>)}
