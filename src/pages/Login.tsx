import Logo from "@/assets/icons/Logo";
import { LoginForm } from "@/components/modules/authentication/LoginForm";
import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import { useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex justify-around items-center py-6 ">
        <div className="flex justify-center items-center gap-3 text-3xl font-bold">
        <Logo />
        WalletX
        </div>
        <Button
          onClick={() => navigate("/")}
          variant="ghost"
          size="lg"
          className="bg-muted cursor-pointer rounded-full flex items-center gap-2 hover:gap-3 justify-center"
        >
          <MoveLeft className="size-6"></MoveLeft>
          <span className="text-lg"> Back Home</span>
        </Button>
      </div>
      <hr />
      <div className="bg-background flex min-h-svh flex-col items-center justify-start gap-6 p-6 md:p-10">
        <div className="w-full max-w-sm">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}