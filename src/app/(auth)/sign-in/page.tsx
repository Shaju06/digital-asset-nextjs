"use client";

import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import {
  TAuthCrendentionalsValidator,
  AuthCredentionalValidator,
} from "@/lib/validators/account-crendentional-validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { trpc } from "@/trpc/client";
import { toast } from "sonner";

const SignIn = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const isSeller = searchParams.get("as") === "seller";
  const origin = searchParams.get("origin");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuthCrendentionalsValidator>({
    resolver: zodResolver(AuthCredentionalValidator),
  });

  const { mutate, isLoading } = trpc.auth.signIn.useMutation({
    onSuccess: () => {
      toast.success("Signed in successfully");
      router.refresh();
      if (origin) {
        router.push(`/${origin}`);
        return;
      }
      if (isSeller) {
        router.push("/sell");
        return;
      }
      router.push("/");
    },
    onError: (err) => {
      if (err.data?.code === "UNAUTHORIZED") {
        toast.error("Invalid email/password");
      }
    },
  });

  const onSubmit = ({ email, password }: TAuthCrendentionalsValidator) => {
    mutate({ email, password });
  };

  return (
    <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
      <div className="flex flex-col max-auto justify-center space-y-6 w-full sm:w-[350px]">
        <div className="flex flex-col justify-center items-center space-y-2 text-center">
          <Icons.logo className="h-20 w-20" />
          <h1 className="text-2xl font-bold">
            {" "}
            Sign in to your {isSeller ? "seller" : ""} account
          </h1>
        </div>
        <div className="grid gap-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-2">
              <div className="grid gap-1 py-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  {...register("email")}
                  className={cn({
                    "focus-visible:ring-red-500": errors.email,
                  })}
                  placeholder="you@example.com"
                />
                {errors?.email && (
                  <p className="text-sm text-red-50">{errors?.email.message}</p>
                )}
              </div>
              <div className="grid gap-1 py-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  {...register("password")}
                  className={cn({
                    "focus-visible:ring-red-500": errors.password,
                  })}
                  placeholder="password"
                />
                {errors?.password && (
                  <p className="text-sm text-red-50">
                    {errors?.password.message}
                  </p>
                )}
              </div>
              <Button>Sign in</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
