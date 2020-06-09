// dom element selection
const chatList = document.querySelector('.chat-list');

// class instances
const chat = new Chatroom('Clovis', 'gaming');
const chatUI = new ChatUI(chatList);

// add chats to UI
chat.getChats((data) => {
    chatUI.render(data);
});