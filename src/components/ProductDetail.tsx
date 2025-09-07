import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface ProductDetailProps {
  product: {
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    category: string;
    rating: number;
    reviews: number;
    image: string;
    badge?: string;
    description: string;
    features: string[];
    specifications: { [key: string]: string };
    gallery: string[];
  };
  onAddToCart: (product: any) => void;
  onClose: () => void;
}

const ProductDetail = ({ product, onAddToCart, onClose }: ProductDetailProps) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const reviews = [
    {
      id: 1,
      author: 'Анна К.',
      rating: 5,
      date: '15 ноября 2024',
      text: 'Отличный товар! Качество превзошло ожидания. Доставка быстрая.',
      verified: true
    },
    {
      id: 2,
      author: 'Михаил П.',
      rating: 4,
      date: '12 ноября 2024',
      text: 'Хороший продукт за свою цену. Рекомендую к покупке.',
      verified: true
    },
    {
      id: 3,
      author: 'Елена С.',
      rating: 5,
      date: '10 ноября 2024',
      text: 'Покупаю уже второй раз. Всё идеально, спасибо!',
      verified: false
    }
  ];

  const ratingDistribution = [
    { stars: 5, count: 78, percentage: 63 },
    { stars: 4, count: 31, percentage: 25 },
    { stars: 3, count: 12, percentage: 10 },
    { stars: 2, count: 2, percentage: 1 },
    { stars: 1, count: 1, percentage: 1 }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b p-4 flex items-center justify-between z-10">
            <h1 className="text-2xl font-bold text-primary">Детали товара</h1>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <Icon name="X" className="h-6 w-6" />
            </Button>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Product Images */}
              <div className="space-y-4">
                <div className="aspect-square bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl overflow-hidden">
                  <img
                    src={product.gallery[selectedImage]}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex space-x-2 overflow-x-auto">
                  {product.gallery.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                        selectedImage === index ? 'border-primary' : 'border-gray-200'
                      }`}
                    >
                      <img src={image} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  {product.badge && (
                    <Badge className="mb-2 bg-gradient-to-r from-primary to-secondary text-white">
                      {product.badge}
                    </Badge>
                  )}
                  <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          className={`h-5 w-5 ${
                            i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-lg font-medium">{product.rating}</span>
                    <span className="text-muted-foreground">({product.reviews} отзывов)</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-baseline space-x-3">
                    <span className="text-4xl font-bold text-primary">{product.price.toLocaleString()} ₽</span>
                    {product.originalPrice && (
                      <span className="text-xl text-muted-foreground line-through">
                        {product.originalPrice.toLocaleString()} ₽
                      </span>
                    )}
                  </div>
                  {product.originalPrice && (
                    <p className="text-green-600 font-medium">
                      Экономия: {(product.originalPrice - product.price).toLocaleString()} ₽
                    </p>
                  )}
                </div>

                <p className="text-muted-foreground leading-relaxed">{product.description}</p>

                {/* Quantity and Add to Cart */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <span className="font-medium">Количество:</span>
                    <div className="flex items-center border rounded-lg">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        disabled={quantity <= 1}
                      >
                        <Icon name="Minus" className="h-4 w-4" />
                      </Button>
                      <span className="px-4 py-2 min-w-16 text-center">{quantity}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        <Icon name="Plus" className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <Button
                      size="lg"
                      className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white"
                      onClick={() => {
                        for (let i = 0; i < quantity; i++) {
                          onAddToCart(product);
                        }
                      }}
                    >
                      <Icon name="ShoppingCart" className="mr-2 h-5 w-5" />
                      Добавить в корзину
                    </Button>
                    <Button variant="outline" size="lg">
                      <Icon name="Heart" className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                {/* Delivery Info */}
                <Card className="bg-gradient-to-r from-primary/5 to-secondary/5">
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Icon name="Truck" className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">Доставка завтра</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="Shield" className="h-4 w-4 text-primary" />
                        <span className="text-sm">Гарантия 2 года</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="RotateCcw" className="h-4 w-4 text-primary" />
                        <span className="text-sm">Возврат 30 дней</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Product Details Tabs */}
            <Tabs defaultValue="features" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="features">Особенности</TabsTrigger>
                <TabsTrigger value="specs">Характеристики</TabsTrigger>
                <TabsTrigger value="reviews">Отзывы ({product.reviews})</TabsTrigger>
              </TabsList>

              <TabsContent value="features" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Ключевые особенности</h3>
                    <ul className="space-y-3">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <Icon name="Check" className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="specs" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Технические характеристики</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                          <span className="font-medium text-muted-foreground">{key}</span>
                          <span className="text-right">{value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <div className="space-y-6">
                  {/* Rating Summary */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="text-center">
                          <div className="text-5xl font-bold text-primary mb-2">{product.rating}</div>
                          <div className="flex items-center justify-center mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Icon
                                key={i}
                                name="Star"
                                className={`h-6 w-6 ${
                                  i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-muted-foreground">На основе {product.reviews} отзывов</p>
                        </div>
                        <div className="space-y-2">
                          {ratingDistribution.map((item) => (
                            <div key={item.stars} className="flex items-center space-x-2">
                              <span className="text-sm w-8">{item.stars}★</span>
                              <Progress value={item.percentage} className="flex-1" />
                              <span className="text-sm text-muted-foreground w-8">{item.count}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Reviews List */}
                  <div className="space-y-4">
                    {reviews.map((review) => (
                      <Card key={review.id}>
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <Avatar>
                              <AvatarFallback>{review.author[0]}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-2">
                                <span className="font-semibold">{review.author}</span>
                                {review.verified && (
                                  <Badge variant="secondary" className="text-xs">
                                    <Icon name="CheckCircle" className="h-3 w-3 mr-1" />
                                    Покупатель
                                  </Badge>
                                )}
                              </div>
                              <div className="flex items-center space-x-2 mb-2">
                                <div className="flex">
                                  {[...Array(5)].map((_, i) => (
                                    <Icon
                                      key={i}
                                      name="Star"
                                      className={`h-4 w-4 ${
                                        i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                      }`}
                                    />
                                  ))}
                                </div>
                                <span className="text-sm text-muted-foreground">{review.date}</span>
                              </div>
                              <p className="text-muted-foreground">{review.text}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;