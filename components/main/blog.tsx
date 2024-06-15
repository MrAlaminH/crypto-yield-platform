// pages/blog.tsx
import BlogPost from "../sub/BlogPost";

const Blog = () => {
  return (
    <div id="blog" className="min-h-screen bg-gray-900 py-10">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-12">Our Blog</h1>
      
      <div className="grid gap-6 px-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-auto max-w-7xl">
        <BlogPost
          title="Our first office"
          date="Aug 15, 2024"
          author="Jese Leos"
          readTime="16 min read"
          imageUrl="https://images.unsplash.com/photo-1717954681377-8c3021746004?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // replace with actual path or URL
          authorImageUrl="https://images.unsplash.com/photo-1717954681377-8c3021746004?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // replace with actual path or URL
        />
        <BlogPost
          title="We partnered up with Google"
          date="Aug 15, 2021"
          author="Roberta Casas"
          readTime="16 min read"
          imageUrl="https://images.unsplash.com/photo-1578008941494-00aabeaef632?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // replace with actual path or URL
          authorImageUrl="https://images.unsplash.com/photo-1578008941494-00aabeaef632?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // replace with actual path or URL
        />
        <BlogPost
          title="Our first project with React"
          date="Aug 15, 2021"
          author="Sofia McGuire"
          readTime="16 min read"
          imageUrl="https://images.unsplash.com/photo-1711175017229-cc6b701f28c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // replace with actual path or URL
          authorImageUrl="https://images.unsplash.com/photo-1711175017229-cc6b701f28c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // replace with actual path or URL
        />
      </div>
    </div>
  );
};

export default Blog;
