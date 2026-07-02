/* ======================================
   SHOW / HIDE PASSWORD
====================================== */

function togglePassword(inputId, iconId) {
    const input = document.getElementById(inputId);
    const icon = document.getElementById(iconId);
    if (!input || !icon) return;
    icon.addEventListener("click", function () {
        if (input.type === "password") {
            input.type = "text";
            icon.classList.replace("fa-eye", "fa-eye-slash");
        } else {
            input.type = "password";
            icon.classList.replace("fa-eye-slash", "fa-eye");
        }
    });
}

// Login
togglePassword("password", "togglePassword");

// Register
togglePassword("txtPassword", "passwordViewer");
togglePassword("txtConfirm", "confirmViewer");


/* ======================================
   LOGIN SISWA
====================================== */

const btnSiswa = document.getElementById("btnSiswa");
if (btnSiswa) {
    btnSiswa.addEventListener("click", function () {
        const nisn = document.getElementById("nisn");
        const password = document.getElementById("password");
        if (!nisn || !password) return;
        if (nisn.value.trim() === "" || password.value.trim() === "") {
            alert("Silahkan isi NISN dan Password.");
            return;
        }
        alert("Login Siswa berhasil (sementara)");
    });
}


/* ======================================
   LOGIN ADMIN
====================================== */

const btnAdmin = document.getElementById("btnAdmin");
if (btnAdmin) {
    btnAdmin.addEventListener("click", function () {
        const nisn = document.getElementById("nisn");
        const password = document.getElementById("password");
        if (!nisn || !password) return;
        if (nisn.value.trim() === "" || password.value.trim() === "") {
            alert("Silahkan isi NISN dan Password.");
            return;
        }
        alert("Login Admin berhasil (sementara)");
    });
}


/* ======================================
   REGISTER
====================================== */
const btnRegisterUser = document.getElementById("btnRegisterUser");
if (btnRegisterUser) {
    btnRegisterUser.addEventListener("click", function () {
        const identity = document.getElementById("txtIdentity");
        const fullname = document.getElementById("txtFullname");
        const kelas = document.getElementById("txtClass");
        const password = document.getElementById("txtPassword");
        const confirm = document.getElementById("txtConfirm");
        if (
            !identity ||
            !fullname ||
            !kelas ||
            !password ||
            !confirm
        ) return;
        if (
            identity.value.trim() === "" ||
            fullname.value.trim() === "" ||
            kelas.value.trim() === "" ||
            password.value.trim() === "" ||
            confirm.value.trim() === ""
        ) {
            alert("Semua data wajib diisi.");
            return;
        }
        if (password.value !== confirm.value) {
            alert("Password tidak sama.");
            return;
        }
        alert("Registrasi berhasil (sementara)");
    });
}

/* ======================================
   DASHBOARD SISWA
====================================== */
document.addEventListener('DOMContentLoaded', () => {
    const profileBtn = document.getElementById('profileBtn');
    const dropdownMenu = document.getElementById('dropdownMenu');
    profileBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownMenu.classList.toggle('show');
    });
    document.addEventListener('click', () => {
        if (dropdownMenu.classList.contains('show')) {
            dropdownMenu.classList.remove('show');
        }
    });

    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const carouselImg = document.querySelector('.carousel-slide img');
    const images = [
        "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3"
    ];
    let currentIndex = 0;
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        carouselImg.src = images[currentIndex];
    });
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        carouselImg.src = images[currentIndex];
    });
});


/* ======================================
    DASHBOARD ADMIN
====================================== */
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. TOGGLE SIDEBAR ---
    const toggleSidebar = document.getElementById('toggleSidebar');
    const sidebar = document.getElementById('sidebar');

    toggleSidebar.addEventListener('click', () => {
        if (window.innerWidth > 768) {
            sidebar.classList.toggle('collapsed');
        } else {
            sidebar.classList.toggle('open');
        }
    });

    // --- 2. DROPDOWN SUBMENU LAPORAN ---
    const reportDropdown = document.getElementById('reportDropdown');
    const submenuContent = document.getElementById('submenuContent');
    const arrowIcon = reportDropdown.querySelector('.arrow-icon');

    reportDropdown.addEventListener('click', (e) => {
        e.preventDefault();
        const isDisplayed = submenuContent.style.display === 'block';
        submenuContent.style.display = isDisplayed ? 'none' : 'block';
        arrowIcon.style.transform = isDisplayed ? 'rotate(0deg)' : 'rotate(180deg)';
    });

    // --- 3. DROPDOWN PROFILE ADMIN ---
    const adminProfileBtn = document.getElementById('adminProfileBtn');
    const adminDropdownMenu = document.getElementById('adminDropdownMenu');

    adminProfileBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        adminDropdownMenu.classList.toggle('show');
    });

    document.addEventListener('click', () => {
        if (adminDropdownMenu.classList.contains('show')) {
            adminDropdownMenu.classList.remove('show');
        }
    });

    // --- 4. CONFIGURATION CHART.JS (Grafik Statistik Bulanan) ---
    const ctx = document.getElementById('monthlyChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'line', // Jenis chart garis
        data: {
            labels: ['2.1', '2.2', '2.3', '2.4', '2.5', '2.6', '2.7', '2.8', '2.9', '3.0'], // Sesuai label sumbu di gambar
            datasets: [
                {
                    label: 'Peminjaman',
                    data: [2.1, 2.3, 2.2, 2.5, 2.4, 2.7, 2.6, 2.9, 2.8, 3.0], // Data simulasi naik turun
                    borderColor: '#3498db',
                    backgroundColor: 'rgba(52, 152, 219, 0.1)',
                    borderWidth: 2,
                    tension: 0.1,
                    pointBackgroundColor: '#3498db'
                },
                {
                    label: 'Pengembalian',
                    data: [2.0, 2.1, 2.3, 2.2, 2.6, 2.4, 2.5, 2.7, 2.6, 2.9], // Data simulasi kedua
                    borderColor: '#e74c3c',
                    backgroundColor: 'rgba(231, 76, 60, 0.1)',
                    borderWidth: 2,
                    tension: 0.1,
                    pointBackgroundColor: '#e74c3c'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    min: 2.0,
                    max: 3.1,
                    ticks: {
                        stepSize: 0.1
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        boxWidth: 40,
                        boxHeight: 12
                    }
                }
            }
        }
    });

    // --- 5. LOGIKA SAKLAR HALAMAN SPA (Fungsi Global) ---
    window.switchPage = function(pageId) {
        // Sembunyikan semua section modul halaman
        const pages = document.querySelectorAll('.pages-section');
        pages.forEach(page => page.classList.remove('active-page'));

        // Munculkan kontainer id target halaman aktif
        const activePage = document.getElementById(pageId);
        if (activePage) {
            activePage.classList.add('active-page');
        }

        // Hapus highlight class active di bar menu sidebar
        const menuItems = document.querySelectorAll('.menu-item, .sidebar-submenu a');
        menuItems.forEach(item => item.classList.remove('active'));

        // Tambahkan kembali class active ke menu utama/submenu terpilih
        const targetMenu = document.getElementById('menu-' + pageId);
        if (targetMenu) {
            targetMenu.classList.add('active');
            
            // Jika yang diklik adalah bagian submenu laporan, induk dropdown utama tetap diberikan efek active gradasi
            if (targetMenu.closest('.sidebar-submenu')) {
                document.getElementById('reportDropdown').classList.add('active');
            }
        }
    };
});