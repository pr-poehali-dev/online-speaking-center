import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
}

const BlogSection = () => {
  const blogPosts: BlogPost[] = [
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

  return (
    <section id="blog" className="py-20 px-4 bg-white/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="mb-4">Блог</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Полезные статьи</h2>
          <p className="text-xl text-muted-foreground">
            Советы и упражнения от наших специалистов
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-pointer"
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/30 flex items-center justify-center overflow-hidden relative">
                <img 
                  src="https://cdn.poehali.dev/projects/a4bef1cb-e7ef-49ba-a6a4-db0476783268/files/8e8e1bcc-c510-4292-a8c6-08429d8210d6.jpg"
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <Icon name="Calendar" size={14} />
                  <span>{post.date}</span>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">{post.title}</CardTitle>
                <CardDescription>{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                  Читать далее
                  <Icon name="ArrowRight" size={16} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
