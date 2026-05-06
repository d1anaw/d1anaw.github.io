// watermark.js — shared across all gallery pages
// Draws each photo onto a canvas and stamps "© Diana Wang" before display.

function applyWatermark(src) {
  return new Promise(resolve => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas  = document.createElement('canvas');
      canvas.width  = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx     = canvas.getContext('2d');

      ctx.drawImage(img, 0, 0);

      const size = Math.max(img.naturalWidth, img.naturalHeight) * 0.022;
      ctx.font         = `300 ${size}px 'DM Sans', sans-serif`;
      ctx.fillStyle    = 'rgba(255,255,255,0.45)';
      ctx.textAlign    = 'right';
      ctx.textBaseline = 'bottom';
      ctx.fillText('\u00a9 Diana Wang', img.naturalWidth - size * 0.6, img.naturalHeight - size * 0.6);

      resolve(canvas.toDataURL('image/jpeg', 0.92));
    };
    img.onerror = () => resolve(src); // fallback: show unwatermarked if load fails
    img.src = src;
  });
}

// Generic grid loader — call with json path, container id, optional limit
async function loadGrid(jsonPath, containerId, limit) {
  const grid = document.getElementById(containerId);
  if (!grid) return;

  const lb    = document.getElementById('lightbox') || document.getElementById('lb');
  const lbImg = document.getElementById('lightbox-img') || document.getElementById('lb-img');

  const fadeObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity   = 1;
        e.target.style.transform = 'none';
        fadeObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  try {
    const res    = await fetch(jsonPath);
    const photos = await res.json();
    const slice  = limit ? photos.slice(0, limit) : photos;

    for (const photo of slice) {
      const item = document.createElement('div');
      // support both class naming conventions used across pages
      item.className = grid.classList.contains('masonry') ? 'm-item' : 'grid-item';
      item.style.cssText = 'opacity:0;transform:translateY(12px);transition:opacity .5s,transform .5s';

      const img     = document.createElement('img');
      img.alt       = photo.caption || '';
      img.loading   = 'lazy';

      // watermark on demand as image enters viewport
      const wmObs = new IntersectionObserver(async ([entry]) => {
        if (entry.isIntersecting) {
          wmObs.disconnect();
          const url = await applyWatermark(photo.src);
          img.src   = url;
          // lightbox shows watermarked canvas version too
          img.addEventListener('click', () => {
            if (lb && lbImg) { lbImg.src = img.src; lbImg.alt = img.alt; lb.classList.add('open'); lb.classList.add('on'); }
          });
        }
      }, { rootMargin: '200px' });
      wmObs.observe(item);

      item.appendChild(img);

      if (photo.caption) {
        const cap       = document.createElement('div');
        cap.className   = 'caption cap';
        cap.textContent = photo.caption;
        item.appendChild(cap);
      }

      grid.appendChild(item);
      fadeObs.observe(item);
    }
  } catch(e) {
    console.warn('Could not load', jsonPath, e);
  }
}
