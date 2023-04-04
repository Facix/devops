import { RouterContext } from "next/dist/shared/lib/router-context";
import type { NextRouter } from "next/router";
import * as qs from "qs";
import type React from "react";

type FakeRouterProps = Partial<NextRouter>;

type FakeNextJsApplicationProps = {
  children: React.ReactNode;
  router?: FakeRouterProps;
};

export const routerPushMock = jest.fn().mockResolvedValue(true);
export const routerReplaceMock = jest.fn().mockResolvedValue(true);
export const routerReloadMock = jest.fn().mockReturnValue(null);
export const routerBackMock = jest.fn().mockReturnValue(null);
export const routerForwardMock = jest.fn().mockReturnValue(null);

const FakeNextJsRouter = ({
  children,
  ...router
}: FakeRouterProps & {
  children: React.ReactNode;
}): React.ReactElement<FakeNextJsApplicationProps> => {
  const {
    route = "",
    pathname = "",
    query = {},
    asPath = "",
    basePath = "",
    push = routerPushMock,
    replace = routerReplaceMock,
    reload = routerReloadMock,
    back = routerBackMock,
    forward = routerForwardMock,
    prefetch = async () => undefined,
    beforePopState = () => null,
    isReady = true,
    isFallback = false,
    isLocaleDomain = false,
    isPreview = false,
    events = {
      on: () => null,
      off: () => null,
      emit: () => null
    }
  } = router || {};

  return (
    <RouterContext.Provider
      value={{
        route,
        pathname,
        query,
        asPath: query ? `/fake/as/path?${qs.stringify(query)}` : asPath,
        basePath,
        push,
        replace,
        reload,
        back,
        forward,
        prefetch,
        beforePopState,
        isReady,
        isFallback,
        isLocaleDomain,
        isPreview,
        events
      }}
    >
      {children}
    </RouterContext.Provider>
  );
};

export const FakeNextJsApplication = ({
  children,
  router
}: FakeNextJsApplicationProps): React.ReactElement<FakeNextJsApplicationProps> => {
  return <FakeNextJsRouter {...router}>{children}</FakeNextJsRouter>;
};
