import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Articles</h2>
      <ol type="I">
        <li>
          <a href="page.html">Pengenalan HTML</a>
        </li>
        <li>
          <a href="page2.html">Struktur Dokumen HTML</a>
        </li>
        <li>
          <a href="page3.html">Teks &amp; Formating</a>
        </li>
        <li>
          <a href="page4.html">List</a>
        </li>
        <li>
          <a href="page5.html">Link (Hyperlink)</a>
        </li>
        <li>
          <a href="page6.html">Gambar</a>
        </li>
        <li>
          <a href="page7.html">Tabel</a>
        </li>
        <li>
          <a href="page8.html">Formulir</a>
        </li>
        <li>
          <a href="page9.html">Elemen Semantik HTML5</a>
        </li>
        <li>
          <a href="page10.html">Multimedia</a>
        </li>
        <li>
          <a href="page11.html">Komentar</a>
        </li>
      </ol>
    </div>
  );
}

export default Sidebar;
