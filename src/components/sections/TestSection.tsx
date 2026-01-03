import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

interface Question {
  question: string;
  options: string[];
}

const TestSection = () => {
  const [testStarted, setTestStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const testQuestions: Question[] = [
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
    <section id="test" className="py-20 px-4 bg-gradient-to-b from-primary/5 to-secondary/5">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <Badge className="mb-4">Бесплатно</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Тестирование речи</h2>
          <p className="text-xl text-muted-foreground">
            Пройдите короткий тест и узнайте свой уровень речевых навыков
          </p>
        </div>

        <Card className="shadow-2xl">
          <CardContent className="pt-6">
            {!testStarted ? (
              <div className="text-center py-12">
                <Icon name="ClipboardList" size={64} className="text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Готовы начать?</h3>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  Тест займёт всего 2 минуты и поможет определить ваш текущий уровень владения речью
                </p>
                <Button size="lg" onClick={() => setTestStarted(true)}>
                  Начать тестирование
                </Button>
              </div>
            ) : answers.length < testQuestions.length ? (
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">
                      Вопрос {currentQuestion + 1} из {testQuestions.length}
                    </span>
                    <span className="text-sm font-medium">
                      {Math.round(((currentQuestion + 1) / testQuestions.length) * 100)}%
                    </span>
                  </div>
                  <Progress value={((currentQuestion + 1) / testQuestions.length) * 100} />
                </div>

                <div className="py-8">
                  <h3 className="text-xl font-semibold mb-6">
                    {testQuestions[currentQuestion].question}
                  </h3>
                  <div className="space-y-3">
                    {testQuestions[currentQuestion].options.map((option, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="w-full justify-start text-left h-auto py-4 hover:bg-primary hover:text-white transition-all"
                        onClick={() => handleAnswer(index)}
                      >
                        <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 text-sm font-medium">
                          {index + 1}
                        </span>
                        {option}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <Icon name="CheckCircle" size={64} className="text-green-600 mx-auto mb-6" />
                <h3 className={`text-2xl font-bold mb-4 ${getTestResult().color}`}>
                  {getTestResult().level}
                </h3>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  {getTestResult().description}
                </p>
                <div className="flex gap-4 justify-center">
                  <Button size="lg" onClick={resetTest} variant="outline">
                    Пройти заново
                  </Button>
                  <Button size="lg">Записаться на занятие</Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TestSection;
