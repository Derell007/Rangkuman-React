import Pages from "../page-components";

function About() {
  return (
    <Pages
      judul="HTML"
      deskripsi="HTML menyediakan tag <video> dan <audio> untuk menampilkan media di halaman web. Dengan menambahkan elemen <source> di dalamnya, kita dapat menyisipkan file video atau audio dengan format tertentu. Atribut controls digunakan agar pengguna dapat memutar, menjeda, atau menyesuaikan volume media secara langsung."
      videoUrl="https://www.youtube.com/embed/7-QNafrXigs"
      poin1="Menambahkan video:

<video controls width='320'>
  <source src='video.mp4' 
type='video/mp4'>
</video>
    
"
      poin2="Menambahkan audio:

<audio controls>
  <source src='audio.mp3'
 type='audio/mpeg'>
</audio>
    "
    />
  );
}

export default About;
