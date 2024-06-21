import { Button } from "@/components/ui/button";
import AppLayout from "@/layouts/app-layout";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <AppLayout>
      <div className="h-svh">
        <div className="m-auto flex h-full w-full flex-col items-center justify-center gap-2">
          <h1 className="text-[7rem] font-bold leading-tight">404</h1>
          <span className="font-medium">Oops! Page Not Found!</span>
          <p className="text-center text-muted-foreground">
            It seems like the page {"you're"} looking for <br />
            does not exist or might have been removed.
          </p>
          <div className="mt-6 flex gap-4">
            <Button variant="outline" onClick={() => navigate(-1)}>
              Go Back
            </Button>
            <Button onClick={() => navigate("/")}>Back to Home</Button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
