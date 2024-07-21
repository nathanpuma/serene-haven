import Image from "next/image";
import image1 from "@/public/about-1.jpg";
import image2 from "@/public/about-2.jpg";
import { getCabins } from "../_lib/data-service";

export const revalidate = 86400;

export const metadata = {
  title: "About",
};

export default async function Page() {
  const cabins = await getCabins();

  return (
    <div className="grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center">
      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Welcome to The Wild Oasis
        </h1>

        <div className="space-y-8">
          <p>
            Where nature&apos;s beauty and comfortable living blend seamlessly.
            Nestled in the heart of Sweden, this is your sanctuary away from
            home. But it&apos;s not just about the luxurious cabins. It&apos;s
            about the experience of reconnecting with nature and enjoying simple
            pleasures with loved ones.
          </p>
          <p>
            Our {cabins.length} luxury cabins provide a cozy base, but the real
            freedom and peace you&apos;ll find in the surrounding landscapes.
            Wander through serene forests, breathe in the crisp Scandinavian
            air, and watch the northern lights dance above from the warmth of a
            campfire or your private sauna.
          </p>
          <p>
            This is where memorable moments are made, surrounded by
            nature&apos;s splendor. It&apos;s a place to slow down, relax, and
            feel the joy of being together in a beautiful setting.
          </p>
        </div>
      </div>

      <div className="col-span-2">
        <Image
          src={image1}
          alt="Family sitting around a fire pit in front of cabin"
          placeholder="blur"
          quality={80}
        />
      </div>

      <div className="relative aspect-square col-span-2">
        <Image
          src="/about-2.jpg"
          fill
          className="object-cover"
          alt="Family that manages The Wild Oasis"
        />
      </div>

      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Managed by our family since 1962
        </h1>

        <div className="space-y-8">
          <p>
            Our legacy continues as we preserve the natural beauty of our
            surroundings, providing an authentic Swedish experience. Immerse
            yourself in the rich history and culture, enjoy local cuisine, and
            take part in traditional activities. From midsummer celebrations to
            peaceful winter retreats, The Tranquil Haven is your gateway to
            experiencing the charm and serenity of Sweden.
          </p>
          <p>
            Whether you&apos;re here for adventure or relaxation, we&apos;re
            committed to ensuring your stay is unforgettable. Come and create
            lasting memories with us, and discover why The Tranquil Haven has
            been a beloved destination for generations.
          </p>

          <div>
            <a
              href="/cabins"
              className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
            >
              Explore our luxury cabins
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
