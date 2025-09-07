import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';
import SplitSystemsSection from '@/components/SplitSystemsSection';

const Index = () => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [activeSection, setActiveSection] = useState('main');

  const categories = [
    { id: 'all', name: 'Все товары' },
    { id: 'conditioners', name: 'Кондиционеры' },
    { id: 'heaters', name: 'Обогреватели' },
    { id: 'water-heaters', name: 'Водонагреватели' },
    { id: 'ventilation', name: 'Вентиляция' },
    { id: 'accessories', name: 'Аксессуары' }
  ];

  const products = [
    // Кондиционеры
    {
      id: 1,
      name: 'Daikin FTXS25K Emura',
      price: 85900,
      originalPrice: 95900,
      category: 'conditioners',
      rating: 4.9,
      reviews: 156,
      image: '/img/e6790eb9-5b04-467b-a84d-333351723ce8.jpg',
      badge: 'Премиум',
      brand: 'Daikin',
      power: '9000 BTU',
      area: '25 м²'
    },
    {
      id: 2,
      name: 'LG Artcool Gallery A12FR',
      price: 65900,
      originalPrice: 75900,
      category: 'conditioners',
      rating: 4.7,
      reviews: 89,
      image: '/img/e6790eb9-5b04-467b-a84d-333351723ce8.jpg',
      badge: 'Хит продаж',
      brand: 'LG',
      power: '12000 BTU',
      area: '35 м²'
    },
    {
      id: 3,
      name: 'Samsung Wind-Free Comfort AR09',
      price: 58900,
      originalPrice: 68900,
      category: 'conditioners',
      rating: 4.6,
      reviews: 203,
      image: '/img/e6790eb9-5b04-467b-a84d-333351723ce8.jpg',
      badge: 'Новинка',
      brand: 'Samsung',
      power: '9000 BTU',
      area: '25 м²'
    },
    // Обогреватели
    {
      id: 4,
      name: 'Electrolux EOH/M-6157',
      price: 8900,
      originalPrice: 10900,
      category: 'heaters',
      rating: 4.5,
      reviews: 124,
      image: '/img/a089efcc-c4a9-4255-bcdd-8a9d998bb8ce.jpg',
      badge: 'Скидка',
      brand: 'Electrolux',
      power: '1500 Вт',
      area: '15 м²'
    },
    {
      id: 5,
      name: 'Ballu BFH/S-04',
      price: 3490,
      originalPrice: 4290,
      category: 'heaters',
      rating: 4.3,
      reviews: 87,
      image: '/img/a089efcc-c4a9-4255-bcdd-8a9d998bb8ce.jpg',
      badge: null,
      brand: 'Ballu',
      power: '400 Вт',
      area: '4 м²'
    },
    {
      id: 6,
      name: 'Noirot Spot E-3 Plus 1000',
      price: 12900,
      originalPrice: 15900,
      category: 'heaters',
      rating: 4.8,
      reviews: 67,
      image: '/img/a089efcc-c4a9-4255-bcdd-8a9d998bb8ce.jpg',
      badge: 'Премиум',
      brand: 'Noirot',
      power: '1000 Вт',
      area: '10 м²'
    },
    // Водонагреватели
    {
      id: 7,
      name: 'Ariston PRO1 R ABS 80 V',
      price: 18900,
      originalPrice: 22900,
      category: 'water-heaters',
      rating: 4.6,
      reviews: 145,
      image: '/img/a089efcc-c4a9-4255-bcdd-8a9d998bb8ce.jpg',
      badge: 'Хит продаж',
      brand: 'Ariston',
      volume: '80 л',
      power: '1500 Вт'
    },
    {
      id: 8,
      name: 'Thermex Champion Silver',
      price: 15900,
      originalPrice: 18900,
      category: 'water-heaters',
      rating: 4.4,
      reviews: 98,
      image: '/img/a089efcc-c4a9-4255-bcdd-8a9d998bb8ce.jpg',
      badge: null,
      brand: 'Thermex',
      volume: '50 л',
      power: '2000 Вт'
    },
    // Вентиляция
    {
      id: 9,
      name: 'Soler&Palau Silent-100 CZ',
      price: 2890,
      originalPrice: 3590,
      category: 'ventilation',
      rating: 4.7,
      reviews: 156,
      image: '/img/c6acb953-be5b-4c09-b83e-fb0f7b3ff509.jpg',
      badge: 'Тихий',
      brand: 'Soler&Palau',
      airflow: '95 м³/ч',
      noise: '26 дБ'
    },
    {
      id: 10,
      name: 'Vents 100 Quiet',
      price: 1890,
      originalPrice: 2390,
      category: 'ventilation',
      rating: 4.2,
      reviews: 89,
      image: '/img/c6acb953-be5b-4c09-b83e-fb0f7b3ff509.jpg',
      badge: null,
      brand: 'Vents',
      airflow: '97 м³/ч',
      noise: '25 дБ'
    },
    // Аксессуары
    {
      id: 11,
      name: 'Пульт универсальный KT-109II',
      price: 990,
      originalPrice: 1290,
      category: 'accessories',
      rating: 4.1,
      reviews: 234,
      image: '/img/033adce1-d8a2-4bc9-b863-5a591f530012.jpg',
      badge: 'Универсальный',
      brand: 'KT',
      compatibility: '1000+ моделей'
    },
    {
      id: 12,
      name: 'Кронштейн настенный KBN-18',
      price: 2490,
      originalPrice: 2990,
      category: 'accessories',
      rating: 4.6,
      reviews: 67,
      image: '/img/033adce1-d8a2-4bc9-b863-5a591f530012.jpg',
      badge: null,
      brand: 'KBN',
      weight: 'до 40 кг'
    }
  ];

  const filteredProducts = products.filter(product => {
    if (selectedCategory !== 'all' && product.category !== selectedCategory) return false;
    if (priceRange === 'low' && product.price > 10000) return false;
    if (priceRange === 'medium' && (product.price < 10000 || product.price > 30000)) return false;
    if (priceRange === 'high' && product.price < 30000) return false;
    return true;
  });

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  if (activeSection === 'split-systems') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted">
        {/* Header */}
        <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  VozduhNebes
                </h1>
                <nav className="hidden md:flex space-x-6">
                  <button 
                    onClick={() => setActiveSection('main')} 
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    Главная
                  </button>
                  <button 
                    onClick={() => setActiveSection('split-systems')} 
                    className="text-primary font-medium"
                  >
                    Сплит-системы
                  </button>
                  <a href="#delivery" className="text-foreground hover:text-primary transition-colors">Доставка</a>
                  <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
                </nav>
              </div>
              <div className="flex items-center space-x-4">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="relative">
                      <Icon name="ShoppingCart" className="h-4 w-4" />
                      {cartItems.length > 0 && (
                        <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 text-xs">
                          {cartItems.length}
                        </Badge>
                      )}
                    </Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Корзина ({cartItems.length})</SheetTitle>
                    </SheetHeader>
                    <div className="mt-4">
                      {cartItems.length === 0 ? (
                        <p className="text-muted-foreground">Корзина пуста</p>
                      ) : (
                        <div className="space-y-4">
                          {cartItems.map((item, index) => (
                            <div key={index} className="flex items-center space-x-4 border-b pb-4">
                              <img src={item.image} alt={item.name} className="h-16 w-16 object-cover rounded" />
                              <div className="flex-1">
                                <h4 className="font-medium">{item.name}</h4>
                                <p className="text-primary font-semibold">{item.price.toLocaleString()} ₽</p>
                              </div>
                            </div>
                          ))}
                          <Button className="w-full">Оформить заказ</Button>
                        </div>
                      )}
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </header>

        <SplitSystemsSection onAddToCart={addToCart} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                VozduhNebes
              </h1>
              <nav className="hidden md:flex space-x-6">
                <button 
                  onClick={() => setActiveSection('main')} 
                  className={`transition-colors ${activeSection === 'main' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
                >
                  Главная
                </button>
                <button 
                  onClick={() => setActiveSection('split-systems')} 
                  className={`transition-colors ${activeSection === 'split-systems' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
                >
                  Сплит-системы
                </button>
                <a href="#delivery" className="text-foreground hover:text-primary transition-colors">Доставка</a>
                <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <Input 
                  placeholder="Поиск товаров..." 
                  className="w-64 pl-10"
                />
                <Icon name="Search" className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              </div>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="relative">
                    <Icon name="ShoppingCart" className="h-4 w-4" />
                    {cartItems.length > 0 && (
                      <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 text-xs">
                        {cartItems.length}
                      </Badge>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Корзина ({cartItems.length})</SheetTitle>
                  </SheetHeader>
                  <div className="mt-4">
                    {cartItems.length === 0 ? (
                      <p className="text-muted-foreground">Корзина пуста</p>
                    ) : (
                      <div className="space-y-4">
                        {cartItems.map((item, index) => (
                          <div key={index} className="flex items-center space-x-4 border-b pb-4">
                            <img src={item.image} alt={item.name} className="h-16 w-16 object-cover rounded" />
                            <div className="flex-1">
                              <h4 className="font-medium">{item.name}</h4>
                              <p className="text-primary font-semibold">{item.price.toLocaleString()} ₽</p>
                            </div>
                          </div>
                        ))}
                        <Button className="w-full">Оформить заказ</Button>
                      </div>
                    )}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/img/9efd272e-d9fc-466b-a6c4-cdd3510273ce.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Добро пожаловать в VozduhNebes
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Современный интернет-магазин с широким ассортментом качественных товаров
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-8 py-4">
              Перейти к покупкам
              <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Каталог товаров</h3>
          
          {/* Filters */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex-1 min-w-48">
                <label className="block text-sm font-medium mb-2">Категория</label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите категорию" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex-1 min-w-48">
                <label className="block text-sm font-medium mb-2">Цена</label>
                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите ценовой диапазон" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Любая цена</SelectItem>
                    <SelectItem value="low">До 10 000 ₽</SelectItem>
                    <SelectItem value="medium">10 000 - 30 000 ₽</SelectItem>
                    <SelectItem value="high">От 30 000 ₽</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.badge && (
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-primary to-secondary text-white">
                      {product.badge}
                    </Badge>
                  )}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="icon" variant="secondary" className="rounded-full">
                      <Icon name="Heart" className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-2">
                    <h4 className="font-semibold text-lg mb-1">{product.name}</h4>
                    {product.brand && (
                      <p className="text-sm text-muted-foreground">{product.brand}</p>
                    )}
                  </div>
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Icon 
                          key={i} 
                          name="Star" 
                          className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-muted-foreground">({product.reviews})</span>
                  </div>
                  
                  {/* Product specs */}
                  <div className="mb-3 text-sm text-muted-foreground">
                    {product.power && <div>• Мощность: {product.power}</div>}
                    {product.area && <div>• Площадь: {product.area}</div>}
                    {product.volume && <div>• Объем: {product.volume}</div>}
                    {product.airflow && <div>• Производительность: {product.airflow}</div>}
                    {product.noise && <div>• Уровень шума: {product.noise}</div>}
                    {product.weight && <div>• Макс. вес: {product.weight}</div>}
                    {product.compatibility && <div>• Совместимость: {product.compatibility}</div>}
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-primary">{product.price.toLocaleString()} ₽</span>
                      {product.originalPrice && (
                        <span className="ml-2 text-sm text-muted-foreground line-through">
                          {product.originalPrice.toLocaleString()} ₽
                        </span>
                      )}
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white"
                    onClick={() => addToCart(product)}
                  >
                    <Icon name="ShoppingCart" className="mr-2 h-4 w-4" />
                    В корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section id="delivery" className="py-16 px-4 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Доставка и оплата</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-primary to-secondary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-4">Быстрая доставка</h4>
              <p className="text-muted-foreground">Доставляем по всей России от 1 дня. Бесплатная доставка от 3000 ₽</p>
            </Card>
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-primary to-secondary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="CreditCard" className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-4">Удобная оплата</h4>
              <p className="text-muted-foreground">Принимаем карты, наличные, переводы. Безопасные платежи</p>
            </Card>
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-primary to-secondary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-4">Гарантия качества</h4>
              <p className="text-muted-foreground">30 дней на возврат товара. Официальная гарантия производителя</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Контакты</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="p-8">
              <h4 className="text-xl font-semibold mb-6">Свяжитесь с нами</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <Icon name="Phone" className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Телефон</p>
                    <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <Icon name="Mail" className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">info@vozduhnebes.ru</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <Icon name="MapPin" className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Адрес</p>
                    <p className="text-muted-foreground">г. Москва, ул. Примерная, 123</p>
                  </div>
                </div>
              </div>
            </Card>
            <Card className="p-8">
              <h4 className="text-xl font-semibold mb-6">Напишите нам</h4>
              <form className="space-y-4">
                <Input placeholder="Ваше имя" />
                <Input type="email" placeholder="Email" />
                <Input placeholder="Тема сообщения" />
                <textarea 
                  className="w-full min-h-32 p-3 border border-border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Ваше сообщение"
                />
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white">
                  Отправить сообщение
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center">
            <h5 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              VozduhNebes
            </h5>
            <p className="text-gray-400 mb-6">Современный интернет-магазин для всех ваших потребностей</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Facebook" className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Twitter" className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Instagram" className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-gray-400">
              <p>&copy; 2024 VozduhNebes. Все права защищены.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;