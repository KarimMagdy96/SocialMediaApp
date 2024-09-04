"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/lib/store";

import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body className={inter.className}>
          <nav>
            <ul>
              <li>
                <Link href={"/profile"}>profile</Link>
              </li>
            </ul>
          </nav>

          {children}
        </body>
      </Provider>
    </html>
  );
}
