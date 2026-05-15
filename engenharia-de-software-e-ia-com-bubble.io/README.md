# Engenharia de Software e IA com Bubble.io 

## 🧠 Descrição
O **LiveAssist** é um aplicativo de videoconferência inteligente que vai além das chamadas tradicionais, oferecendo modos adaptáveis para diferentes situações do dia a dia como culinária, treino físico e acessibilidade para idosos.

O objetivo é proporcionar uma experiência simples, funcional e inclusiva, com foco em usabilidade e praticidade.

---

## 🚀 Problema Resolvido
Aplicativos de videochamada tradicionais não atendem bem contextos específicos como:
- Cozinhar com as mãos ocupadas
- Treinar enquanto acompanha alguém
- Facilitar o uso para idosos

O **LiveAssist** resolve isso com interfaces adaptáveis e funcionalidades direcionadas.

---

## ✨ Funcionalidades

### 📹 Videoconferência
- Criação e entrada em salas via nome ou link
- Integração com Jitsi Meet SDK

### 🍳 Modo Culinária
- Navegação por passos de receita
- Interface limpa e hands-free
- Botões simples para avançar e repetir

### 🏋️ Modo Fitness
- Cronômetro integrado
- Contador de repetições
- Controle de séries e pausas

### 👴 Modo Acessibilidade
- Botões grandes
- Alto contraste
- Entrada facilitada em chamadas
- Feedback visual claro

---

## 🛠️ Tecnologias Utilizadas

- Kotlin
- Android Studio
- MVVM (Model-View-ViewModel)
- StateFlow / LiveData
- Jitsi Meet SDK
- Material Design 3
- Jetpack Compose (opcional)

---

## 📂 Estrutura do Projeto

com.liveassist
│
├── ui/
│   ├── main/
│   ├── cooking/
│   ├── fitness/
│   └── accessibility/
│
├── viewmodel/
│   ├── MainViewModel
│   ├── CookingViewModel
│   ├── FitnessViewModel
│
├── data/
│   └── models/
│
├── jitsi/
│
└── utils/

## ⚙️ Instalação e Execução

### 1. Clonar o repositório
```bash
git clone https://github.com/seu-usuario/liveassist.git
