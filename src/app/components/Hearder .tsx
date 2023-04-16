import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-500">ブログタイトル</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" passHref>
                <p className="text-gray-700 hover:text-gray-900">ホーム</p>
              </Link>
            </li>
            <li>
              <Link href="/category" passHref>
                <p className="text-gray-700 hover:text-gray-900">カテゴリー</p>
              </Link>
            </li>
            <li>
              <Link href="/archive" passHref>
                <p className="text-gray-700 hover:text-gray-900">アーカイブ</p>
              </Link>
            </li>
            <li>
              <Link href="/contact" passHref>
                <p className="text-gray-700 hover:text-gray-900">
                  お問い合わせ
                </p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
