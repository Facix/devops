import "assets/css/main.css";

import { Head } from "components/common";
import { useNProgress } from "hooks";
import type { NextPages } from "interfaces/pages";
import type { AppProps } from "next/app";
import { Quicksand } from "next/font/google";
import type { FC, ReactNode } from "react";
import { useEffect } from "react";

import config from "../config/seo_meta.json";

const inter = Quicksand({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"]
});

const Noop: FC<{ children: ReactNode }> = (props) => <>{props.children}</>;

const MyApp = ({ Component, pageProps }: AppProps<NextPages>) => {
  const Layout: FC<NextPages> = (Component as any).Layout || Noop;

  useNProgress();

  useEffect(() => {
    document.body.classList?.remove("loading");
  }, []);

  return (
    <div id="main" className={`${inter.className}`}>
      <Head config={config} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
};

export default MyApp;
