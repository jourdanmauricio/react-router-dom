import { useNavigate, useParams } from 'react-router-dom';
import { blogData } from '../../data/blogData';
import { useAuth } from '../../AuthContext';

const BlogPost = () => {
  const { slug } = useParams();

  const auth = useAuth();
  const navigate = useNavigate();

  const blogPost = blogData.find((post) => post.slug === slug);

  const canDelete = auth.user && (auth.user?.isAdmin || blogPost?.author === auth.user?.username);

  const returnToBlog = () => {
    // navigate(-1);
    navigate('/blog');
  };

  const commentPost = () => {
    if (!auth.user) {
      navigate('/login', { state: { from: `/blog/${slug}` } });
    } else {
      navigate(`/blog/${slug}/comment`);
    }
  };

  return (
    <>
      {blogPost && (
        <>
          <div className='relative my-8 '>
            <button className='absolute border rounded p-2' onClick={returnToBlog}>
              <span className='font-medium'>&lt; Ocultar</span>
            </button>
            <h3 className='text-2xl text-center font-bold'>{blogPost.title}</h3>
          </div>
          <p className='my-8'>{blogPost.content}</p>
          <p>{blogPost.author}</p>
          {canDelete && <button className='border rounded p-2 mt-8'>Eliminar post</button>}
          <button onClick={commentPost} className='border rounded p-2 mt-8'>
            Comentar post
          </button>
        </>
      )}
    </>
  );
};

export default BlogPost;
