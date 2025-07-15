import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const profiles = [
    {
      id: 1,
      name: "Анна",
      age: 25,
      image: "/img/a4ac0fdc-a870-4643-8c17-aa5eb4e28e0a.jpg",
      bio: "Люблю путешествия, читаю книги, занимаюсь йогой",
      interests: ["Путешествия", "Книги", "Йога"],
      aiMatch: 95
    },
    {
      id: 2,
      name: "Алексей",
      age: 28,
      image: "/img/57c5b4fb-4cf5-48f6-b9c8-b2c47a70192c.jpg",
      bio: "IT-специалист, играю на гитаре, активный образ жизни",
      interests: ["IT", "Музыка", "Спорт"],
      aiMatch: 89
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-light to-cream">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-cream-dark/20 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-indigo rounded-full flex items-center justify-center">
                <Icon name="Heart" className="text-white" size={24} />
              </div>
              <h1 className="text-2xl font-heading font-bold text-gray-900">LoveAI</h1>
            </div>
            
            <nav className="hidden md:flex space-x-6">
              <Button variant="ghost" className="text-gray-700 hover:text-indigo">
                <Icon name="Home" className="mr-2" size={18} />
                Главная
              </Button>
              <Button variant="ghost" className="text-gray-700 hover:text-indigo">
                <Icon name="Users" className="mr-2" size={18} />
                Профили
              </Button>
              <Button variant="ghost" className="text-gray-700 hover:text-indigo">
                <Icon name="MessageCircle" className="mr-2" size={18} />
                Чаты
              </Button>
              <Button variant="ghost" className="text-gray-700 hover:text-indigo">
                <Icon name="Settings" className="mr-2" size={18} />
                Настройки
              </Button>
            </nav>

            <Button className="bg-indigo hover:bg-indigo-dark text-white">
              <Icon name="User" className="mr-2" size={18} />
              Профиль
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-gray-900 mb-6">
              Знакомства с <span className="text-indigo">ИИ-помощником</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Персональный ИИ-ассистент поможет найти идеальную пару, 
              даст советы для общения и подберёт совместимых партнёров
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-indigo hover:bg-indigo-dark text-white px-8 py-3">
                <Icon name="Sparkles" className="mr-2" size={20} />
                Начать знакомство
              </Button>
              <Button size="lg" variant="outline" className="border-indigo text-indigo hover:bg-indigo hover:text-white px-8 py-3">
                <Icon name="Play" className="mr-2" size={20} />
                Как это работает
              </Button>
            </div>

            {/* AI Assistant Preview */}
            <Card className="max-w-md mx-auto bg-white/60 backdrop-blur-sm border-indigo/20 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-indigo/10 rounded-full flex items-center justify-center">
                    <Icon name="Bot" className="text-indigo" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-gray-900">ИИ-Ассистент</h3>
                    <p className="text-sm text-gray-500">Ваш персональный помощник</p>
                  </div>
                </div>
                <div className="bg-indigo/5 rounded-lg p-4 text-left">
                  <p className="text-gray-700 text-sm">
                    "Анализирую ваши предпочтения... Нашёл 3 отличных совпадения! 
                    Рекомендую начать с Анны - у вас 95% совместимости 💫"
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Profile Cards Section */}
      <section className="py-16 bg-white/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              Рекомендации ИИ
            </h3>
            <p className="text-gray-600">Персонально подобранные профили на основе ваших интересов</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {profiles.map((profile) => (
              <Card key={profile.id} className="overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="relative">
                  <img 
                    src={profile.image} 
                    alt={profile.name}
                    className="w-full h-64 object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-indigo text-white">
                    <Icon name="Sparkles" className="mr-1" size={14} />
                    {profile.aiMatch}% совпадение
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-heading font-semibold text-gray-900">
                      {profile.name}, {profile.age}
                    </h4>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="ghost" className="text-red-500 hover:bg-red-50">
                        <Icon name="X" size={18} />
                      </Button>
                      <Button size="sm" className="bg-indigo hover:bg-indigo-dark text-white">
                        <Icon name="Heart" size={18} />
                      </Button>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{profile.bio}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {profile.interests.map((interest, index) => (
                      <Badge key={index} variant="secondary" className="bg-cream text-gray-700">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button className="w-full bg-indigo hover:bg-indigo-dark text-white">
                    <Icon name="MessageCircle" className="mr-2" size={18} />
                    Написать сообщение
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              Возможности приложения
            </h3>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" className="text-indigo" size={32} />
              </div>
              <h4 className="font-heading font-semibold text-gray-900 mb-2">Умный поиск</h4>
              <p className="text-gray-600 text-sm">ИИ анализирует совместимость и подбирает идеальные пары</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MessageCircle" className="text-indigo" size={32} />
              </div>
              <h4 className="font-heading font-semibold text-gray-900 mb-2">Помощь в общении</h4>
              <p className="text-gray-600 text-sm">Советы для первого сообщения и развития диалога</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" className="text-indigo" size={32} />
              </div>
              <h4 className="font-heading font-semibold text-gray-900 mb-2">Безопасность</h4>
              <p className="text-gray-600 text-sm">Верификация профилей и защита личных данных</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Settings" className="text-indigo" size={32} />
              </div>
              <h4 className="font-heading font-semibold text-gray-900 mb-2">Настройки</h4>
              <p className="text-gray-600 text-sm">Гибкие фильтры и персонализация опыта</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-indigo rounded-full flex items-center justify-center">
                <Icon name="Heart" className="text-white" size={24} />
              </div>
              <span className="text-xl font-heading font-bold">LoveAI</span>
            </div>
            
            <div className="flex space-x-6">
              <Button variant="ghost" className="text-gray-400 hover:text-white">О нас</Button>
              <Button variant="ghost" className="text-gray-400 hover:text-white">Поддержка</Button>
              <Button variant="ghost" className="text-gray-400 hover:text-white">Конфиденциальность</Button>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 LoveAI. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;