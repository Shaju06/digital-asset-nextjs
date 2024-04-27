"use client";

import { FC } from "react";

interface VerifyEmailProps {
  token: string;
}

const VerifyEmail: FC<VerifyEmailProps> = (props) => {
  console.log("hello");
  const { token } = props;
  return <p>Verify</p>;
};

export default VerifyEmail;
