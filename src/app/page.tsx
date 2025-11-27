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
      description: 'قالب ويب حديث ومتجاوب للشركات والأفراد مع دعم كامل للغة العربية',
      price: 29.99,
      category: 'قوالب',
      rating: 4.5,
      reviews: 12,
      image: '🖥️'
    },
    {
      id: 2,
      title: 'دورة التسويق الرقمي',
      description: 'تعلم أساسيات التسويق الرقمي من البداية للاحتراف مع شهادة معتمدة',
      price: 49.99,
      category: 'دورات',
      rating: 4.8,
      reviews: 25,
      image: '📚'
    },
    {
      id: 3,
      title: 'حزمة أيقونات احترافية',
      description: '1000+ أيقونة بجودة عالية لمشاريعك مع ملفات SVG و PNG',
      price: 19.99,
      category: 'رسوميات',
      rating: 4.2,
      reviews: 8,
      image: '🎨'
    },
    {
      id: 4,
      title: 'برنامج إدارة المشاريع',
      description: 'برنامج متكامل لإدارة المشاريع والفرق مع تقارير متقدمة',
      price: 89.99,
      category: 'برامج',
      rating: 4.7,
      reviews: 18,
      image: '💼'
    },
    {
      id: 5,
      title: 'كتاب تعلم البرمجة',
      description: 'دليل شامل لتعلم البرمجة من الصفر للمبتدئين والمتقدمين',
      price: 34.99,
      category: 'كتب إلكترونية',
      rating: 4.6,
      reviews: 15,
      image: '📖'
    },
    {
      id: 6,
      title: 'مجموعة قوالب عرض',
      description: '20 قالب عرض احترافي للعروض التقديمية والبيعات',
      price: 39.99,
      category: 'قوالب',
      rating: 4.4,
      reviews: 22,
      image: '📊'
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
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <Link href="/" className="text-2xl font-bold text-primary">
                RLGB لبيع المنتجات الرقمية
              </Link>
              <nav className="hidden md:flex gap-6">
                <Link href="/" className="text-secondary hover:text-primary transition-colors">الرئيسية</Link>
                <Link href="/products" className="text-secondary hover:text-primary transition-colors">المنتجات</Link>
                <Link href="/about" className="text-secondary hover:text-primary transition-colors">حولنا</Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/auth/login">
                <button className="btn-outline">
                  تسجيل الدخول
                </button>
              </Link>
              <Link href="/auth/register">
                <button className="btn-primary">
                  إنشاء حساب
                </button>
              </Link>
              <Link href="/seller/dashboard">
                <button className="btn-secondary">
                  للبائعين
                </button>
              </Link>
              <Link href="/marketing">
                <button className="btn-secondary">
                  التسويق
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="gradient-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            اكتشف أفضل المنتجات الرقمية
          </h1>
          <p className="text-xl text-secondary mb-8 max-w-3xl mx-auto">
            برامج، كتب إلكترونية، قوالب، دورات وغيرها الكثير - كل ما تحتاجه في مكان واحد
          </p>
          
          {/* Search */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="ابحث عن منتجات رقمية..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-4 pr-12 border border-gray-300 rounded-xl text-right focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-lg"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category 
                    ? 'bg-primary text-white shadow-lg transform scale-105' 
                    : 'bg-white text-secondary hover:bg-gray-50 border border-gray-200'
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl card-shadow p-6 hover:transform hover:scale-105 transition-all duration-200">
              <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-6 flex items-center justify-center text-6xl">
                {product.image}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{product.title}</h3>
              <p className="text-secondary mb-6 leading-relaxed">{product.description}</p>
              
              <div className="flex justify-between items-center mb-6">
                <span className="text-3xl font-bold text-primary">
                  ${product.price}
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                  {product.category}
                </span>
              </div>
              
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}>
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-sm text-secondary mr-2">
                  {product.rating} ({product.reviews} مراجعة)
                </span>
              </div>

              <button className="w-full btn-primary text-lg py-3">
                شراء الآن
              </button>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-xl text-secondary">لم يتم العثور على منتجات تطابق بحثك</p>
            <p className="text-secondary mt-2">جرب تغيير كلمات البحث أو الفئة</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-6">RLGB لبيع المنتجات الرقمية</h3>
              <p className="text-gray-400 leading-relaxed">منصتك الموثوقة لبيع وشراء المنتجات الرقمية باللغة العربية</p>
            </div>
            <div>
              <h4 className="font-bold mb-6">روابط سريعة</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/" className="hover:text-white transition-colors">الرئيسية</Link></li>
                <li><Link href="/products" className="hover:text-white transition-colors">المنتجات</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">حولنا</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">اتصل بنا</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">الدعم</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/help" className="hover:text-white transition-colors">مركز المساعدة</Link></li>
                <li><Link href="/faq" className="hover:text-white transition-colors">الأسئلة الشائعة</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">الشروط والأحكام</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">سياسة الخصوصية</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">طرق الدفع</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full">PayPal</span>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full">CIB</span>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full">BaridiMob</span>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full">Cash+</span>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full">D17</span>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2024 متجر المنتجات الرقمية. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
