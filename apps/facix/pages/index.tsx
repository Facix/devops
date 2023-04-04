import type { NextPage } from "next";
import { NextSeo } from "next-seo";

const HomePage: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Facix"
        description=""
        openGraph={{
          type: "siteweb",
          title: "Facix",
          description: "",
          url: "",
          images: [
            {
              url: "",
              alt: "",
              width: 230,
              height: 230
            }
          ]
        }}
        twitter={{ cardType: "summary_large_image" }}
      />
      <h1>Hello! devops</h1>
    </>
  );
};

export default HomePage;
