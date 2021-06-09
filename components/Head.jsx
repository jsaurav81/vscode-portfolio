import Head from "next/head";

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Abdulrasheed Ibrahim is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="abdull, abdulrasheed ibrahim, abdoul, web developer, nitin web developer, nitin developer, mern stack, nitin portfolio"
      />
      <meta property="og:title" content="Abdulrasheed's Portfolio" />
      <meta property="og:image" content="/public/me.png" />
      <meta
        property="og:description"
        content="Web / Mobile Application Developer"
      />
      <meta property="og:url" content="https://www.abdull.dev" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="627" />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Abdulrasheed Ibrahim | Web / Mobile App Developer"
      />
      <meta
        name="twitter:description"
        content="JavaScript, Python, ReactJS, React Native and Django"
      />
      <meta name="twitter:image" content="/public/me.png" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: "Abdulrasheed Ibrahim",
};
