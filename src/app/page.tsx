import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "dari tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center px-4">
        <div className="max-w-xl text-center">
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl text-white">
              {hello ? hello.greeting : "Loading tRPC query..."}
            </p>
          </div>
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Katalis</h1>
          <p className="mb-6 text-lg text-neutral-600 sm:text-xl">
            Tempat ide bereaksi. Tulis, baca, atau sekadar mampir.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/blog"
              className="rounded-md bg-neutral-800 px-6 py-3 font-medium text-white transition hover:bg-neutral-700"
            >
              Baca Blog
            </Link>
            <Link
              href="/login"
              className="rounded-md border border-neutral-800 px-6 py-3 font-medium text-neutral-800 transition hover:bg-neutral-100"
            >
              Masuk
            </Link>
          </div>
        </div>
      </main>
    </HydrateClient>
  );
}
