import Pages from "../page-components";

function About() {
  return (
    <Pages
      judul="HTML"
      deskripsi="Tag <form> digunakan untuk mengumpulkan input dari pengguna. Form berisi berbagai jenis elemen input seperti text, password, email, checkbox, dan radio. Elemen tambahan seperti <textarea>, <select>, dan <button> memperkaya jenis input yang dapat digunakan. Data yang diisi dalam form biasanya dikirim ke server melalui atribut action dan method."
      videoUrl="https://www.youtube.com/embed/QIlBOI-hTuA"
      poin1="Form memungkinkan input dari user.
Contoh:

<form action='proses.php' method='post'>
  <label>Nama:</label>
  <input type='text' name='nama'><br>
  <input type='submit' value='Kirim'>
</form>
    "
      poin2="Jenis input: text, password, email, checkbox, radio, date, dll."
      poin3="Elemen tambahan: <textarea>, <select>, <option>, <button>."
    />
  );
}

export default About;
