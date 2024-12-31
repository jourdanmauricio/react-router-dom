import { Link, Outlet } from 'react-router-dom';
import { blogData } from '../../data/blogData';

const BlogLink = ({ post }) => {
  return (
    <li className='my-2'>
      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
    </li>
  );
};

const BlogPage = () => {
  return (
    <>
      <h1 className='text-2xl my-8 font-bold text-center'>BlogPage</h1>

      <ul>
        {blogData.map((post) => (
          <BlogLink key={post.id} post={post} />
        ))}
      </ul>

      {/* Nested Routes */}
      <Outlet />
    </>
  );
};
export { BlogPage };
