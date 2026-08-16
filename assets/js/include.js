async function loadIncludes() {
  const targets = document.querySelectorAll('[data-include]');

  await Promise.all(Array.from(targets).map(async (el) => {
    const src = el.getAttribute('data-include');
    try {
      const res = await fetch(src);
      if (!res.ok) throw new Error(res.status);
      el.outerHTML = await res.text();
    } catch (err) {
      console.error('Gagal load partial:', src, err);
    }
  }));

  document.dispatchEvent(new Event('partials:loaded'));
}

loadIncludes();
