import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Articles</h2>
      <ol type="I">
        <li>
          <Link to="/Article1">Pengenalan HTML</Link>
        </li>
        <li>
          <Link to="/article2">Struktur Dokumen HTML</Link>
        </li>
        <li>
          <Link to="/article3">Teks &amp; Formating</Link>
        </li>
        <li>
          <Link to="/article4">List</Link>
        </li>
        <li>
          <Link to="/article5">Link (Hyperlink)</Link>
        </li>
        <li>
          <Link to="/article6">Gambar</Link>
        </li>
        <li>
          <Link to="/article7">Tabel</Link>
        </li>
        <li>
          <Link to="/article8">Formulir</Link>
        </li>
        <li>
          <Link to="/article9">Elemen Semantik HTML5</Link>
        </li>
        <li>
          <Link to="/article10">Multimedia</Link>
        </li>
        <li>
          <Link to="/article11">Komentar</Link>
        </li>
      </ol>
    </div>
  );
}

export default Sidebar;
