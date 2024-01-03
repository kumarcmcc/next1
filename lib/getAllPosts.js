

export default async function getAllPosts() {


 const result = await fetch('https://jsonplaceholder.typicode.com/posts');

 if(!result.ok){
    throw new Error("There was an error feaching posts");
 }

 return result.json()
 
}
