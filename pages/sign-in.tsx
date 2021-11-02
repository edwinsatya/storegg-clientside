import Image from "next/image";
import Link from "next/link";
import { SignInForm } from "../components/organisms";
import Illustration from "../components/organisms/SignInForm/Illustration";

export default function SignIn() {
  return (
    <section className="sign-in mx-auto">
      <div className="row">
        <div className="col-xxl-5 col-lg-6 my-auto py-lg-0 pt-lg-50 pb-lg-50 pt-30 pb-47 px-0">
          <form action="">
            <div className="container mx-auto">
              <div className="pb-50">
                <Link href="/">
                  <a className="navbar-brand">
                    <Image
                      src="/icon/logo.svg"
                      width={60}
                      height={60}
                      alt="logo"
                    />
                  </a>
                </Link>
              </div>
              <SignInForm />
            </div>
          </form>
        </div>
        <Illustration />
      </div>
    </section>
  );
}
