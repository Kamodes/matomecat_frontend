import Head from "next/head";
import Article from "./components/Article";
import Header from "./components/Hearder ";
import Footer from "./components/Footer";
import List from "./components/List";
import ArticleLink from "./components/ArticleLink";

export default function Page() {
  return (
    <div className="bg-blue-50">
      <Head>
        <title>ブログタイトル</title>
        <meta name="description" content="ブログの説明文" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex">
          <List className="basis-3/4">
            <h2 className="text-gray-700 font-bold text-lg">最新の投稿</h2>
            <Article
              title="記事のタイトル"
              content="記事の内容ああああああああああああ"
              className="mb-2"
            />
            <Article
              title="記事のタイトル２"
              content="いいいいいいいいい"
              className="mb-2"
            />
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
                  <ArticleLink title="最近の投稿" content="ああああああ" />
                </li>
                <li>
                  <ArticleLink title="人気の投稿" content="いいいいいいいい" />
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
