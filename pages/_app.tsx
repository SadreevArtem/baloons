import { BaseLayout } from "@/layouts/BaseLayout/BaseLayout";
import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
 
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = (Component as NextPageWithLayout).getLayout ?? ((page: ReactElement) => page)
  const queryClient = new QueryClient()
  return getLayout(
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
  // return (
  //   <>
  //     {/* <script
  //       dangerouslySetInnerHTML={{
  //         __html: `
  //         (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
  //         m[i].l=1*new Date();
  //         for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
  //         k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
  //         (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
       
  //         ym(97644952, "init", {
  //              clickmap:true,
  //              trackLinks:true,
  //              accurateTrackBounce:true,
  //              webvisor:true
  //         });
  //             `,
  //       }}
  //     />
  //     <noscript>
  //       <div>
  //         <img
  //           src="https://mc.yandex.ru/watch/97644952"
  //           style={{ position: "absolute", left: "-9999px" }}
  //           alt=""
  //         />
  //       </div>
  //     </noscript> */}
      
  //       <Component {...pageProps} />
      
  //   </>
  // );
}
