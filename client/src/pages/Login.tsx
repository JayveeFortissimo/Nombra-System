import Container from "@/components/common/Container";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import LoginForm from "@/components/LoginForm";

const Login = () => {
  return (
    <Container>
      <div className="w-full border flex-1 flex justify-center items-center bg-[#e3f6f5] px-2">
        <Card className="w-[40rem] min-h-[30rem] px-2">
          <CardHeader>
            <CardTitle className="text-2xl">Nombra System</CardTitle>
            <CardDescription>Can track and compute your parte!</CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
        </Card>
      </div>
    </Container>
  );
};

export default Login;
