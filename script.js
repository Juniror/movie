

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
        'lang-boxoffice': 'บ็อกซ์ออฟฟิศ',
        'lang-sf-boxoffice': 'บ็อกซ์ออฟฟิศ SF',
        'lang-us-boxoffice': 'บ็อกซ์ออฟฟิศ US',


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
            image: "asset/vertical/lastnightinsolo.jpg",
            releaseDate: "April 15, 2024",
            title: "The Girl in the Silo",
            genre: "Mystery / Drama",
            duration: 112
        },
        {
            image: "asset/vertical/lastnightinsolo.jpg",
            releaseDate: "April 22, 2024",
            title: "Parallel Universe",
            genre: "Sci-Fi / Adventure",
            duration: 127
        },
        {
            image: "asset/vertical/lastnightinsolo.jpg",
            releaseDate: "May 1, 2024",
            title: "Last Night in Solo",
            genre: "Thriller / Fantasy",
            duration: 118
        },
        {
            image: "asset/vertical/lastnightinsolo.jpg",
            releaseDate: "May 10, 2024",
            title: "The Forgotten Path",
            genre: "Drama / Mystery",
            duration: 121
        },
        {
            image: "asset/vertical/lastnightinsolo.jpg",
            releaseDate: "May 17, 2024",
            title: "Midnight Shadows",
            genre: "Horror / Suspense",
            duration: 109
        },
        {
            image: "asset/vertical/lastnightinsolo.jpg",
            releaseDate: "May 24, 2024",
            title: "Beyond the Horizon",
            genre: "Adventure / Sci-Fi",
            duration: 132
        },
        {
            image: "asset/vertical/lastnightinsolo.jpg",
            releaseDate: "June 1, 2024",
            title: "Eternal Echo",
            genre: "Fantasy / Romance",
            duration: 115
        },
        {
            image: "asset/vertical/lastnightinsolo.jpg",
            releaseDate: "June 8, 2024",
            title: "Silent Whispers",
            genre: "Psychological / Thriller",
            duration: 106
        },
        {
            image: "asset/vertical/lastnightinsolo.jpg",
            releaseDate: "June 15, 2024",
            title: "Crimson Tide",
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


system_therter = {
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
}

const promotion = [

    {
        image: "asset/promotion/promo1.jpg",
        detail: "Promotion"
    },
    {
        image: "asset/promotion/promo2.jpg",
        detail: "Promotion"
    }

]
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
            detail: "สมาชิก SF+ ซื้อบัตรชมภาพยนตร์ เรื่อง “A Minecraft Movie” ทุกที่นั่ง รับทันที SF+ Collectible Ticket ลิขสิทธิ์แท้จากภาพยนตร์",
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
            detail: "Presale Promotion ภาพยนตร์เรื่อง “ซองแดงแต่งผี” : จำหน่ายบัตรชมภาพยนตร์ราคาพิเศษในรูปแบบ \"COLLECTIBLE TICKET SPECIAL EDITION\"",
            subdetail: "จำนวน 5,000 ชุด"
        },
        {
            image: "asset/7types/all/12.jpg",
            detail: "สมาชิก SF+ ซื้อบัตรชมภาพยนตร์ เรื่อง “ซองแดงแต่งผี” ทุกที่นั่ง รับทันที SF+ Collectible Ticket ลิขสิทธิ์แท้จากภาพยนตร์",
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
            "detail": "เอส เอฟ ปรับโฉมใหม่ “โรงภาพยนตร์ เอส เอฟ ซีเนม่า โรบินสัน จันทบุรี” ชวนดูหนังแบบมันส์สะใจ ภาพชัด เสียงกระหึ่ม สุดทุกอารมณ์!",
            "date": "",
            "image": "asset/news/2.jpg"
        },
        {
            "head": "News & Activities",
            "detail": "อยากดูหนังฟรี! ต้องรู้เรื่องนี้ “เมษาดับร้อน ปรอทแตก 2”",
            "date": "ตั้งแต่วันที่ 1 เมษายน ถึง 30 เมษายน 2568",
            "image": "asset/news/3.jpg"
        },
        {
            "head": "Movie News",
            "detail": "ออกผจญภัยสุดคุ้ม! กับรวมโปร “A Minecraft Movie” ที่ เอส เอฟ",
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
            "detail": "รวมทุกเรื่องต้องรู้ ก่อนกดบัตรไปมันส์กับ Ado SPECIAL LIVE “Shinzou” in Cinema",
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



}

let currentLanguage = 'thai';
const b = document.getElementById("movie-grid")
comingSoonMovies[currentLanguage].forEach(movie => {
    b.innerHTML += createMovieItem(movie);
});

function createSystem_Therter(type) {
    const e = document.getElementById("st-display")
    e.innerHTML = "";
    system_therter[type].forEach(element => {
        e.innerHTML += createSystemTherter(element)
    });
}

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
           `
}
function createitem(item) {
    return `
        <div class="item">
            <img src="${item.image}" alt="">
            <h2>${item.detail}</h2>
            <h4>${item.subdetail}</h4>
        </div>
    `
}
function createnews(item) {
    return `
        <div class="item">
            <img src="${item.image}" alt="">
            <h3>${item.head}</h3>
            <h3>${item.detail}</h3>
            <h4>${item.date}</h4>
        </div>`
}
var nxame = false;
function addName() {
    let login = document.getElementById('lg');
    let forget = document.getElementById('forget');
    if (nxame) {
        login.style.display = "flex"
        forget.style.display = "block"
        let n = document.getElementById('input-name1');
        let s = document.getElementById('input-surname1');
        let s1 = document.getElementById('s1');
        let s2 = document.getElementById('s2');
        let sign = document.getElementById('sigh');
        n.remove()
        s.remove()
        s1.remove()
        s2.remove()
        sign.remove()
        nxame = false
    }
    else {
        forget.style.display = "none"
        login.style.display = "none"
        let input = document.getElementById('input');
        input.innerHTML += `
    <div  id="s1" class="sizebox" style="height: 20px;"></div>
        <div id="input-name1" class="input">
            <div class="r">
                <input id="input-name" type="text" placeholder="Name">
            </div>
            <div class="l">
                <i class="fa-regular fa-user"
                   style="color: rgba(0, 0, 0, 0.15); font-size: 24px;"></i>
            </div>
        </div>
        <div id="s2" class="sizebox" style="height: 20px;"></div>
        <div id="input-surname1" class="input">
            <div class="r">
                <input id="input-surname" type="text" placeholder="Surname">
            </div>
            <div class="l">
                <i class="fa-regular fa-user"
                   style="color: rgba(0, 0, 0, 0.15); font-size: 24px;"></i>
            </div>
        </div>
            <div id ="sigh" class="loginbth" onclick="addUser()">Sign in</div>
    `;
        nxame = true;
    }

}
islogin = false;
function lockout(){
    document.getElementById('user').style = "none"
    document.getElementById('openPopup').style = "flex"
 

}
function updateLanguage(lang) {
    currentLanguage = lang;

    // Update all text elements with language class
    for (const [key, value] of Object.entries(translations[lang])) {
        $(`.${key}`).text(value);
    }

    // Update movie grids
    updateMovieGrids();
}

// Function to update movie grids based on language
function updateMovieGrids() {
    const upcomingGrid = document.getElementById('upcomingGrid');
    const comingSoonGrid = document.getElementById('comingSoonGrid');

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

function changeTab(tabName) {
    // Hide all tab contents
    var tabs = document.querySelectorAll('.tabcontent');
    tabs.forEach(function (tab) {
        tab.classList.remove('active');
    });

    // Show the selected tab
    var activeTab = document.getElementById(tabName);
    activeTab.classList.add('active');
}
changeTab("brand")

function getTicket(element) {
    const movieString = element.getAttribute("data-movie");
    const movie = JSON.parse(decodeURIComponent(movieString));

    document.querySelectorAll('.page-content').forEach(page => {
        page.classList.remove('active');
    });

    document.getElementById('ticket-page').classList.add('active');
    document.getElementById('whatmovie').style.background = `url(${movie.image})`;
  
}
function goProfile(){
    document.querySelectorAll('.page-content').forEach(page => {
        page.classList.remove('active');
    });

    document.getElementById('profile-page').classList.add('active');
}
let blur_promo = document.getElementById('blur-promotion');
blur_promo.style.backgroundImage = `url("${promotion[0].image}")`;

let brand = document.getElementById('brand-items')
for (let i = 0; i < type.brand.length; i++) {
    brand.innerHTML += `<img src="${type.brand[i].image}" alt=""></img>`
}

let all = document.getElementById("all-item");
type.all.forEach((item) => {
    all.innerHTML += createitem(item)
})
function changeTab2(tabName) {
    // Hide all tab contents
    var tabs = document.querySelectorAll('.content');
    tabs.forEach(function (tab) {
        tab.classList.remove('active');
    });

    // Show the selected tab
    var activeTab = document.getElementById(tabName);
    activeTab.classList.add('active');
}
changeTab2("allc")
var ally = document.getElementById('ally');
type.mews.forEach((item) => {
    ally.innerHTML += createnews(item)
})

function changeTab3(tabName) {
    // Hide all tab contents
    var tabs = document.querySelectorAll('.profile-tab');
    tabs.forEach(function (tab) {
        tab.classList.remove('active');
    });

    // Show the selected tab
    var activeTab = document.getElementById(tabName);
    activeTab.classList.add('active');
}
changeTab3("booking")

const openBtn = document.getElementById("openPopup");
const closeBtn = document.getElementById("closePopup");
const popup = document.getElementById("popup");

openBtn.addEventListener("click", () => {
    popup.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

// Optional: close popup if user clicks outside content
popup.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.style.display = "none";
    }
});


var login = false;
$(document).ready(function () {
    $('#thai-lang').click(function () {
        $('#thai-lang').addClass('active');
        $('#eng-lang').removeClass('active');
        updateLanguage('thai');
    });

    $('#eng-lang').click(function () {
        $('#eng-lang').addClass('active');
        $('#thai-lang').removeClass('active');
        updateLanguage('english');
    });

    const upcomingBtn = document.getElementById('upcomingBtn');
    const comingSoonBtn = document.getElementById('comingSoonBtn');

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

    // Page navigation
    $('.nav-item').click(function () {
        const pageId = $(this).data('page');

        // Hide all pages
        $('.page-content').removeClass('active');

        // Show selected page
        $(`#${pageId}-page`).addClass('active');

        // Update active nav item
        $('.nav-item').removeClass('active');
        $(this).addClass('active');
    });

    // Carousel setup

    $('.title-c').slick({
        infinite: true,
        speed: 800,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        cssEase: 'linear',
    });

    $('.vertical-carousel').slick({
        infinite: true,
        speed: 800,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        vertical: true,
        cssEase: 'ease-in-out'
    });

    $('.curo').slick({
        infinite: true,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'linear',
        dots: true
    });
    $('.seats').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000
    });

    $('.insideblur').slick({
        infinite: true,
        speed: 800,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        cssEase: 'linear',
    });
    $('.bowlignslick').slick({
        infinite: true,
        speed: 800,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        cssEase: 'linear',
    });
    $('.insideblur').on('afterChange', function (event, slick, currentSlide) {
        const newImage = promotion[currentSlide].image;
        let blur_promo = document.getElementById('blur-promotion');
        blur_promo.style.backgroundImage = `url("${newImage}")`;
    });

    // Update blurred background when slide changes
    $('.title-c').on('afterChange', function (event, slick, currentSlide) {
        $(".blur-bg").css("background-image", `url(${hori_img[currentSlide]})`);
    });

    // Set initial background image
    $(".blur-bg").css("background-image", `url(${hori_img[0]})`);

    // Initialize language and movie grids
    updateLanguage('thai');
    createSystem_Therter("system")
});










////////////////////////////////////////////////////////////////
// Open (or create) the database
let db;
let username;
let usersurname;
const request = indexedDB.open('myDatabase', 1); // Database name and version

// Handle errors when opening the database
request.onerror = function (event) {
    console.error('Database error: ' + event.target.errorCode);
};

// When the database is successfully opened
request.onsuccess = function (event) {
    db = event.target.result;
    console.log('Database opened successfully');
};

// Create object store and indexes when upgrading the database (version 1 -> version 2)
request.onupgradeneeded = function (event) {
    const db = event.target.result;

    // Create object store with 'id' as the primary key and auto-increment enabled
    const objectStore = db.createObjectStore("users", { keyPath: "id", autoIncrement: true });

    // Create indexes for 'email', 'name', and 'surname'
    objectStore.createIndex("email", "email", { unique: true });
    objectStore.createIndex("name", "name", { unique: false });
    objectStore.createIndex("surname", "surname", { unique: false });
    objectStore.createIndex("password", "password", { unique: false });

    console.log('Object store and indexes created');
};

// Function to add a user to the IndexedDB database
function addUser() {
    // Start a transaction with read/write access to the 'users' object store
    const transaction = db.transaction(["users"], "readwrite");
    const objectStore = transaction.objectStore("users");

    // Get input values from the user form
    let email = document.getElementById("input-email").value;
    let password = document.getElementById("input-password").value;
    let name = document.getElementById("input-name").value;
    let surname = document.getElementById("input-surname").value;

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
    };

    // Handle error
    request.onerror = function (event) {
        console.error("Error adding user:", event.target.error);
        alert("Error adding user.");
    };
}

// Function to check if the email and password exist in the database
function checkUserEmailAndPassword() {
    // Open the database
    const request = indexedDB.open('myDatabase', 1);

    request.onsuccess = function (event) {
        const db = event.target.result;
        const transaction = db.transaction(["users"], "readonly");
        const objectStore = transaction.objectStore("users");

        let email = document.getElementById("input-email").value;
        let password = document.getElementById("input-password").value;

        // Query the email index to check if the email exists
        const emailIndex = objectStore.index("email");
        const getEmailRequest = emailIndex.get(email);

        getEmailRequest.onsuccess = function () {
            if (getEmailRequest.result) {
                // Email exists, now check if the password matches
                if (getEmailRequest.result.password === password) {
                    islogin = true; // Assuming you have a variable for login state
                    document.getElementById('popup').style.display = 'none';
                    console.log("User authenticated successfully.");
                    document.getElementById('openPopup').style.display = "none"
                    document.getElementById('user').style.display = "flex"
                    username = getEmailRequest.result.name
                    usersurname = getEmailRequest.result.surname
                    document.getElementById('user').innerHTML = username + " " + usersurname
                    document.getElementById('name').innerHTML = "Hello, " + username + " " + usersurname
                    document.getElementById("input-email").value = "";
                    document.getElementById("input-password").value = "";
                    alert("Login successful!");
                    return true; // Email and password match
                } else {
                    console.log("Incorrect password.");
                    alert("Incorrect password. Please try again.");
                    return false; // Password does not match
                }
            } else {
                console.log("Email does not exist.");
                alert("Email does not exist.");
                return false; // Email does not exist in the database
            }
        };

        getEmailRequest.onerror = function (event) {
            console.error("Error retrieving user by email:", event.target.error);
            return false; // Error occurred while trying to fetch the email
        };
    };

    request.onerror = function (event) {
        console.error("Error opening database:", event.target.error);
    };
}
