'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Shield, Eye, Database, Lock, UserCheck } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPage() {
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
                <p className="text-sm text-gray-600">Privacy Policy</p>
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
                <Shield className="h-12 w-12 text-blue-600" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Kebijakan Privasi
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
                <Eye className="h-5 w-5 mr-2 text-blue-600" />
                Pendahuluan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Selamat datang di <strong>CV PELOPOR JAYA BERSAMA</strong>. Kami sangat menghargai privasi Anda 
                dan berkomitmen untuk melindungi data pribadi yang Anda percayakan kepada kami. 
                Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, 
                melindungi, dan membagikan informasi pribadi Anda ketika menggunakan layanan kami.
              </p>
              <p className="text-gray-700">
                Dengan menggunakan layanan kami, Anda menyetujui praktik-praktik yang dijelaskan dalam 
                kebijakan ini. Jika Anda tidak setuju dengan praktik ini, jangan gunakan layanan kami.
              </p>
            </CardContent>
          </Card>

          {/* Data Collection */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Database className="h-5 w-5 mr-2 text-blue-600" />
                Informasi yang Kami Kumpulkan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">1. Informasi Pribadi</h3>
                <p className="text-gray-700 mb-2">
                  Kami dapat mengumpulkan informasi pribadi berikut:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Nama lengkap</li>
                  <li>Alamat email</li>
                  <li>Nomor telepon</li>
                  <li>Alamat pengiriman</li>
                  <li>Informasi pembayaran</li>
                  <li>Nama perusahaan (jika applicable)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">2. Informasi Teknis</h3>
                <p className="text-gray-700 mb-2">
                  Kami secara otomatis mengumpulkan informasi teknis:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Alamat IP</li>
                  <li>Jenis browser dan versi</li>
                  <li>Sistem operasi</li>
                  <li>Data penggunaan website</li>
                  <li>Cookies dan data pelacakan</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">3. Informasi Transaksi</h3>
                <p className="text-gray-700">
                  Informasi terkait pembelian dan transaksi yang Anda lakukan melalui platform kami.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Data Usage */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <UserCheck className="h-5 w-5 mr-2 text-blue-600" />
                Penggunaan Informasi
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Kami menggunakan informasi yang kami kumpulkan untuk:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Menyediakan Layanan:</strong> Memproses pesanan, mengelola pembayaran, dan mengirimkan produk</li>
                <li><strong>Komunikasi:</strong> Mengirimkan konfirmasi pesanan, update pengiriman, dan informasi layanan</li>
                <li><strong>Peningkatan Layanan:</strong> Menganalisis data untuk meningkatkan kualitas produk dan layanan kami</li>
                <li><strong>Keamanan:</strong> Melindungi dari aktivitas penipuan dan penyalahgunaan</li>
                <li><strong>Marketing:</strong> Mengirimkan informasi produk dan promosi (dengan persetujuan Anda)</li>
                <li><strong>Kepatuhan Hukum:</strong> Memenuhi kewajiban hukum dan peraturan yang berlaku</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lock className="h-5 w-5 mr-2 text-blue-600" />
                Perlindungan Data
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                <strong>CV PELOPOR JAYA BERSAMA</strong> berkomitmen untuk melindungi data pribadi Anda dengan:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Enkripsi data selama transmisi dan penyimpanan</li>
                <li>Akses terbatas ke informasi pribadi hanya untuk staf yang berwenang</li>
                <li>Keamanan fisik dan digital untuk server dan sistem kami</li>
                <li>Audit keamanan rutin untuk identifikasi dan penanganan kerentanan</li>
                <li>Kebijakan retensi data yang jelas dan teratur</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Sharing */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Pembagian Informasi</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga 
                untuk tujuan marketing tanpa persetujuan Anda. Kami hanya akan membagikan informasi dalam:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Penyedia Layanan:</strong> Pihak ketiga yang membantu kami mengoperasikan bisnis (payment gateway, jasa pengiriman)</li>
                <li><strong>Kewajiban Hukum:</strong> Jika diwajibkan oleh hukum atau perintah pengadilan</li>
                <li><strong>Perlindungan Hak:</strong> Untuk melindungi hak, properti, atau keselamatan kami atau pihak lain</li>
                <li><strong>Transfer Bisnis:</strong> Dalam kasus merger, akuisisi, atau penjualan aset perusahaan</li>
              </ul>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Hak Privasi Anda</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Sebagai pengguna, Anda memiliki hak untuk:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Mengakses informasi pribadi yang kami simpan tentang Anda</li>
                <li>Memperbaiki informasi yang tidak akurat</li>
                <li>Menghapus informasi pribadi Anda (dalam batas yang diizinkan oleh hukum)</li>
                <li>Menolak pemasaran langsung dari kami</li>
                <li>Meminta salinan data pribadi Anda</li>
                <li>Menarik persetujuan untuk pemrosesan data</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Hubungi Kami</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau cara kami menangani 
                data pribadi Anda, silakan hubungi kami:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-900">CV PELOPOR JAYA BERSAMA</p>
                <p className="text-gray-600">Jalan Ahmad Yani Nomor 83, Batang Beruh, Sidikalang</p>
                <p className="text-gray-600">Kab. Dairi, Provinsi Sumatera Utara 22212</p>
                <p className="text-gray-600">Telepon: 0823-1204-2902</p>
                <p className="text-gray-600">Email: privacy@pelojorjaya.com</p>
              </div>
            </CardContent>
          </Card>

          {/* Changes to Policy */}
          <Card>
            <CardHeader>
              <CardTitle>Perubahan Kebijakan</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Kami mungkin memperbarui Kebijakan Privasi ini dari waktu ke waktu untuk mencerminkan 
                perubahan dalam praktik kami atau perubahan hukum yang berlaku. Kami akan memberitahu 
                Anda tentang perubahan signifikan dengan menampilkan kebijakan yang diperbarui di website kami.
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