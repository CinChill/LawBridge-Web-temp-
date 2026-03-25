import { AuthShell } from "@/components/auth/auth-shell";
import { RegisterForm } from "@/components/auth/register-form";
import { uiText } from "@/constants/ui-text";

export default function RegisterPage() {
  return (
    <AuthShell
      title={uiText.auth.register.pageTitle}
      description={uiText.auth.register.pageDescription}
    >
      <RegisterForm />
    </AuthShell>
  );
}
