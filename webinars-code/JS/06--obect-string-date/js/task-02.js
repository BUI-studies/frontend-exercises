/**
 * TASK-02
 *
 * Написати свою невеличку реалізацію чату за допомогою функцій, обʼєктів та простого використання масивів.
 *
 * Обʼєкт чату повинен мати:
 * - двох адресатів, що представлені типовими обʼєктами користувачів
 * - історію повідомлень, що представлені типовими обʼєктами повідомлень
 * - можливість додати в історію нове повідомлення.
 * - можливість очистити історію.
 *
 * Обʼєкт користувача повинен мати:
 * - нікнейм
 * - метод для створення чату з іншим користувачем
 * - метод для відправки повідомлення
 *
 * Обʼєкт повідомлення повинен мати:
 * - текст
 * - відправник
 * - отримувач
 */

function createMessage(text, from, to) {
  const newMessage = {
    text,
    from,
    to,
  };

  return newMessage;
}

// function Message(text, from, to) {
//   this.text = text;
//   this.from = from;
//   this.to = to;
// }

function createUser(nickname) {
  const newUser = {
    nickname,
    myChats: [],
    startChatting(toUser) {
      const newChat = createChat(this, toUser);
      this.myChats.push(newChat);

      console.log(`chat with ${toUser.nickname} has been started`, newChat);
    },
    sendMessage(msgText, to) {
      for (let chat in this.myChats) {
        if (chat.from === this && chat.to === to) {
          const newMessage = createMessage(msgText, this, to);

          chat.addMessage(newMessage);
        }
      }
      console.log(
        `message from ${msg.from.nickname} to ${msg.to.nickname} has been sent`
      );
    },
  };

  return newUser;
}

// function User(nickname) {
//   this.nickname = nickname;
//   this.startChatting = function (toUser) {
//     console.log(`chat with ${toUser.nickname} has been started`);
//   };
//   this.sendMessage = function (msg) {
//     console.log(
//       `message from ${msg.from.nickname} to ${msg.to.nickname} has been sent`
//     );
//   };
// }

function createChat(from, to) {
  const newChat = {
    from,
    to,
    history: [],
    addMessage(msg) {
      this.history.push(msg);
    },
    removeHistory() {
      this.history = [];
    },
  };

  return newChat;
}

// const myMsg = new Message("gogi loves to go to the pizza restaurant", "", "");
// const myMsg = createMessage("gogi loves to go to the pizza restaurant", "", "");
