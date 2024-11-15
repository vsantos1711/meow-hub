import Link from "next/link";
import LoginForm from "@/components/loginForm";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <div className="min-h-screen transition duration-300 dark:bg-slate-700 dark:text-slate-100">
      <div className="flex w-full">
        <div className="relative w-0 md:w-1/2">
          <img
            src="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg"
            alt="a big cat image"
            className="object-cover w-full h-screen rounded"
          />
        </div>

        <div className="flex flex-col justify-center gap-5 p-8 md:w-1/2">
          <h1 className="w-full text-5xl font-semibold text-start">Acessar</h1>

          <LoginForm />

          <div className="flex flex-col w-full gap-4">
            <h2 className="w-full text-3xl font-semibold text-start">
              Criar conta
            </h2>
            <p className="font-normal">
              Ainda não possui conta? Cadastre-se no site.
            </p>
            <Link href="/login/register">
              <Button variant="tertiary">Criar conta</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
