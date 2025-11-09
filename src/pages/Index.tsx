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
    { id: 6, address: 'Кондратьевский просп., д. 66, корп. 1', manager: 'Наталья Валерьевна Машкарина', phone: '8 (931) 240-22-37' },
    { id: 7, address: 'Кондратьевский просп., д. 62, корп. 2', manager: 'Наталья Валерьевна Машкарина', phone: '8 (931) 240-22-37' },
    { id: 8, address: 'ул. Васенко, д. 12, литера А (ЖК "Золотое сечение")', manager: 'Екатерина Васильевна Павлова', phone: '+7 (921) 334-43-74' },
    { id: 10, address: 'Фермское ш., д. 22, корп. 3', manager: 'Павел Львович Моисеев', phone: '8 (921) 954-31-94' },
    { id: 11, address: 'Петровский просп., д. 5, стр. 1 (ЖК "Остров")', manager: 'Евдокимов Сергей Борисович', phone: '8 (921) 632-48-39' },
    { id: 12, address: 'ул. Большая Зеленина, д. 24, стр. 1 (БЦ "Грани")', manager: 'Галина Алексеевна Рожкова', phone: '8 (993) 641-35-95' },
    { id: 13, address: 'Приморское ш., д. 352, стр. 1 (ЖК "Пляж")', manager: 'Павлюк Александр Васильевич', phone: '8 (931) 251-10-40' },
    { id: 14, address: 'Кондратьевский просп., д. 62, корп. 7 (ЖК "Панорама")', manager: 'Наталья Валерьевна Машкарина', phone: '8 (931) 240-22-37' },
  ];

  const news = [
    { id: 1, title: 'Плановое отключение воды', date: '15.11.2025', category: 'water', tag: 'Важно' },
    { id: 2, title: 'Ремонт козырька подъезда №3', date: '12.11.2025', category: 'repair', tag: 'Благоустройство' },
    { id: 3, title: 'Замена счетчиков на ул. Ленина, 45', date: '10.11.2025', category: 'electric', tag: 'Электроснабжение' },
    { id: 4, title: 'График уборки придомовой территории', date: '08.11.2025', category: 'info', tag: 'Информация' },
  ];

  const services = [
    { icon: 'Building2', title: 'Управление', description: 'Администрирование и финансовое обслуживание' },
    { icon: 'Wrench', title: 'Техническое обслуживание', description: 'Инженерные системы и текущий ремонт' },
    { icon: 'Sparkles', title: 'Санитарное содержание', description: 'Уборка МОП и придомовой территории' },
    { icon: 'Shield', title: 'Безопасность', description: 'Охрана и видеонаблюдение 24/7' },
  ];

  const stats = [
    { value: '1 млн м²', label: 'Обслуживаемой площади' },
    { value: '50+', label: 'Многоквартирных домов' },
    { value: '13', label: 'Паркингов' },
    { value: '18 лет', label: 'Оказываем услуги' },
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
                <h1 className="text-xl font-bold text-gray-900">ГК "Наш дом"</h1>
                <p className="text-xs text-muted-foreground">Управление недвижимостью с 2007 года</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              <a 
                href="#about" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
              >
                О компании
              </a>
              <a 
                href="#services" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
              >
                Услуги
              </a>
              <a 
                href="#houses" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('houses')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
              >
                Дома
              </a>
              <a 
                href="#news" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('news')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
              >
                Новости
              </a>
              <a 
                href="#contacts" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
              >
                Контакты
              </a>
            </nav>
            <Button className="bg-gradient-to-r from-primary to-secondary">
              <Icon name="LogIn" size={16} className="mr-2" />
              Личный кабинет
            </Button>
          </div>
        </div>
      </header>

      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-pink-500/20 animate-pulse"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">С 2007 года</Badge>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Группа управляющих компаний «Наш дом»
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Высокий уровень клиентского сервиса, чтобы быть полезными для наших жителей в любое время и по любому вопросу
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-gradient-to-br from-white via-primary/5 to-secondary/5 backdrop-blur-sm rounded-lg p-4 border-2 border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-scale-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <p className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
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

      <section id="about" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-3">О компании</h3>
            <p className="text-muted-foreground">Профессионалы в сфере управления недвижимостью</p>
          </div>

          <div className="space-y-8">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Info" className="text-primary" size={20} />
                  </div>
                  История компании
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground leading-relaxed">
                <p>
                  Группа управляющих компаний «Наш дом» создана профессионалами в сфере эксплуатации жилой недвижимости в 2007 году. 
                  Мы занимаемся обслуживанием и управлением домами, регулярно модернизируем сервис ЖКХ. 
                  Находим и внедряем лучшие из возможных решений в сфере управления жилой недвижимостью.
                </p>
                <p className="mt-3">
                  Это, прежде всего, команда единомышленников, объединившая молодых специалистов и опытных квалифицированных сотрудников, 
                  работающих в сфере управления жилищно-коммунальным хозяйством не один год.
                </p>
              </CardContent>
            </Card>

            <div>
              <h4 className="text-xl font-bold mb-6">Основные принципы работы</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card className="border-l-4 border-l-primary">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <Icon name="TrendingUp" className="text-primary" size={18} />
                      Прогрессивные методы
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Комплексный подход к управлению для получения максимального результата
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-primary">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <Icon name="Heart" className="text-primary" size={18} />
                      Забота о комфорте
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Системный и последовательный подход к решению текущих проблем жителей
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-primary">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <Icon name="DollarSign" className="text-primary" size={18} />
                      Демократичные цены
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Справедливая ценовая политика и прозрачность расчетов
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-primary">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <Icon name="Users" className="text-primary" size={18} />
                      Квалифицированные специалисты
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Использование труда исключительно высококвалифицированных специалистов
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-primary">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <Icon name="Target" className="text-primary" size={18} />
                      Качество услуг
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Улучшение и совершенствование качества оказываемых услуг
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-primary">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <Icon name="TrendingDown" className="text-primary" size={18} />
                      Снижение затрат
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Снижение стоимости обслуживания жилищного фонда и потребляемых услуг
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6">Ключевые задачи компании</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <Icon name="Shield" className="text-primary" size={18} />
                      Сохранность жилищного фонда
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Организация работ, направленных на сохранность жилищного фонда, улучшение качественных характеристик предоставления жилищно-коммунальных услуг населению
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <Icon name="Home" className="text-primary" size={18} />
                      Комфортные условия
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Обеспечение комфортных условий проживания в жилищном фонде граждан в соответствии с государственными стандартами качества
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <Icon name="Wrench" className="text-primary" size={18} />
                      Техническое обслуживание
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Обеспечение санитарного содержания, технического обслуживания и ремонта жилищного фонда в соответствии с действующими нормативами
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <Icon name="FileText" className="text-primary" size={18} />
                      Прозрачность расчетов
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Обеспечение системы предоставления жилищных и коммунальных услуг, их оплаты в соответствии с реально достигнутым качеством и количеством
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <Icon name="MessageSquare" className="text-primary" size={18} />
                      Работа с населением
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Проведение разъяснительной работы с населением, направленной на повышение сохранности жилищного фонда и снижение энергопотребления
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <Icon name="CircleDollarSign" className="text-primary" size={18} />
                      Финансовая прозрачность
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Организация сбора платежей от населения, расчета с поставщиками коммунальных услуг и подрядными организациями за выполненные работы
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-3">Наши услуги</h3>
            <p className="text-muted-foreground">Комплексное обслуживание жилых комплексов</p>
          </div>

          <div className="space-y-8">
            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <img 
                    src="https://cdn.poehali.dev/projects/d01bf307-6771-4ae0-9cce-7a6e51e08c1a/files/f3e0ac45-71d6-44fc-ab7d-9fdf9fad3f5c.jpg" 
                    alt="Управление недвижимостью" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Building2" className="text-primary" size={24} />
                    </div>
                    <h4 className="text-2xl font-bold">Управление</h4>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <h5 className="font-semibold text-foreground mb-2">Администрирование:</h5>
                      <p className="text-sm">Организация и контроль всех рабочих процессов, происходящих в многоквартирном доме, урегулирование взаимоотношений с собственниками.</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground mb-2">Финансовое обслуживание:</h5>
                      <p className="text-sm">Финансовое планирование, бухгалтерский учет, учет расчетов с собственниками и обслуживающими организациями.</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground mb-2">Юридическое сопровождение:</h5>
                      <p className="text-sm">Полное юридическое сопровождение договорной деятельности.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="p-8 order-2 md:order-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Wrench" className="text-primary" size={24} />
                    </div>
                    <h4 className="text-2xl font-bold">Техническое обслуживание</h4>
                  </div>
                  <div className="space-y-3 text-muted-foreground text-sm">
                    <div className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={16} />
                      <p>Техническое обслуживание инженерных систем здания</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={16} />
                      <p>Технический надзор за состоянием общего имущества дома путем проведения плановых общих и частичных осмотров</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={16} />
                      <p>Выполнение мероприятий по подготовке к сезонной эксплуатации общего имущества дома</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={16} />
                      <p>Текущий ремонт общего имущества дома, предупреждение преждевременного износа конструкций и инженерных систем</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={16} />
                      <p>Незамедлительная организация устранения аварий и неисправностей общего имущества дома</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={16} />
                      <p>Выполнение различных работ по заявкам жителей</p>
                    </div>
                  </div>
                </div>
                <div className="relative h-64 md:h-auto order-1 md:order-2">
                  <img 
                    src="https://cdn.poehali.dev/projects/d01bf307-6771-4ae0-9cce-7a6e51e08c1a/files/1d8ada01-d620-47e0-b8f4-b30045bb0f43.jpg" 
                    alt="Техническое обслуживание" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <img 
                    src="https://cdn.poehali.dev/projects/d01bf307-6771-4ae0-9cce-7a6e51e08c1a/files/3f4a65bc-c23a-469c-b070-5dc00d22166a.jpg" 
                    alt="Санитарное содержание" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Sparkles" className="text-primary" size={24} />
                    </div>
                    <h4 className="text-2xl font-bold">Санитарное содержание и благоустройство</h4>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <h5 className="font-semibold text-foreground mb-2">Санитарное содержание:</h5>
                      <ul className="text-sm space-y-2">
                        <li className="flex items-start gap-2">
                          <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={16} />
                          <span>Поддержание в надлежащем санитарном состоянии дома и прилегающего земельного участка</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={16} />
                          <span>Сбор и вывоз мусора</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground mb-2">Благоустройство:</h5>
                      <ul className="text-sm space-y-2">
                        <li className="flex items-start gap-2">
                          <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={16} />
                          <span>Уход за зелеными насаждениями</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={16} />
                          <span>Обслуживание предметов интерьера на территории и в местах общего пользования</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={16} />
                          <span>Разработка предложений и проектов по благоустройству дома и придомовой территории</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Shield" className="text-primary" size={24} />
                    </div>
                    <CardTitle className="text-xl">Обеспечение безопасности</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={16} />
                      <span>Круглосуточная охрана жилого комплекса, паркинга и прилегающей внутридворовой территории</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={16} />
                      <span>Организация службы видеонаблюдения и контроля</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={16} />
                      <span>Взаимодействие с органами полиции и пожарной инспекции</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-destructive/10 to-destructive/20 rounded-lg flex items-center justify-center">
                      <Icon name="AlertTriangle" className="text-destructive" size={24} />
                    </div>
                    <CardTitle className="text-xl">Аварийная диспетчерская служба</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Круглосуточное дежурство диспетчера для постоянного контроля за состоянием инженерных систем дома, 
                    вызова аварийных служб и обращений жителей при аварийных ситуациях.
                  </p>
                  <Button className="w-full bg-destructive hover:bg-destructive/90">
                    <Icon name="Phone" size={16} className="mr-2" />
                    Связаться со службой
                  </Button>
                </CardContent>
              </Card>
            </div>
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
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="meters">
                <Icon name="Gauge" size={16} className="mr-2" />
                Показания
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
            <p className="text-muted-foreground">50+ многоквартирных домов и 13 паркингов</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {houses.slice(0, 6).map((house, idx) => (
                <Card 
                  key={house.id} 
                  className="hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 hover:border-primary/30 animate-fade-in"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary via-secondary to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Icon name="Building2" className="text-white" size={20} />
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
                        <a href={`tel:${house.phone}`} className="text-sm text-primary font-medium hover:underline">{house.phone}</a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button 
                size="lg" 
                onClick={() => window.location.href = '/houses'}
                className="bg-gradient-to-r from-primary via-secondary to-pink-500 hover:shadow-xl transition-all duration-300"
              >
                <Icon name="Building2" size={18} className="mr-2" />
                Все дома в управлении
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </Button>
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
            {filteredNews.map((item, idx) => (
              <Card key={item.id} className="hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 hover:border-primary/30 animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
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
                  <CardDescription><a href="tel:+78126408826" className="hover:text-primary transition-colors">+7 (812) 640-88-26</a></CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center border-2 border-destructive/50 bg-destructive/5">
                <CardHeader>
                  <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name="AlertTriangle" className="text-destructive" size={24} />
                  </div>
                  <CardTitle className="text-lg text-destructive">Аварийная служба</CardTitle>
                  <CardDescription className="text-destructive font-bold text-xl">Круглосуточно</CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name="Mail" className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-lg">Email</CardTitle>
                  <CardDescription><a href="mailto:uk.nashdom@inbox.ru" className="hover:text-primary transition-colors">uk.nashdom@inbox.ru</a></CardDescription>
                </CardHeader>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Офис компании</CardTitle>
                <CardDescription>Группа управляющих компаний «Наш дом»</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="p-4 bg-muted/50 rounded-lg space-y-3">
                  <div className="flex items-center gap-3">
                    <Icon name="Clock" className="text-primary" size={20} />
                    <div>
                      <p className="text-sm font-semibold">График работы:</p>
                      <p className="text-sm text-muted-foreground">Пн-Чт: 09:00 – 18:00</p>
                      <p className="text-sm text-muted-foreground">Пт: 09:00 – 17:00</p>
                      <p className="text-sm text-muted-foreground">Обед: 13:00-14:00</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" className="text-primary" size={20} />
                    <div>
                      <p className="text-sm font-semibold">Телефон:</p>
                      <a href="tel:+78126408826" className="text-sm text-primary hover:underline">+7 (812) 640-88-26</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" className="text-primary" size={20} />
                    <div>
                      <p className="text-sm font-semibold">Email:</p>
                      <a href="mailto:uk.nashdom@inbox.ru" className="text-sm text-primary hover:underline">uk.nashdom@inbox.ru</a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white py-12 px-4 shadow-2xl">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">О компании</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
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
            <p>© 2007–2025 Группа управляющих компаний «Наш дом»</p>
            <div className="flex gap-4 text-xs">
              <a href="tel:+78126408826" className="hover:text-white transition-colors">+7 (812) 640-88-26</a>
              <a href="mailto:uk.nashdom@inbox.ru" className="hover:text-white transition-colors">uk.nashdom@inbox.ru</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}