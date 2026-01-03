import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Teacher {
  name: string;
  role: string;
  experience: string;
  specialization: string;
}

const TeachersSection = () => {
  const teachers: Teacher[] = [
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

  return (
    <section id="teachers" className="py-20 px-4 bg-white/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="mb-4">Наша команда</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши специалисты</h2>
          <p className="text-xl text-muted-foreground">
            Команда профессионалов с многолетним опытом
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className="h-48 bg-gradient-to-br from-primary via-secondary to-accent/50 flex items-center justify-center overflow-hidden relative">
                <img 
                  src="https://cdn.poehali.dev/projects/a4bef1cb-e7ef-49ba-a6a4-db0476783268/files/ce035075-1402-4440-9d68-b4acb8180344.jpg"
                  alt={teacher.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{teacher.name}</CardTitle>
                <CardDescription>{teacher.role}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Icon name="Award" size={16} className="text-primary" />
                  <span>{teacher.experience}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Icon name="Star" size={16} className="text-secondary" />
                  <span>{teacher.specialization}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachersSection;
