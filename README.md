<h2>MEAN Stack</h2>

<img src="http://s17.postimg.org/5ulysjyxb/listacontatos.png" alt="mean stack tutorial app">

<br>Este repositório contém um exemplo simples de RESTful para uma lista de contatos utilizando o MEAN stack:

<ul>
<li>MongoDB</li>
<li>Express</li>
<li>AngularJS</li>
<li>NodeJS</li>
</ul>

<br><b>M</b>: MongoDB (Licença: GNU AGPL v. 3.0) - Um poderoso banco de dados "no-SQL", que trabalha diretamente com objetos BSON / JSON, cuja performance com grande volume de dados o torna candidato ideal a uso em aplicações de "Big data"; 
<br><br><b>E</b>: Express.js (Licença: MIT) - Um framework para criação de aplicações cliente-servidor, baseadas em Javascript e Node.js, que usem REST como API. Ele se define como um "web framework" para node.js, e faz um pouco do que o JSF e o JAX-WS fazem, no Java EE;
<br><br><b>A</b>: Angular.js (Licença: MIT) - É um framework MVC para uso em páginas HTML, muito interessante. Feito pela Google, ele permite criar páginas HTML 5 dinâmicas, com a ajuda do “two-way data binding”;
<br><br><b>N</b>: Node.js (Licença: Própria, tipo CopyLeft) - É uma aplicação que usa o engine Javascript V8, do Chrome, para criar aplicações servidoras, baseadas em "no blocking I/O", que respondem muito bem ao alto tráfego e grande volume de dados. Toda a programação da sua aplicação servidora é feita em Javascript;

Todas as ferramentas do Stack MEAN são livres, de acordo com os termos de suas licenças, e podem ser instaladas em qualquer plataforma, tanto para desenvolvimento como para produção.


<h3>Instruções</h3>

1ª passo: Instale as seguintes ferramentas <a href="https://nodejs.org/en/download/">NodeJS</a>, <a href="https://git-scm.com/downloads">Git</a> e <a href="https://www.mongodb.com/download-center?jmp=nav#community">MongoDB</a>.

2º passo: Sigua até a pasta de instalação do MongoDB e para iniciar o serviço execute o seguinte comando:

    mongod

3º passo: Faço o clone/download do repositório em sua maquina usando:

    git clone git@github.com:jhonatancarvalho/meanstackexemplo.git

4º passo: Abra a pasta do repositório clonado e instale os modulos:

    npm install

5º passo: Inicie o servidor:

    node server

Pronto, já esta tudo rodando. Acesse sua aplicação através do <a href="http://localhost:3000/">http://localhost:3000/</a>.
