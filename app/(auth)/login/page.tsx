import { AuthShell } from "@/components/auth/auth-shell";
import { LoginForm } from "@/components/auth/login-form";
import { uiText } from "@/constants/ui-text";

export default function LoginPage() {
  return (
    <AuthShell
      title={uiText.auth.login.pageTitle}
      description={uiText.auth.login.pageDescription}
    >
      <LoginForm />
    </AuthShell>
  );
}
