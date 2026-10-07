// Database Wilayah Kecamatan Kabupaten Banjarnegara
const kecamatanBanjarnegara = [
    { id: "semua", nama: "Semua Kecamatan" },
{ id: "banjarnegara", nama: "Banjarnegara Kota" },
{ id: "batur", nama: "Batur (Dieng)" },
{ id: "kalibening", nama: "Kalibening" },
{ id: "mandiraja", nama: "Mandiraja" },
{ id: "purwanegara", nama: "Purwanegara" },
{ id: "wanayasa", nama: "Wanayasa" },
{ id: "bawang", nama: "Bawang" },
{ id: "punggelan", nama: "Punggelan" }
];

// Database Resep Valid & Teruji Gizi Pangan Lokal Banjarnegara (Standar Kemenkes RI)
const resepDatabase = [
    {
        id: "rsp-001",
        judul: "Tim Mujair Santan & Daun Kelor",
        kategori: "mpasi",
        kecamatan: ["banjarnegara", "mandiraja", "bawang", "punggelan"],
        panganLokal: "Ikan Mujair Sungai Serayu, Daun Kelor",
        estimasiHarga: 12000, // per porsi
        kalori: 235,
        protein: 17.5, // gram
        zatBesi: 2.8, // mg
        giziUtama: "Protein Hewani Tinggi, Zat Besi, Kalsium",
        gambar: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&q=80",
        bahan: [
            "100g Fillet Ikan Mujair segar lokal",
            "15g (1 genggam) Daun kelor muda murni",
            "30ml Santan kelapa asli",
            "1 siung Bawang putih & merah",
            "1 cm Kunyit & sedikit garam iodium"
        ],
        langkah: [
            "Lumuri ikan mujair dengan bumbu halus (bawang & kunyit) serta santan.",
            "Kukus adonan selama 12-15 menit hingga daging lembut.",
            "Masukkan cincangan daun kelor muda di 3 menit terakhir sebelum diangkat.",
            "Saring atau sampaikan hangat sesuai tekstur usia balita (MPASI/Anak)."
        ]
    },
{
    id: "rsp-002",
    judul: "Sup Kentang Batur & Telur Puyuh",
    kategori: "mpasi",
    kecamatan: ["batur", "wanayasa"],
    panganLokal: "Kentang Batur Dieng, Telur Puyuh, Wortel",
    estimasiHarga: 11000,
    kalori: 215,
    protein: 11.8,
    zatBesi: 2.2,
    giziUtama: "Karbohidrat Kompleks, Kolin, Vitamin A",
    gambar: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80",
    bahan: [
        "150g Kentang Batur (potong dadu kecil)",
        "5-6 bit Telur puyuh lokal rebus",
        "1/2 batang Wortel manis",
        "1 siung Bawang putih geprek, seledri, & minyak kaldu"
    ],
    langkah: [
        "Rebus kentang Batur dan wortel dalam kaldu ayam hingga empuk sempurna.",
        "Tumis bawang putih hingga wangi halus, masukkan ke kuah sup.",
        "Kupas dan masukkan telur puyuh rebus bersama irisan seledri.",
        "Sajikan hangat untuk merangsang nafsu makan balita."
    ]
},
{
    id: "rsp-003",
    judul: "Nasi Tim Ayam Cincang & Hati Kelor",
    kategori: "mpasi",
    kecamatan: ["banjarnegara", "mandiraja", "purwanegara", "bawang"],
    panganLokal: "Hati Ayam Lokal, Daging Ayam, Daun Kelor",
    estimasiHarga: 14000,
    kalori: 310,
    protein: 19.2,
    zatBesi: 4.5, // Sangat baik untuk cegah anemia & stunting
    giziUtama: "Tinggi Zat Besi (Anti Anemia), Protein Hewani, Zink",
    gambar: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80",
    bahan: [
        "50g Beras putih lokal",
        "40g Hati ayam segar (cincang halus)",
        "40g Daging ayam cincang",
        "10g Daun kelor cincang halus",
        "1 sdt Minyak kelapa untuk menumis"
    ],
    langkah: [
        "Tumis hati ayam dan daging ayam cincang dengan bawang putih hingga harum.",
        "Campurkan dengan beras dan air kaldu dalam wadah tim stainless/kaca.",
        "Kukus selama 30 menit hingga beras menjadi nasi tim yang lembut.",
        "Masukkan cincangan daun kelor di akhir proses kukus."
    ]
},
{
    id: "rsp-004",
    judul: "Pepes Ikan Nila Bumbu Kuning & Kemangi",
    kategori: "bumil",
    kecamatan: ["bawang", "mandiraja", "banjarnegara"],
    panganLokal: "Ikan Nila Kolam Bawang, Daun Kemangi",
    estimasiHarga: 16000,
    kalori: 275,
    protein: 23.5,
    zatBesi: 2.1,
    giziUtama: "Omega-3, Protein Tinggi, Asam Folat",
    gambar: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&q=80",
    bahan: [
        "150g Ikan Nila segar lokal",
        "1 ikat Daun kemangi segar",
        "Bumbu halus: Kunyit, kemiri, bawang merah, bawang putih, serai",
        "Daun pisang untuk pembungkus alami"
    ],
    langkah: [
        "Lumuri ikan nila dengan bumbu halus kuning dan garam iodium.",
        "Bungkus rapi bersama kemangi menggunakan daun pisang.",
        "Kukus selama 20 menit hingga matang sempurna.",
        "Sangat baik untuk pemenuhan gizi pembentukan otak janin pada ibu hamil."
    ]
},
{
    id: "rsp-005",
    judul: "Bubur Manado Banjarnegara (Labu & Kelor)",
    kategori: "bumil",
    kecamatan: ["banjarnegara", "kalibening", "mandiraja", "batur", "purwanegara", "wanayasa", "bawang", "punggelan"],
    panganLokal: "Labu Kuning, Jagung Manis, Daun Kelor",
    estimasiHarga: 13000,
    kalori: 295,
    protein: 11.5,
    zatBesi: 3.1,
    giziUtama: "Beta Karoten, Serat, Asam Folat, Kalsium",
    gambar: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=600&q=80",
    bahan: [
        "75g Beras putih",
        "100g Labu kuning lokal (potong dadu)",
        "1/2 sisir Jagung manis pipil",
        "1 genggam Daun kelor segar",
        "Pelengkap: Ikan teri asin direbus & digoreng sedikit"
    ],
    langkah: [
        "Rebus beras dan labu kuning hingga lembut menyatu.",
        "Masukkan jagung pipil, aduk rata hingga matang.",
        "Tambahkan daun kelor sesaat sebelum api dimatikan.",
        "Sajikan dengan taburan teri renyah untuk kalsium tambahan."
    ]
},
{
    id: "rsp-006",
    judul: "Bola Singkong Mocaf Isi Tempe Orek",
    kategori: "keluarga",
    kecamatan: ["purwanegara", "kalibening", "punggelan"],
    panganLokal: "Singkong / Tepung Mocaf, Tempe Kedelai",
    estimasiHarga: 8000,
    kalori: 260,
    protein: 9.8,
    zatBesi: 1.8,
    giziUtama: "Protein Nabati, Energi Bebas Gluten",
    gambar: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80",
    bahan: [
        "200g Singkong kukus halus",
        "60g Tempe kedelai (cincang & tumis gurih)",
        "1 sdm Kecap manis lokal & bawang bombay/merah"
    ],
    langkah: [
        "Tumis tempe cincang dengan sedikit bumbu hingga harum gurih.",
        "Ambil adonan singkong halus, isi dengan tumisan tempe, bentuk bola.",
        "Kukus atau panggang sebentar hingga hangat dan padat.",
        "Camilan sehat kaya serat untuk seluruh anggota keluarga."
    ]
},
{
    id: "rsp-007",
    judul: "Pudding Salak Banjarnegara & Kelapa Muda",
    kategori: "keluarga",
    kecamatan: ["banjarnegara", "bawang", "purwanegara"],
    panganLokal: "Buah Salak Banjarnegara, Air Kelapa",
    estimasiHarga: 9000,
    kalori: 160,
    protein: 3.5,
    zatBesi: 0.9,
    giziUtama: "Camilan Sehat, Vitamin C, Antioksidan",
    gambar: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=600&q=80",
    bahan: [
        "3 buah Salak manis Banjarnegara (kupas & cincang halus)",
        "1 sachet Agar-agar swallow bening",
        "250ml Air kelapa muda / santan encer",
        "1.5 sdm Gula aren murni"
    ],
    langkah: [
        "Rebus agar-agar bersama air kelapa dan gula aren hingga mendidih.",
        "Masukkan cincangan buah salak manis lokal.",
        "Tuang ke cetakan puding, dinginkan hingga padat.",
        "Hidangan penutup kaya antioksidan dan pemikat nafsu makan anak."
    ]
}
];

// Data Acuan Kurva Pertumbuhan WHO/Kemenkes TB/U (Tinggi Badan menurut Usia dalam cm)
// Batas minimum standar normal (-2 SD)
const standarStuntingWHO = {
    L: { // Laki-Laki
        6: 63.6, 12: 71.0, 18: 76.9, 24: 81.7, 30: 85.8, 36: 88.8, 42: 91.9, 48: 94.9, 54: 97.8, 60: 100.7
    },
    P: { // Perempuan
        6: 61.2, 12: 68.9, 18: 74.9, 24: 80.0, 30: 84.4, 36: 87.4, 42: 90.4, 48: 93.6, 54: 96.7, 60: 99.7
    }
};
