import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section
        className="relative text-white min-h-screen flex flex-col justify-center items-center text-center px-6 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg-madrasah.jpg')" }}
      >
        <div className="absolute inset-0 bg-green-900/60" />{" "}
        {/* overlay supaya teks tetap jelas */}
        <div className="relative z-10">
          {/* Logo */}
          <motion.img
            src="/logo.png"
            alt="Logo Madrasah"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              scale: [1, 1.1, 1], // zoom in ke 1.1 lalu balik ke 1
            }}
            transition={{
              duration: 10, // lamanya 1 siklus
              repeat: Infinity, // biar terus berulang
              ease: "easeInOut",
            }}
            className="h-50 w-50 mb-6 drop-shadow-lg mx-auto"
          />

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Madrasah Diniyah <br /> Subulussalam
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg md:text-xl mb-6 max-w-2xl mx-auto"
          >
            Mencetak generasi Qur’ani yang berakhlak mulia, cerdas, dan
            berwawasan luas.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            href="#about"
            className="bg-white text-green-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
          >
            Pelajari Lebih Lanjut
          </motion.a>
        </div>
      </section>

      {/* Section lain (Tentang, Program, Kontak, Footer) tetap sama */}
      {/* Section Statistik */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-12">
            Profil Kami
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Tenaga Pendidik */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="p-6 bg-green-50 rounded-2xl shadow hover:shadow-lg transition"
            >
              <p className="text-4xl font-bold text-green-700">4+</p>
              <p className="mt-2 text-gray-600">Tenaga Pendidik</p>
            </motion.div>

            {/* Santri */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 bg-green-50 rounded-2xl shadow hover:shadow-lg transition"
            >
              <p className="text-4xl font-bold text-green-700">80+</p>
              <p className="mt-2 text-gray-600">Santri Aktif</p>
            </motion.div>

            {/* Program */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-6 bg-green-50 rounded-2xl shadow hover:shadow-lg transition"
            >
              <p className="text-4xl font-bold text-green-700">5+</p>
              <p className="mt-2 text-gray-600">
                Program Pendidikan dan Kegiatan
              </p>
            </motion.div>

            {/* Alumni */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="p-6 bg-green-50 rounded-2xl shadow hover:shadow-lg transition"
            >
              <p className="text-4xl font-bold text-green-700">50+</p>
              <p className="mt-2 text-gray-600">Alumni</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Sejarah & Pengasuh */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Sejarah */}
          <div>
            <h2 className="text-3xl font-bold text-green-700 mb-6">
              Sejarah Singkat
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Madrasah Diniyah Subulussalam berdiri pada tahun 2000 sebagai
              upaya masyarakat Desa Sukoyuwono untuk meningkatkan pendidikan
              agama Islam bagi generasi muda. Sejak awal berdiri, madrasah ini
              berkomitmen mencetak generasi Qur’ani yang berakhlak mulia,
              cerdas, dan berwawasan luas.
            </p>
          </div>

          {/* Pengasuh & Ketua */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-md">
            <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
              Pengurus
            </h2>
            <ul className="space-y-4 text-lg text-gray-800">
              <li>
                <span className="font-semibold">Pengasuh:</span> Ust. Askur
              </li>
              <li>
                <span className="font-semibold">Ketua:</span> Ahmad Khosim
                Alamsah S.I.P
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section Berita */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-12">
            Berita Terbaru
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Berita 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition"
            >
              <img
                src="/bg-madrasah.jpg"
                alt="Berita 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-2">
                  Kegiatan Haflah Akhirussanah
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Santri Madrasah Subulussalam mengadakan Haflah Akhirussanah
                  dengan penuh khidmat dan meriah.
                </p>
                <Link
                  to="/news"
                  className="text-green-700 font-semibold hover:underline"
                >
                  Baca Selengkapnya →
                </Link>
              </div>
            </motion.div>

            {/* Berita 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition"
            >
              <img
                src="/bg-madrasah.jpg"
                alt="Berita 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-2">
                  Santri Berprestasi di Lomba MTQ
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Perwakilan santri berhasil meraih juara 1 lomba MTQ tingkat
                  kabupaten.
                </p>
                <Link
                  to="/news"
                  className="text-green-700 font-semibold hover:underline"
                >
                  Baca Selengkapnya →
                </Link>
              </div>
            </motion.div>

            {/* Berita 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition"
            >
              <img
                src="/bg-madrasah.jpg"
                alt="Berita 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-2">
                  Kegiatan Bakti Sosial Santri
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Santri turut serta dalam kegiatan bakti sosial membantu warga
                  sekitar madrasah.
                </p>
                <Link
                  to="/news"
                  className="text-green-700 font-semibold hover:underline"
                >
                  Baca Selengkapnya →
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Tombol Berita Lainnya */}
          <div className="mt-10">
            <Link
              to="/news"
              className="bg-green-700 text-white px-6 py-3 rounded-full shadow hover:bg-green-800 transition"
            >
              Berita Lainnya →
            </Link>
          </div>
        </div>
      </section>

      {/* Section Alamat */}
      <section id="alamat" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-6">
            Alamat Kami
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Madrasah Diniyah Subulussalam
            <br />
            Jl. Surya Dusun Sukoyuwono, Desa Palaan, Kecamatan Ngajum, Kabupaten
            Malang, Jawa Timur
          </p>

          {/* Google Maps Embed */}
          <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Lokasi Madrasah Diniyah Subulussalam"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d197.75995153906763!2d112.5475087!3d-8.118649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e789f246cab1337%3A0xe98d00d6d76772bc!2sMasjid%20Jami'%20Subulussalam%20Sukoyuwono%20(Nahdlatul%20Ulama)!5e0!3m2!1sid!2sid!4v1694160890000!5m2!1sid!2sid"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Tombol WhatsApp Floating */}
      <a
        href="https://wa.me/6285755763941"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-110 z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="currentColor"
          className="h-8 w-8 text-white"
        >
          <path d="M16 .5C7.4.5.5 7.4.5 16c0 2.8.7 5.4 2 7.7L.6 31l7.6-1.9c2.2 1.2 4.7 1.9 7.8 1.9 8.6 0 15.5-6.9 15.5-15.5S24.6.5 16 .5zm0 28c-2.6 0-5-.7-7-2l-.5-.3-4.5 1.1 1.2-4.4-.3-.5c-1.3-2.1-2-4.5-2-7 0-7.2 5.9-13 13-13s13 5.8 13 13-5.8 13.1-13 13.1zm7.2-9.7c-.4-.2-2.3-1.1-2.6-1.2-.3-.1-.6-.2-.9.2s-1 1.2-1.2 1.5c-.2.2-.5.3-.9.1s-1.7-.6-3.3-2c-1.2-1.1-2-2.5-2.3-2.9s0-.7.2-1c.2-.2.4-.5.6-.7.2-.2.3-.4.4-.6.1-.2 0-.5 0-.7s-.9-2.2-1.2-3c-.3-.7-.6-.6-.9-.6h-.8c-.3 0-.7.1-1 .5s-1.3 1.3-1.3 3.2 1.3 3.8 1.5 4.1c.2.3 2.5 3.8 6 5.3.8.3 1.4.5 1.9.6.8.2 1.5.2 2-.1.6-.3 1.8-1.1 2.1-2.1.3-1 .3-1.9.2-2.1-.1-.2-.3-.3-.7-.5z" />
        </svg>
      </a>
    </div>
  );
}
