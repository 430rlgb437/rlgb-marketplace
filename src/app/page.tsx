'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Search, ShoppingCart, User, Plus, Share2, Star, Filter } from 'lucide-react'

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
      image: '/api/placeholder/300/200'
    },
    {
      id: 2,
      title: 'دورة التسويق الرقمي',
      description: 'تعلم أساسيات التسويق الرقمي من البداية للاحتراف',
      price: 49.99,
      category: 'دورات',
      rating: 4.8,
      reviews: 25,
      image: '/api/placeholder/300/200'
    },
    {
      id: 3,
      title: 'حزمة أيقونات احترافية',
      description: '1000+ أيقونة بجودة عالية لمشاريعك',
      price: 19.99,
      category: 'رسوميات',
      rating: 4.2,
      reviews: 8,
      image: '/api/placeholder/300/200'
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
              <Link href="/" className="text-2xl font-bold text-primary">
                RLGB لبيع المنتجات الرقمية
              </Link>
              <nav className="hidden md:flex gap-6">
                <Link href="/" className="text-gray-600 hover:text-primary">الرئيسية</Link>
                <Link href="/products" className="text-gray-600 hover:text-primary">المنتجات</Link>
                <Link href="/about" className="text-gray-600 hover:text-primary">حولنا</Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/auth/login">
                <Button variant="outline" size="sm">
                  <User className="w-4 h-4 ml-2" />
                  تسجيل الدخول
                </Button>
              </Link>
              <Link href="/auth/register">
                <Button size="sm">
                  إنشاء حساب
                </Button>
              </Link>
              <Link href="/seller/dashboard">
                <Button variant="outline" size="sm">
                  <Plus className="w-4 h-4 ml-2" />
                  للبائعين
                </Button>
              </Link>
              <Link href="/marketing">
                <Button variant="secondary" size="sm">
                  <Share2 className="w-4 h-4 ml-2" />
                  التسويق
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-12">
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
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="ابحث عن منتجات رقمية..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-12 text-right"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-full h-48 bg-gray-200 rounded-md mb-4"></div>
                <CardTitle className="text-lg">{product.title}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-primary">
                    ${product.price}
                  </span>
                  <Badge variant="secondary">{product.category}</Badge>
                </div>
                
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 mr-2">
                    {product.rating} ({product.reviews} مراجعات)
                  </span>
                </div>

                <div className="flex gap-2">
                  <Link href={`/products/${product.id}`} className="flex-1">
                    <Button className="w-full">
                      <ShoppingCart className="w-4 h-4 ml-2" />
                      شراء
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
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
                <Badge variant="secondary">PayPal</Badge>
                <Badge variant="secondary">CIB</Badge>
                <Badge variant="secondary">BaridiMob</Badge>
                <Badge variant="secondary">Cash+</Badge>
                <Badge variant="secondary">D17</Badge>
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
