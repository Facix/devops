export type ApiError = {
  response?:
    | {
        data?:
          | {
              title: string | undefined;
            }
          | undefined;
      }
    | undefined;
};
