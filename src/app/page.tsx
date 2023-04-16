import Head from "next/head";
import Link from "next/link";
import Article from "./components/Ariticle";
import Header from "./components/Hearder ";

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
        <Article
          title="記事のタイトル"
          content="記事の内容ああああああああああああ"
        />
      </main>
      <footer className="bg-gray-200 py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-700">Copyright © 2021</p>
        </div>
      </footer>
    </div>
  );
}
