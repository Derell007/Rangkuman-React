import Pages from "../page-components";

function About() {
  return (
    <Pages
      judul="HTML"
      deskripsi="Tag <a> digunakan untuk membuat hyperlink. Selain atribut dasar href, tag ini juga dapat menggunakan atribut seperti target='_blank' untuk membuka link di tab baru, title untuk menampilkan tooltip, serta href='#id' untuk melompat ke bagian tertentu dalam halaman."
      videoUrl="https://www.youtube.com/embed/Dl_bIYBc9gM"
      poin1="Dasar:
<a href='https://example.com'>Kunjungi</a>
"
      poin2="Atribut penting:
target='_blank': Buka di tab baru."
      poin3="title: Tooltip ketika kursor diarahkan."
      poin4="Link ke bagian halaman:
<a href='#bagian'>Lompat ke Bagian</a>"
    />
  );
}

export default About;
