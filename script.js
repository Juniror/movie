// Image and data constants
const hori_img = [
    "asset/horizontal/jumanji.jpg",
    "asset/horizontal/snowwhite.jpg"
];

const translations = {
    thai: {
        // Navigation
        'lang-signin': 'เข้าสู่ระบบ / ลงทะเบียน',
        'lang-home': 'หน้าแรก',
        'lang-movie': 'ภาพยนตร์',
        'lang-cinemas': 'โรงภาพยนตร์',
        'lang-promotions': 'โปรโมชั่น',
        'lang-bowling': 'โบว์ลิ่ง & ดนตรี',
        'lang-news': 'ข่าวสาร & กิจกรรม',
        'lang-festival': 'เทศกาลภาพยนตร์',
        'lang-sfplus': 'SF+',
        'lang-privacy': 'นโยบายความเป็นส่วนตัว',

        // Movie section
        'lang-type': 'ประเภท',
        'lang-select': 'เลือก',
        'lang-confirm': 'ยืนยัน',
        'lang-movie-title': 'ภาพยนตร์',
        'lang-upcoming': 'กำลังจะมาถึง',
        'lang-coming-soon': 'เร็วๆ นี้',
        'lang-recommend': 'ภาพยนตร์แนะนำ',
    },
    english: {
        // Navigation
        'lang-signin': 'Sign in / Log in',
        'lang-home': 'HOME',
        'lang-movie': 'MOVIE',
        'lang-cinemas': 'CINEMAS',
        'lang-promotions': 'PROMOTIONS',
        'lang-bowling': 'BOWLING & MUSIC',
        'lang-news': 'NEWS & ACTIVITIES',
        'lang-festival': 'FILM FESTIVAL',
        'lang-sfplus': 'SF+',
        'lang-privacy': 'PRIVACY POLICY',

        // Movie section
        'lang-type': 'Type',
        'lang-select': 'Select',
        'lang-confirm': 'Confirm',
        'lang-movie-title': 'Movie',
        'lang-upcoming': 'Upcoming',
        'lang-coming-soon': 'Coming Soon',
        'lang-recommend': 'Recommend Movie',
        'lang-boxoffice': 'Box Office',
        'lang-sf-boxoffice': 'SF Box Office',
        'lang-us-boxoffice': 'US Box Office',
    }
};

// Movie data
const upcomingMovies = {
    thai: [
        {
            image: "asset/vertical/alex.png",
            releaseDate: "5 กรกฎาคม 2567",
            title: "Alexander Road Trip",
            genre: "Comedy",
            duration: 130
        },
        {
            image: "asset/vertical/dogman.png",
            releaseDate: "12 กรกฎาคม 2567",
            title: "Dogman",
            genre: "Action / Cartoon",
            duration: 130
        },
        {
            image: "asset/vertical/imposible.png",
            releaseDate: "19 กรกฎาคม 2567",
            title: "Mission Impossible",
            genre: "Action",
            duration: 130
        },
        {
            image: "asset/vertical/lastnightinsolo.jpg",
            releaseDate: "2 สิงหาคม 2567",
            title: "Last Night in Silo",
            genre: "Sci-Fi / Horror",
            duration: 130
        },
        {
            image: "asset/vertical/mc.png",
            releaseDate: "9 สิงหาคม 2567",
            title: "Minecraft",
            genre: "Kid / Adventure",
            duration: 130
        },
        {
            image: "asset/vertical/parallel.jpg",
            releaseDate: "16 สิงหาคม 2567",
            title: "Parallel",
            genre: "Action / Sci-Fi",
            duration: 130
        },
        {
            image: "asset/vertical/snowwhite.png",
            releaseDate: "23 สิงหาคม 2567",
            title: "Snow White",
            genre: "Romance / Drama",
            duration: 125
        },
        {
            image: "asset/vertical/theday.png",
            releaseDate: "6 กันยายน 2567",
            title: "The Day Earth Blew Up",
            genre: "Kid / Cartoon",
            duration: 118
        },
        {
            image: "asset/vertical/vertical.png",
            releaseDate: "13 กันยายน 2567",
            title: "Vertical",
            genre: "Thriller",
            duration: 110
        }
    ],
    english: [
        {
            image: "asset/vertical/lastnightinsolo.jpg",
            releaseDate: "April 15, 2024",
            title: "The Girl in the Silo - The Full Movie",
            genre: "Mystery / Drama",
            duration: 112
        },
        {
            image: "asset/vertical/lastnightinsolo.jpg",
            releaseDate: "April 22, 2024",
            title: "Parallel Universe - The Full Movie",
            genre: "Sci-Fi / Adventure",
            duration: 127
        },
        {
            image: "asset/vertical/lastnightinsolo.jpg",
            releaseDate: "May 1, 2024",
            title: "Last Night in Solo - The Full Movie",
            genre: "Thriller / Fantasy",
            duration: 118
        },
        {
            image: "asset/vertical/lastnightinsolo.jpg",
            releaseDate: "May 10, 2024",
            title: "The Forgotten Path - The Full Movie",
            genre: "Drama / Mystery",
            duration: 121
        },
        {
            image: "asset/vertical/lastnightinsolo.jpg",
            releaseDate: "May 17, 2024",
            title: "Midnight Shadows - The Full Movie",
            genre: "Horror / Suspense",
            duration: 109
        },
        {
            image: "asset/vertical/lastnightinsolo.jpg",
            releaseDate: "May 24, 2024",
            title: "Beyond the Horizon - The Full Movie",
            genre: "Adventure / Sci-Fi",
            duration: 132
        },
        {
            image: "asset/vertical/lastnightinsolo.jpg",
            releaseDate: "June 1, 2024",
            title: "Eternal Echo - The Full Movie",
            genre: "Fantasy / Romance",
            duration: 115
        },
        {
            image: "asset/vertical/lastnightinsolo.jpg",
            releaseDate: "June 8, 2024",
            title: "Silent Whispers - The Full Movie",
            genre: "Psychological / Thriller",
            duration: 106
        },
        {
            image: "asset/vertical/lastnightinsolo.jpg",
            releaseDate: "June 15, 2024",
            title: "Crimson Tide - The Full Movie",
            genre: "Action / War",
            duration: 124
        }
    ]
};


const comingSoonMovies = {
    thai: [
        {
            image: "asset/vertical/parallel.jpg",
            releaseDate: "5 กรกฎาคม 2567",
            title: "Phantom Menace",
            genre: "Action / Sci-Fi",
            duration: 130
        },
        {
            image: "asset/vertical/parallel.jpg",
            releaseDate: "12 กรกฎาคม 2567",
            title: "Phantom Menace",
            genre: "Action / Sci-Fi",
            duration: 130
        },
        {
            image: "asset/vertical/parallel.jpg",
            releaseDate: "19 กรกฎาคม 2567",
            title: "Phantom Menace",
            genre: "Action / Sci-Fi",
            duration: 130
        },
        {
            image: "asset/vertical/parallel.jpg",
            releaseDate: "2 สิงหาคม 2567",
            title: "Phantom Menace",
            genre: "Action / Sci-Fi",
            duration: 130
        },
        {
            image: "asset/vertical/parallel.jpg",
            releaseDate: "9 สิงหาคม 2567",
            title: "Phantom Menace",
            genre: "Action / Sci-Fi",
            duration: 130
        },
        {
            image: "asset/vertical/parallel.jpg",
            releaseDate: "16 สิงหาคม 2567",
            title: "Phantom Menace",
            genre: "Action / Sci-Fi",
            duration: 130
        },
        {
            image: "asset/vertical/parallel.jpg",
            releaseDate: "23 สิงหาคม 2567",
            title: "Starlight Serenade",
            genre: "Romance / Drama",
            duration: 125
        },
        {
            image: "asset/vertical/parallel.jpg",
            releaseDate: "6 กันยายน 2567",
            title: "Velvet Underground",
            genre: "Music / Biography",
            duration: 118
        },
        {
            image: "asset/vertical/parallel.jpg",
            releaseDate: "13 กันยายน 2567",
            title: "Whispering Pines",
            genre: "Mystery / Thriller",
            duration: 110
        }
    ],
    english: [
        {
            image: "asset/vertical/parallel.jpg",
            releaseDate: "July 5, 2024",
            title: "Distant Dreams",
            genre: "Adventure / Sci-Fi",
            duration: 120
        },
        {
            image: "asset/vertical/parallel.jpg",
            releaseDate: "July 12, 2024",
            title: "Frozen Heart",
            genre: "Fantasy / Romance",
            duration: 110
        },
        {
            image: "asset/vertical/parallel.jpg",
            releaseDate: "July 19, 2024",
            title: "Mystic Falls",
            genre: "Drama / Fantasy",
            duration: 115
        },
        {
            image: "asset/vertical/parallel.jpg",
            releaseDate: "August 2, 2024",
            title: "The Last Guardian",
            genre: "Action / Adventure",
            duration: 125
        },
        {
            image: "asset/vertical/parallel.jpg",
            releaseDate: "August 9, 2024",
            title: "Neon Nights",
            genre: "Sci-Fi / Thriller",
            duration: 130
        },
        {
            image: "asset/vertical/parallel.jpg",
            releaseDate: "August 16, 2024",
            title: "Phantom Menace",
            genre: "Action / Sci-Fi",
            duration: 130
        },
        {
            image: "asset/vertical/parallel.jpg",
            releaseDate: "August 23, 2024",
            title: "Starlight Serenade",
            genre: "Romance / Drama",
            duration: 125
        },
        {
            image: "asset/vertical/parallel.jpg",
            releaseDate: "September 6, 2024",
            title: "Velvet Underground",
            genre: "Music / Biography",
            duration: 118
        },
        {
            image: "asset/vertical/parallel.jpg",
            releaseDate: "September 13, 2024",
            title: "Whispering Pines",
            genre: "Mystery / Thriller",
            duration: 110
        }
    ]
};

const system_therter = {
    "system": [
        {
            image: "asset/logo/mx4d.png",
            text: "MX4D Cinema"
        },
        {
            image: "asset/logo/dolby.png",
            text: "DOLBY ATMOS"
        },
        {
            image: "asset/logo/3d.png",
            text: "3D Cinema"
        },
        {
            image: "asset/logo/4k.png",
            text: "4K"
        },
        {
            image: "asset/logo/mx4d3d.png",
            text: "MX4D 3D"
        }
    ],
    "thether": [
        {
            image: "asset/logo/zigma.png",
            text: "ZIGMA CINESTADIUM presented by C2"
        },
        {
            image: "asset/logo/thebed.png",
            text: "The Bed Cinema By OMAZZ"
        },
        {
            image: "asset/logo/mx4d.png",
            text: "MX4D Cinema"
        },
        {
            image: "asset/logo/mx4d3dcp.png",
            text: "MX4D Presented by CP"
        },
        {
            image: "asset/logo/cine.png",
            text: "Cine Cafe Cinema"
        }
    ]
};

const promotion = [
    {
        image: "asset/promotion/promo1.jpg",
        detail: "Promotion"
    },
    {
        image: "asset/promotion/promo2.jpg",
        detail: "Promotion"
    }
];

const type = {
    brand: [
        {
            image: "asset/7types/brand/3bbfibre.jpg",
            detail: "3BB Fibre"
        },
        {
            image: "asset/7types/brand/aeon.png",
            detail: "AEON"
        },
        {
            image: "asset/7types/brand/aia.png",
            detail: "AIA"
        },
        {
            image: "asset/7types/brand/ais.jpg",
            detail: "AIS"
        },
        {
            image: "asset/7types/brand/bangchak.jpg",
            detail: "Bangchak"
        },
        {
            image: "asset/7types/brand/bigpay.jpg",
            detail: "BigPay"
        },
        {
            image: "asset/7types/brand/blue+.jpg",
            detail: "Blue+"
        },
        {
            image: "asset/7types/brand/countersevice.jpg",
            detail: "Counter Service"
        },
        {
            image: "asset/7types/brand/couponhub.jpg",
            detail: "CouponHub"
        },
        {
            image: "asset/7types/brand/firstchoice.jpg",
            detail: "First Choice"
        },
        {
            image: "asset/7types/brand/galaxygift.jpg",
            detail: "Galaxy Gift"
        },
        {
            image: "asset/7types/brand/gen365.jpg",
            detail: "Gen 365"
        },
        {
            image: "asset/7types/brand/grab.png",
            detail: "Grab"
        },
        {
            image: "asset/7types/brand/gsb.jpg",
            detail: "GSB"
        },
        {
            image: "asset/7types/brand/ichitan.jpg",
            detail: "Ichitan"
        },
        {
            image: "asset/7types/brand/jcb.jpg",
            detail: "JCB"
        },
        {
            image: "asset/7types/brand/jps.jpg",
            detail: "JPS"
        },
        {
            image: "asset/7types/brand/kbank.jpg",
            detail: "KBank"
        },
        {
            image: "asset/7types/brand/krungsri.jpg",
            detail: "Krungsri"
        },
        {
            image: "asset/7types/brand/krungthainext.jpg",
            detail: "Krung Thai Next"
        },
        {
            image: "asset/7types/brand/ktc.jpg",
            detail: "KTC"
        },
        {
            image: "asset/7types/brand/lhbank.jpg",
            detail: "LH Bank"
        },
        {
            image: "asset/7types/brand/linepay.jpg",
            detail: "LinePay"
        },
        {
            image: "asset/7types/brand/maungthai.jpg",
            detail: "Maung Thai"
        },
        {
            image: "asset/7types/brand/point.jpg",
            detail: "Point"
        },
        {
            image: "asset/7types/brand/rabbitreward.jpg",
            detail: "Rabbit Reward"
        },
        {
            image: "asset/7types/brand/scb.jpg",
            detail: "SCB"
        },
        {
            image: "asset/7types/brand/sf.jpg",
            detail: "SF"
        },
        {
            image: "asset/7types/brand/sf+.jpg",
            detail: "SF+"
        },
        {
            image: "asset/7types/brand/shopee.jpg",
            detail: "Shopee"
        },
        {
            image: "asset/7types/brand/thaivivat.jpg",
            detail: "Thaivivat"
        },
        {
            image: "asset/7types/brand/the1.jpg",
            detail: "The1"
        },
        {
            image: "asset/7types/brand/the1center.jpg",
            detail: "The1 Center"
        },
        {
            image: "asset/7types/brand/true.jpg",
            detail: "True"
        },
        {
            image: "asset/7types/brand/ttb.jpg",
            detail: "TTB"
        },
        {
            image: "asset/7types/brand/uob.jpg",
            detail: "UOB"
        },
        {
            image: "asset/7types/brand/up2u.jpg",
            detail: "Up2U"
        },
        {
            image: "asset/7types/brand/visa.jpg",
            detail: "Visa"
        },
        {
            image: "asset/7types/brand/xplore.png",
            detail: "Xplore"
        }
    ],
    all: [
        {
            image: "asset/7types/all/1.png",
            detail: "เมษาดับร้อนปรอทแตก 2 เอส เอฟ และ โค้ก แจกตั๋วหนังฟรี 30,000 ที่นั่ง (จำกัดสิทธิ์ 1,000 ที่นั่ง / วัน) สำหรับสมาชิก SF+",
            subdetail: "สามารถใช้ได้เฉพาะวันที่รับสิทธิ์ เท่านั้น"
        },
        {
            image: "asset/7types/all/2.jpg",
            detail: "ซื้อบัตรล่วงหน้า THE AMATEUR รับฟรี POSTCARD สุดพิเศษ",
            subdetail: ""
        },
        {
            image: "asset/7types/all/3.jpg",
            detail: "สมาชิก SF+ ดู A MINECRAFT MOVIE รับฟรี MINI POSTER สุดเอ็กซ์คลูซีฟ ที่โรงภาพยนตร์ ZIGMA CINESTADIUM",
            subdetail: "จำนวนจำกัด"
        },
        {
            image: "asset/7types/all/4.jpg",
            detail: "สมาชิก SF+ ซื้อบัตรชมภาพยนตร์ เรื่อง A Minecraft Movie ทุกที่นั่ง รับทันที SF+ Collectible Ticket ลิขสิทธิ์แท้จากภาพยนตร์",
            subdetail: "จำนวนจำกัด"
        },
        {
            image: "asset/7types/all/5.jpg",
            detail: "พวงกุญแจ MINECRAFT MOVIE สุดน่ารัก ลิขสิทธิ์แท้จากภาพยนตร์ จำหน่ายในราคาเพียง 290 บาท",
            subdetail: "จุ่มจาก 6 แบบ ไม่สามารถเลือกแบบได้"
        },
        {
            image: "asset/7types/all/6.jpg",
            detail: "ซื้อตั๋วหนัง A MINECRAFT MOVIE ที่ SF รับฟรี STICKER ลิขสิทธิ์แท้",
            subdetail: "จำนวนจำกัด"
        },
        {
            image: "asset/7types/all/7.jpg",
            detail: "ซื้อบัตรชมภาพยนตร์ เรื่อง GRANDE MAISON PARIS รับส่วนลดตั๋วหนังมูลค่า 50 บาท / ที่นั่ง เพียงลูกค้าแสดงใบเสร็จจากร้านอาหาร HITORI SHABU",
            subdetail: "เฉพาะที่นั่งปกติ BENCH/DELUXE, PREMIUM และ PRIME ในระบบปกติเท่านั้น"
        },
        {
            image: "asset/7types/all/8.jpg",
            detail: "ซื้อบัตรชมภาพยนตร์ เรื่อง GRANDE MAISON PARIS รับส่วนลดตั๋วหนังมูลค่า 50 บาท / ที่นั่ง เมื่อแสดงใบเสร็จจากร้านอาหาร MAGURO",
            subdetail: "เฉพาะที่นั่งปกติ BENCH/DELUXE, PREMIUM และ PRIME ในระบบปกติเท่านั้น"
        },
        {
            image: "asset/7types/all/9.png",
            detail: "LOVE TICKET PACKAGE ราคาพิเศษเพียง 1,000 บาท (จากราคาปกติ 1,660 บาท)",
            subdetail: "จำนวนจำกัด 10,000 ชุด เท่านั้น"
        },
        {
            image: "asset/7types/all/10.jpg",
            detail: "ลูกค้า MRT ซื้อ SF LOVE TICKET PACKAGE รับฟรี Popcorn M",
            subdetail: ""
        },
        {
            image: "asset/7types/all/11.png",
            detail: "Presale Promotion ภาพยนตร์เรื่อง ซองแดงแต่งผี : จำหน่ายบัตรชมภาพยนตร์ราคาพิเศษในรูปแบบ \"COLLECTIBLE TICKET SPECIAL EDITION\"",
            subdetail: "จำนวน 5,000 ชุด"
        },
        {
            image: "asset/7types/all/12.jpg",
            detail: "สมาชิก SF+ ซื้อบัตรชมภาพยนตร์ เรื่อง ซองแดงแต่งผี ทุกที่นั่ง รับทันที SF+ Collectible Ticket ลิขสิทธิ์แท้จากภาพยนตร์",
            subdetail: "จำกัด 1 ใบ / 1 รอบ / 1 สมาชิก"
        }
    ],
    mews: [
        {
            "head": "Movie News",
            "detail": "New Movies หนังใหม่สัปดาห์นี้ # 3 เมษายน 2568",
            "date": "",
            "image": "asset/news/1.jpg"
        },
        {
            "head": "News & Activities",
            "detail": "เอส เอฟ ปรับโฉมใหม่ โรงภาพยนตร์ เอส เอฟ ซีเนม่า โรบินสัน จันทบุรี ชวนดูหนังแบบมันส์สะใจ ภาพชัด เสียงกระหึ่ม สุดทุกอารมณ์!",
            "date": "",
            "image": "asset/news/2.jpg"
        },
        {
            "head": "News & Activities",
            "detail": "อยากดูหนังฟรี! ต้องรู้เรื่องนี้ เมษาดับร้อน ปรอทแตก 2",
            "date": "ตั้งแต่วันที่ 1 เมษายน ถึง 30 เมษายน 2568",
            "image": "asset/news/3.jpg"
        },
        {
            "head": "Movie News",
            "detail": "ออกผจญภัยสุดคุ้ม! กับรวมโปร A Minecraft Movie ที่ เอส เอฟ",
            "date": "ภาพยนตร์เข้าฉายตั้งแต่วันที่ 3 เมษายน 2568 เป็นต้นไป",
            "image": "asset/news/4.jpg"
        },
        {
            "head": "Movie News",
            "detail": "เอส เอฟ ต้อนรับปีใหม่ไทย กับภาพยนตร์เอ็กซ์คลูซีฟที่ห้ามพลาด!",
            "date": "",
            "image": "asset/news/5.jpg"
        },
        {
            "head": "Movie News",
            "detail": "New Movies หนังใหม่สัปดาห์นี้",
            "date": "27 มีนาคม 2568",
            "image": "asset/news/6.jpg"
        },
        {
            "head": "News & Activities",
            "detail": "เอส เอฟ เปิดโฉมใหม่! โรงภาพยนตร์ เอส เอฟ ซีเนม่า โรบินสัน จันทบุรี แลนด์มาร์กความบันเทิงระดับพรีเมียม พร้อมโปรสุดพิเศษ",
            "date": "",
            "image": "asset/news/7.jpg"
        },
        {
            "head": "News & Activities, Movie News",
            "detail": "รวมทุกเรื่องต้องรู้ ก่อนกดบัตรไปมันส์กับ Ado SPECIAL LIVE Shinzou in Cinema",
            "date": "เปิดจำหน่ายบัตร 21 มีนาคม 68 เวลา 11.00 น.",
            "image": "asset/news/8.jpg"
        },
        {
            "head": "Movie News",
            "detail": "New Movies หนังใหม่สัปดาห์นี้ # 20 มีนาคม 2568",
            "date": "",
            "image": "asset/news/9.jpg"
        }
    ]
};

const simpledate = [
    {
        day: "Thu",
        date: "10/4/2568",
        page: "date-content-1"
    },
    {
        day: "Fri",
        date: "11/4/2568",
        page: "date-content-2"
    },
    {
        day: "Sat",
        date: "12/4/2568",
        page: "date-content-3"
    },
    {
        day: "Sun",
        date: "13/4/2568",
        page: "date-content-4"
    },
    {
        day: "Mon",
        date: "14/4/2568",
        page: "date-content-5"
    },
    {
        day: "Tue",
        date: "15/4/2568",
        page: "date-content-6"
    },
    {
        day: "Wed",
        date: "16/4/2568",
        page: "date-content-7"
    }
];

// Global variables
let db;
let username;
let usersurname;
let islogin = false;
let selectedSeats = [];
let totalPrice = 0;
let bookedSeats = [];
let currentLanguage = 'thai';
let nxame = false;
let currentMovie = null; // Store the currently selected movie
let currentCinema = null; // Store the currently selected cinema
let currentTime = null; // Store the currently selected time
let currentDate = null; // Store the currently selected date

// Seat layout configuration
const rows = [
    { id: 'J', seats: 20, type: 'available', price: 650 },
    { id: 'H', seats: 20, type: 'available', price: 650 },
    { id: 'G', seats: 20, type: 'available', price: 650 },
    { id: 'F', seats: 20, type: 'available', price: 650 },
    { id: 'E', seats: 20, type: 'available', price: 650 },
    { id: 'D', seats: 20, type: 'premium', price: 1300 }, // Blue sofa (Premium)
    { id: 'C', seats: 20, type: 'premium', price: 1300 }, // Blue sofa (Premium)
    { id: 'B', seats: 20, type: 'premium', price: 1300 }, // Blue sofa (Premium)
    { id: 'A', seats: 20, type: 'premium', price: 1300 }, // Blue sofa (Premium)
    { id: 'AA', seats: 20, type: 'vip', price: 1500 }     // VIP (formerly Gold)
];

// Initialize page elements
document.addEventListener('DOMContentLoaded', function () {
    // Initialize movie grid
    const movieGrid = document.getElementById("movie-grid");
    if (movieGrid) {
        upcomingMovies['thai'].forEach(movie => {
            movieGrid.innerHTML += createMovieItem(movie);
        });
    }

    // Initialize upcoming and coming soon grids
    const upcomingGrid = document.getElementById('upcomingGrid');
    const comingSoonGrid = document.getElementById('comingSoonGrid');

    if (upcomingGrid) {
        upcomingMovies[currentLanguage].forEach(movie => {
            upcomingGrid.innerHTML += createMovieItem(movie);
        });
    }

    if (comingSoonGrid) {
        comingSoonMovies[currentLanguage].forEach(movie => {
            comingSoonGrid.innerHTML += createMovieItem(movie);
        });
    }

    // Initialize date selector
    const dateSelector = document.getElementById('date-selector');
    if (dateSelector) {
        simpledate.forEach(item => {
            dateSelector.innerHTML += createdate(item);
        });
    }

    // Set initial tab
    changeDate("date-content-1");
    changeTab("brand");
    changeTab2("allc");
    changeTab3("booking");

    // Initialize promotion background
    let blur_promo = document.getElementById('blur-promotion');
    if (blur_promo) {
        blur_promo.style.backgroundImage = `url("${promotion[0].image}")`;
    }

    // Initialize brand items
    let brand = document.getElementById('brand-items');
    if (brand) {
        for (let i = 0; i < type.brand.length; i++) {
            brand.innerHTML += `<img src="${type.brand[i].image}" alt=""></img>`;
        }
    }

    // Initialize all items
    let all = document.getElementById("all-item");
    if (all) {
        type.all.forEach((item) => {
            all.innerHTML += createitem(item);
        });
    }

    // Initialize news items
    let ally = document.getElementById('ally');
    let acc = document.getElementById('accc');
    let mv = document.getElementById('movieee');
    let csr = document.getElementById('csrr');

    const randomSlice = (element, usedIndices) => {
        let randomStartIndex;
        do {
            randomStartIndex = Math.floor(Math.random() * type.mews.length);
        } while (usedIndices.includes(randomStartIndex));

        usedIndices.push(randomStartIndex);

        const randomLength = Math.floor(Math.random() * 3) + 7;
        const randomMews = type.mews.slice(randomStartIndex, randomStartIndex + randomLength);

        randomMews.forEach((item) => {
            element.innerHTML += createnews(item);
        });
    }

    let usedIndices = [];
    if (ally) {
        randomSlice(ally, usedIndices);
    }

    if (acc) {
        randomSlice(acc, usedIndices);
    }

    if (mv) {
        randomSlice(mv, usedIndices);
    }

    if (csr) {
        randomSlice(csr, usedIndices);
    }

    // Initialize language and theater system
    updateLanguage('thai');
    createSystem_Therter("system");

    // Initialize database
    initializeDatabase();

    // Add event listeners
    setupEventListeners();

    // Initialize slick carousels
    initializeSlickCarousels();
});
function populateTabsWithRandomItems() {
    // Define the tab IDs to populate
    const tabIds = ['movie-item', 'sf-item', 'food-item', 'bank-item', 'branch-item', 'other-item'];
    
    // For each tab ID
    tabIds.forEach(tabId => {
        const tabElement = document.getElementById(tabId);
        if (!tabElement) return;
        
        // Clear any existing content
        tabElement.innerHTML = '';
        
        // Determine a random number of items to display (between 5 and 12)
        const itemCount = Math.floor(Math.random() * 8) + 5; // Random number between 5 and 12
        
        // Create a copy of the all array to shuffle
        const shuffledItems = [...type.all];
        
        // Shuffle the array using Fisher-Yates algorithm
        for (let i = shuffledItems.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledItems[i], shuffledItems[j]] = [shuffledItems[j], shuffledItems[i]];
        }
        
        // Take the first 'itemCount' items and add them to the tab
        shuffledItems.slice(0, itemCount).forEach(item => {
            tabElement.innerHTML += createitem(item);
        });
    });
}
// Database initialization
function initializeDatabase() {
    const request = indexedDB.open('myDatabase', 2);

    request.onerror = function (event) {
        console.error('Database error:', event.target.errorCode);
    };

    request.onsuccess = function (event) {
        db = event.target.result;
        console.log('Database opened successfully');

        if (db.objectStoreNames.contains('bookings')) {
            loadBookedSeats();
            loadBookingHistory();
        } else {
            upgradeDatabase();
        }
    };

    request.onupgradeneeded = function (event) {
        const db = event.target.result;

        // Create users store if it doesn't exist
        if (!db.objectStoreNames.contains('users')) {
            const objectStore = db.createObjectStore('users', { keyPath: 'id', autoIncrement: true });
            objectStore.createIndex('email', 'email', { unique: true });
            objectStore.createIndex('name', 'name', { unique: false });
            objectStore.createIndex('surname', 'surname', { unique: false });
            objectStore.createIndex('password', 'password', { unique: false });
        }

        // Create bookings store if it doesn't exist
        if (!db.objectStoreNames.contains('bookings')) {
            const bookingsStore = db.createObjectStore('bookings', { keyPath: 'id', autoIncrement: true });
            bookingsStore.createIndex('userId', 'userId', { unique: false });
            bookingsStore.createIndex('movieTitle', 'movieTitle', { unique: false });
            bookingsStore.createIndex('date', 'date', { unique: false });
            bookingsStore.createIndex('seats', 'seats', { unique: false, multiEntry: true });
            bookingsStore.createIndex('movieImage', 'movieImage', { unique: false }); // Add image for display
            bookingsStore.createIndex('movieGenre', 'movieGenre', { unique: false }); // Add genre for display
            bookingsStore.createIndex('movieDuration', 'movieDuration', { unique: false }); // Add duration for display
        }

        console.log('Object stores and indexes created');
    };
}

// Function to upgrade database if needed
function upgradeDatabase() {
    const version = db.version + 1;
    db.close();
    const upgradeRequest = indexedDB.open('myDatabase', version);

    upgradeRequest.onupgradeneeded = function (event) {
        const db = event.target.result;

        // Create bookings store if it doesn't exist
        if (!db.objectStoreNames.contains('bookings')) {
            const bookingsStore = db.createObjectStore('bookings', { keyPath: 'id', autoIncrement: true });
            bookingsStore.createIndex('userId', 'userId', { unique: false });
            bookingsStore.createIndex('movieTitle', 'movieTitle', { unique: false });
            bookingsStore.createIndex('date', 'date', { unique: false });
            bookingsStore.createIndex('seats', 'seats', { unique: false, multiEntry: true });
            bookingsStore.createIndex('movieImage', 'movieImage', { unique: false }); // Add image for display
            bookingsStore.createIndex('movieGenre', 'movieGenre', { unique: false }); // Add genre for display
            bookingsStore.createIndex('movieDuration', 'movieDuration', { unique: false }); // Add duration for display
        }
    };

    upgradeRequest.onsuccess = function (event) {
        db = event.target.result;
        console.log('Database upgraded successfully');
        loadBookedSeats();
        loadBookingHistory();
    };
}

// Function to load booked seats from IndexedDB
function loadBookedSeats() {
    if (!db || !currentMovie) return;

    const transaction = db.transaction(['bookings'], 'readonly');
    const bookingsStore = transaction.objectStore('bookings');
    const movieIndex = bookingsStore.index('movieTitle');

    const movieQuery = movieIndex.getAll(currentMovie.title);

    movieQuery.onsuccess = function () {
        const bookings = movieQuery.result;

        // Filter bookings for this specific date and extract all booked seats
        bookedSeats = [];
        bookings.forEach(booking => {
            // Get the currently selected date
            const selectedDateElement = document.querySelector('.date-selector .item[style*="color: blue"]');
            const selectedDateId = selectedDateElement ? selectedDateElement.getAttribute('data-date-id') : 'date-content-1';
            const selectedDateObj = simpledate.find(d => d.page === selectedDateId);

            if (booking.date === selectedDateObj?.date) {
                booking.seats.forEach(seat => {
                    bookedSeats.push(seat);
                });
            }
        });

        // Generate seats after loading booked seats
        generateSeats();
    };

    movieQuery.onerror = function (event) {
        console.error('Error loading booked seats:', event.target.error);
        // Generate seats anyway, even if we couldn't load booked seats
        generateSeats();
    };
}

// Function to load booking history from IndexedDB
function loadBookingHistory() {
    if (!db || !islogin) return;

    const transaction = db.transaction(['bookings'], 'readonly');
    const bookingsStore = transaction.objectStore('bookings');
    const userIndex = bookingsStore.index('userId');

    // Use the current user's name as the userId
    const userId = username + ' ' + usersurname;
    const userQuery = userIndex.getAll(userId);

    userQuery.onsuccess = function () {
        const bookings = userQuery.result;
        const historyBookingElement = document.getElementById('history-booking');

        if (historyBookingElement) {
            if (bookings.length > 0) {
                // Clear existing history
                historyBookingElement.innerHTML = '';

                // Add each booking to the history
                bookings.forEach(booking => {
                    const bookingItem = document.createElement('div');
                    bookingItem.className = 'booking-item';

                    // Enhanced booking history with movie image and more details
                    bookingItem.innerHTML = `
                        <div style="display: flex; gap: 15px; margin-bottom: 15px;">
                            <div style="width: 80px; height: 120px; overflow: hidden;">
                                <img src="${booking.movieImage}" alt="${booking.movieTitle}" style="width: 100%; height: 100%; object-fit: cover;">
                            </div>
                            <div style="flex: 1;">
                                <h3 style="color: #0066CC; margin-bottom: 10px;">${booking.movieTitle}</h3>
                                <div style="color: #666; font-size: 14px; margin-bottom: 5px;">${booking.movieGenre}</div>
                                <div style="color: #666; font-size: 14px; margin-bottom: 5px;">${booking.movieDuration} mins</div>
                            </div>
                        </div>
                        <div class="booking-details">
                            <span>Date:</span>
                            <span>${booking.date}</span>
                        </div>
                        <div class="booking-details">
                            <span>Time:</span>
                            <span>${booking.time}</span>
                        </div>
                        <div class="booking-details">
                            <span>Location:</span>
                            <span>${booking.location}</span>
                        </div>
                        <div class="booking-details">
                            <span>Seats:</span>
                            <span>${booking.seats.join(', ')}</span>
                        </div>
                        <div class="booking-details" style="margin-top: 10px; font-weight: bold; color: #0066CC;">
                            <span>Total:</span>
                            <span>${booking.totalPrice} THB</span>
                        </div>
                    `;

                    historyBookingElement.appendChild(bookingItem);
                });
            } else {
                historyBookingElement.innerHTML = '<div style="text-align: center; padding: 20px; color: #666;">You don\'t have any bookings yet</div>';
            }
        }
    };

    userQuery.onerror = function (event) {
        console.error('Error loading booking history:', event.target.error);
    };
}

// Function to generate seats
function generateSeats() {
    const seatsContainer = document.getElementById('seatsContainer');
    if (!seatsContainer) return;

    // Clear existing seats
    seatsContainer.innerHTML = '';

    rows.forEach(row => {
        for (let i = 0; i < row.seats; i++) {
            const seatNumber = i + 1; // Start from 1 instead of 0
            const seatId = `${row.id}${seatNumber}`;
            const seat = document.createElement('div');
            seat.classList.add('seat');

            // Create the seat icon
            const icon = document.createElement('i');

            // Check if seat is already booked
            if (bookedSeats.includes(seatId)) {
                seat.classList.add('booked');
                icon.classList.add('fa-solid', 'fa-xmark'); // Use X mark for booked seats
            } else {
                icon.classList.add('fa-solid', 'fa-couch'); // Use couch for available seats
            }

            seat.appendChild(icon);

            // Add seat ID display
            const seatIdElement = document.createElement('div');
            seatIdElement.classList.add('seat-id');
            seatIdElement.textContent = seatId;
            seat.appendChild(seatIdElement);

            // Set seat type based on row configuration
            seat.classList.add(row.type);
            seat.dataset.price = row.price;
            seat.dataset.id = seatId;

            // Add click event for available seats
            if (!bookedSeats.includes(seatId)) {
                seat.addEventListener('click', function () {
                    const seatId = this.dataset.id;
                    const seatPrice = parseInt(this.dataset.price);
                    const icon = this.querySelector('i');

                    // Check if seat is already selected
                    const seatIndex = selectedSeats.findIndex(s => s.id === seatId);

                    if (seatIndex === -1) {
                        // Seat not selected, add it
                        this.classList.add('selected');

                        // Change icon to check mark
                        icon.classList.remove('fa-couch');
                        icon.classList.add('fa-check');

                        selectedSeats.push({
                            id: seatId,
                            price: seatPrice
                        });
                    } else {
                        // Seat already selected, remove it
                        this.classList.remove('selected');

                        // Change icon back to couch
                        icon.classList.remove('fa-check');
                        icon.classList.add('fa-couch');

                        selectedSeats.splice(seatIndex, 1);
                    }

                    // Update sidebar info
                    updateSidebar();
                });
            }

            seatsContainer.appendChild(seat);
        }
    });
}

// Function to update the sidebar with selected seats and total price
function updateSidebar() {
    const selectedSeatElement = document.querySelector('.seat-value');
    const priceValueElement = document.querySelector('.price-value');

    if (selectedSeatElement && priceValueElement) {
        if (selectedSeats.length === 0) {
            selectedSeatElement.textContent = '-';
            priceValueElement.textContent = '0 THB';
            totalPrice = 0;
        } else {
            // Update selected seats display
            selectedSeatElement.textContent = selectedSeats.map(seat => seat.id).join(', ');

            // Calculate total price
            totalPrice = selectedSeats.reduce((sum, seat) => sum + seat.price, 0);
            priceValueElement.textContent = `${totalPrice} THB`;
        }
    }
}
function hideSelectSeatOnPageChange() {
    // Get all navigation items
    const navItems = document.querySelectorAll('.nav-item');

    // Add event listener to each navigation item
    navItems.forEach(item => {
        item.addEventListener('click', function () {
            // Check if the seat selection is currently visible
            const selectSeat = document.getElementById('select-seat');
            if (selectSeat && selectSeat.style.display === 'block') {
                // Hide the seat selection
                selectSeat.style.display = 'none';

                // Show the time selection instead
                const selectTime = document.getElementById('select-time');
                if (selectTime) {
                    selectTime.style.display = 'block';
                }
            }
        });
    });
}
// Function to save booking to IndexedDB
function saveBooking() {
    if (!db || selectedSeats.length === 0 || !currentMovie) return;

    // Check if user is logged in
    if (!islogin) {
        alert('Please log in to book seats.');
        document.getElementById('select-seat').style.display = "none"
        return;
    }

    const transaction = db.transaction(['bookings'], 'readwrite');
    const bookingsStore = transaction.objectStore('bookings');

    // Get the currently selected date
    const selectedDateElement = document.querySelector('.date-selector .item[style*="color: blue"]');
    const selectedDateId = selectedDateElement ? selectedDateElement.getAttribute('data-date-id') : 'date-content-1';
    const selectedDateObj = simpledate.find(d => d.page === selectedDateId);

    // Get the selected time and location
    const activeTimeContent = document.querySelector('.date-content.active');
    const selectedTimeElement = activeTimeContent ? activeTimeContent.querySelector('.loginbth2') : null;
    const selectedLocationElement = activeTimeContent ? activeTimeContent.querySelector('h3') : null;

    const selectedTime = selectedTimeElement ? selectedTimeElement.textContent : '11:00';
    const selectedLocation = selectedLocationElement ? selectedLocationElement.textContent : 'SF Cinema';

    // Create booking record with enhanced movie details
    const booking = {
        userId: username + ' ' + usersurname, // Use the user's name as userId
        movieTitle: currentMovie.title,
        movieImage: currentMovie.image,
        movieGenre: currentMovie.genre,
        movieDuration: currentMovie.duration,
        date: selectedDateObj ? selectedDateObj.date : simpledate[0].date,
        time: selectedTime,
        location: selectedLocation,
        seats: selectedSeats.map(seat => seat.id),
        totalPrice: totalPrice,
        timestamp: new Date().toISOString()
    };

    const bookingRequest = bookingsStore.add(booking);

    bookingRequest.onsuccess = function (event) {
        const bookingId = event.target.result;

        // Update UI
        alert(`Booking successful! Your booking ID is: ${bookingId}`);

        // Add booked seats to the bookedSeats array
        selectedSeats.forEach(seat => {
            bookedSeats.push(seat.id);
        });

        // Refresh seats and booking history
        generateSeats();
        loadBookingHistory();

        // Clear selection
        selectedSeats = [];
        updateSidebar();

        // Change to select-time tab after booking is complete
        const selectTimeElement = document.getElementById('select-time');
        const selectSeatElement = document.getElementById('select-seat');

        if (selectTimeElement && selectSeatElement) {
            selectSeatElement.style.display = 'none';
            selectTimeElement.style.display = 'block';
        }
    };

    bookingRequest.onerror = function (event) {
        console.error('Error saving booking:', event.target.error);
        alert('There was an error processing your booking. Please try again.');
    };
}

// User authentication functions
function addUser() {
    if (!db) {
        alert('Database not available. Please try again later.');
        return;
    }

    // Start a transaction with read/write access to the 'users' object store
    const transaction = db.transaction(["users"], "readwrite");
    const objectStore = transaction.objectStore("users");

    // Get input values from the user form
    let email = document.getElementById("input-email").value;
    let password = document.getElementById("input-password").value;
    let name = document.getElementById("input-name").value;
    let surname = document.getElementById("input-surname").value;

    // Validate inputs
    if (!email || !password || !name || !surname) {
        alert('Please fill in all fields');
        return;
    }

    // Create a user object to store in the database
    const user = {
        email: email,
        password: password,
        name: name,
        surname: surname
    };

    // Add the user to the object store
    const request = objectStore.add(user);

    // Handle success
    request.onsuccess = function () {
        console.log("User added successfully:", user);
        alert("User added successfully!");

        // Reset form and UI
        document.getElementById("input-email").value = "";
        document.getElementById("input-password").value = "";
        document.getElementById("input-name").value = "";
        document.getElementById("input-surname").value = "";

        // Switch back to login view
        addName();
    };

    // Handle error
    request.onerror = function (event) {
        console.error("Error adding user:", event.target.error);
        alert("Error adding user. Email may already be registered.");
    };
}

function checkUserEmailAndPassword() {
    if (!db) {
        alert('Database not available. Please try again later.');
        return;
    }

    const transaction = db.transaction(["users"], "readonly");
    const objectStore = transaction.objectStore("users");

    let email = document.getElementById("input-email").value;
    let password = document.getElementById("input-password").value;

    // Validate inputs
    if (!email || !password) {
        alert('Please enter both email and password');
        return;
    }

    // Query the email index to check if the email exists
    const emailIndex = objectStore.index("email");
    const getEmailRequest = emailIndex.get(email);

    getEmailRequest.onsuccess = function () {
        if (getEmailRequest.result) {
            // Email exists, now check if the password matches
            if (getEmailRequest.result.password === password) {
                islogin = true;
                document.getElementById('popup').style.display = 'none';
                console.log("User authenticated successfully.");
                document.getElementById('openPopup').style.display = "none";
                document.getElementById('user').style.display = "flex";
                username = getEmailRequest.result.name;
                usersurname = getEmailRequest.result.surname;
                document.getElementById('user').innerHTML = username + " " + usersurname;
                document.getElementById('name').innerHTML = "Hello, " + username + " " + usersurname;
                document.getElementById("input-email").value = "";
                document.getElementById("input-password").value = "";
                alert("Login successful!");

                // Load booking history after successful login
                loadBookingHistory();
            } else {
                console.log("Incorrect password.");
                alert("Incorrect password. Please try again.");
            }
        } else {
            console.log("Email does not exist.");
            alert("Email does not exist.");
        }
    };

    getEmailRequest.onerror = function (event) {
        console.error("Error retrieving user by email:", event.target.error);
        alert("Error checking credentials. Please try again.");
    };
}

// UI Helper Functions
function createMovieItem(movie) {
    let movieData = encodeURIComponent(JSON.stringify(movie));
    return `
        <div onclick="getTicket(this)" data-movie='${movieData}' class="showitem">
            <div class="item">
                <img src="${movie.image}" alt="${movie.title}">
                <p>${movie.releaseDate}</p>
                <p>${movie.title}</p>
            </div>
            <div class="frame"></div>
        </div>
    `;
}

function createSystemTherter(item) {
    return `
        <div class="item">  
            ${item.text}
            <div class="inside"><img src="${item.image}" alt=""></div>
        </div>
    `;
}

function createitem(item) {
    return `
        <div class="item">
            <img src="${item.image}" alt="">
            <h2>${item.detail}</h2>
            <h4>${item.subdetail}</h4>
        </div>
    `;
}

function createnews(item) {
    return `
        <div class="item">
            <img src="${item.image}" alt="">
            <h3>${item.head}</h3>
            <h3>${item.detail}</h3>
            <h4>${item.date}</h4>
        </div>`;
}

function createdate(item) {
    return `
        <div onclick="changeDate('${item.page}')" class="item" data-date-id="${item.page}">
            <h3>${item.day}</h3>
            <h4>${item.date}</h4>
        </div>
    `;
}

function createSystem_Therter(type) {
    const e = document.getElementById("st-display");
    if (e) {
        e.innerHTML = "";
        system_therter[type].forEach(element => {
            e.innerHTML += createSystemTherter(element);
        });
    }
}

// Tab and navigation functions
function changeDate(tabName) {
    // Hide all tab contents
    var tabs = document.querySelectorAll('.date-content');
    tabs.forEach(function (tab) {
        tab.classList.remove('active');
    });

    // Show the selected tab
    var activeTab = document.getElementById(tabName);
    if (activeTab) {
        activeTab.classList.add('active');
    }

    // Update date selector styling
    var dateItems = document.querySelectorAll('.date-selector .item');
    dateItems.forEach(function (item) {
        if (item.getAttribute('data-date-id') === tabName) {
            item.style.color = 'blue';

            // Store the selected date
            const dateId = item.getAttribute('data-date-id');
            currentDate = simpledate.find(d => d.page === dateId);
        } else {
            item.style.color = 'grey';
        }
    });

    // Reload booked seats for the new date
    loadBookedSeats();
}

function changeTab(tabName) {
    // Hide all tab contents
    var tabs = document.querySelectorAll('.tabcontent');
    tabs.forEach(function (tab) {
        tab.classList.remove('active');
    });

    // Show the selected tab
    var activeTab = document.getElementById(tabName);
    if (activeTab) {
        activeTab.classList.add('active');
    }
}

function changeTab2(tabName) {
    // Hide all tab contents
    var tabs = document.querySelectorAll('.content');
    tabs.forEach(function (tab) {
        tab.classList.remove('active');
    });

    // Show the selected tab
    var activeTab = document.getElementById(tabName);
    if (activeTab) {
        activeTab.classList.add('active');
    }
}

function changeTab3(tabName) {
    // Hide all tab contents
    var tabs = document.querySelectorAll('.profile-tab');
    tabs.forEach(function (tab) {
        tab.classList.remove('active');
    });

    // Show the selected tab
    var activeTab = document.getElementById(tabName);
    if (activeTab) {
        activeTab.classList.add('active');
    }
}

function updateLanguage(lang) {
    currentLanguage = lang;

    // Update all text elements with language class
    for (const [key, value] of Object.entries(translations[lang])) {
        document.querySelectorAll(`.${key}`).forEach(el => {
            el.textContent = value;
        });
    }

    // Update movie grids
    updateMovieGrids();
}

function updateMovieGrids() {
    const upcomingGrid = document.getElementById('upcomingGrid');
    const comingSoonGrid = document.getElementById('comingSoonGrid');

    if (upcomingGrid && comingSoonGrid) {
        // Clear grids
        upcomingGrid.innerHTML = '';
        comingSoonGrid.innerHTML = '';

        // Populate with current language
        upcomingMovies[currentLanguage].forEach(movie => {
            upcomingGrid.innerHTML += createMovieItem(movie);
        });

        comingSoonMovies[currentLanguage].forEach(movie => {
            comingSoonGrid.innerHTML += createMovieItem(movie);
        });
    }
}

// Navigation functions
function goSeat() {
    let time = document.getElementById('select-time');
    let seat = document.getElementById('select-seat');
    if (time && seat) {
        time.style.display = "none";
        seat.style.display = "block";
    }

    // Store the selected time and cinema
    const activeTimeContent = document.querySelector('.date-content.active');
    const selectedTimeElement = activeTimeContent ? activeTimeContent.querySelector('.loginbth2') : null;
    const selectedLocationElement = activeTimeContent ? activeTimeContent.querySelector('h3') : null;

    if (selectedTimeElement) {
        currentTime = selectedTimeElement.textContent;
    }

    if (selectedLocationElement) {
        currentCinema = selectedLocationElement.textContent;
    }

    // Update event info in seat selection sidebar
    const eventTimeElement = document.getElementById('eventTime');
    const cinemaLocationElement = document.getElementById('cinemaLocation');

    if (eventTimeElement && currentTime) {
        eventTimeElement.textContent = currentTime;
    }

    if (cinemaLocationElement && currentCinema) {
        cinemaLocationElement.textContent = currentCinema;
    }

    // Generate seats when moving to seat selection
    generateSeats();
}

function getTicket(element) {
    const movieString = element.getAttribute("data-movie");
    const movie = JSON.parse(decodeURIComponent(movieString));

    // Store the selected movie globally
    currentMovie = movie;

    // Hide all pages
    document.querySelectorAll('.page-content').forEach(page => {
        page.classList.remove('active');
    });

    // Show ticket page
    const ticketPage = document.getElementById('ticket-page');
    if (ticketPage) {
        ticketPage.classList.add('active');

        // Update movie details
        const whatMovie = document.getElementById('whatmovie');
        const movieName = document.getElementById('moviename');
        const movieGenre = document.getElementById('moviegenre');
        const movieDuration = document.getElementById('movieduration');

        if (whatMovie) whatMovie.style.backgroundImage = `url(${movie.image})`;
        if (movieName) movieName.innerHTML = movie.title;
        if (movieGenre) movieGenre.innerHTML = movie.genre;
        if (movieDuration) movieDuration.innerHTML = movie.duration + " Mins";

        // Update event info in seat selection sidebar
        const movieTitle = document.getElementById('movieTitle');
        if (movieTitle) movieTitle.textContent = movie.title;

        // Show time selection by default
        const selectTime = document.getElementById('select-time');
        const selectSeat = document.getElementById('select-seat');

        if (selectTime) selectTime.style.display = "block";
        if (selectSeat) selectSeat.style.display = "none";

        // Load booked seats for this movie
        loadBookedSeats();
    }
}

function goProfile() {
    // Hide all pages
    document.querySelectorAll('.page-content').forEach(page => {
        page.classList.remove('active');
    });

    // Show profile page
    const profilePage = document.getElementById('profile-page');
    if (profilePage) {
        profilePage.classList.add('active');
    }
}

function lockout() {
    const userElement = document.getElementById('user');
    const openPopupElement = document.getElementById('openPopup');

    if (userElement && openPopupElement) {
        userElement.style.display = "none";
        openPopupElement.style.display = "flex";
    }

    islogin = false;
    username = null;
    usersurname = null;

    // Go back to home page
    document.querySelectorAll('.page-content').forEach(page => {
        page.classList.remove('active');
    });

    document.getElementById('home-page').classList.add('active');
}

function addName() {
    let login = document.getElementById('lg');
    let forget = document.getElementById('forget');

    if (!login || !forget) return;

    if (nxame) {
        login.style.display = "flex";
        forget.style.display = "block";

        let n = document.getElementById('input-name1');
        let s = document.getElementById('input-surname1');
        let s1 = document.getElementById('s1');
        let s2 = document.getElementById('s2');
        let sign = document.getElementById('sigh');

        if (n) n.remove();
        if (s) s.remove();
        if (s1) s1.remove();
        if (s2) s2.remove();
        if (sign) sign.remove();

        nxame = false;
    } else {
        forget.style.display = "none";
        login.style.display = "none";

        let input = document.getElementById('input');
        if (input) {
            input.innerHTML += `
                <div id="s1" class="sizebox" style="height: 20px;"></div>
                <div id="input-name1" class="input">
                    <div class="r">
                        <input id="input-name" type="text" placeholder="Name">
                    </div>
                    <div class="l">
                        <i class="fa-regular fa-user" style="color: rgba(0, 0, 0, 0.15); font-size: 24px;"></i>
                    </div>
                </div>
                <div id="s2" class="sizebox" style="height: 20px;"></div>
                <div id="input-surname1" class="input">
                    <div class="r">
                        <input id="input-surname" type="text" placeholder="Surname">
                    </div>
                    <div class="l">
                        <i class="fa-regular fa-user" style="color: rgba(0, 0, 0, 0.15); font-size: 24px;"></i>
                    </div>
                </div>
                <div id="sigh" class="loginbth" onclick="addUser()">Sign in</div>
            `;
        }

        nxame = true;
    }
}

// Setup event listeners
function setupEventListeners() {
    // Language switchers
    const thaiLang = document.getElementById('thai-lang');
    const engLang = document.getElementById('eng-lang');

    if (thaiLang) {
        thaiLang.addEventListener('click', function () {
            thaiLang.classList.add('active');
            engLang.classList.remove('active');
            updateLanguage('thai');
        });
    }

    if (engLang) {
        engLang.addEventListener('click', function () {
            engLang.classList.add('active');
            thaiLang.classList.remove('active');
            updateLanguage('english');
        });
    }

    // Movie tab switchers
    const upcomingBtn = document.getElementById('upcomingBtn');
    const comingSoonBtn = document.getElementById('comingSoonBtn');

    if (upcomingBtn && comingSoonBtn) {
        upcomingBtn.addEventListener('click', function () {
            document.getElementById('upcomingGrid').classList.remove('hidden');
            document.getElementById('comingSoonGrid').classList.add('hidden');
            upcomingBtn.classList.add('active');
            comingSoonBtn.classList.remove('active');
        });

        comingSoonBtn.addEventListener('click', function () {
            document.getElementById('upcomingGrid').classList.add('hidden');
            document.getElementById('comingSoonGrid').classList.remove('hidden');
            upcomingBtn.classList.remove('active');
            comingSoonBtn.classList.add('active');
        });
    }

    // Page navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function () {
            const pageId = this.getAttribute('data-page');

            // Hide all pages
            document.querySelectorAll('.page-content').forEach(page => {
                page.classList.remove('active');
            });

            // Show selected page
            document.getElementById(`${pageId}-page`).classList.add('active');

            // Update active nav item
            document.querySelectorAll('.nav-item').forEach(navItem => {
                navItem.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    // Popup handling
    const openBtn = document.getElementById("openPopup");
    const closeBtn = document.getElementById("closePopup");
    const popup = document.getElementById("popup");

    if (openBtn && closeBtn && popup) {
        openBtn.addEventListener("click", () => {
            popup.style.display = "flex";
        });

        closeBtn.addEventListener("click", () => {
            popup.style.display = "none";
        });

        // Close popup if user clicks outside content
        popup.addEventListener("click", (e) => {
            if (e.target === popup) {
                popup.style.display = "none";
            }
        });
    }

    // Seat booking event listeners
    const continueBtn = document.querySelector('.continue-btn');
    if (continueBtn) {
        continueBtn.addEventListener('click', function () {
            if (selectedSeats.length > 0) {
                const confirmBooking = confirm(`You selected seats: ${selectedSeats.map(seat => seat.id).join(', ')} for a total of ${totalPrice} THB. Confirm booking?`);

                if (confirmBooking) {
                    saveBooking();
                }
            } else {
                alert('Please select at least one seat to continue');
            }
        });
    }

    const discountBtn = document.querySelector('.discount-btn');
    if (discountBtn) {
        discountBtn.addEventListener('click', function () {
            alert('Discount options will be shown here');
        });
    }
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function () {
            const pageId = this.getAttribute('data-page');

            // Hide seat selection if it's visible
            const selectSeat = document.getElementById('select-seat');
            if (selectSeat && selectSeat.style.display === 'block') {
                selectSeat.style.display = 'none';

                // Show the time selection instead
                const selectTime = document.getElementById('select-time');
                if (selectTime) {
                    selectTime.style.display = 'block';
                }
            }

            // Hide all pages
            document.querySelectorAll('.page-content').forEach(page => {
                page.classList.remove('active');
            });

            // Show selected page
            document.getElementById(`${pageId}-page`).classList.add('active');

            // Update active nav item
            document.querySelectorAll('.nav-item').forEach(navItem => {
                navItem.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
}

// Initialize slick carousels
function initializeSlickCarousels() {
    // Title carousel
    $('.title-c').slick({
        infinite: true,
        speed: 800,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        cssEase: 'linear',
    });

    // Vertical carousel
    $('.vertical-carousel').slick({
        infinite: true,
        speed: 800,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        vertical: true,
        cssEase: 'ease-in-out'
    });

    // Curo carousel
    $('.curo').slick({
        infinite: true,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'linear',
        dots: true
    });

    // Seats carousel
    $('.seats').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000
    });

    // Inside blur carousel
    $('.insideblur').slick({
        infinite: true,
        speed: 800,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        cssEase: 'linear',
    });

    // Bowling slick carousel
    $('.bowlignslick').slick({
        infinite: true,
        speed: 800,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        cssEase: 'linear',
    });

    // Date selector carousel
    let autoPlayedOnce = false; // Flag to track autoplay

    $('.date-selector').slick({
        speed: 800,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        cssEase: 'linear',
        focusOnSelect: true,
        centerPadding: '0',
        autoplay: true,
        autoplaySpeed: 1500, // Let it pause briefly before first slide
        pauseOnHover: false,
        pauseOnFocus: false,
        infinite: false
    });

    // Stop autoplay after first movement
    $('.date-selector').on('afterChange', function (event, slick, currentSlide) {
        if (!autoPlayedOnce) {
            autoPlayedOnce = true;
            $(this).slick('slickPause');
        }
    });

    // Update blurred background when promotion slide changes
    $('.insideblur').on('afterChange', function (event, slick, currentSlide) {
        const newImage = promotion[currentSlide].image;
        let blur_promo = document.getElementById('blur-promotion');
        if (blur_promo) {
            blur_promo.style.backgroundImage = `url("${newImage}")`;
        }
    });

    // Update blurred background when title slide changes
    $('.title-c').on('afterChange', function (event, slick, currentSlide) {
        $(".blur-bg").css("background-image", `url(${hori_img[currentSlide]})`);
    });

    // Set initial background image
    $(".blur-bg").css("background-image", `url(${hori_img[0]})`);
}

// Call this function when the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Initialize everything
    // initializeDatabase();
    // setupEventListeners();

    // Set initial tab
    changeDate("date-content-1");
    changeTab("brand");
    changeTab2("allc");
    changeTab3("booking");

    // Initialize language
    updateLanguage('thai');
    let all = document.getElementById("all-item");
    if (all) {
        type.all.forEach((item) => {
            all.innerHTML += createitem(item);
        });
    }
    
    // Populate other tabs with random items
    populateTabsWithRandomItems();
});

// Make functions available globally
window.getTicket = getTicket;
window.goSeat = goSeat;
window.goProfile = goProfile;
window.lockout = lockout;
window.addName = addName;
window.addUser = addUser;
window.checkUserEmailAndPassword = checkUserEmailAndPassword;
window.changeDate = changeDate;
window.changeTab = changeTab;
window.changeTab2 = changeTab2;
window.changeTab3 = changeTab3;
window.createSystem_Therter = createSystem_Therter;
