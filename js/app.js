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
                {
                    name: "Adam Maulana",
                    role: "Anggota Kelompok Dapur Gizi"
                },
                {
                    name: "Nanda Ardiansyah",
                    role: "Anggota Kelompok Dapur Gizi"
                },
                {
                    name: "Harine",
                    role: "Anggota Kelompok Dapur Gizi"
                }
            ]
        };

        const getStoredFavorites = () => {
            try {
                const saved = localStorage.getItem('dapurGizi_favs');
                const parsed = saved ? JSON.parse(saved) : [];
                return Array.isArray(parsed) ? parsed : [];
            } catch (error) {
                console.warn('Unable to parse saved favorites:', error);
                return [];
            }
        };

        const currentState = {
            activeTab: 'home',
            selectedCategory: new URLSearchParams(window.location.search).get('category') || 'all',
            categoryModalId: null,
            maxBudget: 60000,
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
            renderCategoryFilterButtons();
            renderTeamMembers();
            const searchInput = document.getElementById('search-input');
            if (searchInput) {
                searchInput.value = new URLSearchParams(window.location.search).get('keyword') || '';
                currentState.searchQuery = searchInput.value.toLowerCase().trim();
            }
            const categoryDropdown = document.getElementById('category-dropdown');
            if (categoryDropdown) categoryDropdown.value = currentState.selectedCategory;
            renderDashboardRecipes();
            updateBudgetDisplay(currentState.maxBudget);
            updateAgeLabels(document.getElementById('stunting-age')?.value || 12);
            updateFavCounters();
            if (currentState.activeTab === 'favorites') {
                renderFavorites();
            }
            updateActiveNav();
            document.addEventListener('keydown', handleModalKeydown);
        });

        const pagePaths = {
            home: 'dapur_gizi_application.html',
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
            document.querySelectorAll('.nav-btn').forEach(button => {
                button.classList.remove('text-gizi-700', 'bg-gizi-50');
                button.classList.add('text-slate-600');
            });

            const activeButton = document.getElementById(`nav-${getCurrentTab()}`);
            if (activeButton) {
                activeButton.classList.add('text-gizi-700', 'bg-gizi-50');
                activeButton.classList.remove('text-slate-600');
            }
        }

        function toggleMobileNav() {
            const menu = document.getElementById('mobile-nav-menu');
            if (menu) {
                menu.classList.toggle('hidden');
            }
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
            const recommendations = document.getElementById('stunting-recipe-recommendations');
            if (recommendations) {
                recommendations.classList.add('hidden');
                recommendations.innerHTML = '';
            }
        }

        function calculateStunting() {
            const ageMonths = Number.parseInt(document.getElementById('stunting-age').value, 10);
            const height = Number.parseFloat(document.getElementById('stunting-height').value);
            const weight = Number.parseFloat(document.getElementById('stunting-weight').value);
            const genderEl = document.querySelector('input[name="stunting-gender"]:checked');
            const gender = genderEl ? genderEl.value : 'male';

            if (!Number.isInteger(ageMonths) || ageMonths < 0 || ageMonths > 60) {
                alert('Pilih usia balita antara 0 sampai 60 bulan.');
                return;
            }
            if (!Number.isFinite(height) || height < 30 || height > 130) {
                alert('Silakan masukkan angka tinggi badan balita yang valid.');
                return;
            }
            if (!Number.isFinite(weight) || weight < 0.5 || weight > 35) {
                alert('Silakan masukkan berat badan antara 0,5 sampai 35 kg.');
                return;
            }

            const whoSex = gender === 'male' ? 'boys' : 'girls';
            const heightReference = window.WHO_LHFA?.[whoSex]?.[ageMonths];
            const weightReference = window.WHO_WFA?.[whoSex]?.[ageMonths];
            if (!heightReference || !weightReference) {
                alert('Data standar pertumbuhan WHO tidak dapat dimuat. Muat ulang halaman dan coba lagi.');
                console.error(`Missing WHO growth reference for ${gender}, ${ageMonths} months.`);
                return;
            }

            const heightZScore = calculateLmsZ(height, heightReference);
            const weightZScore = calculateLmsZ(weight, weightReference);
            if (!Number.isFinite(heightZScore) || heightZScore < -6 || heightZScore > 6) {
                alert('Hasil panjang/tinggi berada di luar batas pemeriksaan standar WHO (-6 hingga +6 SD). Periksa kembali usia, jenis kelamin, dan cara mengukur.');
                return;
            }
            if (!Number.isFinite(weightZScore) || weightZScore < -6 || weightZScore > 5) {
                alert('Hasil berat berada di luar batas pemeriksaan standar WHO (-6 hingga +5 SD). Periksa kembali usia, jenis kelamin, dan cara menimbang.');
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
                        Lihat menu lainnya <i class="fa-solid fa-arrow-right text-xs"></i>
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

        // FILTER CONTROLS RENDERING
        function renderCategoryFilterButtons() {
            const container = document.getElementById('category-buttons-container');
            if (!container) return;

            let html = `
                <button onclick="setCategoryFilter('all')" class="cat-btn px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${currentState.selectedCategory === 'all' ? 'bg-gizi-600 text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}">
                    Semua
                </button>
            `;

            html += AppData.categories.map(cat => `
                <button onclick="setCategoryFilter('${cat.id}')" class="cat-btn px-3 py-1.5 rounded-xl text-xs font-bold capitalize transition-all ${currentState.selectedCategory === cat.id ? 'bg-gizi-600 text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}">
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
        }

        function setCategoryFilter(catId) {
            currentState.selectedCategory = catId;
            const dd = document.getElementById('category-dropdown');
            if (dd) dd.value = catId;

            renderCategoryFilterButtons();
            handleFilterChange();
        }

        function handleFilterChange() {
            const searchInput = document.getElementById('search-input');
            if (searchInput) {
                currentState.searchQuery = searchInput.value.toLowerCase().trim();
            }
            renderDashboardRecipes();
        }

        function resetFilters() {
            currentState.selectedCategory = 'all';
            currentState.maxBudget = 60000;
            currentState.searchQuery = '';

            const slider = document.getElementById('budget-slider');
            if (slider) slider.value = 60000;
            updateBudgetDisplay(60000);

            const searchInput = document.getElementById('search-input');
            if (searchInput) searchInput.value = '';

            const catDD = document.getElementById('category-dropdown');
            if (catDD) catDD.value = 'all';

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
                    <div role="button" tabindex="0" aria-label="Lihat detail ${rcp.title}" onkeydown="handleModalTriggerKeydown(event)" class="relative flex h-40 w-full cursor-pointer items-center justify-center overflow-hidden ${visual.background}" onclick="openRecipeModal('${rcp.id}', event)">
                        <i class="fa-solid ${visual.icon} text-5xl ${visual.foreground}" aria-hidden="true"></i>
                        <span class="absolute bottom-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold text-slate-600">${rcp.ageRangeLabel || 'Semua usia'}</span>

                        <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-gizi-600 text-white shadow-md">
                            ${rcp.category}
                        </span>

                        <button onclick="event.stopPropagation(); toggleFavorite('${rcp.id}');" class="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-slate-700 flex items-center justify-center shadow-md backdrop-blur-md transition-all">
                            <i class="${isFav ? 'fa-solid text-red-500' : 'fa-regular'} fa-heart text-sm"></i>
                        </button>

                        <div class="absolute bottom-3 right-3 rounded-xl bg-white/90 px-3 py-2 text-right">
                            <div class="text-[10px] font-semibold uppercase text-slate-500">Perkiraan / resep</div>
                            <div class="text-base font-extrabold text-slate-900">${formattedPrice}</div>
                        </div>
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
                            <button onclick="openRecipeModal('${rcp.id}', event)" class="font-bold text-gizi-600 hover:text-gizi-700 flex items-center">
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

            if (!container) return;

            const filtered = AppData.recipes.filter(rcp => {
                const matchCat = currentState.selectedCategory === 'all' ||
                    rcp.category === currentState.selectedCategory ||
                    rcp.relatedCategories?.includes(currentState.selectedCategory);
                const matchBudget = rcp.estimatedCost <= currentState.maxBudget;

                const query = currentState.searchQuery;
                const matchQuery = !query ||
                    rcp.title.toLowerCase().includes(query) ||
                    rcp.category.toLowerCase().includes(query) ||
                    rcp.relatedCategories?.some(category => category.toLowerCase().includes(query)) ||
                    rcp.nutrition.toLowerCase().includes(query) ||
                    rcp.ingredients.some(ing => ing.toLowerCase().includes(query));

                return matchCat && matchBudget && matchQuery;
            });

            if (countLabel) countLabel.textContent = filtered.length;

            if (filtered.length === 0) {
                container.innerHTML = '';
                if (emptyState) emptyState.classList.remove('hidden');
            } else {
                if (emptyState) emptyState.classList.add('hidden');
                container.innerHTML = filtered.map(rcp => createRecipeCardHTML(rcp)).join('');
            }
        }

        // FAVORITES SYSTEM
        function toggleFavorite(id) {
            const idx = currentState.favorites.indexOf(id);
            if (idx > -1) {
                currentState.favorites.splice(idx, 1);
            } else {
                currentState.favorites.push(id);
            }
            localStorage.setItem('dapurGizi_favs', JSON.stringify(currentState.favorites));

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

        // TEAM MEMBERS RENDERING
        function renderTeamMembers() {
            const container = document.getElementById('team-members-grid');
            if (!container) return;

            container.innerHTML = AppData.team.map(m => `
                <div class="flex flex-col items-center rounded-2xl border border-slate-200/80 bg-white p-6 text-center shadow-sm">
                    <div class="mb-4 flex h-24 w-24 items-center justify-center rounded-2xl bg-gizi-100 text-2xl font-extrabold text-gizi-700" aria-hidden="true">
                        ${m.name.split(/\s+/).map(part => part[0]).join('').slice(0, 2).toUpperCase()}
                    </div>
                    <h3 class="font-extrabold text-slate-900 text-base">${m.name}</h3>
                    <p class="mt-1 text-xs font-semibold text-gizi-700">${m.role}</p>
                </div>
            `).join('');
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
                favBtn.className = "px-5 py-2.5 rounded-xl bg-red-50 border border-red-200 text-sm font-bold flex items-center space-x-2 text-red-600 hover:bg-red-100";
                if (icon) icon.className = "fa-solid fa-heart text-red-500";
                if (favText) favText.textContent = "Disimpan di Favorit";
            } else {
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
