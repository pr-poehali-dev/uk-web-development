import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

export default function Houses() {
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');

  const allHouses = [
    { id: 1, address: 'ул. Беловой, д. 1г, стр. 1 (Коттеджный поселок "Сад времени")', manager: 'Александр Васильевич Павлюк', phone: '+7 (931) 251-10-40', district: 'Санкт-Петербург', type: 'residential' },
    { id: 2, address: 'ул. Васенко, д. 12, литера Б (Паркинг)', manager: 'Алексей Сергеевич Стекольников', phone: '8 (953) 365-65-05', district: 'Красногвардейский', type: 'parking' },
    { id: 3, address: 'Фермское ш., д. 20, корп. 3 (Паркинг)', manager: 'Алексей Сергеевич Стекольников', phone: '8 (953) 365-65-05', district: 'Приморский', type: 'parking' },
    { id: 4, address: 'Фермское ш., д. 22, корп. 2 (Паркинг)', manager: 'Алексей Сергеевич Стекольников', phone: '8 (953) 365-65-05', district: 'Приморский', type: 'parking' },
    { id: 5, address: 'ул. Зеленогорская, д. 12, литера В (Паркинг)', manager: 'Алексей Сергеевич Стекольников', phone: '8 (953) 365-65-05', district: 'Санкт-Петербург', type: 'parking' },
    { id: 6, address: 'Кондратьевский просп., д. 66, корп. 1', manager: 'Наталья Валерьевна Машкарина', phone: '8 (931) 240-22-37', district: 'Калининский', type: 'residential' },
    { id: 7, address: 'Кондратьевский просп., д. 62, корп. 2', manager: 'Наталья Валерьевна Машкарина', phone: '8 (931) 240-22-37', district: 'Калининский', type: 'residential' },
    { id: 8, address: 'ул. Васенко, д. 12, литера А (ЖК "Золотое сечение")', manager: 'Екатерина Васильевна Павлова', phone: '+7 (921) 334-43-74', district: 'Красногвардейский', type: 'complex' },
    { id: 9, address: 'Кондратьевский просп., д. 62, корп. 1', manager: 'Наталья Валерьевна Машкарина', phone: '8 (931) 240-22-37', district: 'Калининский', type: 'residential' },
    { id: 10, address: 'Фермское ш., д. 22, корп. 3', manager: 'Павел Львович Моисеев', phone: '8 (921) 954-31-94', district: 'Приморский', type: 'residential' },
    { id: 11, address: 'Петровский просп., д. 5, стр. 1 (ЖК "Остров")', manager: 'Евдокимов Сергей Борисович', phone: '8 (921) 632-48-39', district: 'Петроградский', type: 'complex' },
    { id: 12, address: 'ул. Большая Зеленина, д. 24, стр. 1 (БЦ "Грани")', manager: 'Галина Алексеевна Рожкова', phone: '8 (993) 641-35-95', district: 'Петроградский', type: 'commercial' },
    { id: 13, address: 'Приморское ш., д. 352, стр. 1 (ЖК "Пляж")', manager: 'Павлюк Александр Васильевич', phone: '8 (931) 251-10-40', district: 'Приморский', type: 'complex' },
    { id: 14, address: 'Кондратьевский просп., д. 62, корп. 7 (ЖК "Панорама")', manager: 'Наталья Валерьевна Машкарина', phone: '8 (931) 240-22-37', district: 'Калининский', type: 'complex' },
    { id: 15, address: 'просп. Металлистов, д. 116, корп. 1, литера А (ЖК "Золотое сечение")', manager: 'Екатерина Васильевна Павлова', phone: '8 (921) 334-43-74', district: 'Красногвардейский', type: 'complex' },
    { id: 16, address: 'ул. Академика Константинова, д. 1, корп. 1, стр. 1 (ЖК "Наука")', manager: 'Елена Викторовна Суконкина', phone: '8 (921) 366-50-88', district: 'Калининский', type: 'complex' },
    { id: 17, address: 'ул. Малая Бухарестская, д. 12, стр. 1 (ЖК "Новое Купчино")', manager: 'Наталья Геннадьевна Мурашова', phone: '8 (931) 388-65-80', district: 'Фрунзенский', type: 'complex' },
    { id: 18, address: 'ул. Одоевского, д. 21, корп. 1, стр. 1 (ЖК «Адмирал»)', manager: 'Галина Алексеевна Рожкова', phone: '8 (993) 641-35-95', district: 'Приморский', type: 'complex' },
    { id: 19, address: 'ул. Ремесленная, д. 21, стр. 1 (Апарт-отель «Аватар»)', manager: 'Галина Алексеевна Рожкова', phone: '8 (993) 641-35-95', district: 'Центральный', type: 'commercial' },
    { id: 20, address: 'Бульвар Белых ночей, д. 3', manager: 'Вера Ивановна Бакшеева', phone: '8 (921) 337-43-41', district: 'Приморский', type: 'residential' },
    { id: 21, address: 'Красносельское ш., д. 20 (Паркинг)', manager: 'Алексей Сергеевич Стекольников', phone: '8 (953) 365-65-05', district: 'Красносельский', type: 'parking' },
    { id: 22, address: 'Красносельское ш., д. 8 (Паркинг)', manager: 'Алексей Сергеевич Стекольников', phone: '8 (953) 365-65-05', district: 'Красносельский', type: 'parking' },
    { id: 23, address: 'Красносельское ш., д. 4 (Паркинг)', manager: 'Алексей Сергеевич Стекольников', phone: '8 (953) 365-65-05', district: 'Красносельский', type: 'parking' },
    { id: 24, address: 'ул. Адмиралтейская, д. 11', manager: 'Вера Ивановна Бакшеева', phone: '8 (921) 337-43-41', district: 'Адмиралтейский', type: 'residential' },
    { id: 25, address: 'Питерский просп., д. 7 (ЖК NewПитер)', manager: 'Ольга Вадимовна Васильева', phone: '8 (921) 943-72-93', district: 'Красносельский', type: 'complex' },
    { id: 26, address: 'Питерский просп., д. 5 (ЖК NewПитер)', manager: 'Ольга Вадимовна Васильева', phone: '8 (921) 943-72-93', district: 'Красносельский', type: 'complex' },
    { id: 27, address: 'Невская ул., д. 5/7 (ЖК NewПитер)', manager: 'Вера Ивановна Бакшеева', phone: '8 (921) 337-43-41', district: 'Красносельский', type: 'complex' },
    { id: 28, address: 'Невская ул., д. 4 (ЖК NewПитер)', manager: 'Ольга Вадимовна Васильева', phone: '8 (921) 943-72-93', district: 'Красносельский', type: 'complex' },
    { id: 29, address: 'Невская ул., д. 3 (ЖК NewПитер)', manager: 'Вера Ивановна Бакшеева', phone: '8 (921) 337-43-41', district: 'Красносельский', type: 'complex' },
    { id: 30, address: 'Адмиралтейская ул., д. 3 (ЖК NewПитер)', manager: 'Ольга Вадимовна Васильева', phone: '8 (921) 943-73-93', district: 'Красносельский', type: 'complex' },
    { id: 31, address: 'Невская ул., д. 10/5 (ЖК NewПитер)', manager: 'Ольга Вадимовна Васильева', phone: '8 (921) 943-73-93', district: 'Красносельский', type: 'complex' },
    { id: 32, address: 'Невская ул., д. 1 (ЖК NewПитер)', manager: 'Вера Ивановна Бакшеева', phone: '8 (921) 337-43-41', district: 'Красносельский', type: 'complex' },
    { id: 33, address: 'Невская ул., д. 6 (ЖК NewПитер)', manager: 'Ольга Вадимовна Васильева', phone: '8 (921) 943-73-93', district: 'Красносельский', type: 'complex' },
    { id: 34, address: 'Адмиралтейская ул., д. 9 (ЖК NewПитер)', manager: 'Вера Ивановна Бакшеева', phone: '8 (921) 337-43-41', district: 'Красносельский', type: 'complex' },
    { id: 35, address: 'Адмиралтейская ул., д. 1 (ЖК NewПитер)', manager: 'Ольга Вадимовна Васильева', phone: '8 (921) 943-73-93', district: 'Красносельский', type: 'complex' },
    { id: 36, address: 'Питерский просп., д. 1 (ЖК NewПитер)', manager: 'Ольга Вадимовна Васильева', phone: '8 (921) 943-73-93', district: 'Красносельский', type: 'complex' },
    { id: 37, address: 'Красносельское ш., д. 16 (ЖК NewПитер)', manager: 'Вера Ивановна Бакшеева', phone: '8 (921) 337-43-41', district: 'Красносельский', type: 'complex' },
    { id: 38, address: 'Красносельское ш., д. 6 (ЖК NewПитер)', manager: 'Ольга Вадимовна Васильева', phone: '8 (921) 943-73-93', district: 'Красносельский', type: 'complex' },
    { id: 39, address: 'г. Бугры, Петровский бульвар, д. 28', manager: 'Галина Викторовна Топал', phone: '', district: 'Всеволожский (ЛО)', type: 'residential' },
    { id: 40, address: 'Мурино, Воронцовский бульвар, д. 23/11', manager: 'Виктория Валерьевна Саврандейкина', phone: '8 (921) 954-33-94', district: 'Всеволожский (ЛО)', type: 'residential' },
    { id: 41, address: 'Кудрово, ул. Областная, д. 5, корп. 1, 2, 3, 5, 6', manager: 'Анна Николаевна Кочевова', phone: '+7 (921) 385-79-31', district: 'Всеволожский (ЛО)', type: 'residential' },
    { id: 42, address: 'Кудрово, ул. Областная, д. 9, корп. 2', manager: 'Станислав Александрович Мельников', phone: '8 (931) 586-19-77', district: 'Всеволожский (ЛО)', type: 'residential' },
    { id: 43, address: 'Кудрово, Каштановая аллея, д. 2', manager: 'Лена Николаевна Истомина', phone: '+7 (921) 357-34-09', district: 'Всеволожский (ЛО)', type: 'residential' },
    { id: 44, address: 'Кудрово, Каштановая аллея, д. 3', manager: 'Лена Николаевна Истомина', phone: '+7 (921) 357-34-09', district: 'Всеволожский (ЛО)', type: 'residential' },
    { id: 45, address: 'Кудрово, просп. Строителей, д. 2', manager: 'Анастасия Олеговна Сажнева', phone: '8 (999) 024-61-74', district: 'Всеволожский (ЛО)', type: 'residential' },
    { id: 46, address: 'Кудрово, просп. Строителей, д. 6', manager: 'Анастасия Олеговна Сажнева', phone: '8 (999) 024-61-74', district: 'Всеволожский (ЛО)', type: 'residential' },
    { id: 47, address: 'Кудрово, ул. Областная, д. 3', manager: 'Анна Николаевна Кочевова', phone: '8 (921) 385-79-31', district: 'Всеволожский (ЛО)', type: 'residential' },
    { id: 48, address: 'Кудрово, ул. Областная, д. 9, корп. 1', manager: 'Станислав Александрович Мельников', phone: '8 (931) 586-19-77', district: 'Всеволожский (ЛО)', type: 'residential' },
    { id: 49, address: 'Кудрово, просп. Строителей, д. 4', manager: 'Анастасия Олеговна Сажнева', phone: '8 (999) 024-61-74', district: 'Всеволожский (ЛО)', type: 'residential' },
    { id: 50, address: 'Кудрово, ул. Ленинградская, д. 9/8', manager: 'Анастасия Олеговна Сажнева', phone: '8 (999) 024-61-74', district: 'Всеволожский (ЛО)', type: 'residential' },
    { id: 51, address: 'Кудрово, ул. Областная, д. 7', manager: 'Станислав Александрович Мельников', phone: '8 (931) 586-19-77', district: 'Всеволожский (ЛО)', type: 'residential' },
    { id: 52, address: 'Московская застава (ЖК ID Московский)', manager: '', phone: '', district: 'Московский', type: 'complex' },
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'complex': return 'Building';
      case 'parking': return 'ParkingCircle';
      case 'commercial': return 'Briefcase';
      default: return 'Home';
    }
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'complex': return 'ЖК';
      case 'parking': return 'Паркинг';
      case 'commercial': return 'БЦ';
      default: return 'МКД';
    }
  };

  let filtered = allHouses.filter(house => 
    house.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
    house.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
    house.manager.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (typeFilter !== 'all') {
    filtered = filtered.filter(house => house.type === typeFilter);
  }

  const groupedByDistrict = filtered.reduce((acc, house) => {
    if (!acc[house.district]) {
      acc[house.district] = [];
    }
    acc[house.district].push(house);
    return acc;
  }, {} as Record<string, typeof allHouses>);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Building2" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">ГК "Наш дом"</h1>
                <p className="text-xs text-muted-foreground">Управление недвижимостью с 2007 года</p>
              </div>
            </div>
            <Button 
              onClick={() => window.location.href = '/'}
              variant="outline"
            >
              <Icon name="Home" size={16} className="mr-2" />
              На главную
            </Button>
          </div>
        </div>
      </header>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Все дома в управлении
              </h2>
              <p className="text-muted-foreground mb-8">52 объекта недвижимости: многоквартирные дома и паркинги в Санкт-Петербурге и Ленинградской области</p>
              
              <div className="max-w-md mx-auto relative mb-6">
                <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  placeholder="Поиск по адресу, району или управляющему..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>

              <div className="flex gap-3 justify-center flex-wrap">
                <Button
                  variant={typeFilter === 'all' ? 'default' : 'outline'}
                  onClick={() => setTypeFilter('all')}
                  size="sm"
                  className={typeFilter === 'all' ? 'bg-gradient-to-r from-primary to-secondary' : ''}
                >
                  Все типы
                </Button>
                <Button
                  variant={typeFilter === 'residential' ? 'default' : 'outline'}
                  onClick={() => setTypeFilter('residential')}
                  size="sm"
                  className={typeFilter === 'residential' ? 'bg-gradient-to-r from-primary to-secondary' : ''}
                >
                  <Icon name="Home" size={14} className="mr-2" />
                  Дома
                </Button>
                <Button
                  variant={typeFilter === 'complex' ? 'default' : 'outline'}
                  onClick={() => setTypeFilter('complex')}
                  size="sm"
                  className={typeFilter === 'complex' ? 'bg-gradient-to-r from-primary to-secondary' : ''}
                >
                  <Icon name="Building" size={14} className="mr-2" />
                  ЖК
                </Button>
                <Button
                  variant={typeFilter === 'parking' ? 'default' : 'outline'}
                  onClick={() => setTypeFilter('parking')}
                  size="sm"
                  className={typeFilter === 'parking' ? 'bg-gradient-to-r from-primary to-secondary' : ''}
                >
                  <Icon name="ParkingCircle" size={14} className="mr-2" />
                  Паркинги
                </Button>
                <Button
                  variant={typeFilter === 'commercial' ? 'default' : 'outline'}
                  onClick={() => setTypeFilter('commercial')}
                  size="sm"
                  className={typeFilter === 'commercial' ? 'bg-gradient-to-r from-primary to-secondary' : ''}
                >
                  <Icon name="Briefcase" size={14} className="mr-2" />
                  БЦ / Апарт-отели
                </Button>
              </div>
            </div>

            <div className="space-y-8">
              {Object.entries(groupedByDistrict).map(([district, houses]) => (
                <div key={district} className="animate-scale-in">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                      <Icon name="MapPin" className="text-primary" size={18} />
                    </div>
                    <h3 className="text-2xl font-bold">{district}</h3>
                    <span className="text-sm text-muted-foreground">({houses.length} {houses.length === 1 ? 'объект' : houses.length < 5 ? 'объекта' : 'объектов'})</span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {houses.map((house, idx) => (
                      <Card 
                        key={house.id}
                        className="hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 hover:border-primary/30 animate-fade-in"
                        style={{ animationDelay: `${idx * 0.05}s` }}
                      >
                        <CardHeader className="pb-3">
                          <div className="flex items-start gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary via-secondary to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                              <Icon name={getTypeIcon(house.type)} className="text-white" size={22} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <Badge className="mb-2 text-xs bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border-primary/20">
                                {getTypeBadge(house.type)}
                              </Badge>
                              <CardTitle className="text-base leading-snug">{house.address}</CardTitle>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="space-y-2">
                            {house.manager && (
                              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                                <Icon name="User" size={14} className="mt-0.5 flex-shrink-0" />
                                <span className="leading-tight">{house.manager}</span>
                              </div>
                            )}
                            {house.phone && (
                              <div className="flex items-center gap-2">
                                <Icon name="Phone" size={14} className="text-primary" />
                                <a 
                                  href={`tel:${house.phone}`} 
                                  className="text-sm text-primary font-medium hover:underline"
                                >
                                  {house.phone}
                                </a>
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="SearchX" className="text-primary" size={40} />
                </div>
                <h3 className="text-xl font-bold mb-2">Ничего не найдено</h3>
                <p className="text-muted-foreground">Попробуйте изменить запрос поиска или фильтры</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-400">© 2007–2025 Группа управляющих компаний «Наш дом»</p>
          <div className="flex gap-4 justify-center mt-4 text-xs">
            <a href="tel:+78126408826" className="hover:text-primary transition-colors">+7 (812) 640-88-26</a>
            <a href="mailto:uk.nashdom@inbox.ru" className="hover:text-primary transition-colors">uk.nashdom@inbox.ru</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
