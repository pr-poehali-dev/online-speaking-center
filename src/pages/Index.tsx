import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';
import HeroSection from '@/components/sections/HeroSection';
import TeachersSection from '@/components/sections/TeachersSection';
import TestSection from '@/components/sections/TestSection';
import BlogSection from '@/components/sections/BlogSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const results = [
    { title: 'Улучшение дикции', value: 95, color: 'bg-primary' },
    { title: 'Расширение словарного запаса', value: 87, color: 'bg-secondary' },
    { title: 'Уверенность в речи', value: 92, color: 'bg-accent' },
    { title: 'Выразительность', value: 89, color: 'bg-primary' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-accent/20 to-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Mic" size={20} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Говорим правильно</h1>
                <p className="text-xs text-muted-foreground">Марии Скоковой</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection('home')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                О центре
              </button>
              <button
                onClick={() => scrollToSection('teachers')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Преподаватели
              </button>
              <button
                onClick={() => scrollToSection('results')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Результаты
              </button>
              <button
                onClick={() => scrollToSection('test')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Тестирование
              </button>
              <button
                onClick={() => scrollToSection('blog')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Блог
              </button>
              <button
                onClick={() => scrollToSection('contacts')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Контакты
              </button>
            </div>
            <Button onClick={() => scrollToSection('contacts')}>Записаться</Button>
          </div>
        </div>
      </nav>

      <HeroSection scrollToSection={scrollToSection} />

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">О нас</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-muted-foreground">
              Мы используем современные методики и индивидуальный подход
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Sparkles',
                title: 'Современные методики',
                description: 'Используем проверенные техники и инновационные подходы',
              },
              {
                icon: 'Users',
                title: 'Индивидуальный подход',
                description: 'Программа адаптируется под ваши цели и возможности',
              },
              {
                icon: 'Video',
                title: 'Онлайн занятия',
                description: 'Занимайтесь из любой точки мира в удобное время',
              },
              {
                icon: 'TrendingUp',
                title: 'Быстрые результаты',
                description: 'Первые улучшения заметны уже через 2-3 недели',
              },
              {
                icon: 'BookOpen',
                title: 'Все возрасты',
                description: 'Работаем с детьми от 3 лет и взрослыми любого возраста',
              },
              {
                icon: 'Award',
                title: 'Сертификаты',
                description: 'По окончании курса выдаём сертификат',
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={feature.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <TeachersSection />

      <section id="results" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">Результаты</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Что улучшают наши ученики</h2>
            <p className="text-xl text-muted-foreground">
              Средние показатели улучшения после курса
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {results.map((result, index) => (
              <Card key={index} className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold">{result.title}</h3>
                  <span className="text-2xl font-bold text-primary">{result.value}%</span>
                </div>
                <Progress value={result.value} className="h-3" />
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Анна М.',
                text: 'Через месяц занятий моя дочь начала говорить намного чётче. Спасибо!',
                rating: 5,
              },
              {
                name: 'Дмитрий К.',
                text: 'Отличные занятия! Помогли подготовиться к важной презентации.',
                rating: 5,
              },
              {
                name: 'Елена В.',
                text: 'Профессиональный подход и видимые результаты. Рекомендую!',
                rating: 5,
              },
            ].map((review, index) => (
              <Card key={index} className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">{review.text}</p>
                <p className="font-semibold">{review.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <TestSection />
      <BlogSection />

      <section id="contacts" className="py-20 px-4 bg-gradient-to-b from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">Контакты</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Запишитесь на занятие</h2>
            <p className="text-xl text-muted-foreground">
              Оставьте заявку и мы свяжемся с вами в ближайшее время
            </p>
          </div>

          <Card className="shadow-2xl">
            <CardContent className="pt-6">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Иван Иванов"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+7 (999) 999-99-99"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="example@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <textarea
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary min-h-32"
                    placeholder="Расскажите о ваших целях и пожеланиях..."
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Отправить заявку
                </Button>
              </form>

              <div className="mt-12 pt-8 border-t border-border">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <Icon name="Mail" size={24} className="text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">info@govorim-pravilno.ru</p>
                  </div>
                  <div>
                    <Icon name="Phone" size={24} className="text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">+7 (999) 123-45-67</p>
                  </div>
                  <div>
                    <Icon name="Clock" size={24} className="text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Пн-Вс: 9:00 - 21:00</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 bg-white border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Mic" size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Говорим правильно</h3>
                <p className="text-xs text-muted-foreground">Марии Скоковой</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Онлайн-центр развития речи и коррекции дикции
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" size="icon" className="rounded-full">
                <Icon name="MessageCircle" size={20} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Icon name="Youtube" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
