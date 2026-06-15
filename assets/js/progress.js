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

function initQuiz(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.querySelectorAll('.quiz-option').forEach(opt => {
    opt.addEventListener('click', () => {
      const q = opt.closest('.quiz-item');
      if (q.dataset.answered) return;
      q.dataset.answered = '1';
      const isCorrect = opt.dataset.correct === 'true';
      opt.classList.add(isCorrect ? 'correct' : 'wrong');
      if (!isCorrect) {
        q.querySelector('[data-correct="true"]')?.classList.add('correct');
      }
      const fb = q.querySelector('.quiz-feedback');
      if (fb) {
        fb.classList.add('show', isCorrect ? 'correct' : 'wrong');
        fb.textContent = isCorrect
          ? (fb.dataset.correct || '✓ Correct !')
          : (fb.dataset.wrong || '✗ ' + (fb.dataset.explanation || 'Incorrect.'));
      }
      q.querySelectorAll('.quiz-option').forEach(o => o.style.pointerEvents = 'none');
    });
  });
}

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

document.addEventListener('DOMContentLoaded', () => {
  updateProgressBars();
  const pageId = document.body.dataset.pageId;
  if (pageId) {
    const sidebar = document.querySelectorAll('.sidebar-nav a');
    sidebar.forEach(a => {
      if (a.getAttribute('href')?.includes(pageId)) a.classList.add('active');
    });
  }
});
