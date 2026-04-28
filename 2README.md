# 📦 Sistema de Gestão de Estoque (DS Estoque)
 ## 📝 Descrição do Projeto
Este projeto consiste em um sistema de gerenciamento de estoque centralizado, desenvolvido para otimizar o controle de mercadorias em lojas de acessórios com alta demanda. O objetivo principal é mitigar falhas na reposição de produtos, oferecendo controle de quantidades em tempo real e alertas automáticos para itens com baixo volume em estoque.
 
Desenvolvido como parte da disciplina de **Modelagem de Banco de Dados (2025)**, o sistema processa informações cruciais como fluxo de vendas, cálculo de lucros e aplicação de descontos. A estrutura foi projetada para identificar padrões de consumo (ex: produtos mais vendidos por marca) e garantir a integridade dos dados através de normas de normalização.
 

*Figura 1: Dashboard principal do sistema exibindo níveis de estoque e alertas de reposição.*
 ## 🚀 Tecnologias e Conceitos Utilizados
* **Conceitos de Dados:** Transformação de Dados Brutos em Informação Estratégica, Diferenciação entre Dados Estruturados e Não Estruturados.
* **Modelagem:** Entidades e Relacionamentos, Cardinalidade, Normalização (1FN, 2FN e 3FN).
* **Ferramentas:** Diagramas de Modelo Lógico e Documentação de Artefatos de Software.
 ## 📊 Resultados e Aprendizados
O projeto estabeleceu uma base sólida para a gestão operacional, demonstrando eficácia na organização lógica dos dados da loja.
* **Normalização Completa:** O modelo atingiu conformidade com a **3ª Forma Normal (3FN)**, eliminando redundâncias e dependências transitivas.
* **Qualificação de Dados:** Implementação de distinção entre dados estruturados (preços, quantidades) e não estruturados (anotações do lojista, arquivos PDF) para melhor processamento.
* **Visão de Negócio:** O sistema foi configurado para alertar automaticamente quando um produto atinge menos de 2 unidades, garantindo a continuidade das vendas.
 
![Gráfico de Entidades e Relacionamentos](IMAGEM_2_AQUI)
*Figura 2: Modelo lógico do banco de dados detalhando tabelas de Produtos, Vendas e Fornecedores.*
 ## 🔧 Como Executar
1. **Definição do Minimundo:** Analise os requisitos de escopo e limites do sistema de estoque.
2. **Modelagem Lógica:** Identifique as entidades principais (Produto, Estoque, Fornecedor, Venda, Usuário) e seus atributos.
3. **Validação de Integridade:** Aplique os checklists de normalização para assegurar que cada atributo dependa exclusivamente da chave primária.
 
![Fluxograma de Processos de Venda e Baixa de Estoque](IMAGEM_3_AQUI)
*Figura 3: Representação visual do pipeline de dados: da venda do produto à atualização automática do estoque.*
 
---
**Equipe:** Alana Araújo, Matheus Gomes, Eduardo Garrido, Kaio Teobaldo, Heitor Mesquita, José Marcos, Brenno Alves da Silva.
 
[Voltar ao início](https://github.com/seu-usuario/seu-usuario)
