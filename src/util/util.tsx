export const createClassName =
  (classes: Record<string, string>) =>
  (...classNames: string[]) =>
    classNames.map((k) => classes[k]).join(" ");
