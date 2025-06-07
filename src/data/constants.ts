import { env } from "~/env";

export const SITE_CONFIG = {
  title: "Katalis",
  headline: "Cara blogging dengan mudah dan simple",
  description:
    "Katalis adalah aplikasi yang membantumu blogging dengan mudah dan simple",
  og: {
    title: "Katalis",
    author: "aazis7",
    image: "/og-image.png",
  },
  tw: {
    title: "Katalis",
    author: "aazis7",
    card: "summary_large_image",
    image: "/tw-image",
  },
  author: {
    name: "aazis7",
    url: "https://github.com/aazis7",
  },
} as const;
