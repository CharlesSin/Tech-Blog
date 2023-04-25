import Head from "next/head";

import "@/styles/globals.css";
import "@/styles/error.css";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>查尔斯技术笔记</title>

        <meta charSet="UTF-8" />
        <meta name="description" content="查尔斯技术笔记，在这里记录很多技术帖子和技能" />
        <meta name="keywords" content="查尔斯技术笔记, 技术, 技术帖子, React, Javascript, React-Native, Docker, Nodejs" />
        <meta name="author" content="Charles_Sin" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Google */}
        <meta name="robots" content="all, max-image-preview:large" />
        <meta name="og:title" property="og:title" content="Here memorize alot tech post, roadmap and skill." />
        <meta name="og:type" property="og:type" content="article" />
        <meta name="og:url" property="og:url" content="https://tech-blog-gules.vercel.app/" />
        <meta name="og:image" property="og:image" content="https://tech-blog-gules.vercel.app/cover.jpg" />

        <meta name="google-site-verification" content="eP82dEE--Mtf-ypVN9QO-B9kd-C5uLVNT_Ce_bdha24" />

        <link rel="canonical" href="https://tech-blog-gules.vercel.app/" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
