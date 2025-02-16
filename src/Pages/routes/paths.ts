// ----------------------------------------------------------------------

function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_LANDING = "/";

// ----------------------------------------------------------------------

export const PATH_PAGE = {
  page403: "/403",
  page404: "/404",
  page500: "/500",
};


export const PATH_LANDING = {
  root: ROOTS_LANDING,
  landing: {
    root: path(ROOTS_LANDING, ""),
  },
};
