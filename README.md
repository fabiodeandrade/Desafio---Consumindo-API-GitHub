# Desafio - Consumindo API GitHub ![](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
 
![appCover](./assets/app.jpg)
![](https://img.shields.io/badge/F%C3%A1bio%20de%20Andrade-GitHub-green) ![](https://img.shields.io/badge/Javascript-Axios-blue) ![](https://img.shields.io/badge/html5-CSS3-brow)
 
### 🎛️ Dependencias
 
- [Bootstrap Icons](https://icons.getbootstrap.com/)
 
### 🎯 Objetivo
Nos últimos dias eu estava conversando com um amigo que comentou sobre o processo seletivo dele para uma empresa de tecnologia, é nesse processo ele passou por uma entrevista pessoal e ***code interview*** com a avaliação do seu código de solução para o seguinte teste.
 
> **Crie um card para o consumo da API do GitHub e retorne até 3 informações do usuário**
 
E foi a partir desse teste que me desafiei para fazê-lo também.
 
Até a versão atual, eu levei cerca de **3 horas** para a conclusão, incluindo a correção de bugs e aprendendo alguns conceitos novos que implementei para a minha solução.
 
 
### 🤯 Como foi feito?
 
Para a parte visual me desafiei a desenvolver o card sem usar nenhum framework para CSS, e o principal conceito a ser usado foi o `display: flex;` pela sua facilidade de manipulação. Inclusive se você tiver alguma dúvida em como utilizar o **Flexbox** preparei um [repositório](https://github.com/fabiodeandrade/Flexbox) da utilização dele de forma bem prática.
 
O **CSS Units** foi essencial para a criação do layout pois a utilização das medidas em `vh`, `vw`, `rem` e `%` nos elementos para que já fossem alinhados nativamente a qualquer tipo de dispositivo.
 
Para esse projeto usei o conceito de **Mobile First** e adaptando para desktop ao longo do projeto.
 
Assim como não utilizei frameworks para a construção, fiz o mesmo para o consumo da API, pensei em usar o Axios, mas resolvi fazer pelo `fetch()` mesmo e ir resolvendo _"na unha"_ os primeiros bugs que iam surgindo.
 
A lógica para o consumo foi construída em cima da manipulação do DOM e atribuição separada de variáveis para cada informação retirada do `response` enviado pela **API**.
 
E o tratamento de erros feito da forma padrão, tratando o `rejected` como um erro sendo jogado para o `console.log()`.
 
 
 
### 🔧 Próximos passos
 
- Refatoração do código visando performance
- Ajuste de layout para todos os dispositivos incluindo desktop
- Pequenos ajustes de designe
- Tratamente de erros
- Validações
 
 

