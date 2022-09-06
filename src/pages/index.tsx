import { GetServerSideProps } from "next";
import React from "react";
import SEO from "../components/SEO";
interface Post {
  id: string;
  title: string;
}

interface HomeProps {
  posts: Post[];
}

export default function Home ({posts}:HomeProps) {
/*   const [ posts, setPosts ] = React.useState<Post[]>( [] );
  React.useEffect( () => {
    fetch( 'http://localhost:3333/posts' )
      .then( ( response ) => {
        response.json()
        .then( ( data ) => { setPosts( data ) } );
      } )
  }, [] ); */

  console.log( posts );

  return (
    <div>
      <SEO title="Home"/>
      <h1>Posts</h1>
      <ul>
        { posts && posts.map( ( { title, id } ) => (
          <li key={ id }>{ title }</li>
        ) ) }
      </ul>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const response = await fetch( 'http://localhost:3333/posts' );
  const posts = await response.json();
  return {
    props: {
      posts,
    }
  }
}