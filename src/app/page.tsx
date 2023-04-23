import Head from "next/head";
import Article from "./components/Article";
import Header from "./components/Hearder ";
import Footer from "./components/Footer";
import List from "./components/List";
import ArticleLink from "./components/ArticleLink";
import Link from "next/link";

export default function Page() {
  const blogData = [
    { id: 1, title: "タイトル１", content: "コンテンツ1" },
    { id: 2, title: "タイトル２", content: "コンテンツ２" },
  ];
  return (
    <div className="bg-blue-50">
      <Head>
        <title>まとめキャット速報</title>
        <meta name="description" content="ブログの説明文" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex">
          <List className="basis-3/4">
            <h2 className="text-gray-700 font-bold text-lg">最新の投稿</h2>
            {blogData.map((item) => {
              return (
                <Link key={item.id} href={`/${item.id}`}>
                  <Article
                    title={item.title}
                    content={item.content}
                    className="mb-2"
                  />
                </Link>
              );
            })}
          </List>
          <div className="basis-1/5" />
          <div className="drawer drawer-mobile basis-1/3">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
              <label
                htmlFor="my-drawer-2"
                className="btn btn-primary drawer-button lg:hidden"
              >
                Open drawer
              </label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
              <ul className="menu p-4 text-base-content">
                <li>
                  <ArticleLink
                    className="mb-2"
                    title="最近の投稿"
                    contentTitle="ああああタイトル"
                    content="ああああああ"
                  />
                </li>
                <li>
                  <ArticleLink
                    className=""
                    title="人気の投稿"
                    contentTitle="いいいいタイトル"
                    content="いいいいいいいい"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
