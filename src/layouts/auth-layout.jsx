import { cn } from "@/lib/tailwind-utils";

const AuthLayout = ({ children, className }) => {
  return <main className={cn(className)}>{children}</main>;
};

export default AuthLayout;
