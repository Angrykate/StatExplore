/**
 * StatExplore — Main JavaScript
 * Hamburger menu, quiz initialization, progress bars
 */

// ── Hamburger menu toggle ──
function initHamburger() {
  const btn = document.querySelector('.nav-hamburger');
  const menu = document.querySelector('.nav-links');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    menu.classList.toggle('open');
  });

  // Close menu on link click (mobile)
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      btn.classList.remove('open');
      menu.classList.remove('open');
    });
  });
}

// ── Quiz system ──
function initQuiz(containerId) {
  const container = containerId
    ? document.getElementById(containerId)
    : document.querySelector('.quiz') || document.querySelector('.quiz-box');

  if (!container) return;

  container.querySelectorAll('.quiz-option, .quiz-opt').forEach(opt => {
    opt.addEventListener('click', () => {
      const q = opt.closest('.quiz-item');
      if (!q || q.dataset.answered) return;
      q.dataset.answered = '1';

      const isCorrect = opt.dataset.correct === 'true';
      opt.classList.add(isCorrect ? 'correct' : 'wrong');

      if (!isCorrect) {
        const correctOpt = q.querySelector('[data-correct="true"]');
        if (correctOpt) correctOpt.classList.add('correct');
      }

      const fb = q.querySelector('.quiz-feedback, .quiz-fb');
      if (fb) {
        fb.classList.add('show', isCorrect ? 'correct' : 'wrong');
        fb.textContent = isCorrect
          ? (fb.dataset.correct || '✓ Correct !')
          : (fb.dataset.wrong || '✗ ' + (fb.dataset.explanation || 'Incorrect.'));
      }

      q.querySelectorAll('.quiz-option, .quiz-opt').forEach(o => {
        o.style.pointerEvents = 'none';
        o.disabled = true;
      });
    });
  });
}

// ── Progress tracking ──
const Progress = {
  get(key) {
    try { return JSON.parse(localStorage.getItem('statexplore_' + key) || 'null'); }
    catch { return null; }
  },
  set(key, val) {
    try { localStorage.setItem('statexplore_' + key, JSON.stringify(val)); }
    catch {}
  },
  markPageDone(pageId) {
    const done = this.get('done') || {};
    done[pageId] = true;
    this.set('done', done);
  },
  isDone(pageId) {
    const done = this.get('done') || {};
    return !!done[pageId];
  },
  moduleProgress(pages) {
    const done = this.get('done') || {};
    const completed = pages.filter(p => done[p]).length;
    return { completed, total: pages.length, pct: Math.round((completed / pages.length) * 100) };
  }
};

function updateProgressBars() {
  document.querySelectorAll('[data-progress-module]').forEach(el => {
    const pages = JSON.parse(el.dataset.progressPages || '[]');
    const { pct } = Progress.moduleProgress(pages);
    const fill = el.querySelector('.progress-fill');
    if (fill) fill.style.width = pct + '%';
    const label = el.querySelector('.progress-label');
    if (label) label.textContent = pct + '%';
  });
}

// ── Active sidebar link ──
function updateSidebar() {
  const pageId = document.body.dataset.pageId;
  if (!pageId) return;
  document.querySelectorAll('.sidebar-nav a').forEach(a => {
    if (a.getAttribute('href')?.includes(pageId)) a.classList.add('active');
  });
}

// ── Init on DOM ready ──
document.addEventListener('DOMContentLoaded', () => {
  initHamburger();
  initQuiz();
  updateProgressBars();
  updateSidebar();
});
</write_to_file>