import Router from "next/router";
import NProgress from "nprogress";

export const configureNProgress = () => {
  NProgress.configure({ showSpinner: false });
};

export const addNProgressRouteChangeListeners = () => {
  Router.events.on("routeChangeStart", (url) => {
    if (url === "/random") {
      NProgress.start();
    }
  });

  Router.events.on("routeChangeComplete", () => NProgress.done());

  Router.events.on("routeChangeError", () => NProgress.done());
};

const configureAndRunNProgress = () => {
  configureNProgress();
  addNProgressRouteChangeListeners();
};

export default configureAndRunNProgress;
