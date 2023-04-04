import { useRouter } from "next/router";
import { type NextSeoProps, NextSeo as Seo } from "next-seo";
import type { FC } from "react";

const NextSeo: FC<NextSeoProps> = ({ title, description, ...props }) => {
  const { pathname } = useRouter();

  return (
    <Seo
      {...props}
      title={`${title} - Facix`}
      description={description}
      canonical={`https://dashoard-facix.vercel.app${pathname}`}
      openGraph={{
        title: `${title} - Facix`,
        description: description
      }}
    />
  );
};

export default NextSeo;
