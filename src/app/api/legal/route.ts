import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const type = searchParams.get('type')

    if (type === 'privacy') {
      const privacyData = {
        title: "Kebijakan Privasi",
        lastUpdated: new Date().toLocaleDateString('id-ID', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        }),
        sections: [
          {
            title: "Pendahuluan",
            content: "Selamat datang di CV PELOPOR JAYA BERSAMA. Kami sangat menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi yang Anda percayakan kepada kami."
          },
          {
            title: "Informasi yang Kami Kumpulkan",
            subsections: [
              {
                title: "Informasi Pribadi",
                content: ["Nama lengkap", "Alamat email", "Nomor telepon", "Alamat pengiriman", "Informasi pembayaran"]
              },
              {
                title: "Informasi Teknis",
                content: ["Alamat IP", "Jenis browser dan versi", "Sistem operasi", "Data penggunaan website", "Cookies dan data pelacakan"]
              }
            ]
          },
          {
            title: "Penggunaan Informasi",
            content: "Kami menggunakan informasi untuk menyediakan layanan, komunikasi, peningkatan layanan, keamanan, marketing, dan kepatuhan hukum."
          },
          {
            title: "Perlindungan Data",
            content: "Kami melindungi data dengan enkripsi, akses terbatas, keamanan fisik dan digital, audit keamanan rutin, dan kebijakan retensi data."
          },
          {
            title: "Hak Privasi Anda",
            content: ["Mengakses informasi pribadi", "Memperbaiki informasi tidak akurat", "Menghapus informasi pribadi", "Menolak pemasaran langsung", "Meminta salinan data", "Menarik persetujuan"]
          }
        ],
        contact: {
          company: "CV PELOPOR JAYA BERSAMA",
          address: "Jalan Ahmad Yani Nomor 83, Batang Beruh, Sidikalang, Kab. Dairi, Provinsi Sumatera Utara 22212",
          phone: "0823-1204-2902",
          email: "privacy@pelojorjaya.com"
        }
      }

      return NextResponse.json({
        success: true,
        data: privacyData
      })

    } else if (type === 'terms') {
      const termsData = {
        title: "Syarat dan Ketentuan",
        lastUpdated: new Date().toLocaleDateString('id-ID', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        }),
        sections: [
          {
            title: "Pendahuluan",
            content: "Selamat datang di CV PELOPOR JAYA BERSAMA. Syarat dan Ketentuan ini mengatur penggunaan layanan kami, pembelian produk, dan hubungan hukum antara Anda dan Perusahaan."
          },
          {
            title: "Definisi",
            definitions: {
              "Perusahaan": "CV PELOPOR JAYA BERSAMA",
              "Pelanggan": "Individu atau entitas yang membeli produk dari Perusahaan",
              "Produk": "Mesin dan peralatan yang dijual oleh Perusahaan",
              "Layanan": "Layanan penjualan, pengiriman, dan dukungan pelanggan",
              "Website": "Platform online Perusahaan"
            }
          },
          {
            title: "Produk dan Layanan",
            subsections: [
              {
                title: "Ketersediaan Produk",
                content: "Perusahaan berusaha untuk menyediakan informasi yang akurat tentang ketersediaan produk."
              },
              {
                title: "Spesifikasi Produk",
                content: "Kami berusaha untuk memberikan deskripsi produk yang akurat."
              },
              {
                title: "Harga",
                content: "Harga produk dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya."
              }
            ]
          },
          {
            title: "Pemesanan dan Pembayaran",
            subsections: [
              {
                title: "Proses Pemesanan",
                content: "Pelanggan dapat melakukan pemesanan melalui website, telepon, atau langsung ke toko kami."
              },
              {
                title: "Metode Pembayaran",
                content: ["Transfer Bank", "Tunai", "Kartu Kredit/Debit", "Pembayaran cicilan"]
              }
            ]
          },
          {
            title: "Garansi dan Pengembalian",
            content: "Setiap produk dilengkapi dengan garansi dari produsen. Produk dapat dikembalikan dalam kondisi tertentu."
          },
          {
            title: "Pembatasan Tanggung Jawab",
            content: "Sejauh diizinkan oleh hukum, tanggung jawab Perusahaan dibatasi."
          },
          {
            title: "Hukum yang Berlaku",
            content: "Syarat dan Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia."
          }
        ],
        contact: {
          company: "CV PELOPOR JAYA BERSAMA",
          address: "Jalan Ahmad Yani Nomor 83, Batang Beruh, Sidikalang, Kab. Dairi, Provinsi Sumatera Utara 22212",
          phone: "0823-1204-2902",
          email: "legal@pelojorjaya.com"
        }
      }

      return NextResponse.json({
        success: true,
        data: termsData
      })

    } else {
      return NextResponse.json({
        success: false,
        error: "Invalid type parameter. Use 'privacy' or 'terms'"
      }, { status: 400 })
    }

  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json({
      success: false,
      error: "Internal server error"
    }, { status: 500 })
  }
}