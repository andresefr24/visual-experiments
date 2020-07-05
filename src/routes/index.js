export const routes = (location) =>
  [
    { path: "/", name: "Home" },
    { path: "/experiment-1", name: "Experiment 1" },
  ].map(({ path, name }) => ({
    path,
    active:
      path === "/"
        ? location?.pathname === path
        : location?.pathname?.includes(path),
    name,
  }));
