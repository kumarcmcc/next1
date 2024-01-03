import getPost from "@/lib/getPost";
import getPostComment from "@/lib/getPostComments";

export async function generateMetadata({params}){

    const {id} = params;
    const postPromise = await getPost(id); 
    const commentsPromise = await getPostComment(id); 

    const [post, comments] = await Promise.all([postPromise,commentsPromise]);

      return {
        title:  post.title ,
        description: post.body,
      }
}


export default async function post({params}) {
    const {id} = params;
    const post = await getPost(id);
    const comments = await getPostComment(id);
    


  

  return (
    <div className="mt-6">
        <h2 className="text-3xl bg-green-100 p-5">{post.title}</h2>
        <p>{post.body}</p>

        <div className="mt-6">
          <h2 className="text-red-500 text-2xl">Comments</h2>
          <ul>
            {comments.map(comment =><li key={comment.id}>{comment.name}<p>{comment.email}</p></li>)}
          </ul>
        </div>
    </div>
  )
}
