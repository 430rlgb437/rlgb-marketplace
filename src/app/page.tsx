'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('الكل')

  const categories = ['الكل', 'برامج', 'كتب إلكترونية', 'قوالب', 'دورات', 'رسوميات']

  const products = [
    {
      id: 1,
      title: 'قالب موقع احترافي',
      description: 'قالب ويب حديث ومتجاوب للشركات والأفراد',
      price: 29.99,
      category: 'قوالب',
      rating: 4.5,
      reviews: 12,
    },
    {
      id: 2,
      title: 'دورة التسويق الرقمي',
      description: 'تعلم أساسيات التسويق الرقمي من البداية للاحتراف',
      price: 49.99,
      category: 'دورات',
      rating: 4.8,
      reviews: 25,
    },
    {
      id: 3,
      title: 'حزمة أيقونات احترافية',
      description: '1000+ أيقونة بجودة عالية لمشاريعك',
      price: 19.99,
      category: 'رسوميات',
      rating: 4.2,
      reviews: 8,
    }
  ]

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'الكل' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                RLGB لبيع المنتجات الرقمية
              </Link>
              <nav className="hidden md:flex gap-6">
                <Link href="/" className="text-gray-600 hover:text-blue-600">الرئيسية</Link>
                <Link href="/products" className="text-gray-600 hover:text-blue-600">المنتجات</Link>
                <Link href="/about" className="text-gray-600 hover:text-blue-600">حولنا</Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/auth/login">
                <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                  تسجيل الدخول
                </button>
              </Link>
              <Link href="/auth/register">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  إنشاء حساب
                </button>
              </Link>
              <Link href="/seller/dashboard">
                <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                  للبائعين
                </button>
              </Link>
              <Link href="/marketing">
                <button className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
                  التسويق
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            اكتشف أفضل المنتجات الرقمية
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            برامج، كتب إلكترونية، قوالب، دورات وغيرها الكثير
          </p>
          
          {/* Search */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="ابحث عن منتجات رقمية..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg text-right focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-md ${
                  selectedCategory === category 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
              <div className="w-full h-48 bg-gray-200 rounded-md mb-4"></div>
              <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-blue-600">
                  ${product.price}
                </span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded">
                  {product.category}
                </span>
              </div>
              
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}>
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-sm text-gray-600 mr-2">
                  {product.rating} ({product.reviews} مراجعات)
                </span>
              </div>

              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                شراء
              </button>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">لم يتم العثور على منتجات تطابق بحثك</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">RLGB لبيع المنتجات الرقمية</h3>
              <p className="text-gray-400">منصتك الموثوقة لبيع وشراء المنتجات الرقمية</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">روابط سريعة</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/" className="hover:text-white">الرئيسية</Link></li>
                <li><Link href="/products" className="hover:text-white">المنتجات</Link></li>
                <li><Link href="/about" className="hover:text-white">حولنا</Link></li>
                <li><Link href="/contact" className="hover:text-white">اتصل بنا</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">الدعم</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/help" className="hover:text-white">مركز المساعدة</Link></li>
                <li><Link href="/faq" className="hover:text-white">الأسئلة الشائعة</Link></li>
                <li><Link href="/terms" className="hover:text-white">الشروط والأحكام</Link></li>
                <li><Link href="/privacy" className="hover:text-white">سياسة الخصوصية</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">طرق الدفع</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-700 text-gray-300 text-sm rounded">PayPal</span>
                <span className="px-2 py-1 bg-gray-700 text-gray-300 text-sm rounded">CIB</span>
                <span className="px-2 py-1 bg-gray-700 text-gray-300 text-sm rounded">BaridiMob</span>
                <span className="px-2 py-1 bg-gray-700 text-gray-300 text-sm rounded">Cash+</span>
                <span className="px-2 py-1 bg-gray-700 text-gray-300 text-sm rounded">D17</span>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 متجر المنتجات الرقمية. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
