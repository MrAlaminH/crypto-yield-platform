// components/BlogPost.tsx
import Image from 'next/image';

interface BlogPostProps {
  title: string;
  date: string;
  author: string;
  readTime: string;
  imageUrl: string;
  authorImageUrl: string;
}

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  date,
  author,
  readTime,
  imageUrl,
  authorImageUrl,
}) => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-sm mx-auto">
      <Image className="rounded-lg" src={imageUrl} alt={title} width={400} height={225} />
      <div className="mt-4">
        <span className="bg-blue-600 text-xs font-semibold inline-block py-1 px-2 rounded-full uppercase last:mr-0 mr-1">
          Article
        </span>
        <h2 className="text-lg font-bold mt-2">{title}</h2>
        <p className="text-sm text-gray-400 mt-2">
          Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.
        </p>
        <div className="flex items-center mt-4">
          <Image className="w-10 h-10 rounded-full" src={authorImageUrl} alt={author} width={40} height={40} />
          <div className="ml-3">
            <p className="text-sm font-semibold">{author}</p>
            <p className="text-sm text-gray-400">{date} · {readTime} read</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
