import { useState } from "react";
import axios from "axios";

import Card from "@/components/Card.js";
import Pagination from "@/components/Pagination";
import Navbar from "@/components/Navbar";

// const deploy_server_url = "http://localhost:3000";
const deploy_server_url = "https://techblog-beta.vercel.app";

export default function blog(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20;

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const paginate = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return items.slice(startIndex, startIndex + pageSize);
  };

  const paginatedPosts = paginate(props.posts, currentPage, pageSize);

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between`}>
      <>
        <Navbar active={"Blogs"} />
        <div className="app-posts">
          {paginatedPosts.map((post) => (
            <Card key={post._id} post={post} />
          ))}
        </div>
        <Pagination
          items={props.pagesNum} // 100
          currentPage={currentPage} // 1
          pageSize={pageSize} // 10
          onPageChange={onPageChange}
        />
      </>
    </main>
  );
}

export const getServerSideProps = async () => {
  const response = await axios.get(`${deploy_server_url}/api/posts`);
  const result = response.data;
  const { data, pages: totalPages } = await result;
  return {
    props: {
      posts: data,
      pagesNum: totalPages,
    },
  };
};
