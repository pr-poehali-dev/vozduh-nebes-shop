import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface SplitSystem {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  btu: number;
  area: number;
  energyClass: string;
  inverter: boolean;
  wifi: boolean;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  features: string[];
  warranty: number;
  installationPrice: number;
}

interface SplitSystemsSectionProps {
  onAddToCart: (product: any) => void;
}

const SplitSystemsSection = ({ onAddToCart }: SplitSystemsSectionProps) => {
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [selectedBtu, setSelectedBtu] = useState('all');
  const [selectedArea, setSelectedArea] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 200000]);
  const [sortBy, setSortBy] = useState('popular');

  const brands = [
    { id: 'all', name: 'Все бренды' },
    { id: 'daikin', name: 'Daikin' },
    { id: 'mitsubishi', name: 'Mitsubishi' },
    { id: 'lg', name: 'LG' },
    { id: 'samsung', name: 'Samsung' },
    { id: 'panasonic', name: 'Panasonic' },
    { id: 'gree', name: 'Gree' }
  ];

  const btuOptions = [
    { id: 'all', name: 'Любая мощность' },
    { id: '7000-9000', name: '7000-9000 BTU' },
    { id: '9000-12000', name: '9000-12000 BTU' },
    { id: '12000-18000', name: '12000-18000 BTU' },
    { id: '18000-24000', name: '18000-24000 BTU' },
    { id: '24000+', name: '24000+ BTU' }
  ];

  const areaOptions = [
    { id: 'all', name: 'Любая площадь' },
    { id: '15-25', name: '15-25 м²' },
    { id: '25-35', name: '25-35 м²' },
    { id: '35-50', name: '35-50 м²' },
    { id: '50-70', name: '50-70 м²' },
    { id: '70+', name: '70+ м²' }
  ];

  const splitSystems: SplitSystem[] = [
    {
      id: 1,
      name: 'Daikin FTXS25K Emura',
      brand: 'daikin',
      price: 85900,
      originalPrice: 95900,
      btu: 9000,
      area: 25,
      energyClass: 'A+++',
      inverter: true,
      wifi: true,
      rating: 4.9,
      reviews: 156,
      image: '/img/e6790eb9-5b04-467b-a84d-333351723ce8.jpg',
      badge: 'Премиум',
      features: [
        'Инверторная технология',
        'Wi-Fi управление',
        'Самоочистка',
        'Тихая работа 19 dB',
        'Датчик движения'
      ],
      warranty: 5,
      installationPrice: 8500
    },
    {
      id: 2,
      name: 'Mitsubishi MSZ-LN25VG',
      brand: 'mitsubishi',
      price: 78500,
      originalPrice: 89000,
      btu: 9000,
      area: 25,
      energyClass: 'A+++',
      inverter: true,
      wifi: true,
      rating: 4.8,
      reviews: 124,
      image: '/img/e6790eb9-5b04-467b-a84d-333351723ce8.jpg',
      badge: 'Хит продаж',
      features: [
        '3D i-see Sensor',
        'Plasma Quad Plus',
        'Dual Barrier Coating',
        'Hyper Heating',
        'MELCloud'
      ],
      warranty: 5,
      installationPrice: 8000
    },
    {
      id: 3,
      name: 'LG Artcool Gallery A12FR',
      brand: 'lg',
      price: 65900,
      originalPrice: 75900,
      btu: 12000,
      area: 35,
      energyClass: 'A++',
      inverter: true,
      wifi: true,
      rating: 4.7,
      reviews: 89,
      image: '/img/e6790eb9-5b04-467b-a84d-333351723ce8.jpg',
      badge: 'Дизайнерская',
      features: [
        'Артистичный дизайн',
        'ThinQ Wi-Fi',
        'Dual Inverter',
        'UVnano технология',
        'Быстрое охлаждение'
      ],
      warranty: 3,
      installationPrice: 7500
    },
    {
      id: 4,
      name: 'Samsung Wind-Free Comfort AR09',
      brand: 'samsung',
      price: 58900,
      originalPrice: 68900,
      btu: 9000,
      area: 25,
      energyClass: 'A++',
      inverter: true,
      wifi: true,
      rating: 4.6,
      reviews: 203,
      image: '/img/e6790eb9-5b04-467b-a84d-333351723ce8.jpg',
      badge: 'Новинка',
      features: [
        'Wind-Free охлаждение',
        'SmartThings Wi-Fi',
        'Digital Inverter',
        'Virus Doctor',
        'Easy Filter Plus'
      ],
      warranty: 3,
      installationPrice: 7000
    },
    {
      id: 5,
      name: 'Panasonic CS-TZ25WKEW',
      brand: 'panasonic',
      price: 52900,
      originalPrice: 62900,
      btu: 9000,
      area: 25,
      energyClass: 'A++',
      inverter: true,
      wifi: false,
      rating: 4.5,
      reviews: 67,
      image: '/img/e6790eb9-5b04-467b-a84d-333351723ce8.jpg',
      badge: null,
      features: [
        'Econavi сенсор',
        'nanoe-G технология',
        'Inverter компрессор',
        'Автоочистка',
        'Тихая работа'
      ],
      warranty: 3,
      installationPrice: 6500
    },
    {
      id: 6,
      name: 'Gree Bora GWH18AAD',
      brand: 'gree',
      price: 38900,
      originalPrice: 48900,
      btu: 18000,
      area: 50,
      energyClass: 'A+',
      inverter: true,
      wifi: false,
      rating: 4.3,
      reviews: 134,
      image: '/img/e6790eb9-5b04-467b-a84d-333351723ce8.jpg',
      badge: 'Выгодно',
      features: [
        'Inverter технология',
        'Cold Plasma',
        'I Feel функция',
        'Turbo режим',
        '8°C Heating'
      ],
      warranty: 2,
      installationPrice: 9000
    }
  ];

  const filteredSystems = splitSystems.filter(system => {
    if (selectedBrand !== 'all' && system.brand !== selectedBrand) return false;
    if (selectedBtu !== 'all') {
      const [min, max] = selectedBtu.split('-').map(v => parseInt(v.replace('+', '999999')));
      if (system.btu < min || (max && system.btu > max)) return false;
    }
    if (selectedArea !== 'all') {
      const [min, max] = selectedArea.split('-').map(v => parseInt(v.replace('+', '999')));
      if (system.area < min || (max && system.area > max)) return false;
    }
    if (system.price < priceRange[0] || system.price > priceRange[1]) return false;
    return true;
  });

  const sortedSystems = [...filteredSystems].sort((a, b) => {
    switch (sortBy) {
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      case 'rating': return b.rating - a.rating;
      case 'btu': return b.btu - a.btu;
      default: return b.rating - a.rating; // popular
    }
  });

  return (
    <div className="py-16 px-4 bg-gradient-to-br from-background to-muted">
      {/* Hero Section */}
      <section className="relative mb-16 overflow-hidden rounded-2xl">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/img/944d1207-5a76-42a1-94d8-a9f457db5677.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20" />
        <div className="relative z-10 p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Домашние сплит-системы
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Широкий выбор кондиционеров от ведущих мировых производителей. 
            Профессиональная установка и гарантийное обслуживание.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2 bg-white/80 rounded-lg p-4">
              <Icon name="Shield" className="h-6 w-6 text-primary" />
              <span className="font-medium">Гарантия до 5 лет</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-white/80 rounded-lg p-4">
              <Icon name="Wrench" className="h-6 w-6 text-primary" />
              <span className="font-medium">Установка за 1 день</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-white/80 rounded-lg p-4">
              <Icon name="Phone" className="h-6 w-6 text-primary" />
              <span className="font-medium">24/7 поддержка</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto">
        {/* Filters */}
        <Card className="mb-8 p-6">
          <h3 className="text-xl font-semibold mb-4">Фильтры</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">Бренд</label>
              <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {brands.map(brand => (
                    <SelectItem key={brand.id} value={brand.id}>
                      {brand.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Мощность (BTU)</label>
              <Select value={selectedBtu} onValueChange={setSelectedBtu}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {btuOptions.map(option => (
                    <SelectItem key={option.id} value={option.id}>
                      {option.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Площадь помещения</label>
              <Select value={selectedArea} onValueChange={setSelectedArea}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {areaOptions.map(option => (
                    <SelectItem key={option.id} value={option.id}>
                      {option.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Сортировка</label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">По популярности</SelectItem>
                  <SelectItem value="price-low">Цена: по возрастанию</SelectItem>
                  <SelectItem value="price-high">Цена: по убыванию</SelectItem>
                  <SelectItem value="rating">По рейтингу</SelectItem>
                  <SelectItem value="btu">По мощности</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium">
              Цена: {priceRange[0].toLocaleString()} - {priceRange[1].toLocaleString()} ₽
            </label>
            <Slider
              value={priceRange}
              onValueChange={setPriceRange}
              max={200000}
              step={5000}
              className="w-full"
            />
          </div>
        </Card>

        {/* Results */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold">
            Найдено {sortedSystems.length} сплит-систем
          </h3>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {sortedSystems.map(system => (
            <Card key={system.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={system.image} 
                  alt={system.name}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {system.badge && (
                  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-primary to-secondary text-white">
                    {system.badge}
                  </Badge>
                )}
                <div className="absolute top-4 right-4 flex space-x-2">
                  {system.inverter && (
                    <Badge variant="secondary" className="text-xs">
                      Inverter
                    </Badge>
                  )}
                  {system.wifi && (
                    <Badge variant="secondary" className="text-xs">
                      <Icon name="Wifi" className="h-3 w-3 mr-1" />
                      Wi-Fi
                    </Badge>
                  )}
                </div>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <div>
                  <h4 className="font-bold text-lg mb-1">{system.name}</h4>
                  <p className="text-sm text-muted-foreground">{system.brand.toUpperCase()}</p>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Icon 
                        key={i} 
                        name="Star" 
                        className={`h-4 w-4 ${i < Math.floor(system.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="font-medium">{system.rating}</span>
                  <span className="text-sm text-muted-foreground">({system.reviews})</span>
                </div>

                {/* Technical specs */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Icon name="Gauge" className="h-4 w-4 text-primary" />
                    <span>{system.btu} BTU</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Home" className="h-4 w-4 text-primary" />
                    <span>до {system.area} м²</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Zap" className="h-4 w-4 text-primary" />
                    <span>Класс {system.energyClass}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Shield" className="h-4 w-4 text-primary" />
                    <span>{system.warranty} лет</span>
                  </div>
                </div>

                <Separator />

                {/* Features */}
                <div className="space-y-1">
                  <p className="text-sm font-medium">Основные функции:</p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {system.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <Icon name="Check" className="h-3 w-3 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator />

                {/* Price and Installation */}
                <div className="space-y-3">
                  <div>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-2xl font-bold text-primary">{system.price.toLocaleString()} ₽</span>
                      {system.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {system.originalPrice.toLocaleString()} ₽
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      + установка {system.installationPrice.toLocaleString()} ₽
                    </p>
                  </div>

                  <div className="flex space-x-2">
                    <Button 
                      className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white"
                      onClick={() => onAddToCart(system)}
                    >
                      <Icon name="ShoppingCart" className="mr-2 h-4 w-4" />
                      В корзину
                    </Button>
                    <Button variant="outline" size="icon">
                      <Icon name="Heart" className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Installation Service */}
        <Card className="mt-16 bg-gradient-to-r from-primary/5 to-secondary/5">
          <CardContent className="p-8">
            <div className="text-center max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">Профессиональная установка</h3>
              <p className="text-lg text-muted-foreground mb-8">
                Наши сертифицированные мастера выполнят монтаж любой сложности с гарантией качества
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-primary to-secondary rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                    <Icon name="Calendar" className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold">Быстрая запись</h4>
                  <p className="text-sm text-muted-foreground">Удобное время установки</p>
                </div>
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-primary to-secondary rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                    <Icon name="Users" className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold">Опытные мастера</h4>
                  <p className="text-sm text-muted-foreground">Сертификация производителей</p>
                </div>
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-primary to-secondary rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                    <Icon name="Wrench" className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold">Все материалы</h4>
                  <p className="text-sm text-muted-foreground">Качественные комплектующие</p>
                </div>
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-primary to-secondary rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                    <Icon name="Shield" className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold">Гарантия</h4>
                  <p className="text-sm text-muted-foreground">На работы 2 года</p>
                </div>
              </div>
              <Button size="lg" className="mt-8 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white">
                <Icon name="Phone" className="mr-2 h-5 w-5" />
                Заказать установку
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SplitSystemsSection;