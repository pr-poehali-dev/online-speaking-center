import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [testStarted, setTestStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const teachers = [
    {
      name: 'Мария Скокова',
      role: 'Основатель центра, ведущий логопед',
      experience: '15 лет опыта',
      specialization: 'Коррекция сложных речевых нарушений',
    },
    {
      name: 'Анна Петрова',
      role: 'Детский логопед-дефектолог',
      experience: '10 лет опыта',
      specialization: 'Работа с детьми от 3 до 12 лет',
    },
    {
      name: 'Елена Сидорова',
      role: 'Специалист по дикции',
      experience: '8 лет опыта',
      specialization: 'Постановка речи для взрослых',
    },
  ];

  const results = [
    { title: 'Улучшение дикции', value: 95, color: 'bg-primary' },
    { title: 'Расширение словарного запаса', value: 87, color: 'bg-secondary' },
    { title: 'Уверенность в речи', value: 92, color: 'bg-accent' },
    { title: 'Выразительность', value: 89, color: 'bg-primary' },
  ];

  const blogPosts = [
    {
      title: '5 упражнений для улучшения дикции',
      excerpt: 'Простые, но эффективные упражнения, которые можно выполнять каждый день',
      date: '15 декабря 2024',
    },
    {
      title: 'Как преодолеть страх публичных выступлений',
      excerpt: 'Психологические техники и речевые практики для уверенности',
      date: '10 декабря 2024',
    },
    {
      title: 'Развитие речи у детей: с чего начать',
      excerpt: 'Рекомендации логопеда для родителей малышей',
      date: '5 декабря 2024',
    },
  ];

  const testQuestions = [
    {
      question: 'Как часто вы испытываете трудности с произношением сложных слов?',
      options: ['Никогда', 'Редко', 'Иногда', 'Часто', 'Постоянно'],
    },
    {
      question: 'Насколько легко вам подобрать нужное слово в разговоре?',
      options: ['Очень легко', 'Легко', 'Средне', 'Трудно', 'Очень трудно'],
    },
    {
      question: 'Как вы оцениваете свою скорость речи?',
      options: ['Медленная', 'Умеренная', 'Быстрая', 'Очень быстрая', 'Неравномерная'],
    },
    {
      question: 'Замечаете ли вы за собой речевые ошибки?',
      options: ['Никогда', 'Редко', 'Иногда', 'Часто', 'Постоянно'],
    },
    {
      question: 'Насколько уверенно вы чувствуете себя при публичных выступлениях?',
      options: ['Очень уверенно', 'Уверенно', 'Нейтрально', 'Неуверенно', 'Очень неуверенно'],
    },
  ];

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    if (currentQuestion < testQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const getTestResult = () => {
    const avgScore = answers.reduce((sum, val) => sum + val, 0) / answers.length;
    
    if (avgScore <= 1.5) {
      return {
        level: 'Отличный уровень',
        description: 'Ваши речевые навыки на высоком уровне! Рекомендуем курсы для развития публичных выступлений.',
        color: 'text-green-600',
      };
    } else if (avgScore <= 2.5) {
      return {
        level: 'Хороший уровень',
        description: 'У вас хорошая база. Мы поможем усовершенствовать дикцию и выразительность речи.',
        color: 'text-blue-600',
      };
    } else if (avgScore <= 3.5) {
      return {
        level: 'Средний уровень',
        description: 'Есть над чем поработать! Наши специалисты помогут развить уверенность в речи.',
        color: 'text-yellow-600',
      };
    } else {
      return {
        level: 'Требуется развитие',
        description: 'Рекомендуем начать с базового курса коррекции речи. Мы поможем вам говорить уверенно!',
        color: 'text-orange-600',
      };
    }
  };

  const resetTest = () => {
    setTestStarted(false);
    setCurrentQuestion(0);
    setAnswers([]);
  };

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

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-secondary text-white">Онлайн-центр развития речи</Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Говорите{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  уверенно
                </span>{' '}
                и чётко
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Профессиональная коррекция речи и развитие дикции для детей и взрослых. Индивидуальные
                онлайн-занятия с лучшими специалистами.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection('test')} className="group">
                  Пройти тестирование
                  <Icon name="ArrowRight" size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('about')}>
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
              <img 
                src="https://cdn.poehali.dev/projects/a4bef1cb-e7ef-49ba-a6a4-db0476783268/files/752cce82-8e2d-4123-9ff1-4d44ca852265.jpg"
                alt="Развитие речи"
                className="absolute inset-0 w-full h-full object-cover rounded-3xl opacity-20"
              />
              <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <Card className="border-2 border-primary/20 animate-float" style={{ animationDelay: '0s' }}>
                    <CardContent className="p-6 text-center">
                      <Icon name="Users" size={32} className="mx-auto mb-2 text-primary" />
                      <p className="text-3xl font-bold text-primary">500+</p>
                      <p className="text-sm text-muted-foreground">Учеников</p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 border-secondary/20 animate-float" style={{ animationDelay: '0.5s' }}>
                    <CardContent className="p-6 text-center">
                      <Icon name="Award" size={32} className="mx-auto mb-2 text-secondary" />
                      <p className="text-3xl font-bold text-secondary">15</p>
                      <p className="text-sm text-muted-foreground">Лет опыта</p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 border-secondary/20 animate-float" style={{ animationDelay: '1s' }}>
                    <CardContent className="p-6 text-center">
                      <Icon name="Star" size={32} className="mx-auto mb-2 text-secondary" />
                      <p className="text-3xl font-bold text-secondary">4.9</p>
                      <p className="text-sm text-muted-foreground">Рейтинг</p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 border-primary/20 animate-float" style={{ animationDelay: '1.5s' }}>
                    <CardContent className="p-6 text-center">
                      <Icon name="TrendingUp" size={32} className="mx-auto mb-2 text-primary" />
                      <p className="text-3xl font-bold text-primary">95%</p>
                      <p className="text-sm text-muted-foreground">Прогресс</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4">О нас</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наш подход</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Используем авторские методики и современные технологии для достижения результата
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Target',
                title: 'Индивидуальный подход',
                description: 'Программа занятий составляется под каждого ученика с учётом его особенностей',
              },
              {
                icon: 'Video',
                title: 'Онлайн-формат',
                description: 'Занимайтесь из любой точки мира в удобное время',
              },
              {
                icon: 'LineChart',
                title: 'Измеримые результаты',
                description: 'Отслеживайте прогресс с помощью регулярного тестирования',
              },
              {
                icon: 'BookOpen',
                title: 'Авторские методики',
                description: 'Программы разработаны на основе 15-летнего опыта работы',
              },
              {
                icon: 'Headphones',
                title: 'Домашние задания',
                description: 'Интерактивные упражнения для закрепления навыков',
              },
              {
                icon: 'MessageCircle',
                title: 'Поддержка 24/7',
                description: 'Всегда на связи для ответов на ваши вопросы',
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl animate-fade-in hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                    <Icon name={item.icon as any} size={28} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="teachers" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4">Наша команда</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Преподаватели</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Опытные специалисты с профильным образованием и любовью к своему делу
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teachers.map((teacher, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 animate-fade-in hover:scale-105"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="h-48 bg-gradient-to-br from-primary via-secondary to-accent/50 flex items-center justify-center overflow-hidden relative">
                  <img 
                    src="https://cdn.poehali.dev/projects/a4bef1cb-e7ef-49ba-a6a4-db0476783268/files/ce035075-1402-4440-9d68-b4acb8180344.jpg"
                    alt={teacher.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{teacher.name}</CardTitle>
                  <CardDescription className="text-base">{teacher.role}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Clock" size={16} className="text-primary" />
                    <span>{teacher.experience}</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <Icon name="Sparkles" size={16} className="text-secondary mt-1 flex-shrink-0" />
                    <span>{teacher.specialization}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="results" className="py-20 px-4 bg-gradient-to-r from-secondary/5 via-primary/5 to-accent/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4">Эффективность</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Результаты наших учеников</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Средние показатели улучшения навыков после 3 месяцев занятий
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {results.map((result, index) => (
              <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{result.title}</CardTitle>
                    <span className="text-3xl font-bold text-primary">{result.value}%</span>
                  </div>
                  <Progress value={result.value} className="h-3" />
                </CardHeader>
              </Card>
            ))}
          </div>
          <Card className="bg-gradient-to-br from-primary to-secondary text-white border-none animate-scale-in">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">Отзывы учеников</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    name: 'Анна М.',
                    text: 'За 2 месяца моя дикция улучшилась на 80%! Теперь уверенно выступаю на конференциях.',
                  },
                  {
                    name: 'Дмитрий К.',
                    text: 'Мой сын стал говорить чётче и увереннее. Большое спасибо Марии за профессионализм!',
                  },
                  {
                    name: 'Елена С.',
                    text: 'Онлайн-формат очень удобен. Занималась из дома, экономя время на дорогу.',
                  },
                ].map((review, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="fill-yellow-300 text-yellow-300" />
                      ))}
                    </div>
                    <p className="text-white/90 mb-4">{review.text}</p>
                    <p className="font-semibold">{review.name}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="test" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">Диагностика</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Онлайн-тестирование</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Пройдите быстрый тест и узнайте свой уровень речевых навыков
            </p>
          </div>

          {!testStarted && answers.length === 0 && (
            <Card className="animate-scale-in">
              <CardHeader className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                  <Icon name="ClipboardList" size={40} className="text-white" />
                </div>
                <CardTitle className="text-2xl">Готовы начать?</CardTitle>
                <CardDescription className="text-base">
                  Тест займёт всего 2 минуты. Вы получите персональные рекомендации.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Button size="lg" onClick={() => setTestStarted(true)} className="group">
                  Начать тестирование
                  <Icon name="Play" size={18} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          )}

          {testStarted && answers.length < testQuestions.length && (
            <Card className="animate-fade-in">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge>Вопрос {currentQuestion + 1} из {testQuestions.length}</Badge>
                  <span className="text-sm text-muted-foreground">
                    {Math.round(((currentQuestion) / testQuestions.length) * 100)}% завершено
                  </span>
                </div>
                <Progress value={(currentQuestion / testQuestions.length) * 100} className="mb-6" />
                <CardTitle className="text-xl">{testQuestions[currentQuestion].question}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {testQuestions[currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-start text-left h-auto py-4 hover:bg-primary hover:text-white transition-all"
                    onClick={() => handleAnswer(index)}
                  >
                    <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                      {index + 1}
                    </span>
                    {option}
                  </Button>
                ))}
              </CardContent>
            </Card>
          )}

          {answers.length === testQuestions.length && (
            <Card className="animate-scale-in border-2 border-primary">
              <CardHeader className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                  <Icon name="CheckCircle" size={40} className="text-white" />
                </div>
                <CardTitle className="text-3xl mb-2">Тест завершён!</CardTitle>
                <CardDescription className="text-lg">Ваши результаты готовы</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-accent/30 rounded-2xl p-8 text-center">
                  <p className={`text-3xl font-bold mb-2 ${getTestResult().color}`}>
                    {getTestResult().level}
                  </p>
                  <p className="text-lg text-muted-foreground">{getTestResult().description}</p>
                </div>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button size="lg" onClick={() => scrollToSection('contacts')}>
                    Записаться на консультацию
                  </Button>
                  <Button size="lg" variant="outline" onClick={resetTest}>
                    Пройти ещё раз
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      <section id="blog" className="py-20 px-4 bg-gradient-to-r from-accent/10 via-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4">Полезное</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Блог</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Статьи и советы от наших специалистов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer animate-fade-in hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/30 flex items-center justify-center overflow-hidden relative">
                  <img 
                    src="https://cdn.poehali.dev/projects/a4bef1cb-e7ef-49ba-a6a4-db0476783268/files/8e8e1bcc-c510-4292-a8c6-08429d8210d6.jpg"
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Icon name="Calendar" size={14} />
                    <span>{post.date}</span>
                  </div>
                  <CardTitle className="text-xl hover:text-primary transition-colors">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Button variant="link" className="p-0 h-auto group">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">Свяжитесь с нами</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Запишитесь на бесплатную консультацию или задайте вопрос
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle>Наши контакты</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Phone" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Mail" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">info@govorim-pravilno.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Онлайн-центр</p>
                    <p className="text-muted-foreground">Работаем дистанционно по всему миру</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Режим работы</p>
                    <p className="text-muted-foreground">Пн-Вс: 9:00 - 21:00 (МСК)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <CardTitle>Записаться на консультацию</CardTitle>
                <CardDescription>Оставьте заявку, и мы свяжемся с вами</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                  <input
                    type="text"
                    placeholder="Иван Иванов"
                    className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Телефон</label>
                  <input
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <input
                    type="email"
                    placeholder="example@mail.ru"
                    className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <Button className="w-full" size="lg">
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-primary via-secondary to-primary text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Icon name="Mic" size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold">Говорим правильно</h3>
                  <p className="text-xs text-white/80">Марии Скоковой</p>
                </div>
              </div>
              <p className="text-white/80 text-sm">
                Онлайн-центр развития речи для детей и взрослых
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-white transition-colors">Главная</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">О центре</button></li>
                <li><button onClick={() => scrollToSection('teachers')} className="hover:text-white transition-colors">Преподаватели</button></li>
                <li><button onClick={() => scrollToSection('results')} className="hover:text-white transition-colors">Результаты</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><button onClick={() => scrollToSection('test')} className="hover:text-white transition-colors">Тестирование</button></li>
                <li><button onClick={() => scrollToSection('blog')} className="hover:text-white transition-colors">Блог</button></li>
                <li><button onClick={() => scrollToSection('contacts')} className="hover:text-white transition-colors">Контакты</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Соцсети</h4>
              <div className="flex gap-3">
                <button className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center">
                  <Icon name="Send" size={18} />
                </button>
                <button className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center">
                  <Icon name="Instagram" size={18} />
                </button>
                <button className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center">
                  <Icon name="Youtube" size={18} />
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
            <p>&copy; 2024 Говорим правильно. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;