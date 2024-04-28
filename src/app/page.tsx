import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductReel from "@/components/ProductReel";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: "Instant Delivery",
    Icon: ArrowDownToLine,
    description:
      "Get your assets delivered to your email in seconds and download them right away.",
  },
  {
    name: "Guranteed Quality",
    Icon: CheckCircle,
    description:
      "Every asset on our platform is verified by our team to ensure quality standards. Not happy?",
  },
  {
    name: "For the Planet",
    Icon: Leaf,
    description:
      "We`ve pledged 1% of sale to the preservation and restoration of the nature.",
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl">
            {" "}
            Your marketplace for high-quality{" "}
            <span className="text-blue-600">digital assets</span>.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to Digital Asset. Every asset on our <br />
            platform is verified by our team to ensure our <br />
            highest quality standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/product" className={buttonVariants()}>
              Browse Trendig
            </Link>
            <Button variant={"secondary"}>Our quality promise &rarr; </Button>
          </div>
          <ProductReel
            title={"Brand New"}
            subTitle={""}
            href="/products"
            query={{ sort: "desc", limit: 4 }}
          />
        </div>
      </MaxWidthWrapper>
      <section className="border-t border-gray-200 ">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-center md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0  flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-secondary text-secondary-900">
                    {<perk.Icon className="w1/3 h-1/3" />}
                  </div>
                </div>
                <div className="mt-6 md:mr-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-secondary-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 font-normal text-xs text-muted-foreground ">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
