// pi-engine.js
// Renders all frames and handles answer checking.
// Matching: case-insensitive; passes if ANY acceptable string is a substring
// of the trimmed learner response.
// Progress is stored per-chapter using an isolated sessionStorage key.

(function () {

  // ── Chapter-specific storage key ─────────────────────────────────────────
  // Derived from the first frame key prefix (e.g. "f" for ch01, "a" for ch02,
  // "e" for ch03) so each chapter has its own isolated sessionStorage entry.
  function getStorageKey() {
    if (!window.PI_FRAMES) return 'pi_progress_unknown';
    const firstKey = Object.keys(window.PI_FRAMES)[0] || '';
    const prefix = firstKey.replace(/[0-9]/g, '') || 'ch';
    return 'pi_progress_' + prefix;
  }

  // ── Progress store (sessionStorage — clears when tab closes) ──────────────
  function getProgress() {
    try {
      return JSON.parse(sessionStorage.getItem(getStorageKey()) || '{}');
    } catch { return {}; }
  }

  function saveProgress(id, state) {
    const p = getProgress();
    p[id] = state;
    try { sessionStorage.setItem(getStorageKey(), JSON.stringify(p)); } catch {}
  }

  // ── Matching ──────────────────────────────────────────────────────────────
  function checkAnswer(response, acceptable) {
    const r = response.trim().toLowerCase();
    if (!r) return false;
    return acceptable.some(a => r.includes(a.toLowerCase()));
  }

  // ── Render a single frame ─────────────────────────────────────────────────
  function renderFrame(id, frame, container) {
    const progress = getProgress();
    const prior = progress[id];

    const wrapper = document.createElement('div');
    wrapper.className = 'pi-frame';
    wrapper.id = 'frame-' + id;

    // Label badge (REVIEW / DISCRIMINATION / INTEGRATION)
    if (frame.label) {
      const badge = document.createElement('span');
      badge.className = 'pi-badge pi-badge-' + frame.label.toLowerCase().replace(/\s+/g, '-');
      badge.textContent = frame.label;
      wrapper.appendChild(badge);
    }

    // Stem
    const stem = document.createElement('p');
    stem.className = 'pi-stem';
    stem.innerHTML = frame.stem;
    wrapper.appendChild(stem);

    // Input row
    const inputRow = document.createElement('div');
    inputRow.className = 'pi-input-row';

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'pi-input';
    input.placeholder = 'Type your answer…';
    input.autocomplete = 'off';
    input.autocorrect = 'off';
    input.spellcheck = false;

    const btn = document.createElement('button');
    btn.className = 'pi-btn';
    btn.textContent = 'Check';

    inputRow.appendChild(input);
    inputRow.appendChild(btn);
    wrapper.appendChild(inputRow);

    // Feedback div (hidden initially)
    const fb = document.createElement('div');
    fb.className = 'pi-feedback';
    fb.setAttribute('aria-live', 'polite');
    wrapper.appendChild(fb);

    // Restore prior state if answered
    if (prior) {
      applyResult(prior.correct, prior.response, input, btn, fb, frame);
    }

    // Check handler
    function attempt() {
      const response = input.value;
      const correct = checkAnswer(response, frame.acceptable);
      saveProgress(id, { correct, response });
      applyResult(correct, response, input, btn, fb, frame);
      updateProgressBar();
    }

    btn.addEventListener('click', attempt);
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') attempt();
    });

    container.appendChild(wrapper);
  }

  function applyResult(correct, response, input, btn, fb, frame) {
    input.value = response;
    input.disabled = true;
    btn.disabled = true;
    btn.textContent = correct ? '✓ Correct' : '✗ Try again';
    btn.className = 'pi-btn ' + (correct ? 'pi-btn-correct' : 'pi-btn-incorrect');

    fb.innerHTML =
      '<div class="pi-result ' + (correct ? 'pi-correct' : 'pi-incorrect') + '">' +
        '<strong>' + (correct ? '✓ Correct.' : '✗ Not quite.') + '</strong> ' +
        frame.feedback +
      '</div>';
    fb.style.display = 'block';

    // Re-enable with a "Try again" link if incorrect
    if (!correct) {
      const retry = document.createElement('button');
      retry.className = 'pi-retry';
      retry.textContent = 'Try again';
      retry.addEventListener('click', function () {
        input.value = '';
        input.disabled = false;
        btn.disabled = false;
        btn.textContent = 'Check';
        btn.className = 'pi-btn';
        fb.style.display = 'none';
        input.focus();
      });
      fb.appendChild(retry);
    }
  }

  // ── Progress bar ──────────────────────────────────────────────────────────
  function updateProgressBar() {
    const bar = document.getElementById('pi-progress-bar');
    const label = document.getElementById('pi-progress-label');
    if (!bar) return;
    const total = Object.keys(window.PI_FRAMES).length;
    const done = Object.values(getProgress()).filter(v => v.correct).length;
    const pct = Math.round((done / total) * 100);
    bar.style.width = pct + '%';
    bar.setAttribute('aria-valuenow', pct);
    if (label) label.textContent = done + ' / ' + total + ' correct (' + pct + '%)';
  }

  // ── Section heading helper ────────────────────────────────────────────────
  function renderSectionHeading(text, container) {
    const h = document.createElement('h2');
    h.className = 'pi-section-heading';
    h.textContent = text;
    container.appendChild(h);
  }

  // ── Main render ───────────────────────────────────────────────────────────
  function renderAll() {
    const container = document.getElementById('pi-container');
    if (!container || !window.PI_FRAMES) return;

    const total = Object.keys(window.PI_FRAMES).length;

    // Progress bar
    const progressWrap = document.createElement('div');
    progressWrap.className = 'pi-progress-wrap';
    progressWrap.innerHTML =
      '<div class="pi-progress-track" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">' +
        '<div class="pi-progress-fill" id="pi-progress-bar" style="width:0%"></div>' +
      '</div>' +
      '<p id="pi-progress-label" class="pi-progress-label">0 / ' + total + ' correct (0%)</p>';
    container.appendChild(progressWrap);

    let frameNumber = 0;
    Object.entries(window.PI_FRAMES).forEach(([id, frame]) => {
      frameNumber++;

      // Section heading
      if (frame.section) {
        renderSectionHeading(frame.section, container);
      }

      // Frame number label
      frame._number = frameNumber;

      // Wrapper with number
      const outer = document.createElement('div');
      outer.className = 'pi-frame-outer';

      const numLabel = document.createElement('span');
      numLabel.className = 'pi-frame-number';
      numLabel.textContent = 'Frame ' + frameNumber;
      outer.appendChild(numLabel);

      container.appendChild(outer);
      renderFrame(id, frame, outer);
    });

    updateProgressBar();
  }

  // Run after DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderAll);
  } else {
    renderAll();
  }

})();
