import { AppInitialProps } from 'next/app';
import { NextComponentType, NextPageContext } from 'next';
import { NextRouter } from 'next/router';

export type LayoutProperty = {
  layout?: (page: JSX.Element) => JSX.Element;
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
