import Pages from "../page-components";

function About() {
  return (
    <Pages
      judul="HTML"
      deskripsi="Tag <table> digunakan untuk menampilkan data dalam bentuk tabel. Elemen <th> digunakan sebagai header yang tampil tebal dan rata tengah secara otomatis. Untuk menggabungkan beberapa kolom atau baris, digunakan atribut colspan dan rowspan."
      videoUrl="https://www.youtube.com/embed/gLHEoeupIZs"
      poin1="Struktur dasar:

<table border='1'>
  <tr>
    <th>Nama</th>
    <th>Usia</th>
  </tr>
  <tr>
    <td>Rina</td>
    <td>20</td>
  </tr>
</table>"
      poin2="<th> digunakan untuk header tabel (secara default tampil tebal dan di tengah)."
      poin3="Gunakan rowspan atau colspan untuk menggabungkan sel baris atau kolom."
    />
  );
}

export default About;
