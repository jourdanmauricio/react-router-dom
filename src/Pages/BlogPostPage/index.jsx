import { useNavigate, useParams } from 'react-router-dom';
import { blogData } from '../../data/blogData';

const BlogPostPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const blogPost = blogData.find((post) => post.slug === slug);

  const returnToBlog = () => {
    // navigate(-1);
    navigate('/blog');
  };

  return (
    <>
      {blogPost && (
        <>
          <div className='relative my-8 '>
            <button className='absolute border rounded p-2' onClick={returnToBlog}>
              <span className='font-medium'>&lt; Volver atrás</span>
            </button>
            <h2 className='text-2xl text-center font-bold'>{blogPost.title}</h2>
          </div>
          <p className='my-8'>{blogPost.content}</p>
          <p>{blogPost.author}</p>
        </>
      )}
    </>
  );
};

export { BlogPostPage };
