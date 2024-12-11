// page.tsx 
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold my-4">Next.js Rendering Strategies</h1>
      <ul className="list-none">
        <li className="mb-2">
          <Link href="/person-s" className="text-blue-500 hover:text-blue-700">
            Server-Side Rendering Page
          </Link>
        </li>
        <li className="mb-2" >
          <Link href="/person-c" className="text-blue-500 hover:text-blue-700">
            Client-Side Rendering Page
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/api/person" className="text-blue-500 hover:text-blue-700">
            GET API for People
          </Link>
        </li>
      </ul>

      <footer className="absolute bottom-0 w-full text-center pb-4">
        <p>Authored by Callum Bir</p>
        <Link href="https://github.com/gocallum" className="text-blue-500 hover:text-blue-700">Visit my GitHub</Link>
      </footer>
    </div>
  );
};

export default HomePage;
