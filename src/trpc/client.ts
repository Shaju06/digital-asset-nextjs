import { createTRPCReact } from "@trpc/react-query";
import { AppROuter } from ".";

export const trpc = createTRPCReact<AppROuter>({});
