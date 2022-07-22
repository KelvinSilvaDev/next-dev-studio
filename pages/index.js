import Head from "next/head";

import Layout from "../components/layout";
import Jumbotron from "../components/jumbotron";
import ShortText from "../components/short-text";
import TwoUp from "../components/2-up";
import TextAndImage from "../components/text-and-image";
import Blog4Home from "../components/blog-4-home";

import { getHomePageData, getPosts4Home } from "../lib/api";
import { CMS_NAME } from "../lib/constants";

export default function Index({ homeData, posts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Home | {CMS_NAME}</title>
        </Head>
        <Jumbotron
          title="Teste"
          subtitle="Lorem ipsum"
          imageUrl={homeData.image}
        />
        <ShortText
          heading="Porque M3MA?"
          text="Venha ler um pouco mais e conheça um breve resumo sobre a história da igreja m3ma"
        />
        <TwoUp intro={homeData.intro} products={homeData.products} />
        <TextAndImage
          heading="O que fazemos?"
          text="Estamos nessa terra por um motivo, e no m3ma temos a visão e o entendimento de que Jesus nos colocou aqui para fazer a diferença na vida das pessoas"
          buttonText={homeData.values.buttonText}
          buttonLink={homeData.values.buttonLink}
          image={homeData.values.image}
        />
        <Blog4Home posts={posts} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const homeData = getHomePageData();
  const posts = getPosts4Home();
  return {
    props: { homeData, posts },
  };
}
