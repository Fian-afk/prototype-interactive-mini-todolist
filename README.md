# Dokumentasi Class Tailwind CSS - Aplikasi To-Do List

Dokumentasi ini mencakup daftar dan penjelasan dari class Tailwind CSS yang digunakan pada antarmuka aplikasi To-Do List.

## 1. Tata Letak (Layout) & Flexbox

| Class | Fungsi |
| :--- | :--- |
| `flex` | Mengaktifkan tata letak Flexbox pada elemen. |
| `items-center` | Menyelaraskan posisi item flex secara vertikal di tengah. |
| `justify-center` | Mengatur posisi item flex ke tengah secara horizontal. |
| `justify-between` | Memberikan jarak seimbang di antara item flex. |
| `relative` | Menentukan posisi elemen secara relatif terhadap alur normal dokumen. |
| `overflow-hidden` | Menyembunyikan isi konten yang melebihi batas area elemen. |
| `overflow-y-auto` | Menampilkan bilah gulir (*scrollbar*) vertikal secara otomatis saat konten meluap. |
| `hidden` | Menyembunyikan elemen secara penuh dari tampilan visual. |
| `block` | Mengubah tampilan elemen menjadi blok (*block-level*). |
| `shrink-0` | Mencegah ukuran elemen menyusut di dalam kontainer flex. |

## 2. Ukuran & Jarak (Sizing & Spacing)

| Class | Fungsi |
| :--- | :--- |
| `w-full` | Mengatur lebar elemen menjadi 100% dari kontainer induknya. |
| `max-w-xl` | Membatasi lebar maksimum elemen sebesar 36rem (576px). |
| `min-h-screen` | Memastikan tinggi minimum elemen mencakup seluruh tinggi layar (*viewport*). |
| `min-h-[120px]` / `max-h-[360px]` | Batas tinggi khusus (minimum 120px dan maksimum 360px). |
| `w-4 h-4` / `w-7 h-7` | Mengatur dimensi lebar dan tinggi elemen ikon secara spesifik. |
| `p-1.5` / `p-4` / `p-6` / `p-8` | Memberikan jarak dalam (*padding*) di seluruh sisi elemen. |
| `px-4` / `py-2.5` | Memberikan *padding* horizontal (`px`) dan vertikal (`py`). |
| `mt-1` / `mb-3` / `ml-3` / `pb-3` / `pt-4` | Mengatur *margin* atau *padding* pada satu sisi spesifik (atas, bawah, atau kiri). |
| `space-y-6` / `space-y-3` | Memberikan jarak vertikal seragam antar elemen anak secara otomatis. |
| `gap-1` / `gap-2` | Menentukan jarak celah antar item di dalam kontainer flex. |

## 3. Tipografi (Typography)

| Class | Fungsi |
| :--- | :--- |
| `text-xs` / `text-sm` / `text-xl` / `text-3xl` | Mengatur tingkatan ukuran teks (dari sangat kecil hingga besar). |
| `font-light` / `font-medium` / `font-bold` / `font-extrabold` | Mengatur tingkat ketebalan huruf (*font weight*). |
| `text-center` | Mengatur posisi perataan teks ke tengah. |
| `uppercase` | Mengubah seluruh karakter teks menjadi huruf kapital. |
| `tracking-tight` / `tracking-wider` | Mengatur kerapatan jarak antar huruf (*letter spacing*). |

## 4. Warna, Latar Belakang & Efek

| Class | Fungsi |
| :--- | :--- |
| `bg-slate-100` / `bg-white` / `bg-indigo-600` | Mengatur warna latar belakang elemen. |
| `text-slate-800` / `text-white` / `text-indigo-200` | Mengatur warna teks pada elemen. |
| `bg-gradient-to-r` | Mengaktifkan warna latar belakang berupa gradien dari arah kiri ke kanan. |
| `from-indigo-600 via-indigo-700 to-purple-700` | Menentukan urutan kombinasi warna awal, tengah, dan akhir gradien. |
| `bg-white/10` / `border-white/20` | Memberikan warna dengan nilai transparansi tertentu (10% dan 20%). |
| `backdrop-blur-md` | Menghasilkan efek buram transparan (*glassmorphism*) pada latar elemen. |

## 5. Garis Tepi & Bayangan (Border & Shadow)

| Class | Fungsi |
| :--- | :--- |
| `rounded-xl` / `rounded-2xl` / `rounded-3xl` / `rounded-full` | Mengatur tingkat kebulatan pada sudut elemen (*border radius*). |
| `border` / `border-2` / `border-b` / `border-t` | Menambahkan garis tepi penuh, tebal ganda, tepi bawah, atau tepi atas. |
| `border-slate-200/80` | Mengatur warna garis tepi dengan tingkat opasitas 80%. |
| `shadow-2xl` / `shadow-md` | Menambahkan efek bayangan lembut di bawah elemen. |

## 6. Interaktivitas & State Control

| Class | Fungsi |
| :--- | :--- |
| `transition-all` / `transition-colors` | Mengaktifkan animasi transisi saat terjadi perubahan properti CSS. |
| `duration-200` / `duration-300` / `duration-500` | Menentukan durasi waktu berjalannya transisi dalam milidetik. |
| `hover:bg-indigo-700` | Mengubah warna latar saat penunjuk tetikus berada di atas elemen. |
| `focus-within:border-indigo-500` | Mengubah gaya kontainer saat salah satu elemen di dalamnya sedang aktif/fokus. |
| `focus:outline-none` | Menghilangkan garis tepi penanda fokus bawaan peramban (*browser*). |
| `active:scale-95` | Memberikan efek visual mengecil saat elemen tombol diklik. |
| `cursor-pointer` | Mengubah penunjuk tetikus menjadi bentuk tangan saat mengarahi elemen. |

# Dokumentasi CSS Kustom (`style.css`)

Dokumentasi ini menjelaskan aturan CSS kustom yang digunakan untuk mengatur jenis huruf global, tampilan bilah gulir (*custom scrollbar*), serta efek animasi interaktif pada *checkbox*.

---

## 1. Pengaturan Tipografi Utama

| Selector | Properti & Nilai | Penjelasan / Fungsi |
| :--- | :--- | :--- |
| `body` | `font-family: 'Inter', sans-serif;` | Menentukan jenis huruf (*font*) bawaan untuk seluruh elemen halaman web menggunakan font **Inter**. |

---

## 2. Kustomisasi Bilah Gulir (*Custom Scrollbar*)

Digunakan pada kontainer daftar tugas yang memiliki class `.custom-scrollbar` untuk memberikan tampilan *scrollbar* yang modern dan minimalis berbasis *WebKit* (Chrome, Edge, Safari).

| Selector / Pseudo-element | Fungsi |
| :--- | :--- |
| `.custom-scrollbar::-webkit-scrollbar` | Mengatur ketebalan/lebar bilah gulir vertikal menjadi `6px`. |
| `.custom-scrollbar::-webkit-scrollbar-track` | Mengatur latar belakang jalur lintasan gulir dengan warna abu-abu muda (`#f1f5f9`) dan sudut membulat (`8px`). |
| `.custom-scrollbar::-webkit-scrollbar-thumb` | Mengatur warna batang penggeser (*thumb*) menjadi abu-abu medium (`#cbd5e1`) dengan sudut membulat (`8px`). |
| `.custom-scrollbar::-webkit-scrollbar-thumb:hover` | Mengubah warna batang penggeser menjadi sedikit lebih gelap (`#94a3b8`) saat kursor mengarah di atasnya. |

---

## 3. Animasi Tanda Centang (*Checkbox Animation*)

Mengatur efek transisi visual saat tugas ditandai sebagai selesai melalui *checkbox*.

| Selector | Penjelasan / Fungsi |
| :--- | :--- |
| `.task-checkbox:checked + label .check-icon` | **Efek Saat Centang Aktif:** Menggunakan *adjacent sibling selector* (`+`) untuk mendeteksi status elemen `<input>` dengan class `.task-checkbox` saat kondisi tercentang (`:checked`). <br><br>Aturan ini akan mengubah ikon centang di dalam `<label>` menjadi terlihat sepenuhnya (`opacity: 1`) dan memperbesar ukurannya ke skala normal (`transform: scale(1)`). |

# Dokumentasi JavaScript (`script.js`)

Dokumentasi ini menjelaskan struktur variabel, fungsi utama, logika manipulasi DOM, serta penanganan event (*event handling*) yang digunakan pada file `script.js`.

---

## 1. State Aplikasi & Akses DOM

| Variabel / Elemen DOM | Tipe Data / Elemen | Penjelasan / Fungsi |
| :--- | :--- | :--- |
| `STORAGE_KEY` | `String` | Kunci unik (`'TODO_APP_TASKS_DATA'`) untuk menyimpan data tugas di LocalStorage peramban. |
| `tasks` | `Array` | Menyimpan daftar objek tugas. Nilai awal diambil dari LocalStorage atau berupa array kosong (`[]`). |
| `currentFilter` | `String` | Menyimpan status filter aktif (`'all'`, `'active'`, atau `'completed'`). |
| `todoForm` / `todoInput` | Elemen Form & Input | Mengakses elemen formulir utama dan bidang penulisan tugas baru. |
| `todoList` | Elemen `<ul>` | Wadah utama tempat item tugas disisipkan secara dinamis. |
| `sisaElement` | Elemen `<p id="sisa">` | Menampilkan indikator jumlah tugas yang belum selesai. |
| `progressBar` / `statPercent` | Elemen Visual | Mengontrol persentase dan animasi batang kemajuan (*progress bar*). |

---

## 2. Fungsi Penyimpanan & Renderer Utama

| Nama Fungsi | Parameter | Penjelasan / Fungsi |
| :--- | :--- | :--- |
| `saveTasks()` | Tidak ada | Mengubah array `tasks` menjadi format JSON string dan menyimpannya ke `localStorage`. |
| `renderTasks()` | Tidak ada | **Fungsi Utama:** <br>1. Mengosongkan daftar `<ul id="todo-list">`.<br>2. Menyaring tugas berdasarkan status `currentFilter`.<br>3. Menampilkan status kosong (*empty state*) jika tidak ada data.<br>4. Membuat elemen `<li>` secara dinamis baik untuk mode normal maupun mode edit inline.<br>5. Menampilkan nomor urut otomatis (`tasks.indexOf(task) + 1`).<br>6. Mengintegrasikan ulang ikon Lucide & memperbarui statistik. |
| `updateCounters()` | Tidak ada | Memperhitungkan jumlah total tugas, tugas tersisa, dan persentase penyelesaian, lalu memperbarui tampilan elemen `<p id="sisa">`, *progress bar*, serta visibilitas tombol "Bersihkan Selesai". |

---

## 3. Fitur Interaksi & Operasi CRUD

| Nama Fungsi / Event | Trigger / Pemicu | Penjelasan / Logika Kerja |
| :--- | :--- | :--- |
| `todoForm (submit)` | Tekan Enter / Klik Tombol "Tambah" | Mencegah reload halaman (`e.preventDefault()`), mengambil teks input, membuat objek tugas baru, menambahkannya ke paling bawah array via `.push()`, lalu memperbarui penyimpanan & tampilan. |
| `toggleTask(id)` | Klik pada area item tugas | Membalikkan status status penyelesaian tugas (`completed: !completed`) berdasarkan `id` tugas. |
| `startEdit(id)` | Klik tombol ikon Pensil | Mengubah properti `isEditing` menjadi `true` pada tugas terkait untuk memunculkan mode input edit inline, lalu memberikan auto-fokus ke kolom edit. |
| `saveEdit(e, id)` | Submit form edit inline | Menyimpan perubahan teks tugas yang baru di-edit dan mengembalikan status `isEditing` menjadi `false`. |
| `cancelEdit(id)` | Klik tombol 'X' pada mode edit | Membatalkan perubahan dan mengembalikan tampilan tugas ke mode normal tanpa mengubah data teks. |
| `deleteTask(id)` | Klik tombol ikon Tempat Sampah | Menghapus tugas dari array `tasks` menggunakan metode `.filter()` berdasarkan `id`. |
| `clearCompletedBtn` | Klik tombol "Bersihkan Selesai" | Menghapus seluruh tugas yang statusnya sudah selesai (`completed: true`) secara massal. |

---

## 4. Filter & Keamanan (Security Helper)

| Nama Fungsi / Event | Penjelasan / Logika Kerja |
| :--- | :--- |
| `filterBtns (click)` | Mengubah nilai `currentFilter`, mengatur ulang gaya visual tombol filter yang aktif, lalu menjalankan `renderTasks()` untuk menampilkan data yang sesuai. |
| `escapeHtml(text)` | **Proteksi XSS:** Mengubah karakter khusus HTML (seperti `<` atau `>`) menjadi karakter aman (*entities*) menggunakan elemen DOM sementara sebelum dimasukkan ke dalam *template literal*. |
| `DOMContentLoaded` | Event listener yang memastikan fungsi `renderTasks()` langsung dijalankan secara otomatis saat dokumen HTML selesai dimuat. |