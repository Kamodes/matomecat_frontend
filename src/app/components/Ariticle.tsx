const Article = ({ title, content }: { title: string; content: string }) => {
  return (
    <article className="bg-white p-4 rounded-md shadow-md">
      <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      <p className="text-gray-700 my-4">{content}</p>
    </article>
  );
};

export default Article;
