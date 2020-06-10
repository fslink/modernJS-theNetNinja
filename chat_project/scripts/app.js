// dom element selection
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const rooms = document.querySelector('.chat-rooms');

// events
newChatForm.addEventListener('submit', e => {
    e.preventDefault();
    const message = newChatForm.message.value.trim();
    chat.addChat(message)
        .then(() => newChatForm.reset())
        .catch(err => console.log(err));
});

newNameForm.addEventListener('submit', e => {
    e.preventDefault();
    const newNameMssg = newNameForm.name.value.trim();
    chat.updateName(newNameMssg);
    newNameForm.reset();
});

rooms.addEventListener('click', e => {
    if(e.target.tagName === "BUTTON"){
        chatUI.clear();
        chat.updateRoom(e.target.getAttribute('id'));
        chat.getChats(data => chatUI.render(data));
    }
});

// test if user is saved in LocalStorage
const username = localStorage.username ? localStorage.username : 'anon';

// class instances
const chat = new Chatroom(username, 'general');
const chatUI = new ChatUI(chatList);

// get chats and render
chat.getChats((data) => {
    chatUI.render(data);
});