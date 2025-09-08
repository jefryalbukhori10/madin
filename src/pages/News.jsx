import { motion } from "framer-motion";

const newsData = [
  {
    title: "Santri Subulussalam Raih Juara Lomba Tahfidz",
    date: "7 September 2025",
    excerpt:
      "Salah satu santri berhasil meraih juara 1 lomba tahfidz tingkat kabupaten.",
  },
  {
    title: "Kegiatan Pesantren Kilat Ramadhan",
    date: "2 April 2025",
    excerpt:
      "Pesantren kilat diikuti lebih dari 300 santri dengan kegiatan tadarus, fiqih, dan kajian akhlak.",
  },
  {
    title: "Pembangunan Gedung Baru",
    date: "15 Maret 2025",
    excerpt:
      "Madrasah membangun ruang kelas baru untuk menampung semakin banyaknya santri.",
  },
];

export default function News() {
  return (
    <div className="pt-24 px-6 font-sans">
      <h2 className="text-3xl font-bold text-center mb-12 text-green-700">
        Berita Terbaru
      </h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {newsData.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition p-6"
          >
            <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
            <p className="text-sm text-gray-500 mb-4">{item.date}</p>
            <p>{item.excerpt}</p>
            <button className="mt-4 text-green-600 font-medium hover:underline">
              Baca Selengkapnya →
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
