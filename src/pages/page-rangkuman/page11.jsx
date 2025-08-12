import Pages from "../page-components";

function About() {
  return (
    <Pages
      judul="HTML"
      deskripsi="Komentar dalam HTML ditulis menggunakan <!-- ... --> dan tidak akan ditampilkan di browser. Komentar berguna untuk memberi catatan atau penjelasan di dalam kode, baik untuk diri sendiri maupun orang lain yang membaca struktur HTML."
      videoUrl="https://www.youtube.com/embed/qs8G2XWf7Yk"
      poin1="Komentar tidak ditampilkan di browser:
<!-- Ini komentar -->"
    />
  );
}

export default About;
