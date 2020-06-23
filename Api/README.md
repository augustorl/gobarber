# Recuperação de Senha

(Requisitos Funcionais):**RF**

- O Usuário deve poder recuperar sua senha informando o seu e-mail;
- O Usuário deve receber um e-mail com instruções de recuperação de senha;
- O Usuário deve poder resetar sua senha;

(Requisitos Não Funcionais)**RNF**

- Utilizar Mailtrap para testar envios de email em ambiente de desenvolvimento
- Utilizar Amazon SES para envios em produção;
-

(Regras de Negócio):**RN**

- O link para resetar a senha deve expirar em 2 horas;
- O usuário precisa confirmar a nova senha ao atualiza-la;
- O envio de e-mails deve acontecer em segundo plano (Background Job);

# Atualização do Perfil

**RF**

- O usuário deve poder atualizar seu nome, email e senha

**RN**

- O usuário não pode alterar seu e-mail informando um e-mail já utilizado;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário deve confirmar a nova senha;

# Painel do prestador

**RF**

- O prestador deve poder visualizar seus agendamentos por dia;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo real utilizando Socket.io;
  **RN**

- A notificação deve ter um status de Lida/Não Lida para que o prestador possa controlar.

# Agendamento de serviços

**RF**

- O usuário deve poder listar todos os prestadores de serviço cadastrados;
- O usuário deve poder visualizar a agenda de um prestador;
- O usuário deve poder listar os horários disponíveis do dia de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF**

- A listagem de prestadores deve ser armazenada em cache;

**RN**

- Cada agendamento deve durar 1 hora exatamente;
- Os agendamentos devem estar disponíveis entre as 08:00 e 18:00;
- O usuário não pode agendar em horário já ocupado;
- O usuário não pode agendar em horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;
- O usuário não pode agendar serviços com usuários não prestadores;
