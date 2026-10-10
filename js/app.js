const AppData = {
    categories: [
        {
            id: "bayi MPASI",
            name: "Bayi MPASI",
            icon: "fa-baby",
            badgeColor: "bg-amber-500",
            description: "Contoh menu pendamping ASI untuk bayi mulai usia 6 bulan, disesuaikan teksturnya dengan kemampuan makan anak.",
            safeFoods: [
                "Telur matang, ikan tanpa duri, daging, tahu, dan kacang-kacangan",
                "Sayuran dan buah dengan tekstur sesuai usia",
                "ASI tetap diberikan bersama MPASI mulai usia 6 bulan",
                "Hindari madu sebelum usia 12 bulan"
            ]
        },
        {
            id: "ibu hamil",
            name: "Ibu Hamil",
            icon: "fa-person-pregnant",
            badgeColor: "bg-rose-500",
            description: "Contoh pilihan lauk, sayur, dan sumber pangan beragam. Kebutuhan khusus sebaiknya dibahas dengan tenaga kesehatan.",
            safeFoods: [
                "Telur dan daging dimasak hingga matang",
                "Sayur berdaun hijau, tahu, dan tempe",
                "Ikan rendah merkuri yang dimasak matang",
                "Buah yang dicuci bersih"
            ]
        },
        {
            id: "menyusui",
            name: "Ibu Menyusui",
            icon: "fa-baby-carriage",
            badgeColor: "bg-emerald-500",
            description: "Pilihan menu beragam untuk ibu menyusui. Tidak ada satu bahan tertentu yang menjamin peningkatan produksi ASI.",
            safeFoods: [
                "Menu dengan lauk sumber protein",
                "Sayuran, buah, dan sumber karbohidrat",
                "Minum sesuai rasa haus",
                "Konsultasi bila ada masalah menyusui"
            ]
        },
        {
            id: "dewasa",
            name: "Dewasa",
            icon: "fa-user-check",
            badgeColor: "bg-sky-500",
            description: "Contoh menu harian beragam dengan lauk, sayur, buah, dan sumber karbohidrat.",
            safeFoods: [
                "Lauk hewani atau nabati",
                "Nasi, kentang, jagung, atau pangan pokok lain",
                "Sayuran yang dicuci dan dimasak dengan aman",
                "Buah utuh"
            ]
        },
        {
            id: "keluarga",
            name: "Keluarga",
            icon: "fa-house-chimney-window",
            badgeColor: "bg-indigo-500",
            description: "Contoh menu keluarga yang dapat disesuaikan porsi, kebutuhan, dan bahan yang tersedia.",
            safeFoods: [
                "Padukan makanan pokok, lauk, sayur, dan buah",
                "Gunakan bahan segar dan air bersih",
                "Masak lauk hingga matang",
                "Sesuaikan porsi dengan usia dan kebutuhan"
            ]
        }
    ],

    recipes: [
        {
            id: "rcp-1",
            title: "Bubur Nasi Telur dan Tahu",
            category: "bayi MPASI",
            ageRange: [6, 11],
            growthSupport: true,
            estimatedCost: 15000,
            ageRangeLabel: "6-11 bulan",
            portionUnit: "2 porsi kecil",
            cookTime: "25 menit",
            image: "",
            nutrition: "Contoh MPASI dengan sumber protein hewani dan nabati. Sesuaikan tekstur menurut kemampuan makan anak; bukan terapi stunting.",
            ingredients: [
                "30 gram beras, cuci bersih",
                "1 butir telur, matang sempurna",
                "25 gram tahu putih",
                "1 sendok teh minyak",
                "Air matang secukupnya"
            ],
            steps: [
                "Masak beras dengan air hingga lunak.",
                "Masak telur hingga matang sempurna; lumatkan bersama tahu.",
                "Campurkan ke bubur dan tambahkan minyak.",
                "Lumatkan atau cincang sesuai kemampuan anak. Jangan menambahkan madu; hindari tambahan garam dan gula."
            ]
        },
        {
            id: "rcp-2",
            title: "Bubur Nasi Ikan dan Labu",
            category: "bayi MPASI",
            ageRange: [6, 23],
            growthSupport: true,
            estimatedCost: 22000,
            ageRangeLabel: "6-23 bulan",
            portionUnit: "2 porsi kecil",
            cookTime: "30 menit",
            image: "",
            nutrition: "Contoh MPASI dengan ikan matang sebagai lauk. Periksa dan singkirkan duri dengan teliti; sajikan sesuai tekstur dan porsi anak.",
            ingredients: [
                "30 gram beras, cuci bersih",
                "30 gram ikan segar tanpa duri",
                "30 gram labu kuning",
                "1 sendok teh minyak",
                "Air matang secukupnya"
            ],
            steps: [
                "Masak beras dan labu dengan air hingga lunak.",
                "Masak ikan sampai matang sempurna, lalu periksa kembali durinya.",
                "Campurkan ikan dan minyak ke bubur.",
                "Lumatkan atau cincang sesuai kemampuan anak; jangan menambahkan garam atau gula."
            ]
        },
        {
            id: "rcp-3",
            title: "Telur Matang, Sayur, dan Nasi",
            category: "ibu hamil",
            relatedCategories: ["menyusui"],
            estimatedCost: 20000,
            portionUnit: "2 porsi",
            cookTime: "20 menit",
            image: "",
            nutrition: "Contoh menu sederhana. Untuk kehamilan, pilih telur matang sempurna, sayur yang dicuci bersih, dan ikuti arahan tenaga kesehatan.",
            ingredients: [
                "2 butir telur",
                "1 ikat kecil bayam, cuci bersih",
                "2 porsi nasi matang",
                "1 siung bawang putih",
                "1 sendok makan minyak"
            ],
            steps: [
                "Masak telur hingga matang sempurna.",
                "Tumis bawang putih, lalu masukkan bayam dan masak hingga layu.",
                "Sajikan bersama nasi. Cuci sayur dan tangan sebelum memasak."
            ]
        },
        {
            id: "rcp-4",
            title: "Sayur, Tempe, dan Nasi",
            category: "keluarga",
            ageRange: [24, 60],
            ageRangeLabel: "2-5 tahun",
            growthSupport: true,
            estimatedCost: 24000,
            portionUnit: "2 porsi",
            cookTime: "25 menit",
            image: "",
            nutrition: "Contoh menu keluarga berisi lauk nabati, sayuran, dan makanan pokok. Porsi anak perlu disesuaikan usia dan nafsu makannya.",
            ingredients: [
                "100 gram tempe",
                "100 gram sayuran, cuci bersih",
                "2 porsi nasi matang",
                "1 siung bawang putih",
                "1 sendok makan minyak"
            ],
            steps: [
                "Masak tempe dengan sedikit air dan bumbu sampai matang.",
                "Masak sayuran hingga matang dan tetap sesuai tekstur yang aman untuk anak.",
                "Sajikan bersama nasi; potong kecil sesuai kemampuan mengunyah."
            ]
        },
        {
            id: "rcp-5",
            title: "Pepes Ikan dan Sayur",
            category: "dewasa",
            estimatedCost: 30000,
            portionUnit: "2 porsi",
            cookTime: "35 menit",
            image: "",
            nutrition: "Contoh lauk ikan yang dimasak matang. Periksa duri sebelum disajikan; hindari klaim manfaat medis tanpa penilaian ahli.",
            ingredients: [
                "2 potong ikan segar",
                "2 porsi nasi matang",
                "1 buah tomat",
                "Bawang putih dan kunyit secukupnya",
                "Daun pisang untuk membungkus (opsional)"
            ],
            steps: [
                "Bersihkan ikan dan lumuri dengan bumbu.",
                "Bungkus dengan daun pisang atau letakkan di wadah tahan panas.",
                "Kukus hingga ikan matang sempurna.",
                "Sajikan dengan nasi dan sayur."
            ]
        },
        {
            id: "rcp-6",
            title: "Bubur Nasi Daging dan Wortel",
            category: "bayi MPASI",
            ageRange: [6, 23],
            ageRangeLabel: "6-23 bulan",
            growthSupport: true,
            estimatedCost: 28000,
            portionUnit: "2 porsi kecil",
            cookTime: "35 menit",
            image: "",
            nutrition: "Contoh MPASI dengan daging matang dan sayuran. Sesuaikan tekstur dengan usia; bukan pengganti pemeriksaan atau terapi.",
            ingredients: [
                "30 gram beras, cuci bersih",
                "30 gram daging sapi cincang",
                "25 gram wortel, cuci dan potong kecil",
                "1 sendok teh minyak",
                "Air matang secukupnya"
            ],
            steps: [
                "Masak beras, daging, dan wortel bersama air hingga semua bahan lunak dan matang.",
                "Pastikan daging matang sempurna, lalu cincang atau lumatkan.",
                "Tambahkan minyak dan sesuaikan tekstur dengan kemampuan anak.",
                "Jangan menambahkan garam atau gula untuk bayi di bawah 12 bulan."
            ]
        },
        {
            id: "rcp-7",
            title: "Nasi Tim Ayam dan Labu Siam",
            category: "bayi MPASI",
            ageRange: [6, 23],
            ageRangeLabel: "6-23 bulan",
            growthSupport: true,
            estimatedCost: 24000,
            portionUnit: "2 porsi kecil",
            cookTime: "35 menit",
            nutrition: "Contoh MPASI dengan ayam dan sayur. Sajikan lumat untuk bayi yang baru mulai makan, lalu tingkatkan tekstur sesuai kemampuan.",
            ingredients: [
                "30 gram beras",
                "30 gram ayam tanpa kulit, cincang",
                "25 gram labu siam, cuci dan potong kecil",
                "1 sendok teh minyak",
                "Air matang secukupnya"
            ],
            steps: [
                "Masak beras, ayam, dan labu siam dengan air hingga lunak dan matang sempurna.",
                "Pastikan ayam matang hingga bagian dalam.",
                "Tambahkan minyak, lalu lumatkan atau cincang sesuai kemampuan anak.",
                "Untuk anak di bawah 12 bulan, jangan menambahkan garam atau gula."
            ]
        },
        {
            id: "rcp-8",
            title: "Bubur Kentang Ikan dan Bayam",
            category: "bayi MPASI",
            ageRange: [6, 23],
            ageRangeLabel: "6-23 bulan",
            growthSupport: true,
            estimatedCost: 23000,
            portionUnit: "2 porsi kecil",
            cookTime: "30 menit",
            nutrition: "Contoh MPASI dengan ikan dan sayur. Pastikan ikan matang, bebas duri, dan teksturnya aman untuk kemampuan makan anak.",
            ingredients: [
                "100 gram kentang, kupas dan cuci",
                "30 gram ikan tanpa duri",
                "20 gram bayam, cuci bersih",
                "1 sendok teh minyak",
                "Air matang secukupnya"
            ],
            steps: [
                "Rebus kentang sampai lunak.",
                "Masak ikan sampai matang sempurna dan periksa durinya dengan teliti.",
                "Masukkan bayam dan masak hingga layu.",
                "Lumatkan atau cincang sesuai tekstur yang sudah dikuasai anak; jangan menambahkan garam atau gula untuk bayi di bawah 12 bulan."
            ]
        },
        {
            id: "rcp-9",
            title: "Nasi Tim Tahu Telur dan Brokoli",
            category: "bayi MPASI",
            ageRange: [9, 23],
            ageRangeLabel: "9-23 bulan",
            growthSupport: true,
            estimatedCost: 21000,
            portionUnit: "2 porsi kecil",
            cookTime: "30 menit",
            nutrition: "Contoh MPASI dengan telur matang, tahu, dan brokoli. Potong atau lumatkan agar sesuai kemampuan mengunyah.",
            ingredients: [
                "60 gram nasi matang",
                "1 butir telur matang sempurna",
                "30 gram tahu putih",
                "25 gram brokoli, cuci bersih",
                "1 sendok teh minyak"
            ],
            steps: [
                "Kukus atau rebus brokoli sampai lunak.",
                "Masak telur hingga matang sempurna dan lumatkan bersama tahu.",
                "Campurkan dengan nasi dan brokoli; tambahkan minyak.",
                "Sajikan dengan tekstur sesuai kemampuan anak dan awasi saat makan."
            ]
        },
        {
            id: "rcp-10",
            title: "Sup Ayam, Kentang, dan Wortel",
            category: "keluarga",
            ageRange: [24, 60],
            ageRangeLabel: "2-5 tahun",
            growthSupport: true,
            estimatedCost: 28000,
            portionUnit: "2 porsi",
            cookTime: "35 menit",
            nutrition: "Contoh menu keluarga berisi lauk, sayur, dan sumber karbohidrat. Sesuaikan potongan dan porsi anak; batasi garam.",
            ingredients: [
                "100 gram ayam tanpa kulit",
                "1 buah kentang kecil, potong dadu",
                "1 buah wortel kecil, potong kecil",
                "2 porsi nasi matang",
                "Bawang putih secukupnya"
            ],
            steps: [
                "Rebus ayam hingga matang sempurna.",
                "Masukkan kentang dan wortel, lalu masak hingga lunak.",
                "Bumbui ringan dengan bawang putih; batasi garam.",
                "Sajikan dengan nasi dan potong bahan sesuai kemampuan anak."
            ]
        },
        {
            id: "rcp-11",
            title: "Tumis Tempe, Buncis, dan Nasi",
            category: "keluarga",
            ageRange: [24, 60],
            ageRangeLabel: "2-5 tahun",
            growthSupport: true,
            estimatedCost: 22000,
            portionUnit: "2 porsi",
            cookTime: "25 menit",
            nutrition: "Contoh menu lauk nabati, sayur, dan makanan pokok. Masak hingga matang dan sesuaikan ukuran potongan.",
            ingredients: [
                "100 gram tempe, potong kecil",
                "75 gram buncis, cuci dan potong kecil",
                "2 porsi nasi matang",
                "1 siung bawang putih",
                "1 sendok makan minyak"
            ],
            steps: [
                "Tumis bawang putih dengan minyak.",
                "Masukkan tempe dan sedikit air, lalu masak sampai matang.",
                "Tambahkan buncis dan masak hingga lunak.",
                "Sajikan dengan nasi; potong kecil sesuai kemampuan anak."
            ]
        },
        {
            id: "rcp-12",
            title: "Telur Dadar Sayur dan Nasi",
            category: "keluarga",
            ageRange: [24, 60],
            ageRangeLabel: "2-5 tahun",
            growthSupport: true,
            estimatedCost: 18000,
            portionUnit: "2 porsi",
            cookTime: "20 menit",
            nutrition: "Contoh menu sederhana dengan telur matang dan sayuran. Sertakan buah atau sayur lain sesuai ketersediaan.",
            ingredients: [
                "2 butir telur",
                "30 gram wortel parut",
                "20 gram daun bayam, cuci bersih",
                "2 porsi nasi matang",
                "1 sendok teh minyak"
            ],
            steps: [
                "Cuci sayuran, lalu campurkan dengan telur.",
                "Masak dadar dengan api kecil sampai matang sempurna.",
                "Potong kecil sesuai kemampuan anak.",
                "Sajikan dengan nasi dan sayuran/buah lain bila tersedia."
            ]
        },
        {
            id: "rcp-13",
            title: "Sup Kacang Merah dan Sayuran",
            category: "ibu hamil",
            relatedCategories: ["menyusui", "dewasa"],
            estimatedCost: 26000,
            portionUnit: "2 porsi",
            cookTime: "50 menit",
            nutrition: "Contoh menu sumber protein nabati dan sayur. Kacang merah harus direndam dan dimasak sampai benar-benar lunak.",
            ingredients: [
                "100 gram kacang merah kering",
                "1 buah wortel kecil",
                "50 gram tomat",
                "2 porsi nasi matang",
                "Bawang putih dan air secukupnya"
            ],
            steps: [
                "Rendam kacang merah, buang air rendaman, lalu rebus dalam air baru hingga sangat lunak.",
                "Tambahkan wortel dan masak hingga lunak.",
                "Masukkan tomat dan bawang putih; masak sampai matang.",
                "Sajikan dengan nasi. Ibu hamil perlu mengikuti saran tenaga kesehatan untuk kebutuhan gizi khusus."
            ]
        },
        {
            id: "rcp-14",
            title: "Ikan Kukus, Tahu, dan Sayur",
            category: "ibu hamil",
            relatedCategories: ["menyusui", "dewasa"],
            estimatedCost: 30000,
            portionUnit: "2 porsi",
            cookTime: "30 menit",
            nutrition: "Contoh menu ikan matang, tahu, dan sayur. Pilih ikan rendah merkuri, pastikan matang, dan periksa durinya.",
            ingredients: [
                "2 potong ikan rendah merkuri, bersihkan",
                "100 gram tahu putih",
                "100 gram labu siam, cuci dan potong",
                "2 porsi nasi matang",
                "Bawang putih dan jeruk nipis secukupnya"
            ],
            steps: [
                "Bumbui ikan dengan bawang putih dan jeruk nipis.",
                "Kukus ikan dan tahu hingga matang sempurna.",
                "Masak labu siam hingga lunak.",
                "Pastikan tidak ada duri ikan sebelum disajikan."
            ]
        },
        {
            id: "rcp-15",
            title: "Sup Sayur, Telur, dan Nasi",
            category: "menyusui",
            relatedCategories: ["keluarga"],
            estimatedCost: 21000,
            portionUnit: "2 porsi",
            cookTime: "25 menit",
            nutrition: "Contoh hidangan beragam untuk ibu menyusui; tidak ada satu menu yang menjamin produksi ASI meningkat.",
            ingredients: [
                "2 butir telur",
                "50 gram wortel",
                "50 gram sawi hijau, cuci bersih",
                "2 porsi nasi matang",
                "Bawang putih dan air secukupnya"
            ],
            steps: [
                "Rebus wortel hingga hampir lunak.",
                "Tambahkan sawi dan masak hingga matang.",
                "Masukkan telur dan masak sampai matang sempurna.",
                "Sajikan dengan nasi; minum sesuai rasa haus dan ikuti anjuran tenaga kesehatan."
            ]
        },
        {
            id: "rcp-16",
            title: "Tempe Panggang, Ubi, dan Tumis Sayur",
            category: "menyusui",
            relatedCategories: ["keluarga", "dewasa"],
            estimatedCost: 23000,
            portionUnit: "2 porsi",
            cookTime: "35 menit",
            nutrition: "Contoh menu dengan lauk nabati, pangan pokok, dan sayur. Sesuaikan porsi dengan kebutuhan masing-masing.",
            ingredients: [
                "150 gram tempe",
                "2 buah ubi ukuran sedang",
                "100 gram kangkung, cuci bersih",
                "1 siung bawang putih",
                "1 sendok makan minyak"
            ],
            steps: [
                "Kukus atau panggang ubi sampai lunak.",
                "Panggang tempe hingga matang dan kecokelatan.",
                "Tumis bawang putih dan kangkung hingga matang.",
                "Sajikan sebagai menu beragam; kebutuhan khusus dibicarakan dengan tenaga kesehatan."
            ]
        },
        {
            id: "rcp-17",
            title: "Pepes Tahu dan Jagung",
            category: "dewasa",
            relatedCategories: ["keluarga"],
            estimatedCost: 19000,
            portionUnit: "2 porsi",
            cookTime: "35 menit",
            nutrition: "Contoh lauk nabati dengan jagung. Padukan dengan sayur dan buah untuk menu yang lebih beragam.",
            ingredients: [
                "150 gram tahu putih",
                "50 gram jagung pipil",
                "1 butir telur",
                "2 porsi nasi matang",
                "Daun pisang dan bawang putih secukupnya"
            ],
            steps: [
                "Haluskan tahu dan campurkan dengan jagung serta telur.",
                "Bungkus dengan daun pisang.",
                "Kukus hingga matang sempurna.",
                "Sajikan dengan nasi dan sayuran."
            ]
        },
        {
            id: "rcp-18",
            title: "Nasi, Ayam, dan Sayur Bening",
            category: "keluarga",
            relatedCategories: ["dewasa"],
            ageRange: [24, 60],
            ageRangeLabel: "2-5 tahun",
            growthSupport: true,
            estimatedCost: 27000,
            portionUnit: "2 porsi",
            cookTime: "30 menit",
            nutrition: "Contoh menu keluarga dengan ayam matang, sayuran, dan nasi. Variasikan jenis sayur dan lauk sesuai ketersediaan.",
            ingredients: [
                "100 gram ayam tanpa kulit",
                "100 gram bayam, cuci bersih",
                "2 porsi nasi matang",
                "1 siung bawang putih",
                "Air secukupnya"
            ],
            steps: [
                "Rebus ayam sampai matang sempurna.",
                "Masak bayam dengan bawang putih hingga matang.",
                "Suwir ayam kecil-kecil sesuai kemampuan anak.",
                "Sajikan ayam dan sayur bersama nasi."
            ]
        }
    ],

    team: [
        // Set image to a file path such as "./img/adam-maulana.jpg" when the photo is available.
        // Add each public Instagram profile as a full HTTPS URL.
        {
            name: "Rizki Muhamad Adam",
            role: "Anggota tim",
            image: "./img/rizkimuhamadadam.webp",
            instagram: "https://www.instagram.com/rizkimuhamadadam?vrfl=ZmVrMmV6ZWt1aXRz"
        },
        {
            name: "Nanda Aditama",
            role: "Anggota tim",
            image: "./img/nandaaditama.webp",
            instagram: "https://www.instagram.com/nndaadtm?xtok=YjY1OXlqODdiN2E0"
        },
        {
            name: "Harine  Aurelia Putri",
            role: "Ketua Kelompok",
            image: "./img/harineaureliaputri.webp",
            instagram: "https://www.instagram.com/https.hrnn?srtk=MTQ5OW55em8wNDYyeA=="
        }
    ]
};

const BANJARNEGARA_DISTRICTS = [
    'Banjarnegara', 'Banjarmangu', 'Batur', 'Bawang', 'Kalibening',
    'Karangkobar', 'Madukara', 'Mandiraja', 'Pagedongan', 'Pagentan',
    'Pandanarum', 'Pejawaran', 'Punggelan', 'Purwanegara', 'Purwareja Klampok',
    'Rakit', 'Sigaluh', 'Susukan', 'Wanadadi', 'Wanayasa'
];

// Fill with the school's official HTTPS URLs when available.
const schoolLinks = {
    website: "https://smkn1wanayasa.sch.id",
    instagram: "https://www.instagram.com/smkn1wanayasa_official?cplk=bWpydHc1d3M2bWhy",
    tiktok: "https://www.tiktok.com/@smkn1wanayasa_official?_r=1&_t=ZS-9AP5X3TaqHN"
};

const FAVORITES_STORAGE_KEY = 'dapurGizi_favs';
const FAVORITES_EXPIRY_KEY = `${FAVORITES_STORAGE_KEY}_expires`;
const FAVORITES_TTL_SECONDS = 60 * 60 * 24 * 7;

function parseStoredFavorites(value) {
    const parsed = JSON.parse(value);
    if (!Array.isArray(parsed)) return [];
    return [...new Set(parsed.filter(id =>
        typeof id === 'string' && AppData.recipes.some(recipe => recipe.id === id)
    ))];
}

function getCookieValue(name) {
    try {
        const cookie = document.cookie
            .split(';')
            .map(part => part.trim())
            .find(part => part.startsWith(`${encodeURIComponent(name)}=`));
        return cookie ? decodeURIComponent(cookie.slice(cookie.indexOf('=') + 1)) : null;
    } catch (error) {
        console.error('Unable to read favorites cookie:', error);
        return null;
    }
}

function setFavoritesCookie(serialized) {
    try {
        const expires = new Date(Date.now() + FAVORITES_TTL_SECONDS * 1000).toUTCString();
        const secure = window.location.protocol === 'https:' ? '; Secure' : '';
        document.cookie = `${encodeURIComponent(FAVORITES_STORAGE_KEY)}=${encodeURIComponent(serialized)}; Max-Age=${FAVORITES_TTL_SECONDS}; Expires=${expires}; Path=/; SameSite=Lax${secure}`;
        return getCookieValue(FAVORITES_STORAGE_KEY) === serialized;
    } catch (error) {
        console.error('Unable to save favorites cookie:', error);
        return false;
    }
}

function clearFavoritesCookie() {
    try {
        document.cookie = `${encodeURIComponent(FAVORITES_STORAGE_KEY)}=; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Path=/; SameSite=Lax`;
    } catch (error) {
        console.error('Unable to clear expired favorites cookie:', error);
    }
}

function readFavoritesFromStorage(storage, allowLegacy = false) {
    const serialized = storage.getItem(FAVORITES_STORAGE_KEY);
    if (serialized === null) return null;
    const storedExpiry = storage.getItem(FAVORITES_EXPIRY_KEY);
    if (storedExpiry === null && !allowLegacy) {
        storage.removeItem(FAVORITES_STORAGE_KEY);
        return null;
    }
    if (storedExpiry === null && allowLegacy) {
        storage.setItem(FAVORITES_EXPIRY_KEY, String(Date.now() + FAVORITES_TTL_SECONDS * 1000));
    } else {
        const expiresAt = Number(storedExpiry);
        if (!Number.isFinite(expiresAt) || expiresAt <= Date.now()) {
            storage.removeItem(FAVORITES_STORAGE_KEY);
            storage.removeItem(FAVORITES_EXPIRY_KEY);
            return null;
        }
    }
    try {
        return parseStoredFavorites(serialized);
    } catch (error) {
        storage.removeItem(FAVORITES_STORAGE_KEY);
        storage.removeItem(FAVORITES_EXPIRY_KEY);
        throw error;
    }
}

function getStoredFavorites() {
    const fromCookie = getCookieValue(FAVORITES_STORAGE_KEY);
    if (fromCookie !== null) {
        try {
            const favorites = parseStoredFavorites(fromCookie);
            let expiresAt;
            try {
                const storedExpiry = localStorage.getItem(FAVORITES_EXPIRY_KEY);
                expiresAt = storedExpiry === null ? null : Number(storedExpiry);
                if (expiresAt !== null && (!Number.isFinite(expiresAt) || expiresAt <= Date.now())) {
                    clearFavoritesCookie();
                    localStorage.removeItem(FAVORITES_STORAGE_KEY);
                    localStorage.removeItem(FAVORITES_EXPIRY_KEY);
                    return [];
                }
                if (expiresAt === null) {
                    expiresAt = Date.now() + FAVORITES_TTL_SECONDS * 1000;
                }
                localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
                localStorage.setItem(FAVORITES_EXPIRY_KEY, String(expiresAt));
            } catch (error) {
                console.warn('Could not mirror favorites cookie to local storage:', error);
            }
            return favorites;
        } catch (error) {
            console.error('Unable to parse favorites cookie:', error);
            clearFavoritesCookie();
        }
    }

    try {
        const favorites = readFavoritesFromStorage(localStorage, true);
        if (favorites !== null) {
            setFavoritesCookie(JSON.stringify(favorites));
            return favorites;
        }
    } catch (error) {
        console.error('Unable to read saved favorites from local storage:', error);
    }

    try {
        const favorites = readFavoritesFromStorage(sessionStorage, true);
        if (favorites !== null) {
            setFavoritesCookie(JSON.stringify(favorites));
            return favorites;
        }
    } catch (error) {
        console.error('Unable to read temporary favorites from session storage:', error);
    }
    return [];
}

function storeFavorites(favorites) {
    const serialized = JSON.stringify(favorites);
    const cookieStored = setFavoritesCookie(serialized);
    const expiry = String(Date.now() + FAVORITES_TTL_SECONDS * 1000);
    let localStored = false;
    try {
        localStorage.setItem(FAVORITES_STORAGE_KEY, serialized);
        localStorage.setItem(FAVORITES_EXPIRY_KEY, expiry);
        localStored = true;
        try {
            sessionStorage.removeItem(FAVORITES_STORAGE_KEY);
            sessionStorage.removeItem(FAVORITES_EXPIRY_KEY);
        } catch (error) {
            console.warn('Could not clear the temporary favorites copy:', error);
        }
    } catch (error) {
        console.error('Unable to save favorites to local storage:', error);
    }

    if (cookieStored || localStored) return 'persistent';

    try {
        sessionStorage.setItem(FAVORITES_STORAGE_KEY, serialized);
        sessionStorage.setItem(FAVORITES_EXPIRY_KEY, expiry);
        return 'session';
    } catch (error) {
        console.error('Unable to save favorites to session storage:', error);
        return 'failed';
    }
}

const DEFAULT_MAX_BUDGET = 60000;
const normalizeSearchText = value => String(value ?? '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('id-ID')
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .trim();

const currentState = {
    activeTab: 'home',
    selectedCategory: (() => {
        const category = new URLSearchParams(window.location.search).get('category');
        return category === 'all' || AppData.categories.some(item => item.id === category)
            ? category
            : 'all';
    })(),
    categoryModalId: null,
    maxBudget: DEFAULT_MAX_BUDGET,
    searchQuery: '',
    favorites: getStoredFavorites(),
    activeModalId: null,
    modalReturnFocus: null,
    previousBodyOverflow: ''
};

// ON PAGE LOAD INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
    currentState.activeTab = getCurrentTab();
    const recipeCount = document.getElementById('stat-recipe-count');
    if (recipeCount) recipeCount.textContent = AppData.recipes.length;
    renderHomepageCategories();
    renderHomepageFeatured();
    renderDistrictCoverage();
    renderCategoryFilterButtons();
    renderTeamMembers();
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.value = new URLSearchParams(window.location.search).get('keyword') || '';
        currentState.searchQuery = normalizeSearchText(searchInput.value);
    }
    renderDashboardRecipes();
    updateBudgetDisplay(currentState.maxBudget);
    updateAgeLabels(document.getElementById('stunting-age')?.value || 12);
    updateFavCounters();
    if (currentState.activeTab === 'favorites') {
        renderFavorites();
    }
    window.addEventListener('storage', handleFavoritesStorageChange);
    updateActiveNav();
    document.addEventListener('keydown', handleModalKeydown);
    document.addEventListener('keydown', handleMobileNavKeydown);
    document.getElementById('mobile-nav-menu')?.addEventListener('click', event => {
        if (event.target.closest('a')) setMobileNavOpen(false);
    });
    window.addEventListener('resize', () => {
        if (window.matchMedia('(min-width: 1280px)').matches) setMobileNavOpen(false);
    });
});

const pagePaths = {
    home: 'index.html',
    stunting: 'cek-stunting.html',
    dashboard: 'resep.html',
    favorites: 'favorit.html',
    admin: 'tim.html'
};

function switchTab(tabId) {
    const targetPath = pagePaths[tabId];
    if (!targetPath) {
        console.warn(`Unknown page: ${tabId}`);
        return;
    }

    window.location.assign(targetPath);
}

function viewCategoryRecipes() {
    if (!currentState.categoryModalId) {
        console.error('No recipe category is selected.');
        return;
    }
    window.location.assign(`./resep.html?category=${encodeURIComponent(currentState.categoryModalId)}`);
}

function getCurrentTab() {
    const currentPath = window.location.pathname.split('/').pop();
    return Object.entries(pagePaths)
        .find(([, path]) => path === currentPath)?.[0] || 'home';
}

function updateActiveNav() {
    const currentTab = getCurrentTab();
    document.querySelectorAll('.nav-btn, .mobile-nav-link, .mobile-favorite-link').forEach(link => {
        const isCurrent = link.dataset.page === currentTab;
        link.classList.remove('text-gizi-700', 'bg-gizi-50', 'text-slate-600', 'text-slate-700');
        if (isCurrent) {
            link.classList.add('text-gizi-700', 'bg-gizi-50');
            link.setAttribute('aria-current', 'page');
            if (link.classList.contains('mobile-favorite-link')) {
                link.classList.remove('bg-slate-100', 'hover:text-red-500');
                link.querySelector('i')?.classList.remove('text-red-500');
                link.querySelector('i')?.classList.add('text-gizi-700');
            }
        } else {
            link.classList.add(link.classList.contains('nav-btn') ? 'text-slate-600' : 'text-slate-700');
            link.removeAttribute('aria-current');
            if (link.classList.contains('mobile-favorite-link')) {
                link.classList.remove('bg-gizi-50');
                link.classList.add('bg-slate-100', 'hover:text-red-500');
                link.querySelector('i')?.classList.remove('text-gizi-700');
                link.querySelector('i')?.classList.add('text-red-500');
            }
        }
    });
}

function toggleMobileNav() {
    const menu = document.getElementById('mobile-nav-menu');
    setMobileNavOpen(!menu?.classList.contains('is-open'));
}

function setMobileNavOpen(isOpen) {
    const menu = document.getElementById('mobile-nav-menu');
    const button = document.getElementById('mobile-menu-toggle');
    const icon = document.getElementById('mobile-menu-icon');
    if (!menu || !button) return;

    menu.classList.toggle('is-open', isOpen);
    menu.setAttribute('aria-hidden', String(!isOpen));
    button.setAttribute('aria-expanded', String(isOpen));
    button.setAttribute('aria-label', isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi');
    if (icon) icon.className = `fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} text-xl`;
}

function handleMobileNavKeydown(event) {
    if (event.key !== 'Escape') return;
    const menu = document.getElementById('mobile-nav-menu');
    if (!menu || !menu.classList.contains('is-open')) return;
    setMobileNavOpen(false);
    document.getElementById('mobile-menu-toggle')?.focus();
}

function updateAgeLabels(ageValue) {
    const age = Number.parseInt(ageValue, 10);
    const display = document.getElementById('age-display-val');
    const heightLabel = document.getElementById('stunting-height-label');
    const measurementHint = document.getElementById('measurement-hint');
    const measurementType = age < 24 ? 'Panjang badan (telentang)' : 'Tinggi badan (berdiri)';

    if (display) display.textContent = `${age} Bulan`;
    if (heightLabel) heightLabel.textContent = `${measurementType} (cm)`;
    if (measurementHint) {
        measurementHint.textContent = age < 24
            ? 'Usia di bawah 24 bulan: ukur panjang badan sambil berbaring.'
            : 'Usia 24 bulan ke atas: ukur tinggi badan sambil berdiri.';
    }
}

function calculateLmsZ(value, [lValue, median, coefficientOfVariation]) {
    return lValue === 0
        ? Math.log(value / median) / coefficientOfVariation
        : ((value / median) ** lValue - 1) / (lValue * coefficientOfVariation);
}

function clearScreeningResult() {
    document.getElementById('result-output')?.classList.add('hidden');
    document.getElementById('result-placeholder')?.classList.remove('hidden');
    document.querySelectorAll('#stunting-form [aria-invalid="true"]').forEach(input => {
        input.removeAttribute('aria-invalid');
    });
    const recommendations = document.getElementById('stunting-recipe-recommendations');
    if (recommendations) {
        recommendations.classList.add('hidden');
        recommendations.innerHTML = '';
    }
}

function showScreeningValidation(message, fieldId, title = 'Data belum sesuai') {
    const modal = document.getElementById('screening-validation-modal');
    const titleElement = document.getElementById('screening-validation-title');
    const messageElement = document.getElementById('screening-validation-message');
    const field = fieldId ? document.getElementById(fieldId) : null;

    if (!modal || !titleElement || !messageElement) {
        console.error('Screening validation dialog is unavailable.');
        return;
    }

    if (field) field.setAttribute('aria-invalid', 'true');
    titleElement.textContent = title;
    messageElement.textContent = message;
    const submitButton = document.querySelector('#stunting-form button[type="submit"]');
    openModal(modal.id, field || submitButton);
}

function calculateStunting() {
    const ageMonths = Number.parseInt(document.getElementById('stunting-age').value, 10);
    const height = Number.parseFloat(document.getElementById('stunting-height').value);
    const weight = Number.parseFloat(document.getElementById('stunting-weight').value);
    const genderEl = document.querySelector('input[name="stunting-gender"]:checked');
    const gender = genderEl ? genderEl.value : 'male';

    if (!Number.isInteger(ageMonths) || ageMonths < 0 || ageMonths > 60) {
        showScreeningValidation('Pilih usia si Kecil dalam rentang 0 sampai 60 bulan.', 'stunting-age');
        return;
    }
    if (!Number.isFinite(height) || height < 30 || height > 130) {
        showScreeningValidation('Masukkan panjang atau tinggi badan antara 30 sampai 130 cm. Pastikan cara ukurnya sesuai usia.', 'stunting-height');
        return;
    }
    if (!Number.isFinite(weight) || weight < 0.5 || weight > 35) {
        showScreeningValidation('Masukkan berat badan antara 0,5 sampai 35 kg.', 'stunting-weight');
        return;
    }

    const whoSex = gender === 'male' ? 'boys' : 'girls';
    const heightReference = window.WHO_LHFA?.[whoSex]?.[ageMonths];
    const weightReference = window.WHO_WFA?.[whoSex]?.[ageMonths];
    if (!heightReference || !weightReference) {
        showScreeningValidation('Data standar pertumbuhan WHO belum berhasil dimuat. Muat ulang halaman, lalu coba lagi.', null, 'Data WHO belum tersedia');
        console.error(`Missing WHO growth reference for ${gender}, ${ageMonths} months.`);
        return;
    }

    const heightZScore = calculateLmsZ(height, heightReference);
    const weightZScore = calculateLmsZ(weight, weightReference);
    if (!Number.isFinite(heightZScore) || heightZScore < -6 || heightZScore > 6) {
        showScreeningValidation('Hasil panjang atau tinggi berada di luar batas pemeriksaan WHO (-6 sampai +6 SD). Periksa kembali usia, jenis kelamin, dan cara mengukur.', 'stunting-height', 'Hasil ukur perlu diperiksa');
        return;
    }
    if (!Number.isFinite(weightZScore) || weightZScore < -6 || weightZScore > 5) {
        showScreeningValidation('Hasil berat berada di luar batas pemeriksaan WHO (-6 sampai +5 SD). Periksa kembali usia, jenis kelamin, dan cara menimbang.', 'stunting-weight', 'Hasil timbang perlu diperiksa');
        return;
    }

    let statusText = '';
    let badgeClass = '';
    let advice = '';

    if (heightZScore < -3.0) {
        statusText = 'Sangat pendek (di bawah -3 SD)';
        badgeClass = 'bg-red-500 text-white';
        advice = 'Hasil skrining berada di bawah -3 SD pada standar panjang/tinggi badan menurut usia WHO. Segera bawa hasil ukur ke Puskesmas atau Posyandu untuk pengukuran dan penilaian oleh tenaga kesehatan.';
    } else if (heightZScore < -2.0) {
        statusText = 'Pendek (-3 hingga di bawah -2 SD)';
        badgeClass = 'bg-amber-500 text-slate-900';
        advice = 'Hasil skrining berada pada rentang pendek menurut standar WHO. Jadwalkan pemeriksaan di Puskesmas atau Posyandu; hasil kalkulator ini bukan diagnosis.';
    } else if (heightZScore <= 3.0) {
        statusText = 'Dalam rentang normal (-2 hingga +3 SD)';
        badgeClass = 'bg-emerald-600 text-white';
        advice = 'Hasil hitung berada dalam rentang standar WHO. Lanjutkan pemantauan pertumbuhan berkala di Posyandu atau fasilitas kesehatan.';
    } else {
        statusText = 'Di atas +3 SD';
        badgeClass = 'bg-blue-600 text-white';
        advice = 'Hasil hitung berada di atas +3 SD. Konsultasikan hasil ukur dengan tenaga kesehatan untuk penilaian pertumbuhan yang lengkap.';
    }

    const placeholder = document.getElementById('result-placeholder');
    const outputBox = document.getElementById('result-output');
    if (placeholder) placeholder.classList.add('hidden');
    if (outputBox) outputBox.classList.remove('hidden');

    const resultHeading = document.getElementById('res-heading');
    if (resultHeading) resultHeading.textContent = 'Hasil Skrining TB/U';
    const badge = document.getElementById('res-status-badge');
    if (badge) {
        badge.textContent = statusText;
        badge.className = `px-3 py-1.5 rounded-full text-xs font-black shadow-sm ${badgeClass}`;
    }

    const meta = document.getElementById('res-meta-age');
    const score = document.getElementById('res-zscore');
    const weightScore = document.getElementById('res-waz');
    const weightStatus = document.getElementById('res-waz-status');
    const adviceElement = document.getElementById('res-advice');
    const weightAdvice = document.getElementById('res-weight-advice');
    const genderText = gender === 'male' ? 'Laki-laki' : 'Perempuan';
    const displayHeightZ = Math.abs(heightZScore) < 0.05 ? 0 : heightZScore;
    const displayWeightZ = Math.abs(weightZScore) < 0.05 ? 0 : weightZScore;
    const formattedHeightZ = displayHeightZ.toFixed(1);
    const formattedWeightZ = displayWeightZ.toFixed(1);
    let weightStatusText = 'BB/U tidak rendah (≥ -2 SD)';
    if (weightZScore < -3) {
        weightStatusText = 'BB/U sangat rendah';
    } else if (weightZScore < -2) {
        weightStatusText = 'BB/U rendah';
    } else if (weightZScore > 3) {
        weightStatusText = 'Di atas +3 SD';
    }
    if (meta) meta.textContent = `${ageMonths} bulan / ${genderText}`;
    if (score) score.textContent = `${displayHeightZ > 0 ? '+' : ''}${formattedHeightZ} SD`;
    if (weightScore) weightScore.textContent = `${displayWeightZ > 0 ? '+' : ''}${formattedWeightZ} SD`;
    if (weightStatus) weightStatus.textContent = weightStatusText;
    if (adviceElement) adviceElement.textContent = advice;
    if (weightAdvice) {
        weightAdvice.textContent = weightZScore < -2
            ? 'BB/U berada di bawah -2 SD. Konsultasikan bersama hasil TB/U; BB/U menunjukkan berat menurut umur, bukan diagnosis stunting atau wasting.'
            : 'BB/U adalah berat menurut umur; indikator ini sendiri tidak dapat menentukan stunting atau wasting. Tenaga kesehatan menilai bersama indikator lain.';
    }

    renderStuntingRecommendations(heightZScore, ageMonths, weightZScore);
}

function filterStuntingMPASI() {
    window.location.assign('./resep.html?category=bayi%20MPASI');
}

function renderStuntingRecommendations(heightZScore, ageMonths, weightZScore) {
    const container = document.getElementById('stunting-recipe-recommendations');
    if (!container) return;
    container.innerHTML = '';

    if (heightZScore >= -2 && weightZScore >= -2) {
        container.classList.add('hidden');
        return;
    }

    container.classList.remove('hidden');
    if (ageMonths < 6) {
        container.innerHTML = `
                    <div class="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-950">
                        <h4 class="mb-1 font-bold">Belum waktunya MPASI</h4>
                        <p>Untuk bayi di bawah 6 bulan, WHO merekomendasikan ASI eksklusif. Jangan berikan menu MPASI dari katalog ini. Segera konsultasikan hasil ukur ke tenaga kesehatan.</p>
                    </div>
                `;
        return;
    }

    const recommendations = AppData.recipes.filter(recipe =>
        recipe.growthSupport &&
        recipe.ageRange &&
        ageMonths >= recipe.ageRange[0] &&
        ageMonths <= recipe.ageRange[1]
    );
    const heading = ageMonths < 24 ? 'Contoh menu MPASI sesuai usia' : 'Contoh menu keluarga sesuai usia';
    const intro = heightZScore < -2
        ? 'Hasil TB/U berada di bawah -2 SD. Menu ini hanya contoh makanan beragam sesuai usia, bukan pengobatan stunting; konsultasikan hasil ukur dengan tenaga kesehatan.'
        : 'Hasil BB/U berada di bawah -2 SD. Menu ini hanya contoh makanan beragam sesuai usia, bukan terapi; konsultasikan hasil ukur dengan tenaga kesehatan.';
    container.innerHTML = `
                <div class="space-y-3">
                    <div>
                        <h4 class="font-extrabold text-slate-900">${heading}</h4>
                        <p class="mt-1 text-xs leading-relaxed text-slate-600">${intro}</p>
                    </div>
                    <div class="grid grid-cols-1 gap-4">${recommendations.map(createRecipeCardHTML).join('')}</div>
                    <a href="./resep.html?category=${encodeURIComponent(ageMonths < 24 ? 'bayi MPASI' : 'keluarga')}" class="inline-flex items-center gap-2 text-sm font-bold text-gizi-700 hover:text-gizi-800">
                        Lihat resep lainnya <i class="fa-solid fa-arrow-right text-xs"></i>
                    </a>
                </div>
            `;
}

// HOMEPAGE RENDERING
function renderHomepageCategories() {
    const container = document.getElementById('home-category-grid');
    if (!container) return;

    container.innerHTML = AppData.categories.map(cat => `
                <div role="button" tabindex="0" onkeydown="handleModalTriggerKeydown(event)" onclick="openCategoryModal('${cat.id}', event)" class="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-gizi-300 transition-all cursor-pointer group text-center">
                    <div class="w-12 h-12 mx-auto rounded-xl ${cat.badgeColor} text-white flex items-center justify-center text-xl mb-3 group-hover:scale-110 transition-transform shadow-md">
                        <i class="fa-solid ${cat.icon}"></i>
                    </div>
                    <h3 class="font-bold text-slate-900 text-sm capitalize">${cat.name}</h3>
                    <p class="text-[11px] text-slate-400 mt-1 line-clamp-2">${cat.description}</p>
                    <span class="inline-block mt-3 text-[10px] font-bold text-gizi-600 group-hover:underline">
                        Lihat pilihan bahan <i class="fa-solid fa-chevron-right ml-1"></i>
                    </span>
                </div>
            `).join('');
}

function renderHomepageFeatured() {
    const container = document.getElementById('home-featured-grid');
    if (!container) return;

    const featured = AppData.recipes.slice(0, 4);
    container.innerHTML = featured.map(rcp => createRecipeCardHTML(rcp)).join('');
}

function renderDistrictCoverage() {
    const container = document.querySelector('.district-dot-grid');
    if (!container) return;
    container.innerHTML = BANJARNEGARA_DISTRICTS.map(district => `
        <span class="district-dot" role="img" tabindex="0"
            aria-label="${escapeHtml(district)}"
            data-tooltip="${escapeHtml(district)}" title="${escapeHtml(district)}"></span>
    `).join('');
}

// FILTER CONTROLS RENDERING
function renderCategoryFilterButtons() {
    const container = document.getElementById('category-buttons-container');
    if (!container) return;

    let html = `
                <button type="button" aria-pressed="${currentState.selectedCategory === 'all'}" onclick="setCategoryFilter('all')" class="cat-btn category-choice rounded-xl px-3 py-2 text-left text-xs font-bold transition-all sm:text-center ${currentState.selectedCategory === 'all' ? 'bg-gizi-600 text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}">
                    Semua
                </button>
            `;

    html += AppData.categories.map(cat => `
                <button type="button" aria-pressed="${currentState.selectedCategory === cat.id}" onclick="setCategoryFilter('${cat.id}')" class="cat-btn category-choice rounded-xl px-3 py-2 text-left text-xs font-bold capitalize transition-all sm:text-center ${currentState.selectedCategory === cat.id ? 'bg-gizi-600 text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}">
                    ${cat.name}
                </button>
            `).join('');

    container.innerHTML = html;
}

// FILTER EVENT HANDLERS
function updateBudgetDisplay(val) {
    currentState.maxBudget = parseInt(val);
    const formatted = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);
    const budgetLabel = document.getElementById('budget-value');
    if (budgetLabel) budgetLabel.textContent = formatted;
    document.getElementById('budget-slider')?.setAttribute('aria-valuetext', `${formatted} per resep`);
}

function setCategoryFilter(catId) {
    const isValidCategory = catId === 'all' || AppData.categories.some(category => category.id === catId);
    if (!isValidCategory) {
        console.warn(`Unknown recipe category: ${catId}`);
        return;
    }
    currentState.selectedCategory = catId;

    renderCategoryFilterButtons();
    handleFilterChange();
}

function handleFilterChange() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        currentState.searchQuery = normalizeSearchText(searchInput.value);
    }
    renderDashboardRecipes();
}

function showAllBudgetRecipes() {
    const slider = document.getElementById('budget-slider');
    if (!slider) {
        console.error('Recipe budget filter is unavailable.');
        return;
    }
    slider.value = slider.max;
    updateBudgetDisplay(slider.value);
    renderDashboardRecipes();
}

function resetFilters() {
    currentState.selectedCategory = 'all';
    currentState.maxBudget = DEFAULT_MAX_BUDGET;
    currentState.searchQuery = '';

    const slider = document.getElementById('budget-slider');
    if (slider) slider.value = DEFAULT_MAX_BUDGET;
    updateBudgetDisplay(DEFAULT_MAX_BUDGET);

    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.value = '';

    const url = new URL(window.location.href);
    url.searchParams.delete('category');
    url.searchParams.delete('keyword');
    window.history.replaceState(null, '', `${url.pathname}${url.search}${url.hash}`);

    renderCategoryFilterButtons();
    renderDashboardRecipes();
}

function getRecipeVisual(category) {
    const visuals = {
        'bayi MPASI': { background: 'bg-amber-50', foreground: 'text-amber-600', icon: 'fa-bowl-food' },
        'ibu hamil': { background: 'bg-rose-50', foreground: 'text-rose-600', icon: 'fa-heart' },
        'menyusui': { background: 'bg-emerald-50', foreground: 'text-emerald-600', icon: 'fa-seedling' },
        'dewasa': { background: 'bg-sky-50', foreground: 'text-sky-600', icon: 'fa-fish' },
        'keluarga': { background: 'bg-indigo-50', foreground: 'text-indigo-600', icon: 'fa-utensils' }
    };
    return visuals[category] || visuals.keluarga;
}

function createRecipeCardHTML(rcp) {
    const isFav = currentState.favorites.includes(rcp.id);
    const formattedPrice = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(rcp.estimatedCost);
    const visual = getRecipeVisual(rcp.category);

    return `
                <div class="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col group">
                    <div class="relative h-40 w-full overflow-hidden">
                        <button type="button" aria-label="Lihat detail ${rcp.title}" onclick="openRecipeModal('${rcp.id}', event)" class="absolute inset-0 flex cursor-pointer items-center justify-center overflow-hidden ${visual.background}">
                            <i class="fa-solid ${visual.icon} text-5xl ${visual.foreground}" aria-hidden="true"></i>
                            <span class="absolute bottom-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold text-slate-600">${rcp.ageRangeLabel || 'Semua usia'}</span>
                            <span class="absolute top-3 left-3 rounded-full bg-gizi-600 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-md">${rcp.category}</span>
                            <span class="absolute bottom-3 right-3 rounded-xl bg-white/90 px-3 py-2 text-right">
                                <span class="block text-[10px] font-semibold uppercase text-slate-500">Perkiraan / resep</span>
                                <span class="block text-base font-extrabold text-slate-900">${formattedPrice}</span>
                            </span>
                        </button>
                        <button type="button" aria-label="${isFav ? 'Hapus dari' : 'Simpan ke'} favorit: ${rcp.title}" aria-pressed="${isFav}" onclick="toggleFavorite('${rcp.id}')" class="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-md backdrop-blur-md transition-all hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gizi-600">
                            <i class="${isFav ? 'fa-solid text-red-500' : 'fa-regular'} fa-heart text-sm" aria-hidden="true"></i>
                        </button>
                    </div>

                    <div class="p-5 flex-grow flex flex-col justify-between">
                        <div>
                            <h3 role="button" tabindex="0" aria-label="Lihat detail ${rcp.title}" onkeydown="handleModalTriggerKeydown(event)" onclick="openRecipeModal('${rcp.id}', event)" class="font-bold text-slate-900 text-base leading-snug hover:text-gizi-600 cursor-pointer line-clamp-1">
                                ${rcp.title}
                            </h3>
                            <p class="text-xs text-slate-500 mt-1 line-clamp-2">${rcp.nutrition}</p>
                        </div>

                        <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                            <span><i class="fa-regular fa-clock mr-1 text-gizi-600"></i>${rcp.cookTime}</span>
                            <button onclick="openRecipeModal('${rcp.id}', event)" class="touch-target px-2 -mr-2 font-bold text-gizi-600 hover:text-gizi-700 flex items-center">
                                Detail Resep <i class="fa-solid fa-angle-right ml-1 text-[10px]"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
}

function renderDashboardRecipes() {
    const container = document.getElementById('dashboard-recipe-grid');
    const emptyState = document.getElementById('empty-state');
    const countLabel = document.getElementById('results-count');
    const emptyMessage = document.getElementById('empty-state-message');
    const budgetSuggestion = document.getElementById('empty-state-budget-suggestion');

    if (!container) return;

    const queryTerms = currentState.searchQuery.split(/\s+/).filter(Boolean);
    const matchingFilters = AppData.recipes.filter(rcp => {
        const matchCat = currentState.selectedCategory === 'all' ||
            rcp.category === currentState.selectedCategory ||
            rcp.relatedCategories?.includes(currentState.selectedCategory);
        const searchableText = normalizeSearchText([
            rcp.title,
            rcp.category,
            ...(rcp.relatedCategories || []),
            rcp.ageRangeLabel,
            rcp.portionUnit,
            rcp.nutrition,
            ...(rcp.ingredients || []),
            ...(rcp.steps || [])
        ].join(' '));
        const matchQuery = queryTerms.every(term => searchableText.includes(term));

        return matchCat && matchQuery;
    });
    const filtered = matchingFilters.filter(rcp => rcp.estimatedCost <= currentState.maxBudget);

    if (countLabel) countLabel.textContent = filtered.length;
    if (budgetSuggestion) {
        budgetSuggestion.classList.toggle('hidden', filtered.length > 0 || matchingFilters.length === 0);
    }

    if (filtered.length === 0) {
        container.innerHTML = '';
        if (emptyState) emptyState.classList.remove('hidden');
        if (emptyMessage) {
            emptyMessage.textContent = matchingFilters.length > 0
                ? `Ada ${matchingFilters.length} resep yang cocok, tetapi perkiraan biayanya melebihi batas ${new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(currentState.maxBudget)}.`
                : 'Belum ada resep yang cocok dengan kata kunci dan kategori ini. Coba kata kunci lain atau reset filter.';
        }
    } else {
        if (emptyState) emptyState.classList.add('hidden');
        container.innerHTML = filtered.map(rcp => createRecipeCardHTML(rcp)).join('');
    }
}

// FAVORITES SYSTEM
function toggleFavorite(id) {
    if (!AppData.recipes.some(recipe => recipe.id === id)) {
        console.error(`Cannot toggle unknown recipe favorite: ${id}`);
        return;
    }

    const favorites = new Set(currentState.favorites);
    const wasFavorite = favorites.has(id);
    if (wasFavorite) favorites.delete(id);
    else favorites.add(id);

    currentState.favorites = [...favorites];
    const storageResult = storeFavorites(currentState.favorites);

    updateFavCounters();
    renderDashboardRecipes();
    renderHomepageFeatured();
    if (currentState.activeTab === 'favorites') {
        renderFavorites();
    }

    // Update modal favorite button state if modal is open
    const modalRecipeId = document.getElementById('modal-fav-btn')?.getAttribute('data-recipe-id');
    if (modalRecipeId === id) {
        updateModalFavBtnState(id);
    }
    updateFavoriteButtons(id);

    if (storageResult === 'session') {
        showFavoriteFeedback('Favorit tersimpan sementara di tab ini. Penyimpanan permanen tidak tersedia.', 'warning');
    } else if (storageResult === 'failed') {
        showFavoriteFeedback('Favorit belum dapat disimpan oleh browser ini.', 'error');
    } else {
        showFavoriteFeedback(wasFavorite
            ? 'Resep dihapus dari favorit.'
            : 'Resep tersimpan di favorit hingga 1 minggu.');
    }
}

function updateFavoriteButtons(id) {
    const recipe = AppData.recipes.find(item => item.id === id);
    if (!recipe) return;
    const isFavorite = currentState.favorites.includes(id);
    document.querySelectorAll(`[onclick="toggleFavorite('${id}')"]`).forEach(button => {
        button.setAttribute('aria-pressed', String(isFavorite));
        button.setAttribute('aria-label', `${isFavorite ? 'Hapus dari' : 'Simpan ke'} favorit: ${recipe.title}`);
        const icon = button.querySelector('i');
        if (icon) icon.className = `${isFavorite ? 'fa-solid text-red-500' : 'fa-regular'} fa-heart text-sm`;
    });
}

function handleFavoritesStorageChange(event) {
    if (event.key !== FAVORITES_STORAGE_KEY && event.key !== null) return;
    try {
        if (event.newValue) {
            currentState.favorites = parseStoredFavorites(event.newValue);
            setFavoritesCookie(JSON.stringify(currentState.favorites));
        } else {
            currentState.favorites = [];
            clearFavoritesCookie();
        }
    } catch (error) {
        console.error('Unable to synchronize saved favorites:', error);
        currentState.favorites = getStoredFavorites();
    }
    updateFavCounters();
    renderDashboardRecipes();
    renderHomepageFeatured();
    if (currentState.activeTab === 'favorites') renderFavorites();

    const modalRecipeId = document.getElementById('modal-fav-btn')?.getAttribute('data-recipe-id');
    if (modalRecipeId) updateModalFavBtnState(modalRecipeId);
}

function showFavoriteFeedback(message, type = 'success') {
    let feedback = document.getElementById('favorite-feedback');
    if (!feedback) {
        feedback = document.createElement('div');
        feedback.id = 'favorite-feedback';
        feedback.className = 'favorite-feedback';
        feedback.setAttribute('role', 'status');
        feedback.setAttribute('aria-live', 'polite');
        document.body.append(feedback);
    }

    feedback.textContent = message;
    feedback.dataset.type = type;
    feedback.classList.add('is-visible');
    window.clearTimeout(showFavoriteFeedback.timeoutId);
    showFavoriteFeedback.timeoutId = window.setTimeout(() => {
        feedback.classList.remove('is-visible');
    }, 3200);
}

function updateFavCounters() {
    const count = currentState.favorites.length;
    const favCountEl = document.getElementById('fav-count');
    const favCountMobileEl = document.getElementById('fav-count-mobile');
    if (favCountEl) favCountEl.textContent = count;
    if (favCountMobileEl) favCountMobileEl.textContent = count;
}

function renderFavorites() {
    const container = document.getElementById('favorites-recipe-grid');
    const emptyState = document.getElementById('favorites-empty-state');
    if (!container) return;

    const favRecipes = AppData.recipes.filter(r => currentState.favorites.includes(r.id));

    if (favRecipes.length === 0) {
        container.innerHTML = '';
        if (emptyState) emptyState.classList.remove('hidden');
        return;
    }

    if (emptyState) emptyState.classList.add('hidden');
    container.innerHTML = favRecipes.map(rcp => createRecipeCardHTML(rcp)).join('');
}

function getSafeExternalUrl(value) {
    if (typeof value !== 'string' || !value.trim()) return null;
    try {
        const url = new URL(value.trim());
        return url.protocol === 'https:' ? url.href : null;
    } catch (error) {
        return null;
    }
}

function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, character => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    })[character]);
}

function renderExternalLink(url, label, icon, className) {
    const safeUrl = getSafeExternalUrl(url);
    if (!safeUrl) return '';
    return `
        <a href="${escapeHtml(safeUrl)}" target="_blank" rel="noopener noreferrer"
            aria-label="${escapeHtml(label)} (buka di tab baru)"
            class="${className}">
            <i class="${icon}" aria-hidden="true"></i>
            <span>${escapeHtml(label)}</span>
            <i class="fa-solid fa-arrow-up-right-from-square ml-auto text-[10px] opacity-60" aria-hidden="true"></i>
        </a>
    `;
}

// TEAM MEMBERS RENDERING
function renderTeamMembers() {
    const container = document.getElementById('team-members-grid');
    if (container) container.innerHTML = AppData.team.map((m, index) => {
        const instagramUrl = getSafeExternalUrl(m.instagram);
        return `
            <article class="group relative flex min-w-0 items-center gap-3 rounded-2xl border border-slate-200/80 bg-white p-3 shadow-sm transition-shadow hover:border-gizi-200 hover:shadow-md sm:gap-4 sm:p-4">
                <div class="team-member-photo relative flex shrink-0 items-center justify-center overflow-hidden bg-gradient-to-br from-gizi-50 to-emerald-100 font-black text-gizi-700 shadow-inner">
                    ${m.image ? `<img src="${escapeHtml(m.image)}" alt="Foto ${escapeHtml(m.name)}" class="absolute inset-0 h-full w-full object-cover" onerror="this.hidden=true; this.nextElementSibling.hidden=false">` : ''}
                    <span ${m.image ? 'hidden' : ''} aria-hidden="true">${escapeHtml(m.name.split(/\s+/).map(part => part[0]).join('').slice(0, 2).toUpperCase())}</span>
                </div>
                <div class="min-w-0 flex-1">
                    <div class="mb-1 flex flex-wrap items-center gap-1.5">
                        <span class="rounded-full bg-slate-100 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-slate-500">Anggota ${String(index + 1).padStart(2, '0')}</span>
                        ${m.role === 'Ketua Kelompok' ? '<i class="fa-solid fa-star text-xs text-amber-500" aria-label="Ketua kelompok"></i>' : ''}
                    </div>
                    <h3 class="break-words text-sm font-black leading-snug tracking-tight text-slate-900 sm:text-base">${escapeHtml(m.name)}</h3>
                    <p class="mt-1 break-words text-xs font-semibold leading-snug ${m.role === 'Ketua Kelompok' ? 'text-amber-700' : 'text-gizi-700'}">${escapeHtml(m.role)}</p>
                </div>
                ${instagramUrl
                    ? `<a href="${escapeHtml(instagramUrl)}" target="_blank" rel="noopener noreferrer" aria-label="Instagram ${escapeHtml(m.name)} (buka di tab baru)" title="Instagram ${escapeHtml(m.name)}" class="team-member-instagram touch-target flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-pink-100 bg-pink-50 text-pink-600"><i class="fa-brands fa-instagram" aria-hidden="true"></i></a>`
                    : `<span role="img" aria-label="Instagram ${escapeHtml(m.name)} belum ditambahkan" title="Instagram belum ditambahkan" class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50 text-slate-400"><i class="fa-brands fa-instagram" aria-hidden="true"></i></span>`}
            </article>
        `;
    }).join('');

    const schoolLinksContainer = document.getElementById('school-social-links');
    if (schoolLinksContainer) {
        const links = [
            { key: 'website', label: 'Website SMK', icon: 'fa-globe', type: 'solid', style: 'school-channel-website border-sky-100 bg-sky-50 text-sky-700' },
            { key: 'instagram', label: 'Instagram SMK', icon: 'fa-instagram', type: 'brands', style: 'school-channel-instagram border-pink-100 bg-pink-50 text-pink-700' },
            { key: 'tiktok', label: 'TikTok SMK', icon: 'fa-tiktok', type: 'brands', style: 'school-channel-tiktok border-slate-200 bg-slate-100 text-slate-900' }
        ];
        schoolLinksContainer.innerHTML = links.map(link => {
            const icon = `${link.type === 'brands' ? 'fa-brands' : 'fa-solid'} ${link.icon}`;
            return renderExternalLink(
                schoolLinks[link.key],
                link.label,
                icon,
                `school-channel-link touch-target inline-flex min-w-0 items-center gap-3 rounded-2xl border px-4 py-3 text-sm font-bold shadow-sm transition-all ${link.style}`
            ) || `
                <div class="flex min-w-0 items-center gap-3 rounded-2xl border border-dashed border-slate-200 bg-white px-4 py-3 text-sm text-slate-400">
                    <i class="${icon}" aria-hidden="true"></i>
                    <span class="min-w-0">
                        <span class="block font-bold text-slate-600">${escapeHtml(link.label)}</span>
                        <span class="block text-xs">Tautan resmi belum ditambahkan</span>
                    </span>
                </div>
            `;
        }).join('');
    }
}

// MODALS CONTROL
function openModal(modalId, returnFocus = document.activeElement) {
    const modal = document.getElementById(modalId);
    if (!modal) {
        console.error(`Modal not found: ${modalId}`);
        return;
    }
    if (currentState.activeModalId === modalId && !modal.classList.contains('hidden')) return;

    const focusTarget = returnFocus instanceof HTMLElement ? returnFocus : document.activeElement;
    if (currentState.activeModalId && currentState.activeModalId !== modalId) {
        closeModal(currentState.activeModalId);
    }

    if (!currentState.activeModalId || modal.classList.contains('hidden')) {
        currentState.modalReturnFocus = focusTarget instanceof HTMLElement ? focusTarget : null;
    }

    currentState.activeModalId = modalId;
    currentState.previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    modal.setAttribute('aria-hidden', 'false');
    modal.classList.remove('hidden', 'popup-closing');
    requestAnimationFrame(() => modal.classList.add('popup-open'));

    const panel = modal.querySelector('.popup-panel');
    const firstAction = modal.querySelector('button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])');
    (firstAction || panel || modal).focus({ preventScroll: true });
}

function handleModalBackdrop(event, modalId) {
    if (event.target === event.currentTarget) {
        closeModal(modalId);
    }
}

function handleModalKeydown(event) {
    const modal = currentState.activeModalId
        ? document.getElementById(currentState.activeModalId)
        : null;
    if (!modal || modal.classList.contains('hidden')) return;

    if (event.key === 'Escape') {
        event.preventDefault();
        closeModal(modal.id);
        return;
    }

    if (event.key !== 'Tab') return;
    const focusable = [...modal.querySelectorAll(
        'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )].filter(element => element.getClientRects().length > 0);

    if (focusable.length === 0) {
        event.preventDefault();
        modal.focus();
        return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const activeIsInside = modal.contains(document.activeElement);
    if (!activeIsInside || (event.shiftKey && (document.activeElement === first || document.activeElement === modal))) {
        event.preventDefault();
        (event.shiftKey ? last : first).focus();
    } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
    }
}

function handleModalTriggerKeydown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        event.currentTarget.click();
    }
}

function openRecipeModal(id, triggerEvent) {
    const rcp = AppData.recipes.find(r => r.id === id);
    if (!rcp) {
        console.error(`Recipe not found: ${id}`);
        return;
    }

    const formattedPrice = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(rcp.estimatedCost);

    const modalVisual = document.getElementById('modal-recipe-visual');
    const modalIcon = document.getElementById('modal-recipe-icon');
    const modalCat = document.getElementById('modal-recipe-cat');
    const modalTitle = document.getElementById('modal-recipe-title');
    const modalPrice = document.getElementById('modal-recipe-price');
    const modalPortion = document.getElementById('modal-recipe-portion');
    const modalTime = document.getElementById('modal-recipe-time');
    const modalAgeRange = document.getElementById('modal-recipe-age-range');
    const modalNutrition = document.getElementById('modal-recipe-nutrition');
    const ingContainer = document.getElementById('modal-recipe-ingredients');
    const stepsContainer = document.getElementById('modal-recipe-steps');
    const recipeModal = document.getElementById('recipe-modal');
    const favBtn = document.getElementById('modal-fav-btn');

    const visual = getRecipeVisual(rcp.category);
    if (modalVisual) modalVisual.className = `relative flex h-64 w-full items-center justify-center sm:h-72 ${visual.background}`;
    if (modalIcon) modalIcon.className = `fa-solid ${visual.icon} text-6xl ${visual.foreground}`;
    if (modalCat) modalCat.textContent = rcp.category;
    if (modalTitle) modalTitle.textContent = rcp.title;
    if (modalPrice) modalPrice.textContent = formattedPrice;
    if (modalPortion) modalPortion.textContent = rcp.portionUnit;
    if (modalTime) modalTime.textContent = rcp.cookTime;
    if (modalAgeRange) modalAgeRange.textContent = rcp.ageRangeLabel || 'Semua usia';
    if (modalNutrition) modalNutrition.textContent = rcp.nutrition;

    if (ingContainer) {
        ingContainer.innerHTML = rcp.ingredients.map(ing => `
                    <li class="flex items-center bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                        <i class="fa-solid fa-circle-check text-gizi-500 mr-2 text-xs"></i>
                        <span>${ing}</span>
                    </li>
                `).join('');
    }

    if (stepsContainer) {
        stepsContainer.innerHTML = rcp.steps.map(step => `
                    <li class="pl-2 py-1 leading-relaxed">${step}</li>
                `).join('');
    }

    if (favBtn) {
        favBtn.setAttribute('data-recipe-id', rcp.id);
        favBtn.onclick = () => toggleFavorite(rcp.id);
    }

    updateModalFavBtnState(rcp.id);

    if (recipeModal) openModal(recipeModal.id, triggerEvent?.currentTarget);
}

function updateModalFavBtnState(id) {
    const favBtn = document.getElementById('modal-fav-btn');
    const favText = document.getElementById('modal-fav-text');
    const isFav = currentState.favorites.includes(id);

    if (!favBtn) return;

    const icon = favBtn.querySelector('i');

    if (isFav) {
        favBtn.setAttribute('aria-pressed', 'true');
        favBtn.setAttribute('aria-label', 'Hapus dari favorit');
        favBtn.className = "px-5 py-2.5 rounded-xl bg-red-50 border border-red-200 text-sm font-bold flex items-center space-x-2 text-red-600 hover:bg-red-100";
        if (icon) icon.className = "fa-solid fa-heart text-red-500";
        if (favText) favText.textContent = "Disimpan di Favorit";
    } else {
        favBtn.setAttribute('aria-pressed', 'false');
        favBtn.setAttribute('aria-label', 'Simpan favorit');
        favBtn.className = "px-5 py-2.5 rounded-xl border border-slate-200 text-sm font-bold flex items-center space-x-2 text-slate-700 hover:bg-slate-50";
        if (icon) icon.className = "fa-regular fa-heart text-red-500";
        if (favText) favText.textContent = "Simpan Favorit";
    }
}

function openCategoryModal(catId, triggerEvent) {
    const cat = AppData.categories.find(c => c.id === catId);
    if (!cat) return;
    currentState.categoryModalId = catId;

    const catIcon = document.getElementById('modal-cat-icon');
    const catTitle = document.getElementById('modal-cat-title');
    const catDesc = document.getElementById('modal-cat-desc');
    const bulletsContainer = document.getElementById('modal-cat-bullets');
    const categoryModal = document.getElementById('category-modal');

    if (catIcon) catIcon.innerHTML = `<i class="fa-solid ${cat.icon}"></i>`;
    if (catTitle) catTitle.textContent = cat.name;
    if (catDesc) catDesc.textContent = cat.description;

    if (bulletsContainer) {
        bulletsContainer.innerHTML = cat.safeFoods.map(food => `
                    <div class="flex items-center space-x-2.5 bg-emerald-50/80 p-3 rounded-xl border border-emerald-100 text-xs font-semibold text-slate-800">
                        <i class="fa-solid fa-leaf text-emerald-600 text-sm"></i>
                        <span>${food}</span>
                    </div>
                `).join('');
    }

    if (categoryModal) openModal(categoryModal.id, triggerEvent?.currentTarget);
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal || modal.classList.contains('hidden')) return;

    modal.classList.remove('popup-open');
    modal.classList.add('popup-closing');
    modal.setAttribute('aria-hidden', 'true');
    window.setTimeout(() => {
        if (modal.classList.contains('popup-closing')) {
            modal.classList.add('hidden');
            modal.classList.remove('popup-closing');
        }
    }, 180);

    if (currentState.activeModalId === modalId) {
        currentState.activeModalId = null;
        document.body.style.overflow = currentState.previousBodyOverflow;
        const returnFocus = currentState.modalReturnFocus;
        currentState.modalReturnFocus = null;
        if (returnFocus?.isConnected) returnFocus.focus({ preventScroll: true });
    }
}
