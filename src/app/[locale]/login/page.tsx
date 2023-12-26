import { Link } from "@/navigation";
import Image from "next/image";
import mainCat from "@/assets/img/main-cat.jpg";
import Input from "@/components/UI/Input";
import Button from "@/components/UI/Button";
import { useTranslations } from "next-intl";

export default function LoginPage() {
  const t = useTranslations("LoginPage");
  return (
    <div className="dark:bg-slate-700 min-h-screen dark:text-slate-100 ">
      <div className="flex w-full">
        <div className="relative h-[120vh] md:w-1/2 ">
          <Image
            src={mainCat}
            alt="A golden cat"
            fill
            className="object-cover animate-fade-in  dark:border-none shadow-lg"
          />
        </div>
        <div className="flex flex-col md:w-1/2 w-full p-8 gap-5 justify-center">
          <h1 className="text-5xl font-semibold text-start w-full">
            {t("title")}
          </h1>
          <form className="w-full  pb-5">
            <Input label={t("label-one")} id="text" type="text" />

            <Input label={t("label-two")} id="password" type="password" />
            <Button type="submit" variant="primary" size="md">
              {t("button")}
            </Button>
          </form>
          <Link
            href="login/recovery"
            className="font-normal underline decoration-solid mb-10 max-w-fit text-gray-500 dark:text-gray-200"
          >
            {t("link")}
          </Link>
          <div className="w-full flex flex-col gap-5">
            <h2 className="text-3xl font-semibold text-start w-full">
              {t("title-two")}
            </h2>
            <p className="font-normal">{t("text")}</p>
            <Link href="login/register" className="w-full">
              <Button variant="secondary" size="md">
                {t("button-two")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
