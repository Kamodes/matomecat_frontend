const Article = ({
  title,
  content,
  className,
}: {
  title: string;
  content: string;
  className?: string;
}) => {
  return (
    <article className={`bg-white p-4 rounded-md shadow-md ${className}`}>
      <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      <p className="text-gray-700 my-4">{content}</p>
    </article>
  );
};

export default Article;
