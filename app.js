// Initial Default TKB Data from tkb.json
const DEFAULT_TKB_DATA = {
  "lop": "DH13KE2",
  "nam_hoc": "2026",
  "ghi_chu": "Ảnh không chứa hàng tiêu đề của các cột thứ trong tuần. Các cặp cột lịch học được suy luận lần lượt là Thứ 2 đến Thứ 7.",
  "hoc_phan": [
    {
      "ten_hoc_phan": "Hệ thống thông tin kế toán",
      "so_tin_chi": 3,
      "hinh_thuc": "LT",
      "so_tiet_ly_thuyet": 45,
      "so_tiet_thuc_hanh": 0,
      "nhom": 1,
      "thoi_gian": { "tu_ngay": "2026-08-03", "den_ngay": "2026-08-09" },
      "giang_vien": [{ "ho_ten": "LÊ THỊ HẠNH", "ma": "15.179", "chuc_danh": "GV" }],
      "lich_hoc": [
        { "thu": 3, "tiet": [1, 2, 3], "phong": "A.202" },
        { "thu": 4, "tiet": [9, 10], "phong": "A.202" }
      ]
    },
    {
      "ten_hoc_phan": "Hệ thống thông tin kế toán",
      "so_tin_chi": 3,
      "hinh_thuc": "LT",
      "so_tiet_ly_thuyet": 45,
      "so_tiet_thuc_hanh": 0,
      "nhom": 3,
      "thoi_gian": { "tu_ngay": "2026-08-10", "den_ngay": "2026-08-30" },
      "giang_vien": [{ "ho_ten": "LÊ THỊ HẠNH", "ma": "15.179", "chuc_danh": "GV" }],
      "lich_hoc": [
        { "thu": 3, "tiet": [6, 7, 8], "phong": "A.202" },
        { "thu": 4, "tiet": [9, 10], "phong": "A.202" }
      ]
    },
    {
      "ten_hoc_phan": "Hệ thống thông tin kế toán",
      "so_tin_chi": 3,
      "hinh_thuc": "LT",
      "so_tiet_ly_thuyet": 45,
      "so_tiet_thuc_hanh": 0,
      "nhom": 4,
      "thoi_gian": { "tu_ngay": "2026-09-07", "den_ngay": "2026-10-04" },
      "giang_vien": [{ "ho_ten": "LÊ THỊ HẠNH", "ma": "15.179", "chuc_danh": "GV" }],
      "lich_hoc": [
        { "thu": 3, "tiet": [6, 7, 8], "phong": "A.202" },
        { "thu": 4, "tiet": [9, 10], "phong": "A.202" }
      ]
    },
    {
      "ten_hoc_phan": "Kế toán chi phí",
      "so_tin_chi": 3,
      "hinh_thuc": "LT",
      "so_tiet_ly_thuyet": 45,
      "so_tiet_thuc_hanh": 0,
      "nhom": 9,
      "thoi_gian": { "tu_ngay": "2026-08-03", "den_ngay": "2026-10-04" },
      "giang_vien": [
        { "ho_ten": "LÊ THỊ THU HUYỀN", "ma": "15.122", "chuc_danh": "GV" },
        { "ho_ten": "NGUYỄN HOÀN", "ma": "15.020", "chuc_danh": "GVC" }
      ],
      "lich_hoc": [
        { "thu": 5, "tiet": [6, 7, 8], "phong": "A.202" },
        { "thu": 6, "tiet": [9, 10], "phong": "A.202" }
      ]
    },
    {
      "ten_hoc_phan": "Kế toán doanh nghiệp thương mại dịch vụ",
      "so_tin_chi": 3,
      "hinh_thuc": "LT",
      "so_tiet_ly_thuyet": 45,
      "so_tiet_thuc_hanh": 0,
      "nhom": 1,
      "thoi_gian": { "tu_ngay": "2026-08-03", "den_ngay": "2026-08-09" },
      "giang_vien": [{ "ho_ten": "TRẦN THỊ XUÂN", "ma": "15.234", "chuc_danh": "TG" }],
      "lich_hoc": [
        { "thu": 2, "tiet": [1, 2, 3], "phong": "A.202" },
        { "thu": 2, "tiet": [6, 7, 8], "phong": "A.202" },
        { "thu": 3, "tiet": [9, 10], "phong": "A.202" },
        { "thu": 4, "tiet": [4, 5], "phong": "A.202" }
      ]
    },
    {
      "ten_hoc_phan": "Kế toán doanh nghiệp thương mại dịch vụ",
      "so_tin_chi": 3,
      "hinh_thuc": "LT",
      "so_tiet_ly_thuyet": 45,
      "so_tiet_thuc_hanh": 0,
      "nhom": 3,
      "thoi_gian": { "tu_ngay": "2026-08-10", "den_ngay": "2026-08-30" },
      "giang_vien": [{ "ho_ten": "TRẦN THỊ XUÂN", "ma": "15.234", "chuc_danh": "TG" }],
      "lich_hoc": [
        { "thu": 2, "tiet": [6, 7, 8], "phong": "A.202" },
        { "thu": 3, "tiet": [9, 10], "phong": "A.202" }
      ]
    },
    {
      "ten_hoc_phan": "Kế toán doanh nghiệp thương mại dịch vụ",
      "so_tin_chi": 3,
      "hinh_thuc": "LT",
      "so_tiet_ly_thuyet": 45,
      "so_tiet_thuc_hanh": 0,
      "nhom": 4,
      "thoi_gian": { "tu_ngay": "2026-09-07", "den_ngay": "2026-10-04" },
      "giang_vien": [{ "ho_ten": "TRẦN THỊ XUÂN", "ma": "15.234", "chuc_danh": "TG" }],
      "lich_hoc": [
        { "thu": 2, "tiet": [6, 7, 8], "phong": "A.202" },
        { "thu": 3, "tiet": [9, 10], "phong": "A.202" }
      ]
    },
    {
      "ten_hoc_phan": "Kế toán ngân hàng",
      "so_tin_chi": 3,
      "hinh_thuc": "LT",
      "so_tiet_ly_thuyet": 45,
      "so_tiet_thuc_hanh": 0,
      "nhom": 9,
      "thoi_gian": { "tu_ngay": "2026-08-03", "den_ngay": "2026-10-04" },
      "giang_vien": [{ "ho_ten": "NGUYỄN THỊ VÂN", "ma": "15.240", "chuc_danh": "TG" }],
      "lich_hoc": [
        { "thu": 5, "tiet": [9, 10], "phong": "A.202" },
        { "thu": 6, "tiet": [6, 7, 8], "phong": "A.202" }
      ]
    },
    {
      "ten_hoc_phan": "Kế toán quốc tế",
      "so_tin_chi": 3,
      "hinh_thuc": "LT",
      "so_tiet_ly_thuyet": 45,
      "so_tiet_thuc_hanh": 0,
      "nhom": 1,
      "thoi_gian": { "tu_ngay": "2026-08-03", "den_ngay": "2026-08-09" },
      "giang_vien": [{ "ho_ten": "LÊ THỊ HẠNH", "ma": "15.179", "chuc_danh": "GV" }],
      "lich_hoc": [
        { "thu": 2, "tiet": [9, 10], "phong": "A.202" },
        { "thu": 4, "tiet": [1, 2, 3], "phong": "A.202" }
      ]
    },
    {
      "ten_hoc_phan": "Kế toán quốc tế",
      "so_tin_chi": 3,
      "hinh_thuc": "LT",
      "so_tiet_ly_thuyet": 45,
      "so_tiet_thuc_hanh": 0,
      "nhom": 1,
      "thoi_gian": { "tu_ngay": "2026-08-03", "den_ngay": "2026-08-09" },
      "giang_vien": [{ "ho_ten": "NGUYỄN CÔNG THỊ ĐOAN TRANG", "ma": "15.216", "chuc_danh": "TG" }],
      "lich_hoc": [
        { "thu": 3, "tiet": [4, 5], "phong": "A.202" },
        { "thu": 4, "tiet": [6, 7, 8], "phong": "A.202" }
      ]
    },
    {
      "ten_hoc_phan": "Kế toán quốc tế",
      "so_tin_chi": 3,
      "hinh_thuc": "LT",
      "so_tiet_ly_thuyet": 45,
      "so_tiet_thuc_hanh": 0,
      "nhom": 3,
      "thoi_gian": { "tu_ngay": "2026-08-10", "den_ngay": "2026-08-30" },
      "giang_vien": [{ "ho_ten": "LÊ THỊ HẠNH", "ma": "15.179", "chuc_danh": "GV" }],
      "lich_hoc": [
        { "thu": 2, "tiet": [9, 10], "phong": "A.202" },
        { "thu": 4, "tiet": [6, 7, 8], "phong": "A.202" }
      ]
    },
    {
      "ten_hoc_phan": "Kế toán quốc tế",
      "so_tin_chi": 3,
      "hinh_thuc": "LT",
      "so_tiet_ly_thuyet": 45,
      "so_tiet_thuc_hanh": 0,
      "nhom": 4,
      "thoi_gian": { "tu_ngay": "2026-09-07", "den_ngay": "2026-10-04" },
      "giang_vien": [{ "ho_ten": "LÊ THỊ HẠNH", "ma": "15.179", "chuc_danh": "GV" }],
      "lich_hoc": [
        { "thu": 2, "tiet": [9, 10], "phong": "A.202" },
        { "thu": 4, "tiet": [6, 7, 8], "phong": "A.202" }
      ]
    }
  ]
};

// Period Standard Timings
const PERIOD_TIMES = {
  1: { start: "07:00", end: "07:45", session: "Sáng" },
  2: { start: "07:50", end: "08:35", session: "Sáng" },
  3: { start: "08:40", end: "09:25", session: "Sáng" },
  4: { start: "09:35", end: "10:20", session: "Sáng" },
  5: { start: "10:25", end: "11:10", session: "Sáng" },
  6: { start: "13:00", end: "13:45", session: "Chiều" },
  7: { start: "13:50", end: "14:35", session: "Chiều" },
  8: { start: "14:40", end: "15:25", session: "Chiều" },
  9: { start: "15:35", end: "16:20", session: "Chiều" },
  10: { start: "16:25", end: "17:10", session: "Chiều" }
};

// Days of week mapping (2 = Thứ 2, 7 = Thứ 7)
const DAYS_OF_WEEK = [
  { key: 2, label: "Thứ Hai", short: "T2" },
  { key: 3, label: "Thứ Ba", short: "T3" },
  { key: 4, label: "Thứ Tư", short: "T4" },
  { key: 5, label: "Thứ Năm", short: "T5" },
  { key: 6, label: "Thứ Sáu", short: "T6" },
  { key: 7, label: "Thứ Bảy", short: "T7" }
];

// App Global State
let currentTkbData = DEFAULT_TKB_DATA;
let weeksList = [];
let selectedWeekIndex = 0;
let currentViewMode = "weekly"; // "weekly" | "catalog" | "master"
let searchQuery = "";
let subjectColorMap = {};
let selectedMobileDay = "all"; // "all" | "2" | "3" | "4" | "5" | "6" | "7"

// Color CSS class names mapping
const SUBJECT_CLASSES = ["sub-1", "sub-2", "sub-3", "sub-4", "sub-5"];

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initData(DEFAULT_TKB_DATA);
  setupEventListeners();
});

// Theme Management
function initTheme() {
  const savedTheme = localStorage.getItem("tkb_theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("tkb_theme", newTheme);
  updateThemeIcon(newTheme);
  showToast(`Đã chuyển sang giao diện ${newTheme === "dark" ? "Tối" : "Sáng"}`);
}

function updateThemeIcon(theme) {
  const themeBtn = document.getElementById("themeToggleBtn");
  if (!themeBtn) return;
  themeBtn.innerHTML = theme === "dark" ? 
    `<svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>` :
    `<svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>`;
}

// Data Processing & Week Calculation
function initData(data) {
  currentTkbData = data;
  
  // Calculate unique subjects & assign colors
  const uniqueSubjects = Array.from(new Set(data.hoc_phan.map(hp => hp.ten_hoc_phan)));
  subjectColorMap = {};
  uniqueSubjects.forEach((sub, idx) => {
    subjectColorMap[sub] = {
      className: SUBJECT_CLASSES[idx % SUBJECT_CLASSES.length],
      index: idx + 1
    };
  });

  // Calculate overall semester date range
  let minDate = new Date("2026-08-03"); // default starting monday
  let maxDate = new Date("2026-10-04"); // default ending sunday

  data.hoc_phan.forEach(hp => {
    if (hp.thoi_gian.tu_ngay) {
      const d1 = new Date(hp.thoi_gian.tu_ngay);
      if (d1 < minDate) minDate = d1;
    }
    if (hp.thoi_gian.den_ngay) {
      const d2 = new Date(hp.thoi_gian.den_ngay);
      if (d2 > maxDate) maxDate = d2;
    }
  });

  // Ensure minDate starts on Monday
  const dayOfMin = minDate.getDay();
  const diffToMonday = (dayOfMin === 0 ? -6 : 1 - dayOfMin);
  minDate.setDate(minDate.getDate() + diffToMonday);

  // Generate Weeks List
  weeksList = [];
  let curr = new Date(minDate);
  let weekNum = 1;

  while (curr <= maxDate) {
    const startOfWeek = new Date(curr);
    const endOfWeek = new Date(curr);
    endOfWeek.setDate(endOfWeek.getDate() + 6); // Sunday

    weeksList.push({
      index: weekNum - 1,
      number: weekNum,
      startDate: startOfWeek,
      endDate: endOfWeek,
      label: `Tuần ${weekNum} (${formatDateShort(startOfWeek)} - ${formatDateShort(endOfWeek)})`
    });

    curr.setDate(curr.getDate() + 7);
    weekNum++;
  }

  // Populate Header Info & Metrics
  document.getElementById("classNameText").textContent = data.lop || "DH13KE2";
  document.getElementById("yearText").textContent = data.nam_hoc ? `Năm học ${data.nam_hoc}` : "2026";
  
  const totalCredits = uniqueSubjects.reduce((sum, name) => {
    const hp = data.hoc_phan.find(h => h.ten_hoc_phan === name);
    return sum + (hp ? hp.so_tin_chi : 0);
  }, 0);
  
  document.getElementById("metricCredits").textContent = `${totalCredits} STC`;
  document.getElementById("metricSubjects").textContent = `${uniqueSubjects.length} Môn`;
  document.getElementById("metricWeeks").textContent = `${weeksList.length} Tuần`;

  // Render Week Dropdown
  renderWeekSelect();
  renderLegend();

  // Render Timetable
  renderView();
}

function renderWeekSelect() {
  const select = document.getElementById("weekSelect");
  select.innerHTML = weeksList.map((w, idx) => `
    <option value="${idx}" ${idx === selectedWeekIndex ? "selected" : ""}>
      ${w.label}
    </option>
  `).join("");
}

function renderLegend() {
  const legendContainer = document.getElementById("legendItems");
  const uniqueSubjects = Object.keys(subjectColorMap);

  legendContainer.innerHTML = uniqueSubjects.map(sub => {
    const info = subjectColorMap[sub];
    return `
      <div class="legend-item" onclick="filterBySubject('${sub}')">
        <div class="legend-dot sub-${info.index}"></div>
        <span>${sub}</span>
      </div>
    `;
  }).join("");
}

// Render Main View (Weekly / Catalog / Master)
function renderView() {
  const container = document.getElementById("timetableRenderArea");
  
  if (currentViewMode === "weekly") {
    renderWeeklyGrid(container);
  } else if (currentViewMode === "catalog") {
    renderCatalogView(container);
  } else if (currentViewMode === "master") {
    renderMasterView(container);
  }
}

// 1. Weekly Grid View (Supports full grid & single-day mobile view)
function renderWeeklyGrid(container) {
  const activeWeek = weeksList[selectedWeekIndex];
  if (!activeWeek) return;

  // Filter modules active during this week date range
  const activeModules = currentTkbData.hoc_phan.filter(hp => {
    const tu = new Date(hp.thoi_gian.tu_ngay);
    const den = new Date(hp.thoi_gian.den_ngay);
    return tu <= activeWeek.endDate && den >= activeWeek.startDate;
  });

  // Apply search query if present
  const filteredModules = activeModules.filter(hp => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    const matchName = hp.ten_hoc_phan.toLowerCase().includes(q);
    const matchTeacher = hp.giang_vien.some(gv => gv.ho_ten.toLowerCase().includes(q));
    const matchRoom = hp.lich_hoc.some(l => l.phong.toLowerCase().includes(q));
    return matchName || matchTeacher || matchRoom;
  });

  // Determine active days list (all 6 days or single day filtered on mobile)
  const displayDays = selectedMobileDay === "all" 
    ? DAYS_OF_WEEK 
    : DAYS_OF_WEEK.filter(d => d.key.toString() === selectedMobileDay);

  const isSingleDay = displayDays.length === 1;

  // Create Matrix for Days x 10 Periods
  const matrix = {};
  filteredModules.forEach(hp => {
    hp.lich_hoc.forEach(lh => {
      lh.tiet.forEach(tietNum => {
        const key = `${lh.thu}_${tietNum}`;
        if (!matrix[key]) matrix[key] = [];
        matrix[key].push({
          module: hp,
          schedule: lh
        });
      });
    });
  });

  // Build HTML Table Grid Structure
  let html = `<div class="timetable-grid ${isSingleDay ? 'single-day-grid' : ''}">`;

  // Grid Header: Empty top-left cell + Days of week with dates
  html += `<div class="grid-header-cell time-column-header">Tiết / Thứ</div>`;
  
  displayDays.forEach((day) => {
    const dayOffset = day.key - 2; // Thu 2 -> offset 0
    const dayDate = new Date(activeWeek.startDate);
    dayDate.setDate(dayDate.getDate() + dayOffset);
    const isToday = isSameDay(dayDate, new Date());

    html += `
      <div class="grid-header-cell ${isToday ? 'is-today' : ''}">
        <div class="day-title">${day.label}</div>
        <div class="day-date">${formatDateShort(dayDate)}</div>
      </div>
    `;
  });

  // Periods Row Loop (1 to 10)
  for (let p = 1; p <= 10; p++) {
    // Add Session Divider for Morning/Afternoon
    if (p === 1) {
      html += `<div class="session-divider">☀️ CA SÁNG (Tiết 1 - 5)</div>`;
    } else if (p === 6) {
      html += `<div class="session-divider">🌙 CA CHIỀU (Tiết 6 - 10)</div>`;
    }

    // Period Time Indicator Cell
    const timeInfo = PERIOD_TIMES[p];
    html += `
      <div class="period-cell">
        <div class="period-num">Tiết ${p}</div>
        <div class="period-time">${timeInfo.start} - ${timeInfo.end}</div>
      </div>
    `;

    // Day Columns
    displayDays.forEach(day => {
      const key = `${day.key}_${p}`;
      const items = matrix[key] || [];

      if (items.length > 0) {
        html += `<div class="slot-cell slot-occupied">`;
        items.forEach(item => {
          const hp = item.module;
          const lh = item.schedule;
          const colorInfo = subjectColorMap[hp.ten_hoc_phan] || { className: "sub-1" };
          const teacherNames = hp.giang_vien.map(g => g.ho_ten).join(", ");

          html += `
            <div class="course-card ${colorInfo.className}" onclick="openModal('${escapeHtml(JSON.stringify(hp))}', ${lh.thu}, '${lh.phong}')">
              <div class="course-card-header">
                <div class="course-title">${hp.ten_hoc_phan}</div>
                <div class="badge-group">N${hp.nhom}</div>
              </div>
              <div class="course-card-details">
                <div class="course-detail-row">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path></svg>
                  <span>Phòng: <strong>${lh.phong}</strong></span>
                </div>
                <div class="course-detail-row">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                  <span>${teacherNames}</span>
                </div>
              </div>
            </div>
          `;
        });
        html += `</div>`;
      } else {
        html += `<div class="slot-cell"></div>`;
      }
    });
  }

  html += `</div>`;
  container.innerHTML = html;
}

// 2. Catalog View Mode
function renderCatalogView(container) {
  const uniqueNames = Array.from(new Set(currentTkbData.hoc_phan.map(hp => hp.ten_hoc_phan)));
  
  let html = `<div class="catalog-view-container">`;

  uniqueNames.forEach(subName => {
    const modules = currentTkbData.hoc_phan.filter(hp => hp.ten_hoc_phan === subName);
    const firstHp = modules[0];
    const colorInfo = subjectColorMap[subName] || { index: 1 };

    html += `
      <div class="catalog-card">
        <div class="catalog-main">
          <div class="catalog-accent-bar sub-${colorInfo.index}"></div>
          <div class="catalog-title">
            <h3>${subName}</h3>
            <p>Hình thức: ${firstHp.hinh_thuc} | Tín chỉ: ${firstHp.so_tin_chi} STC | Lý thuyết: ${firstHp.so_tiet_ly_thuyet} tiết</p>
          </div>
        </div>
        <div class="catalog-meta">
          <div class="catalog-meta-item">
            <span class="catalog-meta-lbl">Các nhóm lớp</span>
            <span class="catalog-meta-val">${modules.map(m => `Nhóm ${m.nhom}`).join(", ")}</span>
          </div>
          <div class="catalog-meta-item">
            <span class="catalog-meta-lbl">Giảng viên</span>
            <span class="catalog-meta-val">${modules.flatMap(m => m.giang_vien.map(g => g.ho_ten)).filter((v, i, a) => a.indexOf(v) === i).join(", ")}</span>
          </div>
          <button class="btn-text" onclick="filterBySubject('${subName}')">Xem lịch học</button>
        </div>
      </div>
    `;
  });

  html += `</div>`;
  container.innerHTML = html;
}

// 3. Master View Mode
function renderMasterView(container) {
  let html = `<div class="catalog-view-container">`;

  currentTkbData.hoc_phan.forEach((hp) => {
    const colorInfo = subjectColorMap[hp.ten_hoc_phan] || { index: 1 };
    const teacherNames = hp.giang_vien.map(g => `${g.chuc_danh || ''} ${g.ho_ten} (${g.ma})`).join("; ");

    const schedulesText = hp.lich_hoc.map(lh => {
      const dayObj = DAYS_OF_WEEK.find(d => d.key === lh.thu);
      return `${dayObj ? dayObj.label : `Thứ ${lh.thu}`}: Tiết ${lh.tiet.join(",")} (Phòng ${lh.phong})`;
    }).join(" | ");

    html += `
      <div class="catalog-card" onclick="openModal('${escapeHtml(JSON.stringify(hp))}')">
        <div class="catalog-main">
          <div class="catalog-accent-bar sub-${colorInfo.index}"></div>
          <div class="catalog-title">
            <h3>${hp.ten_hoc_phan} - <span style="color:var(--accent-primary)">Nhóm ${hp.nhom}</span></h3>
            <p>📅 Thời gian: ${hp.thoi_gian.tu_ngay} ➔ ${hp.thoi_gian.den_ngay}</p>
          </div>
        </div>
        <div class="catalog-meta">
          <div class="catalog-meta-item">
            <span class="catalog-meta-lbl">Lịch học</span>
            <span class="catalog-meta-val">${schedulesText}</span>
          </div>
          <div class="catalog-meta-item">
            <span class="catalog-meta-lbl">Giảng viên</span>
            <span class="catalog-meta-val">${teacherNames}</span>
          </div>
        </div>
      </div>
    `;
  });

  html += `</div>`;
  container.innerHTML = html;
}

// Navigation & Actions
function nextWeek() {
  if (selectedWeekIndex < weeksList.length - 1) {
    selectedWeekIndex++;
    updateWeekUI();
  }
}

function prevWeek() {
  if (selectedWeekIndex > 0) {
    selectedWeekIndex--;
    updateWeekUI();
  }
}

function selectWeek(index) {
  selectedWeekIndex = parseInt(index, 10);
  updateWeekUI();
}

function selectTodayWeek() {
  const now = new Date();
  const foundIdx = weeksList.findIndex(w => now >= w.startDate && now <= w.endDate);
  if (foundIdx !== -1) {
    selectedWeekIndex = foundIdx;
  } else {
    selectedWeekIndex = 0; // fallback to week 1
  }
  updateWeekUI();
  showToast("Đã chuyển về tuần hiện tại");
}

function updateWeekUI() {
  document.getElementById("weekSelect").value = selectedWeekIndex;
  renderView();
}

function switchViewMode(mode) {
  currentViewMode = mode;
  document.querySelectorAll(".view-tab").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.mode === mode);
  });
  renderView();
}

function filterBySubject(subName) {
  searchQuery = subName;
  document.getElementById("searchInput").value = subName;
  currentViewMode = "weekly";
  switchViewMode("weekly");
  showToast(`Đã lọc theo môn: ${subName}`);
}

function handleMobileDayFilter(dayKey) {
  selectedMobileDay = dayKey;
  document.querySelectorAll(".mobile-day-pill").forEach(pill => {
    pill.classList.toggle("active", pill.dataset.day === dayKey);
  });
  if (currentViewMode !== "weekly") {
    switchViewMode("weekly");
  } else {
    renderView();
  }
}

function handleSearch(val) {
  searchQuery = val.trim();
  renderView();
}

// Modal Drawer
function openModal(hpJsonStr, dayKey = null, room = null) {
  const hp = JSON.parse(hpJsonStr);
  const modal = document.getElementById("detailModal");
  const modalBody = document.getElementById("modalBody");

  const colorInfo = subjectColorMap[hp.ten_hoc_phan] || { index: 1 };
  
  const teacherItems = hp.giang_vien.map(gv => `
    <div class="teacher-item">
      <div class="teacher-avatar">${gv.ho_ten.charAt(0)}</div>
      <div>
        <div class="teacher-name">${gv.chuc_danh || 'GV'} ${gv.ho_ten}</div>
        <div class="teacher-role">Mã giảng viên: <strong>${gv.ma || 'N/A'}</strong></div>
      </div>
    </div>
  `).join("");

  const schedulesList = hp.lich_hoc.map(lh => {
    const dayObj = DAYS_OF_WEEK.find(d => d.key === lh.thu);
    const tietText = lh.tiet.join(", ");
    const startTime = PERIOD_TIMES[lh.tiet[0]]?.start || "";
    const endTime = PERIOD_TIMES[lh.tiet[lh.tiet.length - 1]]?.end || "";

    return `• ${dayObj ? dayObj.label : `Thứ ${lh.thu}`}: Tiết ${tietText} (${startTime} - ${endTime}) - Phòng <strong>${lh.phong}</strong>`;
  }).join("<br>");

  modalBody.innerHTML = `
    <span class="modal-header-badge sub-${colorInfo.index}">Nhóm ${hp.nhom} - ${hp.hinh_thuc === 'LT' ? 'Lý thuyết' : 'Thực hành'}</span>
    <h2 class="modal-title">${hp.ten_hoc_phan}</h2>
    
    <div class="modal-grid">
      <div class="modal-info-block">
        <div class="modal-info-lbl">Số tín chỉ</div>
        <div class="modal-info-val">${hp.so_tin_chi} Tín chỉ</div>
      </div>
      <div class="modal-info-block">
        <div class="modal-info-lbl">Số tiết (Lý thuyết)</div>
        <div class="modal-info-val">${hp.so_tiet_ly_thuyet} tiết</div>
      </div>
      <div class="modal-info-block" style="grid-column: span 2;">
        <div class="modal-info-lbl">Thời gian giảng dạy</div>
        <div class="modal-info-val">${formatDateFull(hp.thoi_gian.tu_ngay)} ➔ ${formatDateFull(hp.thoi_gian.den_ngay)}</div>
      </div>
      <div class="modal-info-block" style="grid-column: span 2;">
        <div class="modal-info-lbl">Lịch học chi tiết hàng tuần</div>
        <div class="modal-info-val" style="font-size: 0.88rem; line-height: 1.6; margin-top: 0.4rem;">${schedulesList}</div>
      </div>
    </div>

    <div class="modal-teacher-list">
      <div class="modal-info-lbl" style="margin-bottom:0.5rem">Giảng viên đảm nhận</div>
      ${teacherItems}
    </div>
  `;

  modal.classList.add("open");
}

function closeModal() {
  document.getElementById("detailModal").classList.remove("open");
}

// JSON Upload Handler
function handleFileUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if (data && data.hoc_phan) {
        initData(data);
        showToast("Đã tải dữ liệu Thời khóa biểu thành công!");
      } else {
        alert("File JSON không đúng định dạng Thời khóa biểu!");
      }
    } catch (err) {
      alert("Lỗi đọc file JSON: " + err.message);
    }
  };
  reader.readAsText(file);
}

// Export PNG Image Helper
function exportPNG() {
  showToast("Đang mở hộp thoại In / Lưu PDF...");
  window.print();
}

// Toast Notifications
function showToast(msg) {
  const container = document.getElementById("toastContainer");
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = msg;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(15px)";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Setup Event Listeners
function setupEventListeners() {
  document.getElementById("themeToggleBtn").addEventListener("click", toggleTheme);
  document.getElementById("prevWeekBtn").addEventListener("click", prevWeek);
  document.getElementById("nextWeekBtn").addEventListener("click", nextWeek);
  document.getElementById("todayBtn").addEventListener("click", selectTodayWeek);
  document.getElementById("weekSelect").addEventListener("change", (e) => selectWeek(e.target.value));
  document.getElementById("searchInput").addEventListener("input", (e) => handleSearch(e.target.value));
  document.getElementById("jsonFileInput").addEventListener("change", handleFileUpload);
  document.getElementById("exportBtn").addEventListener("click", exportPNG);

  document.querySelectorAll(".view-tab").forEach(tab => {
    tab.addEventListener("click", () => switchViewMode(tab.dataset.mode));
  });

  document.querySelectorAll(".mobile-day-pill").forEach(pill => {
    pill.addEventListener("click", () => handleMobileDayFilter(pill.dataset.day));
  });

  // Close modal when clicking outside
  document.getElementById("detailModal").addEventListener("click", (e) => {
    if (e.target.id === "detailModal") closeModal();
  });
}

// Helper Utilities
function formatDateShort(dateObj) {
  const d = dateObj.getDate().toString().padStart(2, '0');
  const m = (dateObj.getMonth() + 1).toString().padStart(2, '0');
  return `${d}/${m}`;
}

function formatDateFull(dateStr) {
  if (!dateStr) return "";
  const parts = dateStr.split("-");
  if (parts.length === 3) return `${parts[2]}/${parts[1]}/${parts[0]}`;
  return dateStr;
}

function isSameDay(d1, d2) {
  return d1.getFullYear() === d2.getFullYear() &&
         d1.getMonth() === d2.getMonth() &&
         d1.getDate() === d2.getDate();
}

function escapeHtml(str) {
  return str.replace(/'/g, "&apos;").replace(/"/g, "&quot;");
}
