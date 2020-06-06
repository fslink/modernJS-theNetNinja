// adding new chat messages

class Chatroom {
    constructor(username, room){
        this.username = username;
        this.room = room;
        this.chats = db.collection('chats');
    }
    async addChat(message){
        //format message in object

        const now = new Date();
        const chat = {
            message: message,
            room: this.room,
            username: this.username,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        }

        //Save chat to firestore
        const response = await this.chats.add(chat);
        return response;
    }
}

const chat = new Chatroom('hello', 'Boris', 'general');

chat.addChat('hello eferyone')
    .then(() => console.log('chat added'))
    .catch(err => console.log(err));