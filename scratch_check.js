async function check() {
  const res = await fetch('http://localhost:3000/en');
  console.log('Status:', res.status);
  const html = await res.text();
  const prodIdx = html.indexOf('id="products"');
  console.log('Products index:', prodIdx);
  if (prodIdx !== -1) {
    console.log('Products snippet:', html.slice(prodIdx, prodIdx + 600));
  }
  const mfgIdx = html.indexOf('id="manufacturing"');
  console.log('Mfg index:', mfgIdx);
  if (mfgIdx !== -1) {
    console.log('Mfg snippet:', html.slice(mfgIdx, mfgIdx + 600));
  }
}
check();
