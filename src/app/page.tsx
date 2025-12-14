'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Wrench, 
  Settings, 
  Cog, 
  Hammer,
  ChevronRight,
  Shield,
  Truck,
  Users
} from 'lucide-react'

export default function HomePage() {
  const [activeService, setActiveService] = useState<number | null>(null)

  const services = [
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Mesin Pertanian",
      description: "Berbagai macam mesin pertanian modern untuk meningkatkan produktivitas pertanian Anda.",
      features: ["Traktor", "Mesin Tanam", "Mesin Panen", "Pompa Irigasi"]
    },
    {
      icon: <Cog className="h-8 w-8" />,
      title: "Mesin Konstruksi",
      description: "Peralatan konstruksi berkualitas tinggi untuk proyek pembangunan Anda.",
      features: ["Molen Beton", "Mesin Las", "Generator", "Kompresor"]
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Mesin Industri",
      description: "Solusi mesin industri untuk berbagai kebutuhan manufaktur dan produksi.",
      features: ["Mesin CNC", "Mesin Bubut", "Mesin Milling", "Mesin Press"]
    },
    {
      icon: <Hammer className="h-8 w-8" />,
      title: "Peralatan Bengkel",
      description: "Kelengkapan peralatan bengkel untuk usaha otomotif dan kerja mekanik.",
      features: ["Tool Kit", "Hydraulic Press", "Wheel Balancer", "Car Lift"]
    }
  ]

  const benefits = [
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Garansi Resmi",
      description: "Semua produk yang kami jual dilengkapi dengan garansi resmi dari produsen."
    },
    {
      icon: <Truck className="h-6 w-6 text-blue-600" />,
      title: "Pengiriman Aman",
      description: "Pengiriman produk yang aman dan tepat waktu ke seluruh Indonesia."
    },
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: "Layanan Pelanggan",
      description: "Tim layanan pelanggan yang siap membantu kebutuhan Anda."
    }
  ]

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
                className="h-12 w-12 object-contain"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">CV PELOPOR JAYA BERSAMA</h1>
                <p className="text-sm text-gray-600">Perdagangan Eceran Mesin Terpercaya</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#beranda" className="text-gray-700 hover:text-blue-600 transition-colors">Beranda</a>
              <a href="#layanan" className="text-gray-700 hover:text-blue-600 transition-colors">Layanan</a>
              <a href="#keunggulan" className="text-gray-700 hover:text-blue-600 transition-colors">Keunggulan</a>
              <a href="#kontak" className="text-gray-700 hover:text-blue-600 transition-colors">Kontak</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="beranda" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                🏆 Terpercaya Sejak 2020
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Solusi Mesin <span className="text-blue-600">Berkualitas</span> untuk Bisnis Anda
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                CV PELOPOR JAYA BERSAMA adalah distributor terpercaya untuk berbagai jenis mesin industri, 
                pertanian, dan konstruksi. Kami menyediakan produk berkualitas dengan harga kompetitif 
                dan layanan purnajual yang handal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Lihat Katalog Produk
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Hubungi Kami
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <Wrench className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="font-semibold text-gray-900">100+ Produk</h3>
                  <p className="text-sm text-gray-600">Mesin berkualitas</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg mt-8">
                  <Users className="h-12 w-12 text-green-600 mb-4" />
                  <h3 className="font-semibold text-gray-900">500+ Pelanggan</h3>
                  <p className="text-sm text-gray-600">Puas dengan layanan kami</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <Truck className="h-12 w-text-orange-600 mb-4" />
                  <h3 className="font-semibold text-gray-900">Pengiriman</h3>
                  <p className="text-sm text-gray-600">Seluruh Indonesia</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg mt-8">
                  <Shield className="h-12 w-12 text-purple-600 mb-4" />
                  <h3 className="font-semibold text-gray-900">Garansi</h3>
                  <p className="text-sm text-gray-600">Keamanan terjamin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Produk & Layanan Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kami menyediakan berbagai jenis mesin berkualitas untuk mendukung kesuksesan bisnis Anda
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index}
                className={`cursor-pointer transition-all duration-300 hover:shadow-xl ${
                  activeService === index ? 'ring-2 ring-blue-500 shadow-xl' : ''
                }`}
                onClick={() => setActiveService(activeService === index ? null : index)}
              >
                <CardHeader>
                  <div className="text-blue-600 mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                {activeService === index && (
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <ChevronRight className="h-4 w-4 text-blue-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="keunggulan" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih <span className="text-blue-600">CV PELOPOR JAYA BERSAMA</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kami berkomitmen untuk memberikan produk dan layanan terbaik untuk kesuksesan bisnis Anda
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Hubungi Kami
            </h2>
            <p className="text-lg text-gray-600">
              Siap membantu kebutuhan mesin untuk bisnis Anda
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                  Alamat
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Jalan Ahmad Yani Nomor 83, Desa/Kelurahan Batang Beruh, Kec. Sidikalang, 
                  Kab. Dairi, Provinsi Sumatera Utara
                </p>
                <p className="text-gray-600 mt-2">Kode Pos: 22212</p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-blue-600" />
                  Kontak
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-3 text-gray-500" />
                    <span className="text-gray-600">0823-1204-2902</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-3 text-gray-500" />
                    <span className="text-gray-600">info@pelojorjaya.com</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-3 text-gray-500" />
                    <span className="text-gray-600">Senin - Sabtu: 08:00 - 17:00</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/logo.png" 
                  alt="CV PELOPOR JAYA BERSAMA" 
                  className="h-10 w-10 object-contain"
                />
                <h3 className="text-xl font-bold">CV PELOPOR JAYA BERSAMA</h3>
              </div>
              <p className="text-gray-400">
                Perdagangan eceran mesin terpercaya untuk mendukung kesuksesan bisnis Anda.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Mesin Pertanian</li>
                <li>Mesin Konstruksi</li>
                <li>Mesin Industri</li>
                <li>Peralatan Bengkel</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Informasi</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                <li><a href="#kontak" className="hover:text-white transition-colors">Hubungi Kami</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CV PELOPOR JAYA BERSAMA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}