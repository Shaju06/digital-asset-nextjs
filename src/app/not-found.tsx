import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center flex-col space-y-4 h-screen">
      <div
        aria-hidden="true"
        className="relative mb-4 h-60 w-60 text-muted-foreground"
      >
        <Image
          src={"/hippo-empty-cart.png"}
          alt="empty shopping cart rhino"
          fill
        />
      </div>
      <h2 className="text-4xl font-semibold">Page Not Found</h2>
      <Link
        href="/"
        className="tfont-medium text-primary hover:text-primary-500"
      >
        &rarr; Return Home
      </Link>
    </div>
  );
}
