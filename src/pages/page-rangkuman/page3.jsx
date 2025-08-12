import Pages from "../page-components";

function About() {
  return (
    <Pages
      judul="HTML"
      deskripsi="HTML menyediakan berbagai tag untuk memformat teks dan elemen dasar seperti judul, paragraf, garis, serta gaya penulisan seperti tebal, miring, garis bawah, dan highlight. Selain itu, tag seperti <sup> dan <sub> digunakan untuk penulisan khusus seperti superscript dan subscript."
      videoUrl="https://www.youtube.com/embed/3sLSi9L5nWE"
      poin1="<h1>–<h6>: Judul dengan ukuran berbeda (<h1> terbesar)."
      poin2="<p>: Membuat paragraf."
      poin3="<br>: Pindah baris."
      poin4="<hr>: Garis horizontal."
      poin5="Format teks: <b>/<strong> (tebal), <i>/<em> (miring), <u> (garis bawah), <mark> (highlight)."
      poin6="<sup> dan <sub> untuk superscript dan subscript."
    />
  );
}

export default About;
