import VerifyEmail from "@/components/VerifyEmail";
import Image from "next/image";

type SearchParamProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

const VerifyEmailPage = ({ searchParams }: SearchParamProps) => {
  const token = searchParams.token;
  const toEmail = searchParams.to;

  return (
    <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        {token && typeof token === "string" ? (
          <div className="grid gap-6">
            <VerifyEmail token={token} />
          </div>
        ) : (
          <div className="flex flex-col h-full items-center space-y-1 justify-center">
            <div className="relative mb-4 w-40 h-40 text-muted-foreground">
              {" "}
              <Image
                src="/hippo-empty-cart.png"
                fill
                alt="hippo email sent image"
              />
            </div>
            <h3 className="text-2xl font-semibold">Check Your Email</h3>
            {toEmail ? (
              <p>We&apos;ve sent a verification link to </p>
            ) : (
              <p className="text-muted-foreground text-center">
                We&apos;ve sent a verification link to your email.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyEmailPage;
