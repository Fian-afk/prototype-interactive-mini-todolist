// Key untuk LocalStorage
const STORAGE_KEY = 'TODO_APP_TASKS_DATA';

// State Aplikasi
let tasks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

let currentFilter = 'all';

// DOM Elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const sisaElement = document.getElementById('sisa');
const totalCountElement = document.getElementById('total-count');
const emptyState = document.getElementById('empty-state');
const progressBar = document.getElementById('progress-bar');
const statPercent = document.getElementById('stat-percent');
const filterBtns = document.querySelectorAll('.filter-btn');
const clearCompletedBtn = document.getElementById('clear-completed');

// Simpan data tugas ke LocalStorage
function saveTasks() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

// Function utama untuk merender daftar tugas
function renderTasks() {
    todoList.innerHTML = '';

    // Filter tugas berdasarkan filter aktif
    const filteredTasks = tasks.filter(task => {
        if (currentFilter === 'active') return !task.completed;
        if (currentFilter === 'completed') return task.completed;
        return true; // 'all'
    });

    // Tampilkan state kosong jika tidak ada tugas
    if (filteredTasks.length === 0) {
        emptyState.classList.remove('hidden');
        emptyState.classList.add('flex');
    } else {
        emptyState.classList.add('hidden');
        emptyState.classList.remove('flex');
    }

    // Loop dan buat elemen <li> untuk setiap tugas
    filteredTasks.forEach(task => {
        const li = document.createElement('li');
        li.className = `group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 ${
            task.completed 
                ? 'bg-slate-50/80 border-slate-200/60 opacity-75' 
                : 'bg-white border-slate-200 shadow-sm hover:border-indigo-200 hover:shadow-md'
        }`;
        li.setAttribute('data-id', task.id);

        if (task.isEditing) {
            /* Mode Edit Inline */
            li.innerHTML = `
                <form class="edit-form flex items-center gap-2 w-full" onsubmit="saveEdit(event, ${task.id})">
                    <input 
                        type="text" 
                        class="edit-input w-full bg-slate-100 border border-indigo-300 rounded-xl px-3 py-1.5 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium" 
                        value="${escapeHtml(task.text)}"
                        required
                    />
                    <button type="submit" class="bg-emerald-600 hover:bg-emerald-700 text-white p-2 rounded-xl text-xs transition-colors shadow-sm flex items-center gap-1 shrink-0" title="Simpan">
                        <i data-lucide="check" class="w-4 h-4"></i>
                    </button>
                    <button type="button" onclick="cancelEdit(${task.id})" class="bg-slate-200 hover:bg-slate-300 text-slate-600 p-2 rounded-xl text-xs transition-colors shrink-0" title="Batal">
                        <i data-lucide="x" class="w-4 h-4"></i>
                    </button>
                </form>
            `;
        } else {
            /* Mode Normal Display */
            li.innerHTML = `
                <div class="flex items-center gap-3 min-w-0 pr-2 flex-1 cursor-pointer" onclick="toggleTask(${task.id})">
                    <!-- Custom Checkbox Button -->
                    <div class="w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all shrink-0 ${
                        task.completed 
                            ? 'bg-emerald-500 border-emerald-500 text-white' 
                            : 'border-slate-300 group-hover:border-indigo-400 bg-slate-50'
                    }">
                        ${task.completed ? '<i data-lucide="check" class="w-4 h-4 stroke-[3]"></i>' : ''}
                    </div>
                    
                    <!-- Task Text -->
                    <span class="text-sm sm:text-base font-medium truncate select-none transition-all ${
                        task.completed 
                            ? 'line-through text-slate-400 font-normal' 
                            : 'text-slate-700'
                    }">
                        <strong class="text-indigo-600 mr-1">${tasks.indexOf(task) + 1}.</strong>${escapeHtml(task.text)}
                    </span>
                </div>

                <!-- Action Buttons (Edit & Hapus) -->
                <div class="flex items-center gap-1 shrink-0 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                    <button 
                        onclick="startEdit(${task.id})" 
                        class="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-colors"
                        title="Edit Tugas"
                    >
                        <i data-lucide="pencil" class="w-4 h-4"></i>
                    </button>
                    <button 
                        onclick="deleteTask(${task.id})" 
                        class="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors"
                        title="Hapus Tugas"
                    >
                        <i data-lucide="trash-2" class="w-4 h-4"></i>
                    </button>
                </div>
            `;
        }

        todoList.appendChild(li);
    });

    // Render ulang Lucide Icons
    lucide.createIcons();

    // Update statistik & Indikator Tugas Tersisa
    updateCounters();
}

// Update Indikator Tugas Tersisa (<p id="sisa">) & Statistik
function updateCounters() {
    const totalTasks = tasks.length;
    const remainingTasks = tasks.filter(t => !t.completed).length;
    const completedTasks = totalTasks - remainingTasks;
    
    // Ref: Syarat 3 (<p id="sisa">)
    sisaElement.innerHTML = `
        <i data-lucide="clock" class="w-4 h-4 text-indigo-500"></i>
        <span>Tugas tersisa: <strong class="text-indigo-600 font-bold">${remainingTasks}</strong></span>
    `;

    totalCountElement.textContent = `Total: ${totalTasks} tugas`;

    // Update Progress Bar
    const percent = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);
    progressBar.style.width = `${percent}%`;
    statPercent.textContent = `${percent}%`;

    // Tunjukkan / Sembunyikan Tombol "Bersihkan Selesai"
    if (completedTasks > 0) {
        clearCompletedBtn.classList.remove('hidden');
    } else {
        clearCompletedBtn.classList.add('hidden');
    }

    // Refresh icons di indikator
    lucide.createIcons();
}

// Menambah tugas baru saat Form disubmit (Ref: Syarat 1)
todoForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah reload halaman secara default
    
    const text = todoInput.value.trim();
    if (!text) return;

    const newTask = {
        id: Date.now(),
        text: text,
        completed: false,
        isEditing: false
    };

    tasks.push(newTask); // Tambahkan tugas dengan metode push ke array tasks
    saveTasks();
    renderTasks();

    todoInput.value = ''; // Reset input field
    todoInput.focus();
});

// Menandai tugas Selesai / Belum Selesai (Toggle)
function toggleTask(id) {
    tasks = tasks.map(task => {
        if (task.id === id) {
            return { ...task, completed: !task.completed };
        }
        return task;
    });
    saveTasks();
    renderTasks();
}

// Memulai mode Edit
function startEdit(id) {
    tasks = tasks.map(task => {
        if (task.id === id) {
            return { ...task, isEditing: true };
        }
        return { ...task, isEditing: false }; // Batal edit item lain jika ada
    });
    renderTasks();

    // Auto-focus pada input edit yang baru dibuka
    setTimeout(() => {
        const activeEditInput = document.querySelector('.edit-input');
        if (activeEditInput) {
            activeEditInput.focus();
            activeEditInput.select();
        }
    }, 50);
}

// Menyimpan hasil Edit
function saveEdit(e, id) {
    e.preventDefault();
    const editInput = e.target.querySelector('.edit-input');
    const newText = editInput.value.trim();

    if (!newText) return;

    tasks = tasks.map(task => {
        if (task.id === id) {
            return { ...task, text: newText, isEditing: false };
        }
        return task;
    });

    saveTasks();
    renderTasks();
}

// Membatalkan mode Edit
function cancelEdit(id) {
    tasks = tasks.map(task => {
        if (task.id === id) {
            return { ...task, isEditing: false };
        }
        return task;
    });
    renderTasks();
}

// Menghapus Tugas
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    renderTasks();
}

// Membersihkan seluruh tugas yang sudah selesai
clearCompletedBtn.addEventListener('click', () => {
    tasks = tasks.filter(task => !task.completed);
    saveTasks();
    renderTasks();
});

// Event Listener untuk Filter Tabs
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => {
            b.classList.remove('bg-white', 'text-indigo-600', 'shadow-sm', 'active-filter');
            b.classList.add('text-slate-600');
        });

        btn.classList.add('bg-white', 'text-indigo-600', 'shadow-sm', 'active-filter');
        btn.classList.remove('text-slate-600');

        currentFilter = btn.getAttribute('data-filter');
        renderTasks();
    });
});

// Style tombol filter pertama kali
document.querySelector('[data-filter="all"]').classList.add('bg-white', 'text-indigo-600', 'shadow-sm');

// Helper untuk mencegah serangan XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Inisialisasi awal saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    renderTasks();
});