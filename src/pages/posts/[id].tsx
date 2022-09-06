import { GetStaticPaths, GetStaticProps } from 'next';
import {useRouter} from 'next/router';

interface Comment{
  id: string;
  body: string;
}

interface CommentsProps {
  comments: Comment[];
}

export default function Post({comments}: CommentsProps) {
  const router = useRouter()
/*   if(router.isFallback){
    return <p>Carregando...</p>
  } */

  return (
    <div>
      <ul>
        { comments && comments.map( ( { body, id } ) => (
          <li key={ id }>{ body }</li>
        ) ) }
      </ul>
    </div>
  );
}

export const  getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch( 'http://localhost:3333/posts' );
  const posts = await response.json();
  const paths = posts.map(({id}) => {
    return {
      params: {id: String(id)}
    }
  });
  return {
    paths, //paths : [] = gera a página no primeiro acesso, no segundo acesso ela já é estática
    fallback: true, //false= gera 404 quando a página não existe
  }
}

export const getStaticProps: GetStaticProps<CommentsProps> = async (context) => {
  const {id} = context.params;
  const response = await fetch( `http://localhost:3333/comments?postId=${id}` );
  const comments = await response.json();
  return {
    props: {
      comments,
    },
    revalidate: 5,
  }
}

