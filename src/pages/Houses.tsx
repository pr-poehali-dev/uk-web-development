import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

export default function Houses() {
  const [searchQuery, setSearchQuery] = useState('');

  const allHouses = [
    { id: 1, address: 'Кондратьевский пр., д. 66, корп. 1', manager: 'Наталья Валерьевна Машкарина', phone: '8 (931) 240-22-37', district: 'Калининский' },
    { id: 2, address: 'Кондратьевский пр., д. 62, корп. 2', manager: 'Наталья Валерьевна Машкарина', phone: '8 (931) 240-22-37', district: 'Калининский' },
    { id: 3, address: 'ул. Васенко, д. 12, литера А (ЖК "Золотое сечение")', manager: 'Екатерина Васильевна Павлова', phone: '+7 921 334-43-74', district: 'Красногвардейский' },
    { id: 4, address: 'Фермское ш., д. 22, корп. 3', manager: 'Павел Львович Моисеев', phone: '8 (921) 954-31-94', district: 'Приморский' },
    { id: 5, address: 'Петровский пр., д. 5, стр. 1 (ЖК "Остров")', manager: 'Евдокимов Сергей Борисович', phone: '8 (921) 632-48-39', district: 'Петроградский' },
    { id: 6, address: 'ул. Большая Зеленина, д. 24, стр. 1 (БЦ "Грани")', manager: 'Галина Алексеевна Рожкова', phone: '8 (993) 641-35-95', district: 'Петроградский' },
    { id: 7, address: 'Приморское ш., д. 352, стр. 1 (ЖК "Пляж")', manager: 'Павлюк Александр Васильевич', phone: '8 (931) 251-10-40', district: 'Приморский' },
    { id: 8, address: 'Кондратьевский пр., д. 62, корп. 7 (ЖК "Панорама")', manager: 'Наталья Валерьевна Машкарина', phone: '8 (931) 240-22-37', district: 'Калининский' },
    { id: 9, address: 'Невский пр., д. 85', manager: 'Иванова Мария Петровна', phone: '8 (921) 123-45-67', district: 'Центральный' },
    { id: 10, address: 'ул. Ленина, д. 45', manager: 'Сидоров Алексей Иванович', phone: '8 (921) 234-56-78', district: 'Выборгский' },
    { id: 11, address: 'пр. Энгельса, д. 154, корп. 1', manager: 'Петрова Светлана Николаевна', phone: '8 (921) 345-67-89', district: 'Выборгский' },
    { id: 12, address: 'Московский пр., д. 212', manager: 'Кузнецов Дмитрий Сергеевич', phone: '8 (921) 456-78-90', district: 'Московский' },
    { id: 13, address: 'ул. Савушкина, д. 126', manager: 'Смирнова Ольга Владимировна', phone: '8 (921) 567-89-01', district: 'Приморский' },
    { id: 14, address: 'ул. Типанова, д. 21', manager: 'Волков Андрей Михайлович', phone: '8 (921) 678-90-12', district: 'Московский' },
    { id: 15, address: 'Комендантский пр., д. 42, корп. 2', manager: 'Николаева Анна Викторовна', phone: '8 (921) 789-01-23', district: 'Приморский' },
  ];

  const filteredHouses = allHouses.filter(house => 
    house.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
    house.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
    house.manager.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const groupedByDistrict = filteredHouses.reduce((acc, house) => {
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
              <p className="text-muted-foreground mb-8">50+ многоквартирных домов и 13 паркингов по всему Санкт-Петербургу</p>
              
              <div className="max-w-md mx-auto relative">
                <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  placeholder="Поиск по адресу, району или управляющему..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
            </div>

            <div className="space-y-8">
              {Object.entries(groupedByDistrict).map(([district, houses]) => (
                <div key={district} className="animate-scale-in">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                      <Icon name="MapPin" className="text-primary" size={18} />
                    </div>
                    <h3 className="text-2xl font-bold">{district} район</h3>
                    <span className="text-sm text-muted-foreground">({houses.length} {houses.length === 1 ? 'дом' : 'дома'})</span>
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
                              <Icon name="Building2" className="text-white" size={22} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <CardTitle className="text-base leading-snug">{house.address}</CardTitle>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="space-y-2">
                            <div className="flex items-start gap-2 text-sm text-muted-foreground">
                              <Icon name="User" size={14} className="mt-0.5 flex-shrink-0" />
                              <span className="leading-tight">{house.manager}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Icon name="Phone" size={14} className="text-primary" />
                              <a 
                                href={`tel:${house.phone}`} 
                                className="text-sm text-primary font-medium hover:underline"
                              >
                                {house.phone}
                              </a>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {filteredHouses.length === 0 && (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="SearchX" className="text-primary" size={40} />
                </div>
                <h3 className="text-xl font-bold mb-2">Ничего не найдено</h3>
                <p className="text-muted-foreground">Попробуйте изменить запрос поиска</p>
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
