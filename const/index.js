/** ドメイン */
export const DOMAIN = 'https://kurokitabc.github.io/'
/** baseurl */
export const BASE_URL = 'https://kurokitabc.github.io/'
/** ジャンル */
export const GENRE_ENUM = {
    GENRE1 : 'movie', 
    GENRE2 : 'recording', 
    GENRE3 : 'tips', 
    GENRE4 : 'tech'
}
/** ジャンル */
export const GENRES = [GENRE_ENUM.GENRE1, GENRE_ENUM.GENRE2, GENRE_ENUM.GENRE3, GENRE_ENUM.GENRE4]
/** ジャンル一覧 メニューなどに使用 */
export const GENRE_LIST = [
    {
        name: 'Home',
        genre: '',
        url : `${DOMAIN}`,
        src: 'https://cdn-ak.f.st-hatena.com/images/fotolife/A/Amoka/20240512/20240512033725.png',
        icon: "bi bi-house-fill"
    },
    {
        name: '映像',
        genre: GENRE_ENUM.GENRE1,
        url : `${DOMAIN}/blog/movie/list`,
        src: 'https://cdn-ak.f.st-hatena.com/images/fotolife/A/Amoka/20240512/20240512033725.png',
        icon: "bi bi-robot"
    },
    {
        name: '録音や音響',
        genre: GENRE_ENUM.GENRE2,
        url : `${DOMAIN}/blog/recording/list`,
        src: 'https://cdn-ak.f.st-hatena.com/images/fotolife/A/Amoka/20240512/20240512034344.png',
        icon: "bi bi-palette"
    },
    {
        name: '豆知識',
        genre: GENRE_ENUM.GENRE3,
        url : `${DOMAIN}/blog/tips/list`,
        src: 'https://cdn-ak.f.st-hatena.com/images/fotolife/A/Amoka/20240512/20240512113634.jpg',
        icon: "bi bi-alarm"
    },
    {
        name: '機材',
        genre: GENRE_ENUM.GENRE4,
        url : `${DOMAIN}/blog/tech/list`,
        src: 'https://cdn-ak.f.st-hatena.com/images/fotolife/A/Amoka/20240512/20240512113757.jpg',
        icon: "bi bi-cpu"
    }
]
/**
 * genre title map
 */
export const GENRE_TITLE_MAP = {
    'movie' : '',
    'recording' : '',
    'tips' : '',
    'tech' : '',
}
/** 広告ID */
export const AD_CLIENT_ID = process.env.NEXT_PUBLIC_AD_CLIENT_ID
/** 人気記事 */
export const POPULAR_LIST = [
    {
        title: '録音基本講座#1',
        url: 'https://duotaro.github.io/blog/ai/detail/8395fda2-77c3-4d23-855c-82ae6c9cf985/'
    },
    {
        title: '映像の色調補正をやってみよう',
        url: 'https://duotaro.github.io/blog/management/detail/e72dfce4-ff9e-4e3e-aa30-d0d753f2a605/'
    },
]
/** おすすめ記事 */
export const RECOMMEND_LIST = [
    {
        title: '他のPCで編集を続けたいときのやり方',
        url: 'https://duotaro.github.io/blog/ai/detail/8395fda2-77c3-4d23-855c-82ae6c9cf985/'
    },
]