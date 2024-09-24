import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Navic from "@/app/Navic/page";
import Head from "next/head"; // Import the Head component

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Animoon - Watch free Anime Online English Sub/Dub",
  description: `Animoon is the best site to watch
                      Anime SUB online, or you can even
                      watch Anime DUB in HD quality. You
                      can also find UnderRated anime
                      on Animoon website.`,
  verification: {
    google: "x0aiWAODNGU-1UA2FXyORfyme9uWJir7mIMu8AMmLm4",
  },
};

export default async function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <Head>
          {/* Google Site Verification */}
          <meta
            name="google-site-verification"
            content="kYXVnTNfGMSS99gN9cOo6qdi8yymZEeXA1SvuHiAs4U"
          />
          {/* Google Tag Manager */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-Y81ZRXNW2N"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-Y81ZRXNW2N');
      `,
            }}
          />
        </Head>

        <body className={inter.className}>
          <Navic>{children}</Navic>
        </body>
      </html>
    </ClerkProvider>
  );
}
