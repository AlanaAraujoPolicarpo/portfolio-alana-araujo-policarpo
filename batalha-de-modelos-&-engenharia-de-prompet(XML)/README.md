# SM3 - Batalha de Modelos & Engenharia de Prompt (XML)


## 📖 Descrição

Experimento comparativo entre diferentes modelos de Inteligência Artificial utilizando um prompt estruturado em XML para geração de uma página HTML Single Page com CSS integrado.

O objetivo foi analisar a interpretação do prompt, qualidade do código, criatividade visual, precisão técnica e consumo de tokens entre diferentes IAs.

---

# 🧩 Prompt Estruturado em XML

```xml
<tarefa>
    <objetivo>
        Criar uma página HTML5 única com CSS3 interno (single page).
    </objetivo>

    <tema>
        Loja de roupa
    </tema>

    <diretrizes_design>
        <layout>Responsivo e minimalista.</layout>
        <paleta_cores>Vermelho e preto</paleta_cores>
        <tipografia>
            Sans-serif para títulos, Serif para corpo.
        </tipografia>
    </diretrizes_design>

    <obrigatoriedades_tecnicas>
        <item>Menu de navegação funcional (âncoras).</item>
        <item>Seção de portfólio ou galeria.</item>
        <item>Rodapé com informações de contato simuladas.</item>
        <item>Vestido e moletom.</item>
    </obrigatoriedades_tecnicas>

    <metrica_obrigatoria>
        Ao final da resposta, informe uma estimativa
        de quantos tokens foram gerados para este código.
    </metrica_obrigatoria>
</tarefa>
```

---

# 🤖 Modelos Testados

* ChatGPT
* Gemini
* DeepSeek
* Qwen
* Grok
* Maritaca
* Claude

---

# 📊 Análise Comparativa

| Critério           | GPT               | Gemini      | DeepSeek    | Qwen         | Grok                | Maritaca     | Claude               |
| ------------------ | ----------------- | ----------- | ----------- | ------------ | ------------------- | ------------ | -------------------- |
| Precisão do Prompt | Aceitável         | Bom         | Ótimo       | Bom          | Bom                 | Ruim         | Ótimo                |
| Precisão do HTML   | Médio             | Ótimo       | Médio       | Bom          | Ótimo               | Ruim         | Médio                |
| Criatividade       | Ruim              | Bom         | Médio       | Ótimo        | Bom                 | Ruim         | Ótimo                |
| Bugs/Sintaxe       | Imagens quebradas | Funcionando | Funcionando | Alguns erros | Imagens incoerentes | Botões ruins | Problemas em imagens |
| Tokens             | 1.200             | 1.050       | 4.880       | 850          | 4.850               | 650          | 4.200                |

---

# 🧠 Reflexão Crítica

## 🔹 Qual modelo demonstrou maior compreensão do XML?

O Claude apresentou melhor interpretação estrutural do prompt XML, entregando um HTML mais complexo, organizado e visualmente interessante.

---

## 🔹 Houve diferença significativa na quantidade de tokens?

Sim. Modelos como GPT, Maritaca e Qwen utilizaram menos tokens. Porém, o Qwen conseguiu manter uma boa qualidade mesmo com baixo consumo.

---

## 🔹 Melhor IA para cada cenário

### ⚡ Prototipagem Rápida

Qwen — gerou um HTML simples, funcional e versátil com poucos tokens.

### 🛠️ Projetos Complexos

Claude — apresentou maior qualidade estrutural, melhor design e HTML mais robusto.

---

# 🛠️ Tecnologias Utilizadas

* HTML5
* CSS3
* XML Prompt Engineering
* Inteligência Artificial Generativa

---

# 📚 Matéria

Engenharia de Prompt e Aplicações em Inteligência Artificial.
