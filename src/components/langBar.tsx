"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { locales } from "#/i18n";
import clsx from "clsx";

export default function LanguageBar({ lang }: { lang: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const currentPath = pathname.trim().split("/")[2];
  const currentLang = pathname.trim().split("/")[1];

  const [show, setShow] = useState(false);

  function switchLocale(locale: string) {
    // e.g. '/en/about' or '/fr/contact'
    if (locale !== currentLang) {
      const newPath = `/${locale}${currentPath ? "/" + currentPath : ""}`;
      router.push(newPath, { scroll: false });
    }
  }

  return (
    <div className="lang-dropdown">
      <button
        className="lang-dropdown-btn"
        onClick={() => setShow((prev) => !prev)}
      >
        <span className="lang-dropdown-btn-text">{lang}</span>
        <span className="lang-dropdown-btn-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-chevron-down"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </span>
      </button>

      {show && (
        <div className="lang-dropdown-content">
          {locales.map((lang) => (
            <button
              key={lang}
              onClick={() => switchLocale(lang)}
              className={clsx({ isActive: lang === currentLang })}
            >
              {lang}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
