import type { RenderOptions } from "@testing-library/react";
import { render as originalRender } from "@testing-library/react";
import type React from "react";

import { FakeNextJsApplication } from "./applicationUtils";

type CustomTestWrapperOptions = {
  query?: Record<string, string | Array<string> | undefined>;
  isUserAuthenticated?: boolean;
};

export const TestWrapper = ({
  query,
  children
}: {
  children?: React.ReactNode;
} & CustomTestWrapperOptions) => {
  return (
    <FakeNextJsApplication router={{ query }}>
      {/* <ApplicationKernel applicationEnvironment="test"> */}
      {/* <FakeAuth0Provider
        isAuthenticated={isUserAuthenticated}
        identityNamespace={process.env.AUTH0_IDENTITY_NAMESPACE ?? ""}
        user={user}
      > */}
      {children}
      {/* </FakeAuth0Provider> */}
      {/* </ApplicationKernel> */}
    </FakeNextJsApplication>
  );
};

const customRender = (
  ui: React.ReactElement,
  options?: RenderOptions & CustomTestWrapperOptions
): ReturnType<typeof originalRender> => {
  return originalRender(ui, {
    wrapper: ({ children }) => <TestWrapper {...options}>{children}</TestWrapper>,
    ...options
  });
};

// To many element to by explicitly imported/exported
// eslint-disable-next-line import/export
export * from "@testing-library/react";

// eslint-disable-next-line import/export
export { customRender as render };
