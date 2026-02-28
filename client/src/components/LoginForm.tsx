import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { formLoginSchema } from "@/lib/formShema";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { socialsButtons } from "@/components/social-media-buttons/SocialMediaData";
import { useNavigate } from "react-router-dom";
import { credentials } from "@/service/auth";
import { setAccesToken } from "@/store/authentication";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const form = useForm<z.infer<typeof formLoginSchema>>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (data: z.infer<typeof formLoginSchema>) => {
    try {
      const result = await credentials.Login(data);
      toast.success("Login successful!");
      dispatch(setAccesToken(result.accessToken));
      navigate("/user");
    } catch (error: { message: string } | any) {
      toast.error(error?.message as string);
    }
  };

  return (
    <div>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup>
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="for-email-field">Email</FieldLabel>
                <Input
                  {...field}
                  id="form-rhf-demo-title"
                  aria-invalid={fieldState.invalid}
                  placeholder="Johndoe@gmail.com"
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="password"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="for-password-field">Password</FieldLabel>
                <Input
                  {...field}
                  id="for-password-field"
                  aria-invalid={fieldState.invalid}
                  placeholder="******"
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>

        <div className="flex items-center justify-between mt-5">
          <div className="flex gap-2">
            <input type="checkbox" className="cursor-pointer" />
            <span className="text-[0.8rem]">Remember me</span>
          </div>
          <Button variant={"custom"} className="w-25">
            Login
          </Button>
        </div>

        <div className="w-full mt-5 border" />
      </form>

      <div className="mt-5 w-full flex flex-wrap justify-between gap-5">
        {socialsButtons.map((btns, index) => (
          <Button variant={"outline"} className="flex-auto" key={index}>
            {btns.logo()} {btns.name}
          </Button>
        ))}
      </div>

      <p
        className="text-center text-[0.8rem] mt-6 cursor-pointer hover:underline"
        onClick={() => navigate("/register")}
      >
        Dont Have Account Already?
      </p>
    </div>
  );
};

export default LoginForm;
