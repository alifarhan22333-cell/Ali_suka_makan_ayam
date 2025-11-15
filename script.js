// Menunggu hingga seluruh halaman HTML dimuat
document.addEventListener('DOMContentLoaded', () => {

    // --- DATA RESEP (Contoh) ---
    // Di aplikasi nyata, ini bisa berasal dari database
    const semuaResep = [
        {
            nama: "Ayam Goreng Krispi",
            kategori: "goreng",
            deskripsi: "Ayam goreng renyah ala restoran cepat saji yang gurih.",
            // Ganti "gambar/..." dengan path gambar Anda
            gambar: "images/ayam-g.jpg" 
        },
        {
            nama: "Ayam Bakar Bumbu Rujak",
            kategori: "bakar",
            deskripsi: "Ayam bakar pedas manis dengan bumbu rujak yang meresap.",
            gambar: "images/aym-r.jpg"
        },
        {
            nama: "Soto Ayam Lamongan",
            kategori: "kuah",
            deskripsi: "Soto ayam berkuah kuning bening segar dengan koya.",
            gambar: "images/soto-a.jpg"
        },
        {
            nama: "Ayam Geprek Sambal Bawang",
            kategori: "goreng",
            deskripsi: "Ayam krispi yang digeprek dengan sambal bawang super pedas.",
            gambar: "images/aym-gs.jpg"
        },
        {
            nama: "Opor Ayam Kuning",
            kategori: "kuah",
            deskripsi: "Masakan wajib Lebaran dengan kuah santan yang gurih.",
            gambar: "images/opor-aym.jpg"
        },
        {
            nama: "Ayam Panggang Madu",
            kategori: "bakar",
            deskripsi: "Ayam panggang oven dengan olesan madu yang legit.",
            gambar: "images/aym-pm.jpg"
        }
    ];

    // --- ELEMEN DOM ---
    const kontainerResep = document.getElementById('kontainer-resep');
    const tombolFilter = document.querySelectorAll('.btn-filter');

    // --- FUNGSI UNTUK MENAMPILKAN RESEP ---
    function tampilkanResep(resep) {
        // Kosongkan kontainer dulu
        kontainerResep.innerHTML = '';

        // Loop melalui data resep dan buat kartu HTML
        resep.forEach(item => {
            const kartuHTML = `
                <div class="kartu-resep">
                    <img src="${item.gambar}" alt="${item.nama}">
                    <div class="info-resep">
                        <h3>${item.nama}</h3>
                        <p>${item.deskripsi}</p>
                        <span class="kategori">${item.kategori}</span>
                    </div>
                </div>
            `;
            // Masukkan HTML kartu ke dalam kontainer
            kontainerResep.innerHTML += kartuHTML;
        });
    }

    // --- FUNGSI UNTUK FILTER ---
    function filterResep(kategori) {
        if (kategori === 'semua') {
            tampilkanResep(semuaResep);
        } else {
            const resepTerfilter = semuaResep.filter(item => item.kategori === kategori);
            tampilkanResep(resepTerfilter);
        }
    }

    // --- EVENT LISTENER UNTUK TOMBOL FILTER ---
    tombolFilter.forEach(tombol => {
        tombol.addEventListener('click', () => {
            // Hapus kelas 'aktif' dari semua tombol
            tombolFilter.forEach(btn => btn.classList.remove('aktif'));
            // Tambahkan kelas 'aktif' ke tombol yang diklik
            tombol.classList.add('aktif');
            
            // Ambil kategori dari atribut data-kategori
            const kategori = tombol.dataset.kategori;
            filterResep(kategori);
        });
    });

    // --- TAMPILKAN SEMUA RESEP SAAT PERTAMA KALI LOAD ---
    // Set tombol "Semua" aktif saat awal
    document.querySelector('.btn-filter[data-kategori="semua"]').classList.add('aktif');
    tampilkanResep(semuaResep);

});


