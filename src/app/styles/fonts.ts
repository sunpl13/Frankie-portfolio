import localFont from "next/font/local";

const calibre = localFont({
  src: [
    {
      path: "../assets/font/calibre/CalibreThin.otf",
      weight: "100",
    },
    {
      path: "../assets/font/calibre/CalibreLight.otf",
      weight: "300",
    },
    {
      path: "../assets/font/calibre/CalibreRegular.otf",
      weight: "400",
    },
    {
      path: "../assets/font/calibre/CalibreMedium.otf",
      weight: "500",
    },
    {
      path: "../assets/font/calibre/CalibreSemibold.otf",
      weight: "600",
    },
    {
      path: "../assets/font/calibre/CalibreBold.otf",
      weight: "700",
    },
    {
      path: "../assets/font/calibre/CalibreBlack.otf",
      weight: "900",
    },
  ],
  display: "swap",
  variable: "--font-calibre",
});

const pretendard = localFont({
  src: [
    {
      path: "../assets/font/pretendard/Pretendard-Thin.woff",
      weight: "100",
    },
    {
      path: "../assets/font/pretendard/Pretendard-ExtraLight.woff",
      weight: "200",
    },
    {
      path: "../assets/font/pretendard/Pretendard-Light.woff",
      weight: "300",
    },
    {
      path: "../assets/font/pretendard/Pretendard-Regular.woff",
      weight: "400",
    },
    {
      path: "../assets/font/pretendard/Pretendard-Medium.woff",
      weight: "500",
    },
    {
      path: "../assets/font/pretendard/Pretendard-SemiBold.woff",
      weight: "600",
    },
    {
      path: "../assets/font/pretendard/Pretendard-Bold.woff",
      weight: "700",
    },
    {
      path: "../assets/font/pretendard/Pretendard-ExtraBold.woff",
      weight: "800",
    },
    {
      path: "../assets/font/pretendard/Pretendard-Black.woff",
      weight: "900",
    },
  ],
  display: "swap",
  variable: "--font-pretendard",
});

export { calibre, pretendard };
