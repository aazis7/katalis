import { env } from "~/env";

export const SITE_CONFIG = {
  title: "Katalis",
  description: "",
  url:
    env.NODE_ENV === "production"
      ? process.env.VERCEL_URL!
      : "http://localhost:3000",
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
    url: "https://github.com/aazis7"
  },
} as const;
