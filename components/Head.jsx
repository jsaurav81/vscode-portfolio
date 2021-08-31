import Head from "next/head";

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Saurav Jha is an avid Frontend web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="saurav, saurav Jha, saurav, web developer, frontend web developer, UI, frontend, web developer,"
      />
      <meta property="og:title" content="Saurav's Portfolio" />
      <meta
        property="og:image"
        content="https://github.com/jsaurav81/vscode-portfolio/blob/main/public/me.jpg"
      />
      <meta
        property="og:description"
        content="Frontend web Developer"
      />
      <meta property="og:url" content="" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="627" />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Saurav Jha | Frontend web Developer"
      />
      <meta
        name="twitter:description"
        content="JavaScript, Python, ReactJS, HTML, CSS, Rest Api"
      />
      <meta
        name="twitter:image"
        content="https://github.com/jsaurav81/vscode-portfolio/blob/main/public/me.jpg"
      />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: "Saurav Jha",
};
