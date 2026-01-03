import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
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
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Учеников</div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/5">
                  <div className="text-4xl font-bold text-secondary mb-2">15</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5">
                  <div className="text-4xl font-bold text-accent mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Результат</div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10">
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Онлайн</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
