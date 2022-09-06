import { GetStaticProps } from "next";
import SEO from "../../components/SEO";

interface Post {
  id: string;
  title: string;
}

interface PostsProps {
  posts: Post[];
}

export default function Posts ( { posts }:PostsProps ) {
  return (
    <div>
      <SEO title="Posts"/>
      <h1>Listagem de Posts</h1>
      <ul>
        { posts && posts.map( ( { title, id } ) => (
          <li key={ id }>{ title }</li>
        ) ) }
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps<PostsProps> = async () => {
  const response = await fetch( 'http://localhost:3333/posts' );
  const posts = await response.json();
  return {
    props: {
      posts,
    },
    revalidate: 5, //Segundos - A página é regerada a cada 5 segundos, buscando novas informaçõea da API
  }
}
