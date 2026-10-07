// State & Global Controller
let currentTab = 'resep';
let favoritList = JSON.parse(localStorage.getItem('dapurgizi_fav_v2')) || [];
let activeRecipeTab = {}; // Menyimpan state tab internal per card (bahan/langkah/gizi)

document.addEventListener("DOMContentLoaded", () => {
    initKecamatanDropdown();
    applyFilters();
    updateFavoritBadge();
});

// Switch Tab Utama (Resep vs Skrining)
function switchTab(tab) {
    currentTab = tab;
    const resepSec = document.getElementById("section-resep");
    const stuntingSec = document.getElementById("section-stunting");
    const resepBtn = document.getElementById("tab-resep-btn");
    const stuntingBtn = document.getElementById("tab-stunting-btn");

    if (tab === 'resep') {
        resepSec.classList.remove("hidden");
        stuntingSec.classList.add("hidden");

        resepBtn.className = "flex-1 sm:flex-none py-3 px-6 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 bg-amber-400 text-emerald-950 shadow-md";
        stuntingBtn.className = "flex-1 sm:flex-none py-3 px-6 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 text-emerald-100 hover:text-white";
    } else {
        resepSec.classList.add("hidden");
        stuntingSec.classList.remove("hidden");

        stuntingBtn.className = "flex-1 sm:flex-none py-3 px-6 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 bg-amber-400 text-emerald-950 shadow-md";
        resepBtn.className = "flex-1 sm:flex-none py-3 px-6 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 text-emerald-100 hover:text-white";
    }
}

// Populate Dropdown Kecamatan
function initKecamatanDropdown() {
    const select = document.getElementById("select-kecamatan");
    select.innerHTML = kecamatanBanjarnegara.map(k => `<option value="${k.id}">${k.nama}</option>`).join("");
}

// Update Slider Budget Text
function updateBudgetLabel(val) {
    document.getElementById("budget-value").innerText = `Rp ${parseInt(val).toLocaleString('id-ID')}`;
}

// Reset Filter
function resetFilter() {
    document.getElementById("search-keyword").value = "";
    document.getElementById("select-kecamatan").value = "semua";
    document.getElementById("select-kategori").value = "semua";
    document.getElementById("input-budget").value = 25000;
    updateBudgetLabel(25000);
    applyFilters();
}

// Filter Logic
function applyFilters() {
    const keyword = document.getElementById("search-keyword").value.toLowerCase().trim();
    const selectedKec = document.getElementById("select-kecamatan").value;
    const selectedKat = document.getElementById("select-kategori").value;
    const maxBudget = parseInt(document.getElementById("input-budget").value) || 25000;

    const filtered = resepDatabase.filter(item => {
        const matchKeyword = keyword === "" ||
        item.judul.toLowerCase().includes(keyword) ||
        item.panganLokal.toLowerCase().includes(keyword) ||
        item.giziUtama.toLowerCase().includes(keyword);

        const matchKecamatan = selectedKec === "semua" || item.kecamatan.includes(selectedKec);
        const matchKategori = selectedKat === "semua" || item.kategori === selectedKat;
        const matchBudget = item.estimasiHarga <= maxBudget;

        return matchKeyword && matchKecamatan && matchKategori && matchBudget;
    });

    renderResepCards(filtered);
}

// Sorting Resep
function sortResep(type) {
    const keyword = document.getElementById("search-keyword").value.toLowerCase().trim();
    const selectedKec = document.getElementById("select-kecamatan").value;
    const selectedKat = document.getElementById("select-kategori").value;
    const maxBudget = parseInt(document.getElementById("input-budget").value) || 25000;

    let filtered = resepDatabase.filter(item => {
        const matchKeyword = keyword === "" || item.judul.toLowerCase().includes(keyword) || item.panganLokal.toLowerCase().includes(keyword);
        const matchKecamatan = selectedKec === "semua" || item.kecamatan.includes(selectedKec);
        const matchKategori = selectedKat === "semua" || item.kategori === selectedKat;
        const matchBudget = item.estimasiHarga <= maxBudget;
        return matchKeyword && matchKecamatan && matchKategori && matchBudget;
    });

    if (type === 'murah') {
        filtered.sort((a, b) => a.estimasiHarga - b.estimasiHarga);
    } else if (type === 'protein') {
        filtered.sort((a, b) => b.protein - a.protein);
    }

    renderResepCards(filtered);
}

// Switch Inner Card Tab (Bahan vs Langkah vs Nilai Gizi)
function setCardSubTab(recipeId, tabName) {
    activeRecipeTab[recipeId] = tabName;
    applyFilters(); // Re-render to update UI
}

// Render Resep Cards
function renderResepCards(data) {
    const container = document.getElementById("resep-container");
    const countLabel = document.getElementById("result-count");

    countLabel.innerText = `Menampilkan ${data.length} rekomendasi menu pilihan`;

    if (data.length === 0) {
        container.innerHTML = `
        <div class="col-span-full bg-white p-10 rounded-3xl text-center border border-dashed border-slate-300 space-y-3">
        <div class="inline-flex p-3.5 bg-amber-50 text-amber-600 rounded-2xl shadow-inner">
        <i data-lucide="search-x" class="w-8 h-8"></i>
        </div>
        <h4 class="font-extrabold text-slate-700 text-sm">Tidak Ada Resep yang Sesuai</h4>
        <p class="text-xs text-slate-400 max-w-sm mx-auto">Coba atur ulang kata kunci pencarian, sesuaikan slider budget, atau pilih kecamatan lain.</p>
        <button onclick="resetFilter()" class="inline-block text-xs font-bold text-emerald-700 bg-emerald-50 px-4 py-2 rounded-xl hover:bg-emerald-100 transition">
        Reset Semua Filter
        </button>
        </div>
        `;
        lucide.createIcons();
        return;
    }

    container.innerHTML = data.map(item => {
        const isFav = favoritList.includes(item.id);
        const currentSubTab = activeRecipeTab[item.id] || 'bahan';

        let katBadge = "bg-blue-50 text-blue-700 border-blue-200";
        let katText = "Keluarga Sehat";
        if (item.kategori === 'mpasi') {
            katBadge = "bg-amber-50 text-amber-800 border-amber-200";
            katText = "MPASI & Balita";
        } else if (item.kategori === 'bumil') {
            katBadge = "bg-purple-50 text-purple-800 border-purple-200";
            katText = "Ibu Hamil & Menyusui";
        }

        return `
        <div class="recipe-card bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition flex flex-col justify-between group">
        <div>
        <!-- Card Image Header -->
        <div class="relative h-48 w-full overflow-hidden bg-slate-100">
        <img src="${item.gambar}" alt="${item.judul}" class="recipe-card-img w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent"></div>

        <!-- Price Badge -->
        <span class="absolute top-3 left-3 bg-emerald-700/90 backdrop-blur-md text-white text-xs font-black px-3 py-1 rounded-full shadow-md border border-emerald-500/30">
        Rp ${item.estimasiHarga.toLocaleString('id-ID')} / porsi
        </span>

        <!-- Bookmark Button -->
        <button onclick="toggleFavorit('${item.id}')" class="absolute top-3 right-3 p-2 rounded-2xl bg-white/90 backdrop-blur-md text-slate-700 hover:text-amber-500 transition shadow" title="Simpan Resep">
        <i data-lucide="bookmark" class="w-4 h-4 ${isFav ? 'fill-amber-400 text-amber-500' : ''}"></i>
        </button>

        <!-- Category Badge -->
        <span class="absolute bottom-3 left-3 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border shadow-sm ${katBadge}">
        ${katText}
        </span>
        </div>

        <!-- Card Body -->
        <div class="p-5 space-y-3">
        <h4 class="font-extrabold text-slate-800 text-base leading-snug group-hover:text-emerald-700 transition">${item.judul}</h4>

        <div class="bg-slate-50 p-2.5 rounded-2xl border border-slate-100 text-xs">
        <p class="text-emerald-800 font-extrabold mb-0.5">🌿 Pangan Lokal Khas:</p>
        <p class="text-slate-600 font-medium">${item.panganLokal}</p>
        </div>

        <!-- Card Tabs (Bahan, Langkah, Nilai Gizi) -->
        <div class="pt-2 border-t border-slate-100">
        <div class="flex border-b border-slate-100 text-[11px] font-bold mb-3">
        <button onclick="setCardSubTab('${item.id}', 'bahan')" class="flex-1 pb-1.5 text-center transition ${currentSubTab === 'bahan' ? 'text-emerald-700 border-b-2 border-emerald-600' : 'text-slate-400 hover:text-slate-600'}">Bahan</button>
        <button onclick="setCardSubTab('${item.id}', 'langkah')" class="flex-1 pb-1.5 text-center transition ${currentSubTab === 'langkah' ? 'text-emerald-700 border-b-2 border-emerald-600' : 'text-slate-400 hover:text-slate-600'}">Langkah</button>
        <button onclick="setCardSubTab('${item.id}', 'gizi')" class="flex-1 pb-1.5 text-center transition ${currentSubTab === 'gizi' ? 'text-emerald-700 border-b-2 border-emerald-600' : 'text-slate-400 hover:text-slate-600'}">Nutrisi</button>
        </div>

        <!-- Tab Content: Bahan -->
        <div class="${currentSubTab === 'bahan' ? 'block' : 'hidden'} space-y-1">
        <ul class="list-disc list-inside text-[11px] text-slate-600 space-y-1">
        ${item.bahan.map(b => `<li>${b}</li>`).join("")}
        </ul>
        </div>

        <!-- Tab Content: Langkah -->
        <div class="${currentSubTab === 'langkah' ? 'block' : 'hidden'} space-y-1">
        <ol class="list-decimal list-inside text-[11px] text-slate-600 space-y-1">
        ${item.langkah.map(l => `<li>${l}</li>`).join("")}
        </ol>
        </div>

        <!-- Tab Content: Nutrisi -->
        <div class="${currentSubTab === 'gizi' ? 'block' : 'hidden'} space-y-2">
        <div class="grid grid-cols-3 gap-1.5 text-center text-[10px]">
        <div class="bg-amber-50 p-2 rounded-xl text-amber-900 border border-amber-100">
        <span class="block font-bold">Kalori</span>
        <span class="font-extrabold text-xs">${item.kalori} kcal</span>
        </div>
        <div class="bg-emerald-50 p-2 rounded-xl text-emerald-900 border border-emerald-100">
        <span class="block font-bold">Protein</span>
        <span class="font-extrabold text-xs">${item.protein}g</span>
        </div>
        <div class="bg-blue-50 p-2 rounded-xl text-blue-900 border border-blue-100">
        <span class="block font-bold">Zat Besi</span>
        <span class="font-extrabold text-xs">${item.zatBesi}mg</span>
        </div>
        </div>
        <p class="text-[10px] text-slate-500 italic leading-tight">*Manfaat: ${item.giziUtama}</p>
        </div>
        </div>

        </div>
        </div>
        </div>
        `;
    }).join("");

    lucide.createIcons();
}

// Bookmark / Favorit Management
function toggleFavorit(id) {
    if (favoritList.includes(id)) {
        favoritList = favoritList.filter(favId => favId !== id);
    } else {
        favoritList.push(id);
    }
    localStorage.setItem('dapurgizi_fav_v2', JSON.stringify(favoritList));
    updateFavoritBadge();
    applyFilters();
}

function updateFavoritBadge() {
    const badge = document.getElementById("fav-badge");
    if (favoritList.length > 0) {
        badge.innerText = favoritList.length;
        badge.classList.remove("hidden");
    } else {
        badge.classList.add("hidden");
    }
}

// Modal Favorit
function toggleFavoritModal() {
    const modal = document.getElementById("fav-modal");
    const container = document.getElementById("fav-list-container");

    if (modal.classList.contains("hidden")) {
        modal.classList.remove("hidden");

        const favItems = resepDatabase.filter(item => favoritList.includes(item.id));
        if (favItems.length === 0) {
            container.innerHTML = `
            <div class="text-center py-10 text-slate-400 text-xs space-y-2">
            <i data-lucide="bookmark" class="w-8 h-8 mx-auto text-slate-300"></i>
            <p>Belum ada resep yang Anda simpan.</p>
            </div>
            `;
            lucide.createIcons();
        } else {
            container.innerHTML = favItems.map(item => `
            <div class="flex items-center justify-between bg-slate-50 p-3 rounded-2xl border border-slate-200/80">
            <div class="flex items-center gap-3">
            <img src="${item.gambar}" class="w-12 h-12 rounded-xl object-cover">
            <div>
            <h5 class="font-extrabold text-xs text-slate-800">${item.judul}</h5>
            <p class="text-[10px] text-emerald-700 font-bold">Rp ${item.estimasiHarga.toLocaleString('id-ID')} / porsi</p>
            </div>
            </div>
            <button onclick="toggleFavorit('${item.id}'); toggleFavoritModal();" class="text-slate-400 hover:text-red-500 p-2 transition">
            <i data-lucide="trash-2" class="w-4 h-4"></i>
            </button>
            </div>
            `).join("");
            lucide.createIcons();
        }
    } else {
        modal.classList.add("hidden");
    }
}

// Analisis Skrining Stunting (Kurva Pertumbuhan WHO)
function handleCekStunting(event) {
    event.preventDefault();
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const usia = parseInt(document.getElementById("input-usia").value);
    const tb = parseFloat(document.getElementById("input-tb").value);
    const resultContainer = document.getElementById("stunting-result-container");

    const refGender = standarStuntingWHO[gender];
    const daftarUsia = Object.keys(refGender).map(Number);

    let usiaAcuan = daftarUsia[0];
    for (let u of daftarUsia) {
        if (usia >= u) usiaAcuan = u;
    }

    const minTB = refGender[usiaAcuan];

    let status = "Sangat Baik (Normal)";
    let alertBg = "bg-emerald-50 border-emerald-300 text-emerald-950";
    let icon = "check-circle-2";
    let message = `Tinggi/Panjang badan anak (${tb} cm) berada pada batas aman kurva pertumbuhan WHO (Acuan min: ${minTB} cm). Pertahankan asupan protein harian!`;

    if (tb < minTB) {
        status = "Potensi Risiko Stunting";
        alertBg = "bg-amber-50 border-amber-300 text-amber-950";
        icon = "alert-triangle";
        message = `Tinggi/Panjang badan anak (${tb} cm) terindikasi di bawah standar rata-rata minimum (${minTB} cm) untuk usia ${usiaAcuan} bulan. Disarankan memperbanyak asupan protein hewani (Ikan, Hati, Telur) & konsultasi ke Posyandu/Puskesmas.`;
    }

    resultContainer.classList.remove("hidden");
    resultContainer.className = `p-6 rounded-3xl border ${alertBg} space-y-4 shadow-md transition-all`;
    resultContainer.innerHTML = `
    <div class="flex items-center justify-between border-b border-slate-200/60 pb-3">
    <div class="flex items-center gap-2">
    <i data-lucide="${icon}" class="w-5 h-5 font-bold"></i>
    <h4 class="font-extrabold text-sm">Hasil Skrining Tumbuh Kembang</h4>
    </div>
    <span class="text-[10px] font-black px-3 py-1 rounded-full bg-white shadow-sm border border-slate-200">
    ${status}
    </span>
    </div>
    <p class="text-xs leading-relaxed font-medium">${message}</p>
    <div class="pt-2 flex justify-between items-center">
    <span class="text-[11px] text-slate-500">Aksi Rekomendasi:</span>
    <button onclick="rekomendasiStuntingMenu()" class="text-xs font-extrabold text-emerald-800 hover:underline flex items-center gap-1">
    Filter Menu MPASI Padat Gizi <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
    </button>
    </div>
    `;

    lucide.createIcons();
}

function rekomendasiStuntingMenu() {
    switchTab('resep');
    document.getElementById("select-kategori").value = "mpasi";
    document.getElementById("input-budget").value = 25000;
    updateBudgetLabel(25000);
    applyFilters();
}
