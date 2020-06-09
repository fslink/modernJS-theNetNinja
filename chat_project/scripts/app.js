// dom element selection
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');

// event add new chat
newChatForm.addEventListener('submit', e => {
    e.preventDefault();
    const message = newChatForm.message.value.trim();
    chat.addChat(message)
        .then(() => newChatForm.reset())
        .catch(err => console.log(err));
});

// class instances
const chat = new Chatroom('Clovis', 'general');
const chatUI = new ChatUI(chatList);

// get chats and render
chat.getChats((data) => {
    chatUI.render(data);
});