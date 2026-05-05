import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Download, Smartphone, Video, Zap } from "lucide-react";
import { useLocation } from 'wouter';
import { useAuth } from '@/contexts/AuthContext';

export default function Home() {
  const [, setLocation] = useLocation();
  const { isAuthenticated } = useAuth();
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">LA</span>
            </div>
            <span className="font-bold text-lg">LiveAssist</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm hover:text-primary transition">Recursos</a>
            <a href="#modes" className="text-sm hover:text-primary transition">Modos</a>
            <a href="#download" className="text-sm hover:text-primary transition">Download</a>
          </div>
          {isAuthenticated ? (
            <Button size="sm" onClick={() => setLocation('/dashboard')}>Dashboard</Button>
          ) : (
            <Button size="sm" onClick={() => setLocation('/login')}>Entrar</Button>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663628045408/5LAaVgqEhs5ugPwxHWCZRT/liveassist_hero_bg-P7vN7A9DAT7dgEQVmtZWAX.webp"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>

        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
              ✨ Videoconferência Inteligente
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Videochamadas para <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Cada Momento</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg">
              Cozinhe com as mãos livres, treine com métricas em tempo real, ou simplesmente conecte-se com facilidade. LiveAssist adapta-se a você.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="gap-2">
                Baixar Agora <Download className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                Saiba Mais <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="hidden md:block relative h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-3xl blur-3xl" />
            <div className="relative bg-white rounded-3xl shadow-2xl p-6 border border-border">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl h-full flex items-center justify-center">
                <Smartphone className="w-24 h-24 text-white opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="py-20 bg-gradient-to-b from-background to-slate-50">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Por que LiveAssist?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Apps de videoconferência tradicionais não foram feitos para atividades práticas. Nós mudamos isso.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🍳",
                title: "Modo Culinária",
                description: "Comandos de voz hands-free, passos da receita visíveis, botões grandes para mãos ocupadas."
              },
              {
                icon: "💪",
                title: "Modo Fitness",
                description: "Cronômetro integrado, contador de repetições, séries e intervalos visíveis durante o treino."
              },
              {
                icon: "♿",
                title: "Modo Acessibilidade",
                description: "Interface simplificada, alto contraste, textos grandes, entrada automática por link direto."
              }
            ].map((item, idx) => (
              <Card key={idx} className="p-8 hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modes Showcase */}
      <section id="modes" className="py-20">
        <div className="container space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Modos Adaptáveis</h2>
            <p className="text-lg text-muted-foreground">Escolha o modo que se encaixa na sua atividade</p>
          </div>

          {/* Cooking Mode */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663628045408/5LAaVgqEhs5ugPwxHWCZRT/liveassist_mode_cooking-GWbQmQpd3KCy43UGxBhtD4.webp"
                alt="Cooking mode"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <div className="inline-block bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                🍳 Modo Culinária
              </div>
              <h3 className="text-3xl font-bold">Cozinhe Sem Preocupações</h3>
              <p className="text-lg text-muted-foreground">
                Receba instruções passo a passo enquanto suas mãos estão ocupadas. Comandos de voz como "próximo passo" e "repetir" funcionam perfeitamente.
              </p>
              <ul className="space-y-3">
                {["Passos da receita visíveis", "Comandos de voz integrados", "Botões grandes e acessíveis", "Sem necessidade de toques frequentes"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Fitness Mode */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663628045408/5LAaVgqEhs5ugPwxHWCZRT/liveassist_mode_fitness-iqFfP5LksZ3c5UAe5aiJ4r.webp"
                alt="Fitness mode"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="inline-block bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm font-medium">
                💪 Modo Fitness
              </div>
              <h3 className="text-3xl font-bold">Treine com Métrica</h3>
              <p className="text-lg text-muted-foreground">
                Acompanhe seu treino com cronômetro, contador de repetições, séries e intervalos visíveis em tempo real.
              </p>
              <ul className="space-y-3">
                {["Cronômetro integrado", "Contador de repetições", "Controle de séries e intervalos", "Visualização rápida durante exercício"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Accessibility Mode */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663628045408/5LAaVgqEhs5ugPwxHWCZRT/liveassist_mode_accessibility-DeQCVZcfLwGZ3TuxS3d6Tv.webp"
                alt="Accessibility mode"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <div className="inline-block bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                ♿ Modo Acessibilidade
              </div>
              <h3 className="text-3xl font-bold">Simples e Acessível</h3>
              <p className="text-lg text-muted-foreground">
                Interface pensada para todos. Botões grandes, textos legíveis, alto contraste e entrada automática por link direto.
              </p>
              <ul className="space-y-3">
                {["Botões grandes e claros", "Alto contraste visual", "Textos ampliados", "Entrada automática por link"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-slate-50">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Recursos Principais</h2>
            <p className="text-lg text-muted-foreground">Tudo que você precisa para videochamadas produtivas</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Video, title: "Jitsi Meet Integrado", description: "Videoconferência confiável e de código aberto" },
              { icon: Zap, title: "Sem Configuração", description: "Comece imediatamente, sem conta necessária" },
              { icon: Smartphone, title: "Responsivo", description: "Funciona perfeitamente em qualquer dispositivo" },
              { icon: CheckCircle2, title: "Acessível", description: "Projetado com acessibilidade em mente" },
              { icon: Download, title: "Offline Ready", description: "Funciona mesmo com conexão instável" },
              { icon: Zap, title: "Leve e Rápido", description: "Aplicativo otimizado para performance" }
            ].map((item, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                <item.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Tecnologia Moderna</h2>
            <p className="text-lg text-muted-foreground">Construído com as melhores ferramentas disponíveis</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "Kotlin", desc: "Linguagem moderna e segura" },
              { name: "Android SDK", desc: "Plataforma nativa robusta" },
              { name: "Jitsi Meet", desc: "Videoconferência de código aberto" },
              { name: "Material Design", desc: "Interface moderna e acessível" }
            ].map((tech, idx) => (
              <Card key={idx} className="p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="font-bold mb-2">{tech.name}</h3>
                <p className="text-sm text-muted-foreground">{tech.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">Pronto para Começar?</h2>
          <p className="text-xl text-blue-50 max-w-2xl mx-auto">
            Baixe o LiveAssist agora e transforme suas videochamadas em experiências adaptadas às suas necessidades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" variant="secondary" className="gap-2">
              Baixar para Android <Download className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Ver Documentação <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-background">
        <div className="container space-y-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">LA</span>
                </div>
                <span className="font-bold">LiveAssist</span>
              </div>
              <p className="text-sm text-muted-foreground">Videoconferência inteligente e acessível.</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold">Produto</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">Recursos</a></li>
                <li><a href="#" className="hover:text-foreground transition">Modos</a></li>
                <li><a href="#" className="hover:text-foreground transition">Preços</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold">Empresa</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">Sobre</a></li>
                <li><a href="#" className="hover:text-foreground transition">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition">Contato</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">Privacidade</a></li>
                <li><a href="#" className="hover:text-foreground transition">Termos</a></li>
                <li><a href="#" className="hover:text-foreground transition">Licença</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">© 2026 LiveAssist. Todos os direitos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-foreground transition">GitHub</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition">Twitter</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
