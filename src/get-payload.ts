import dotenv from "dotenv";
import path from "path";
import { InitOptions } from "payload/config";

dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});

let cached = (global as any).payload;

if (!cached) {
  cached = (global as any).payload = {
    client: null,
    promise: null,
  };
}

interface Args {
  intiOptions?: Partial<InitOptions>;
}

export const getPayloadClient = async ({ initOptions }: Args) => {
  if (!process.env.PAYLOAD_SECRET) {
  }
};
