import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
  InboxIcon,
  PhoneIcon,
  LocationMarkerIcon,
  LoginIcon,
  UsersIcon,
  LinkIcon,
} from "@heroicons/react/outline";
import { useUser } from "../utils/context/user";
import css from "../styles/Footers.module.css";

const FooterSanford = () => {
  const { userData, signinWithGoogle, signoutWithGoogle } = useUser();
  return (
    <div className={css.cFooterWrapper}>
      <hr />

      <div className={css.cFooter}>
        <Image src="/assets/logo12.png" alt="logo" width={160} height={45} layout="fixed" />
        <div className={css.block}>
          <div className={css.detail}>
            <span>Contact Us</span>
            <span className={css.pngLine}>
              <LocationMarkerIcon className={css.icon} />
              <span> Sanford Florida</span>
            </span>

            <span className={css.pngLine}>
              {" "}
              <PhoneIcon className={css.icon} />
              <Link href="tel:407-915-0574">
                <p>407-915-0574
                  </p>
                </Link>
            </span>
           
            <span className={css.pngLine}>
              <InboxIcon className={css.icon} />
              <Link href="mailto:support@marvcleaning.com ">
             <p>  support@marvcleaning.com </p>
              </Link>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Account</span>
            <span className={css.pngLine}>
              <LoginIcon className={css.icon} />
              {userData ? (
                <p onClick={() => signoutWithGoogle()}>Sign out</p>
              ) : (
                <p onClick={() => signinWithGoogle()}>Sign in</p>
              )}
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Company</span>
            <span className={css.pngLine}>
              <UsersIcon className={css.icon} />
              <Link href="/about">
                <p>About us</p>
              </Link>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Resources</span>
            <span className={css.pngLine}>
              <LinkIcon className={css.icon} />
              <Link href="/ourSafety">
                <p>Safety Privacy & Terms</p>
              </Link>
            </span>
          </div>
        </div>
      </div>

      <div className={css.copyRight}>
        <span>Copyright ©2022 by MarvCleaning, Inc.</span>
        <span>All rights reserved.</span>
      </div>
    </div>
  );
};

export default FooterSanford;