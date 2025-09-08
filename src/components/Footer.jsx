import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-green-900 pt-8 mt-16">
      <div className="max-w-6xl mx-auto text-white px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo & Nama */}
        <div>
          <img
            src="/logo.png"
            alt="Logo Madrasah"
            className="h-16 w-16 mx-auto md:mx-0 mb-4"
          />
          <h3 className="text-xl font-bold text-green-500">
            Madrasah Diniyah Subulussalam
          </h3>
          <p className="text-sm mt-2">
            Mencetak generasi Qur’ani yang berakhlak mulia, cerdas, dan
            berwawasan luas.
          </p>
        </div>

        {/* Navigasi Cepat */}
        <div>
          <h4 className="text-lg font-semibold text-green-500 mb-4">
            Navigasi
          </h4>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="hover:underline">
                Tentang
              </a>
            </li>
            <li>
              <a href="#berita" className="hover:underline">
                Berita
              </a>
            </li>
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h4 className="text-lg font-semibold text-green-500 mb-4">Kontak</h4>
          {/* Kontak singkat */}
          <div className="mt-4 space-y-2 text-sm flex flex-col items-center md:items-start">
            <p className="flex items-center gap-2">
              <Mail size={16} /> info@subulussalam.sch.id
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} /> 0857-5576-3941
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={16} /> Sukoyuwono Palaan Ngajum Malang
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 bg-green-100 text-green-900 p-4 text-center text-sm">
        © {new Date().getFullYear()} Madrasah Diniyah Subulussalam. All rights
        reserved.
      </div>
    </footer>
  );
}
