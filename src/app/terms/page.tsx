'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, FileText, ShoppingCart, Shield, AlertCircle, Users, CreditCard } from 'lucide-react'
import Link from 'next/link'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="/logo.png" 
                alt="CV PELOPOR JAYA BERSAMA" 
                className="h-10 w-10 object-contain"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900">CV PELOPOR JAYA BERSAMA</h1>
                <p className="text-sm text-gray-600">Syarat dan Ketentuan</p>
              </div>
            </div>
            <Link href="/">
              <Button variant="outline" className="flex items-center">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Kembali ke Beranda
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-blue-100 p-4 rounded-full">
                <FileText className="h-12 w-12 text-blue-600" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Syarat dan Ketentuan
            </h1>
            <p className="text-lg text-gray-600">
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>

          {/* Introduction */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2 text-blue-600" />
                Pendahuluan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Selamat datang di <strong>CV PELOPOR JAYA BERSAMA</strong>. Syarat dan Ketentuan ini 
                mengatur penggunaan layanan kami, pembelian produk, dan hubungan hukum antara 
                Anda dan <strong>CV PELOPOR JAYA BERSAMA</strong>.
              </p>
              <p className="text-gray-700">
                Dengan mengakses atau menggunakan layanan kami, Anda setuju untuk terikat oleh 
                Syarat dan Ketentuan ini. Jika Anda tidak setuju dengan bagian mana pun dari 
                ketentuan ini, jangan gunakan layanan kami.
              </p>
            </CardContent>
          </Card>

          {/* Definitions */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Definisi</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <span className="font-semibold text-gray-900">"Perusahaan"</span>
                  <span className="text-gray-700 ml-2">: CV PELOPOR JAYA BERSAMA</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">"Pelanggan"</span>
                  <span className="text-gray-700 ml-2">: Individu atau entitas yang membeli produk dari Perusahaan</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">"Produk"</span>
                  <span className="text-gray-700 ml-2">: Mesin dan peralatan yang dijual oleh Perusahaan</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">"Layanan"</span>
                  <span className="text-gray-700 ml-2">: Layanan penjualan, pengiriman, dan dukungan pelanggan</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">"Website"</span>
                  <span className="text-gray-700 ml-2">: Platform online Perusahaan</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Products and Services */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <ShoppingCart className="h-5 w-5 mr-2 text-blue-600" />
                Produk dan Layanan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">1. Ketersediaan Produk</h3>
                <p className="text-gray-700">
                  Perusahaan berusaha untuk menyediakan informasi yang akurat tentang ketersediaan produk. 
                  Namun, kami tidak menjamin ketersediaan semua produk setiap saat. Perusahaan berhak 
                  menolak pesanan jika produk tidak tersedia.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">2. Spesifikasi Produk</h3>
                <p className="text-gray-700">
                  Kami berusaha untuk memberikan deskripsi produk yang akurat. Namun, Perusahaan tidak 
                  bertanggung jawab atas kesalahan kecil dalam spesifikasi atau deskripsi produk. 
                  Pelanggan disarankan untuk mengkonfirmasi spesifikasi sebelum pembelian.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">3. Harga</h3>
                <p className="text-gray-700">
                  Harga produk dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya. Harga yang 
                  berlaku adalah harga pada saat transaksi. Semua harga sudah termasuk PPN (jika applicable).
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Ordering and Payment */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="h-5 w-5 mr-2 text-blue-600" />
                Pemesanan dan Pembayaran
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">1. Proses Pemesanan</h3>
                <p className="text-gray-700">
                  Pelanggan dapat melakukan pemesanan melalui website, telepon, atau langsung ke toko kami. 
                  Setiap pemesanan akan dikonfirmasi oleh Perusahaan sebelum diproses lebih lanjut.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">2. Metode Pembayaran</h3>
                <p className="text-gray-700">
                  Kami menerima berbagai metode pembayaran:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>Transfer Bank</li>
                  <li>Tunai (untuk pembelian di toko)</li>
                  <li>Kartu Kredit/Debit (jika tersedia)</li>
                  <li>Pembayaran cicilan (syarat dan ketentuan berlaku)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">3. Konfirmasi Pembayaran</h3>
                <p className="text-gray-700">
                  Pembayaran harus dikonfirmasi dan diterima sepenuhnya sebelum produk dikirim. 
                  Perusahaan berhak menahan pengiriman hingga pembayaran diterima.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Delivery and Shipping */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Pengiriman dan Pengantaran</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">1. Waktu Pengiriman</h3>
                <p className="text-gray-700">
                  Waktu pengiriman estimasi akan diberikan pada saat konfirmasi pesanan. 
                  Perusahaan tidak bertanggung jawab atas keterlambatan yang disebabkan oleh 
                  pihak ketiga (ekspedisi, cuaca, dll).
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">2. Biaya Pengiriman</h3>
                <p className="text-gray-700">
                  Biaya pengiriman akan ditanggung oleh Pelanggan kecuali ada promosi khusus. 
                  Biaya akan diinformasikan sebelum konfirmasi pesanan.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">3. Penerimaan Barang</h3>
                <p className="text-gray-700">
                  Pelanggan wajib memeriksa kondisi barang saat diterima. Klaim kerusakan harus 
                  disampaikan dalam waktu 24 jam setelah penerimaan.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Warranty and Returns */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2 text-blue-600" />
                Garansi dan Pengembalian
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">1. Garansi Produk</h3>
                <p className="text-gray-700">
                  Setiap produk dilengkapi dengan garansi dari produsen. Masa garansi bervariasi 
                  tergantung jenis produk. Klaim garansi harus disertai dengan bukti pembelian.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">2. Kebijakan Pengembalian</h3>
                <p className="text-gray-700">
                  Produk dapat dikembalikan dalam kondisi berikut:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>Produk cacat pabrik</li>
                  <li>Produk tidak sesuai dengan spesifikasi yang disepakati</li>
                  <li>Pengembalian harus dalam waktu 7 hari setelah penerimaan</li>
                  <li>Produk harus dalam kondisi utuh dan tidak digunakan</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">3. Proses Pengembalian</h3>
                <p className="text-gray-700">
                  Pengembalian akan diproses setelah inspeksi produk. Pengembalian dana akan 
                  dilakukan dalam waktu 14 hari kerja setelah persetujuan pengembalian.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertCircle className="h-5 w-5 mr-2 text-blue-600" />
                Pembatasan Tanggung Jawab
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Sejauh diizinkan oleh hukum, tanggung jawab Perusahaan dibatasi sebagai berikut:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Perusahaan tidak bertanggung jawab atas kerugian tidak langsung, insidental, atau konsekuensial</li>
                <li>Tanggung jawab maksimum Perusahaan adalah nilai pembelian produk</li>
                <li>Perusahaan tidak bertanggung jawab atas kehilangan keuntungan atau data</li>
                <li>Perusahaan tidak menjamin bahwa produk akan memenuhi kebutuhan spesifik Pelanggan</li>
              </ul>
            </CardContent>
          </Card>

          {/* User Responsibilities */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-blue-600" />
                Tanggung Jawab Pengguna
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Sebagai Pelanggan, Anda bertanggung jawab untuk:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Memberikan informasi yang akurat dan lengkap</li>
                <li>Menjaga kerahasiaan informasi akun dan password</li>
                <li>Menggunakan produk sesuai dengan petunjuk penggunaan</li>
                <li>Mematuhi semua peraturan yang berlaku</li>
                <li>Tidak menggunakan layanan untuk tujuan ilegal atau tidak etis</li>
              </ul>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Hak Kekayaan Intelektual</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Semua konten di website Perusahaan, termasuk namun tidak terbatas pada teks, 
                gambar, logo, dan desain, dilindungi oleh hak kekayaan intelektual. 
                Penggunaan tanpa izin tertulis dilarang.
              </p>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Terminasi</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Perusahaan berhak untuk mengakhiri atau menangguhkan akses Pelanggan ke layanan 
                jika terjadi pelanggaran terhadap Syarat dan Ketentuan ini.
              </p>
            </CardContent>
          </Card>

          {/* Governing Law */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Hukum yang Berlaku</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Syarat dan Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum 
                Republik Indonesia. Setiap sengketa akan diselesaikan melalui perundingan 
                atau melalui pengadilan yang berwenang di wilayah Kabupaten Dairi.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Hubungi Kami</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-900">CV PELOPOR JAYA BERSAMA</p>
                <p className="text-gray-600">Jalan Ahmad Yani Nomor 83, Batang Beruh, Sidikalang</p>
                <p className="text-gray-600">Kab. Dairi, Provinsi Sumatera Utara 22212</p>
                <p className="text-gray-600">Telepon: 0823-1204-2902</p>
                <p className="text-gray-600">Email: legal@pelojorjaya.com</p>
              </div>
            </CardContent>
          </Card>

          {/* Agreement */}
          <Card>
            <CardHeader>
              <CardTitle>Persetujuan</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Dengan menggunakan layanan <strong>CV PELOPOR JAYA BERSAMA</strong>, Anda menyatakan 
                bahwa Anda telah membaca, memahami, dan menyetujui Syarat dan Ketentuan ini.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 CV PELOPOR JAYA BERSAMA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}