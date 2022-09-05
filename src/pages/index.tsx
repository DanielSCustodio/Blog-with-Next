import React from "react";
interface Post {
  id: string;
  title: string;
}

export default function Home () {
  const [ posts, setPosts ] = React.useState<Post[]>( [] );
  React.useEffect( () => {
    fetch( 'http://localhost:3333/posts' )
      .then( ( response ) => {response.json()
      .then( ( data ) => { setPosts( data ) } );
      })
  }, [] );

  console.log(posts);
  
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts && posts.map(({title, id})=>(
          <li key={id}>{title}</li>
        ))}
      </ul>
    </div>
  );
}
