# 💈GoBarber ![The MIT License](https://img.shields.io/badge/license-MIT-ligh) ![Language](https://img.shields.io/badge/language-Typescript-ligh) ![Made by](https://img.shields.io/badge/made%20by-augustorl-important)

GoBarber é uma aplicação de agendamento para auxiliar os profissionais de serviços de beleza a marcarem horário com seus respectivos clientes.


---

# Índice:

 🎨 [Layout](link)

 ⚙ [Tecnologias utilizadas](#-tecnologias)

 📦️ [Como utilizar o projeto](#%EF%B8%8F-como-utilizar-o-projeto)

 🤔️ [Como contribuir](#%EF%B8%8F-como-contribuir)
 
 🐞  [Executando testes](#-executando-testes)


---


## 🎨 Layout:

<p align="center">
  <img widht="400" height="300" alt="Gif da Aplicação" src="Assets/cellphone.png" />
  <img width="600" alt="Gif da Aplicação" src="Assets/Go barber Web.gif" />
</p>
   <a href="https://www.figma.com/file/BXCihtXXh9p37lGsENV614/GoBarber?node-id=23%3A183">
    Acessar Layout da aplicação no Figma.
   </a>


---

## ⚙ Tecnologias:
  - **Back end**
    - [NodeJS](https://nodejs.org/en/)
    - [Express](https://expressjs.com/pt-br/)
    - [Typescript](https://www.typescriptlang.org/)
    - [Typeorm](https://typeorm.io/)
    - [Postgres](https://www.postgresql.org/)
    - [Mongodb](https://www.mongodb.com/)
    - [Redis](https://redis.io/)
    - [Jest/ts-jest](https://jestjs.io/)
    - [Uuidv4](https://www.npmjs.com/package/uuidv4)
    - [Date-fns](https://date-fns.org/)
    - [Multer](https://www.npmjs.com/package/multer)
    - [Celebrate/joi]()
    - [Dotenv]()
    - [Class-transformer]()
    - [Rate-limiter-flexible]()
    - [Amazon SES](https://aws.amazon.com/pt/ses/)
    - [Amazon S3](https://aws.amazon.com/pt/s3/?sc_channel=PS&sc_campaign=acquisition_BR&sc_publisher=google&sc_medium=english_s3_b&sc_content=s3_e&sc_detail=amazon%20s3&sc_category=s3&sc_segment=89108864428&sc_matchtype=e&sc_country=BR&s_kwcid=AL!4422!3!89108864428!e!!g!!amazon%20s3&ef_id=CjwKCAjw5cL2BRASEiwAENqAPgGlCjev7lISzLorFwcq0coRS7IXGWkuVq90tELVhk8Zdli-4Kq7rBoCT34QAvD_BwE:G:s)

  - **Front end**
    - [React](https://reactjs.org/)
    - [Typescript](https://www.typescriptlang.org/)
    - [Axios](https://github.com/axios/axios)
    - [Styled-components](https://styled-components.com/)
    - [Polished](https://polished.js.org/)
    - [React-spring](https://www.react-spring.io/)
    - [Yup](https://www.npmjs.com/package/yup)
    - [Date-fns](https://date-fns.org/)
    - [React-day-picker](https://www.npmjs.com/package/react-day-picker)

  - **Mobile**
    - [React Native](https://reactnative.dev/)
    - [React-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
    - [Unform](https://github.com/Rocketseat/unform)
    - [Axios](https://github.com/axios/axios)
    - [Styled-components](https://styled-components.com/)
    - [Yup](https://www.npmjs.com/package/yup)

  - **Outras tecnologias**
    - [Docker](https://www.docker.com/)
    


---

## 📦️ Como utilizar o projeto:

> Inicialmente precisamos clonar o repositório para ter acesso a todas as pastas
```bash
  # Clonando repositório
  git clone https://github.com/augustorl/GoBarber
```

### 📥 Rodando a API

Para esse projeto é necessário utilizarmos o **docker**. Com ele instalado execute os seguintes comandos para criar os containers e inicializar as instâncias necessárias, Postgres, Mongo e Redis:

  ```bash
    # Criando container com instância do postgres
    docker run --name database -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres

    # Criando container com instância do mongo
    docker run --name mongodb -p 27017:27017 -d -t mongo

    # Criando container com instância do redis
    docker run --name redis -p 6379:6379 -d -t redis:alpine

    # Inicializando as instâncias
    docker start database mongodb redis
  ```

  Crie um arquivo *.env*, que conterá as suas variáveis de ambiente. Use *.env.example* como exemplo. Crie também um arquivo chamado *ormconfig.json* na pasta `Api` e preencha conforme o arquivo-modelo *ormconfig.example.json*. Lembre-se, antes de rodar as migrations, de criar o banco de dados e informar o nome da sua base no arquivo *ormconfig.json*.
  
  ```bash
    # Acessar a pasta do back end
    cd Api

    # Baixar as dependências
    yarn

    # Executar as migrations
    yarn typeorm migration:run

    # Inicializar o servidor de desenvolvimento
    yarn dev:server
  ```



### 💻 Instruções para o front end
 
  Após executar o passo anterior e garantir que o back end está rodando, você poderá inicializar o front end:

  ```bash
    # Acessar a apsta do front end
    cd Web

    # Baixar as dependências
    yarn

    # Inicializar a aplicação
    yarn start
  ```
 
 ### 📱 Instruções para o App Mobile
 
  Garantindo que o back end está rodando e com um celular conectado ou emulador de sua escolha você também pode testar o App para mobile, :

  ```bash
    # Acessar a apsta do front end
    cd Mobile

    # Baixar as dependências
    yarn

    # Instalar a aplicação
    yarn run android
    
    # Rodar o metro bundler
    yarn start
  ```





---

## 🤔️ Como contribuir

1. Faça o `fork` deste repositório
2. Crie uma branch com sua feature:
   - `$ git checkout -b minha_feature`
3. Confirme sua branch:
   - `$ git commit -m "feature: Meu novo recurso"`
4. Envie sua branch:
   - `$ git push origin minha_feature`



---

## 🐞 Executando testes
  
  Acesse a entidade a ser testada (Api, Web, Mobile) e execute:

  ```bash
    # Executando testes
    yarn test
  ```

--

Feito com ♥ by augustorl, [entre em contato](https://www.linkedin.com/in/augustorl) ou [visite meu portfólio.](https://www.augustoleite.com)

