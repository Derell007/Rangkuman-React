import Pages from "../page-components";

function About() {
  return (
    <Pages
      judul="HTML"
      deskripsi="Elemen-elemen semantik seperti <header>, <nav>, <main>, <section>, <article>, <aside>, dan <footer> memberikan makna yang jelas terhadap struktur halaman web. Penggunaan elemen ini tidak hanya meningkatkan keterbacaan kode, tetapi juga membantu SEO dan aksesibilitas dengan memberikan konteks pada konten bagi mesin pencari dan pembaca layar."
      videoUrl="https://www.youtube.com/embed/yb_emYhY3Pc"
      poin1="Elemen semantik membantu SEO & struktur halaman."
      poin2="<header>: Bagian kepala (logo, navigasi)."
      poin3="<nav>: Menu navigasi.
"
      poin4="<main>: Konten utama."
      poin5="<section>: Bagian dari halaman (bab)."
      poin6="<article>: Artikel/konten independen."
      poin7="<aside>: Sidebar atau catatan tambahan.
"
      poin8="<footer>: Bagian bawah halaman."
    />
  );
}

export default About;
