import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import { cn } from "@/lib/tailwind-utils";

const AppLayout = ({ children, className }) => {
  return (
    <main>
      <Navbar />
      <div className={cn("py-[64px] overflow-x-hidden ", className)}>{children}</div>
      <Footer />
    </main>
  );
};

export default AppLayout;
