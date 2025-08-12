import Pages from "../page-components";

function About() {
  return (
    <Pages
      judul="HTML"
      deskripsi="HTML menyediakan tiga jenis daftar: Unordered List untuk daftar berpoin, Ordered List untuk daftar berurutan dengan angka atau huruf, dan Definition List untuk menampilkan istilah beserta definisinya. Masing-masing memiliki tag HTML khusus untuk menyusun daftar sesuai kebutuhan."
      videoUrl="https://www.youtube.com/embed/cUWBYzA6M-8"
      poin1="Unordered List (bullet):

<ul>
<li>Item 1</li>
<li>Item 2</li>
</ul>"
      poin2="Ordered List (angka/huruf):

<ol type='A'>
<li>Item 1</li>
</ol>"
      poin3="Definition List:

<dl>
<dt>HTML</dt>
<dd>HyperText Markup Language</dd>
</dl>
                                    "
    />
  );
}

export default About;
