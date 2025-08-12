import Pages from "../page-components";

function About() {
  return (
    <Pages
      judul="HTML"
      deskripsi="Tag <img> digunakan untuk menampilkan gambar di halaman web. Atribut src menentukan lokasi gambar, sedangkan alt wajib ditambahkan sebagai deskripsi alternatif yang berguna untuk SEO dan aksesibilitas. Gambar dapat diambil dari path relatif maupun URL penuh."
      videoUrl="https://www.youtube.com/embed/SMetRBdIh-8"
      poin1="Contoh penggunaan:
<img src='gambar.jpg' alt='Deskripsi' 
width='300' height='200'>"
      poin2="alt wajib untuk deskripsi gambar (penting untuk SEO dan aksesibilitas)."
      poin3="Gambar dapat menggunakan path relatif seperti images/foto.png atau URL penuh."
    />
  );
}

export default About;
