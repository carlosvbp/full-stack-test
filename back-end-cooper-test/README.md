
<h3>Documentação swagger</h3>

<h4>https://full-stack-test-krxw.onrender.com/api-documentation/</h4>

<h3>Base Url da API</h3>

<h4>https://full-stack-test-krxw.onrender.com</h4>

<h3>Back-end</h3>



<h3>Comando de inicialização:</h3>


<p>npm init -y</p>

<p>Para instalar todas as dependências listadas nesse arquivo, você pode usar o comando npm install ou yarn install, dependendo de qual gerenciador de pacotes você está usando.</p>

<h4>Lembre-se de que você deve ter o Node.js e o npm (ou Yarn) instalados localmente em seu sistema para executar esses comandos!</h4>

<h4>Se você estiver trabalhando em um projeto TypeScript, também pode haver a necessidade de instalar as definições de tipos do TypeScript. Você pode fazer isso executando:</h4>

<p>npm install --save-dev @types/node</p>
<p>ou<p>
<p>yarn add --dev @types/node</p>

<h4>Esses comandos instalarão as definições de tipos do Node.js para TypeScript.</h4>


<h3>Migração</h3>

<p>Para migrações dinâmicas, no package.json em scripts adicione:</p>

```json
{
    "scripts": {
    "dev": "ts-node-dev --ignore-watch node_modules src/server.ts",
    "typeorm": "typeorm-ts-node-commonjs",
    "typeorm:generate": "typeorm-ts-node-commonjs migration:generate -d src/data-source",
    "typeorm:run": "typeorm-ts-node-commonjs migration:run -d src/data-source"
  }
}
``` 


<h4>comando para gerar a migração:<h4>
<h3>npm run typeorm:generate src/migrations/nomeDaMigration<h3>

<h4>comando para executar as migrações:<h4>
<h3>npm run typeorm:run</h3>

<h4>comando para reverter a migração:<h4>
<h3>npm run typeorm migration:revert -- -d src/data-source</h3>

<h3>se estiver usando npm não esquecer do -- se estiver usando yarn não precisa do --<h3>


<h3>.env</h3>

<h4>Siga os passos do .env.example e crie um .env com sua informações.</h4>

<h3>PORT=application_run_port<h3>
<h3>DATABASE_URL="postgres://user:password@host:port/db"<h3>
<h3>SECRET_KEY=JWTSecret<h3>
<h3>EXPIRES_IN=jwt_expires_in<h3>


<h3>Relacionamentos:</h3>

<h4>
Criaram duas entidades, uma para usuário e outra para tarefas, ocorre
relacionamento OneToMany entre usuário e tarefas que são atreladas à ele.
</h4>
