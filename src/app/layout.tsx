"use client";
import { Provider } from "react-redux";
import "./globals.css";
import { store } from "@/redux/store";
import { Toaster } from "react-hot-toast";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="">
         
            <Provider store={store}>
              {children}
              <Toaster />
            </Provider>
        </div>
      </body>
    </html>
  );
}
