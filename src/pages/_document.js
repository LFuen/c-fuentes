import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <Script async src="https://www.googletagmanager.com/gtag/js?id=G-9ZE6RF1G0E" strategy="afterInteractive"/>
                <Script strategy="afterInteractive">
                    {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag() {
                        dataLayer.push(arguments);
                    }
                    gtag("js", new Date());
                    gtag("config", "G-9ZE6RF1G0E");
                    `}
                </Script>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta name="description" content="Cara Fuentes - Licensed Mental Health Counselor and Qualified Supervisor" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Moderustic:wght@300..800&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Merienda:wght@300..900&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Yeseva+One&display=swap" rel="stylesheet" />
                <link rel="icon" href="/CFLogoNav.svg" />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossOrigin="anonymous" />
                <link href="/dist/output.css" rel="stylesheet" />
                <title>Cara Fuentes | LMHC</title>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

