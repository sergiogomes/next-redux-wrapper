import App from "next/app";
import React from "react";
import { wrapper } from "../redux/store";

class MyApp extends App {
  static getInitialProps = async ({ Component, ctx }) => {
    return {
      pageProps: {
        // Call page-level getInitialProps
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}),
        // Some custom thing for all pages
        pathname: ctx.pathname,
      },
    };
  };

  render() {
    //pageProps that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
    const { Component, pageProps } = this.props;

    return <Component {...pageProps} />;
  }
}

//withRedux wrapper that passes the store to the App Component
export default wrapper.withRedux(MyApp);
