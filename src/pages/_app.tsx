import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import Layout from "./layout";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <ChakraProvider>
      <Layout>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </Layout>
    </ChakraProvider>
  );
};

export default api.withTRPC(appWithTranslation(MyApp));
