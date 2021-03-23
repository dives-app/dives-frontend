import { AppInitialProps } from 'next/app';
import { NextComponentType, NextPage, NextPageContext } from 'next';
import { NextRouter } from 'next/router';

type LayoutProperty = {
  layout: (page: JSX.Element) => JSX.Element;
};

/**
 * Custom AppProps based on AppProps from 'next/app'.
 * The difference: added layout property to the Component.
 */
export type AppProps<P = {}> = AppInitialProps & {
  Component: NextComponentType<NextPageContext, any, P> & LayoutProperty;
  router: NextRouter;
  __N_SSG?: boolean;
  __N_SSP?: boolean;
};

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & LayoutProperty;
