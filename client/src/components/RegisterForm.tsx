import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { formRegisterSchema } from "@/lib/formShema";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { socialsButtons } from "@/components/social-media-buttons/SocialMediaData";
import { useNavigate } from "react-router-dom";
import {credentials} from "@/service/auth";

const RegisterForm = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formRegisterSchema>>({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
      email: "",
      userName: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formRegisterSchema>) => {
   try{
     await credentials.register(data);
   }finally{
      form.reset();
   }
    console.log(data);
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
            name="userName"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="for-username-field">Username</FieldLabel>
                <Input
                  {...field}
                  id="form-rhf-demo-title"
                  aria-invalid={fieldState.invalid}
                  placeholder="John Doe"
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

          <Controller
            name="confirmPassword"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="for-confirm-password-field">
                  Confirm Password
                </FieldLabel>
                <Input
                  {...field}
                  id="for-confirm-password-field"
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
          <Button variant={"custom"} className="w-25">
            Register
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
        onClick={() => navigate("/")}
      >
        Have Account Already?
      </p>
    </div>
  );
};

export default RegisterForm;
