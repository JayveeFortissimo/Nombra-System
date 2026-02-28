import NotFound from "@/assets/image/NotFound.png";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const [countDown, setCountDown] = useState<number>(5);
  const redirect = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      if (countDown <= 0) {
        return redirect(-1);
      }
      setCountDown((prev) => (prev -= 1));
    }, 2000);

    return () => clearInterval(interval);
  }, [countDown]);

  return (
    <div className="min-h-screen flex justify-center items-center flex-col">
      <img
        src={NotFound}
        alt="Not Found"
        className="w-[30rem] h-auto object-contain"
      />
      <Button variant="blue">
        Go Back <RotateCcw />
      </Button>
      <p className="mt-4">Redirecting in {countDown} seconds</p>
    </div>
  );
};

export default ErrorPage;
