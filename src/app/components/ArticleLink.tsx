const ArticleLink = ({
  className,
  title,
  contentTitle,
  content,
}: {
  className?: string;
  title: string;
  contentTitle: string;
  content: string;
}) => {
  return (
    <article
      className={`bg-white p-4 rounded-md shadow-md flex flex-col w-72 ${className}`}
    >
      <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      <div>
        <h3 className="text-gray-700 my-4">{contentTitle}</h3>
        <p>{content}</p>
      </div>
    </article>
  );
};

export default ArticleLink;
