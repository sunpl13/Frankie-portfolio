import localFont from 'next/font/local';

const calibre = localFont({
  src: [
    {
      path: '../../public/fonts/calibre/CalibreThin.otf',
      weight: '100'
    },
    {
      path: '../../public/fonts/calibre/CalibreLight.otf',
      weight: '300'
    },
    {
      path: '../../public/fonts/calibre/CalibreRegular.otf',
      weight: '400'
    },
    {
      path: '../../public/fonts/calibre/CalibreMedium.otf',
      weight: '500'
    },
    {
      path: '../../public/fonts/calibre/CalibreSemibold.otf',
      weight: '600'
    },
    {
      path: '../../public/fonts/calibre/CalibreBold.otf',
      weight: '700'
    },
    {
      path: '../../public/fonts/calibre/CalibreBlack.otf',
      weight: '900'
    }
  ],
  display: 'swap',
  variable: '--font-calibre'
});

const pretendard = localFont({
  src: '../../public/fonts/pretendard/PretendardVariable.woff2',
  weight: '45 920',
  display: 'swap',
  variable: '--font-pretendard'
});

const appleGothic = localFont({
  src: [
    {
      path: '../../public/fonts/spoqaHanSansNeo/SpoqaHanSansNeo-Thin.ttf',
      weight: '100'
    },
    {
      path: '../../public/fonts/spoqaHanSansNeo/SpoqaHanSansNeo-Light.ttf',
      weight: '200'
    },
    {
      path: '../../public/fonts/spoqaHanSansNeo/SpoqaHanSansNeo-Regular.ttf',
      weight: '300'
    },
    {
      path: '../../public/fonts/spoqaHanSansNeo/SpoqaHanSansNeo-Medium.ttf',
      weight: '400'
    },
    {
      path: '../../public/fonts/spoqaHanSansNeo/SpoqaHanSansNeo-Bold.ttf',
      weight: '700'
    }
  ],
  display: 'swap',
  variable: '--font-apple-gothic-neo'
});

export { calibre, pretendard, appleGothic };
