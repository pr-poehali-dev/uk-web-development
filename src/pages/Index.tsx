import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [meterReading, setMeterReading] = useState({ cold: '', hot: '', electric: '' });
  const [selectedHouse, setSelectedHouse] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const houses = [
    { id: 1, address: 'ул. Ленина, 45', year: 1985, floors: 9, apartments: 72, lat: 59.93, lng: 30.36 },
    { id: 2, address: 'Невский пр., 120', year: 1978, floors: 12, apartments: 144, lat: 59.93, lng: 30.37 },
    { id: 3, address: 'ул. Маршала Жукова, 33', year: 1992, floors: 16, apartments: 256, lat: 59.94, lng: 30.35 },
    { id: 4, address: 'пр. Просвещения, 88', year: 2001, floors: 10, apartments: 120, lat: 59.95, lng: 30.38 },
  ];

  const news = [
    { id: 1, title: 'Плановое отключение воды', date: '15.11.2025', category: 'water', tag: 'Важно' },
    { id: 2, title: 'Ремонт козырька подъезда №3', date: '12.11.2025', category: 'repair', tag: 'Благоустройство' },
    { id: 3, title: 'Замена счетчиков на ул. Ленина, 45', date: '10.11.2025', category: 'electric', tag: 'Электроснабжение' },
    { id: 4, title: 'График уборки придомовой территории', date: '08.11.2025', category: 'info', tag: 'Информация' },
  ];

  const services = [
    { icon: 'Droplet', title: 'Водоснабжение', description: 'Круглосуточное обеспечение' },
    { icon: 'Zap', title: 'Электричество', description: 'Обслуживание сетей' },
    { icon: 'Wrench', title: 'Ремонт', description: 'Аварийная служба 24/7' },
    { icon: 'Trash2', title: 'Вывоз ТКО', description: 'Ежедневный вывоз мусора' },
  ];

  const filteredNews = activeFilter === 'all' 
    ? news 
    : news.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Building2" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">ГК "Северные дома"</h1>
                <p className="text-xs text-muted-foreground">Управление недвижимостью в СПб</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
              <a href="#houses" className="text-sm font-medium hover:text-primary transition-colors">Дома</a>
              <a href="#news" className="text-sm font-medium hover:text-primary transition-colors">Новости</a>
              <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-gradient-to-r from-primary to-secondary">
              <Icon name="LogIn" size={16} className="mr-2" />
              Личный кабинет
            </Button>
          </div>
        </div>
      </header>

      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">Современное управление</Badge>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Управляющая компания нового поколения
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Прозрачность, технологичность и забота о каждом жильце. 
              Все сервисы доступны онлайн 24/7
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary">
                <Icon name="User" size={18} className="mr-2" />
                Войти в личный кабинет
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Phone" size={18} className="mr-2" />
                Аварийная служба
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow duration-300 animate-scale-in border-2 hover:border-primary/50">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center mb-3">
                    <Icon name={service.icon as any} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-3">Онлайн-сервисы</h3>
            <p className="text-muted-foreground">Управляйте своим домом из любой точки мира</p>
          </div>

          <Tabs defaultValue="meters" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="meters">
                <Icon name="Gauge" size={16} className="mr-2" />
                Показания
              </TabsTrigger>
              <TabsTrigger value="payment">
                <Icon name="CreditCard" size={16} className="mr-2" />
                Оплата
              </TabsTrigger>
              <TabsTrigger value="requests">
                <Icon name="ClipboardList" size={16} className="mr-2" />
                Заявки
              </TabsTrigger>
            </TabsList>

            <TabsContent value="meters" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Передать показания счётчиков</CardTitle>
                  <CardDescription>Отправьте текущие показания до 25 числа каждого месяца</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="cold">Холодная вода (м³)</Label>
                    <Input 
                      id="cold" 
                      type="number" 
                      placeholder="0000"
                      value={meterReading.cold}
                      onChange={(e) => setMeterReading({...meterReading, cold: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="hot">Горячая вода (м³)</Label>
                    <Input 
                      id="hot" 
                      type="number" 
                      placeholder="0000"
                      value={meterReading.hot}
                      onChange={(e) => setMeterReading({...meterReading, hot: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="electric">Электроэнергия (кВт·ч)</Label>
                    <Input 
                      id="electric" 
                      type="number" 
                      placeholder="00000"
                      value={meterReading.electric}
                      onChange={(e) => setMeterReading({...meterReading, electric: e.target.value})}
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить показания
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="payment" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Оплата жилищно-коммунальных услуг</CardTitle>
                  <CardDescription>Быстрая и безопасная оплата онлайн</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">Текущий период:</span>
                      <Badge>Ноябрь 2025</Badge>
                    </div>
                    <Separator className="my-3" />
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">К оплате:</span>
                      <span className="text-2xl font-bold text-primary">4 850 ₽</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 border rounded-lg">
                      <p className="text-xs text-muted-foreground">Содержание</p>
                      <p className="font-semibold">2 100 ₽</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <p className="text-xs text-muted-foreground">Вода</p>
                      <p className="font-semibold">1 450 ₽</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <p className="text-xs text-muted-foreground">Электричество</p>
                      <p className="font-semibold">980 ₽</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <p className="text-xs text-muted-foreground">Отопление</p>
                      <p className="font-semibold">320 ₽</p>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary">
                    <Icon name="CreditCard" size={16} className="mr-2" />
                    Оплатить 4 850 ₽
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="requests" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Подать заявку</CardTitle>
                  <CardDescription>Вызов специалиста или сообщение о проблеме</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="h-20 flex-col">
                      <Icon name="Wrench" size={24} className="mb-2 text-primary" />
                      <span className="text-xs">Сантехник</span>
                    </Button>
                    <Button variant="outline" className="h-20 flex-col">
                      <Icon name="Zap" size={24} className="mb-2 text-primary" />
                      <span className="text-xs">Электрик</span>
                    </Button>
                    <Button variant="outline" className="h-20 flex-col">
                      <Icon name="DoorOpen" size={24} className="mb-2 text-primary" />
                      <span className="text-xs">Домофон</span>
                    </Button>
                    <Button variant="outline" className="h-20 flex-col">
                      <Icon name="AlertTriangle" size={24} className="mb-2 text-primary" />
                      <span className="text-xs">Авария</span>
                    </Button>
                  </div>
                  <Separator />
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Активные заявки</h4>
                    <div className="space-y-2">
                      <div className="p-3 border rounded-lg flex items-center justify-between">
                        <div>
                          <p className="font-medium text-sm">Замена крана на кухне</p>
                          <p className="text-xs text-muted-foreground">Заявка #1847</p>
                        </div>
                        <Badge variant="secondary">В работе</Badge>
                      </div>
                      <div className="p-3 border rounded-lg flex items-center justify-between">
                        <div>
                          <p className="font-medium text-sm">Ремонт розетки</p>
                          <p className="text-xs text-muted-foreground">Заявка #1832</p>
                        </div>
                        <Badge className="bg-green-500">Выполнена</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="houses" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-3">Дома в управлении</h3>
            <p className="text-muted-foreground">84 дома по всему Санкт-Петербургу</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              {houses.map((house) => (
                <Card 
                  key={house.id} 
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedHouse === house.id ? 'border-primary border-2 shadow-lg' : ''
                  }`}
                  onClick={() => setSelectedHouse(house.id)}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{house.address}</CardTitle>
                        <CardDescription>Построен в {house.year} году</CardDescription>
                      </div>
                      <Icon name="MapPin" className="text-primary" size={20} />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-2xl font-bold text-primary">{house.floors}</p>
                        <p className="text-xs text-muted-foreground">этажей</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-primary">{house.apartments}</p>
                        <p className="text-xs text-muted-foreground">квартир</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-primary">{house.year}</p>
                        <p className="text-xs text-muted-foreground">год</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-8 flex items-center justify-center border-2 border-dashed">
              <div className="text-center">
                <Icon name="Map" size={64} className="text-primary/30 mx-auto mb-4" />
                <p className="text-lg font-semibold text-muted-foreground">Интерактивная карта</p>
                <p className="text-sm text-muted-foreground">Выберите дом из списка слева</p>
                {selectedHouse && (
                  <Badge className="mt-4 bg-primary">
                    Дом выбран: {houses.find(h => h.id === selectedHouse)?.address}
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="news" className="py-16 px-4 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-3">Новости и объявления</h3>
            <p className="text-muted-foreground">Актуальная информация для жильцов</p>
          </div>

          <div className="flex gap-3 mb-8 justify-center flex-wrap">
            <Button 
              variant={activeFilter === 'all' ? 'default' : 'outline'}
              onClick={() => setActiveFilter('all')}
              size="sm"
            >
              Все новости
            </Button>
            <Button 
              variant={activeFilter === 'water' ? 'default' : 'outline'}
              onClick={() => setActiveFilter('water')}
              size="sm"
            >
              <Icon name="Droplet" size={14} className="mr-2" />
              Водоснабжение
            </Button>
            <Button 
              variant={activeFilter === 'electric' ? 'default' : 'outline'}
              onClick={() => setActiveFilter('electric')}
              size="sm"
            >
              <Icon name="Zap" size={14} className="mr-2" />
              Электричество
            </Button>
            <Button 
              variant={activeFilter === 'repair' ? 'default' : 'outline'}
              onClick={() => setActiveFilter('repair')}
              size="sm"
            >
              <Icon name="Wrench" size={14} className="mr-2" />
              Ремонт
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {filteredNews.map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow animate-fade-in">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary">{item.tag}</Badge>
                    <span className="text-xs text-muted-foreground">{item.date}</span>
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-3">Контакты</h3>
              <p className="text-muted-foreground">Мы всегда на связи</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-lg">Телефон</CardTitle>
                  <CardDescription>+7 (812) 123-45-67</CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center border-2 border-destructive/50 bg-destructive/5">
                <CardHeader>
                  <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name="AlertTriangle" className="text-destructive" size={24} />
                  </div>
                  <CardTitle className="text-lg text-destructive">Аварийная служба</CardTitle>
                  <CardDescription className="text-destructive font-bold text-xl">112</CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name="Mail" className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-lg">Email</CardTitle>
                  <CardDescription>info@uk-spb.ru</CardDescription>
                </CardHeader>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Офис компании</CardTitle>
                <CardDescription>Санкт-Петербург, Невский проспект, 100</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center border-2 border-dashed">
                  <div className="text-center">
                    <Icon name="MapPin" size={48} className="text-primary/30 mx-auto mb-3" />
                    <p className="text-sm text-muted-foreground">Карта Яндекс</p>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm font-semibold mb-2">График приёма граждан:</p>
                  <p className="text-sm text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                  <p className="text-sm text-muted-foreground">Сб: 10:00 - 14:00</p>
                  <p className="text-sm text-muted-foreground">Вс: выходной</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">О компании</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Команда</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Документы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Лицензии</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Содержание жилья</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Капремонт</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Коммунальные услуги</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Тарифы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Жильцам</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Личный кабинет</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Передать показания</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Оплатить услуги</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Подать заявку</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Раскрытие информации</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Приказ №882/пр</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Отчёты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Финансы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Тарифы ЖКУ</a></li>
              </ul>
            </div>
          </div>
          <Separator className="bg-gray-800 mb-8" />
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2025 ГК "Северные дома". Все права защищены.</p>
            <p>Санкт-Петербург</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
