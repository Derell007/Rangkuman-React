import Pages from "../page-components";

function About() {
  return (
    <Pages
      judul="HTML"
      deskripsi="Setiap dokumen HTML memiliki struktur dasar yang terdiri dari deklarasi <!DOCTYPE html>, elemen akar <html>, bagian kepala <head> yang menyimpan metadata, dan <body> yang memuat seluruh konten yang ditampilkan di browser. Struktur ini penting untuk memastikan halaman web dapat ditampilkan dengan benar oleh browser."
      videoUrl="https://www.youtube.com/embed/1NicaVOCXHA"
      poin1="<!DOCTYPE html>: Deklarasi versi HTML5."
      poin2="<html>: Elemen akar semua tag."
      poin3="<head>: Konten utama yang terlihat di browser."
    />
  );
}

export default About;
