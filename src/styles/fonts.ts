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
  src: [
    {
      path: '../../public/fonts/pretendard/Pretendard-Thin.woff',
      weight: '100'
    },
    {
      path: '../../public/fonts/pretendard/Pretendard-ExtraLight.woff',
      weight: '200'
    },
    {
      path: '../../public/fonts/pretendard/Pretendard-Light.woff',
      weight: '300'
    },
    {
      path: '../../public/fonts/pretendard/Pretendard-Regular.woff',
      weight: '400'
    },
    {
      path: '../../public/fonts/pretendard/Pretendard-Medium.woff',
      weight: '500'
    },
    {
      path: '../../public/fonts/pretendard/Pretendard-SemiBold.woff',
      weight: '600'
    },
    {
      path: '../../public/fonts/pretendard/Pretendard-Bold.woff',
      weight: '700'
    },
    {
      path: '../../public/fonts/pretendard/Pretendard-ExtraBold.woff',
      weight: '800'
    },
    {
      path: '../../public/fonts/pretendard/Pretendard-Black.woff',
      weight: '900'
    }
  ],
  display: 'swap',
  variable: '--font-pretendard'
});

const appleGothic = localFont({
  src: [
    {
      path: '../../public/fonts/appleSDGothicNeo/AppleSdGothicNeoT.ttf',
      weight: '100'
    },
    {
      path: '../../public/fonts/appleSDGothicNeo/AppleSdGothicNeoUl.ttf',
      weight: '200'
    },
    {
      path: '../../public/fonts/appleSDGothicNeo/AppleSdGothicNeoL.ttf',
      weight: '300'
    },
    {
      path: '../../public/fonts/appleSDGothicNeo/AppleSdGothicNeoM.ttf',
      weight: '400'
    },
    {
      path: '../../public/fonts/appleSDGothicNeo/AppleSdGothicNeoR.ttf',
      weight: '500'
    },
    {
      path: '../../public/fonts/appleSDGothicNeo/AppleSdGothicNeoSB.ttf',
      weight: '600'
    },
    {
      path: '../../public/fonts/appleSDGothicNeo/AppleSdGothicNeoB.ttf',
      weight: '700'
    },
    {
      path: '../../public/fonts/appleSDGothicNeo/AppleSdGothicNeoEB.ttf',
      weight: '800'
    },
    {
      path: '../../public/fonts/appleSDGothicNeo/AppleSdGothicNeoH.ttf',
      weight: '900'
    }
  ],
  display: 'swap',
  variable: '--font-apple-gothic-neo'
});

export { calibre, pretendard, appleGothic };
