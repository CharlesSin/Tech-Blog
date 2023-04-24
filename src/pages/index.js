import axios from "axios";

// Components
import VerticalCard from "../components/VerticalCard.js";
import Navbar from "../components/Navbar.js";

// const deploy_server_url = "http://localhost:3000";
const deploy_server_url = "https://techblog-beta.vercel.app";

export default function Home(props) {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between`}>
      <Navbar active={"Home"} />
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-2 py-2 sm:px-8 sm:py-8 lg:max-w-7xl lg:px-4">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 text-center">查尔斯技术笔记</h1>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {props.posts.map((post) => (
              <VerticalCard className="shadow-black" key={post._id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export const getServerSideProps = async () => {
  const response = await axios.get(`${deploy_server_url}/api/home`);
  const result = response.data;
  const { data } = await result;
  return {
    props: {
      posts: data,
    },
  };
};
