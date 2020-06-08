// adding new chat messages

class Chatroom {
    constructor(username, room){
        this.username = username;
        this.room = room;
        this.chats = db.collection('chats');
        this.unsub;
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
    getChats(callback){
        this.unsub = this.chats
            .where('room', '==', this.room)
            .orderBy('created_at')
            .onSnapshot(snapshot => {
                snapshot.docChanges().forEach(change => {
                    if(change.type === 'added'){
                        // callback(change.data());
                        callback(change.doc.data());
                    }
                });
            });
    }
    updateName(username){
        this.username = username;
    }
    updateRoom(room){
        this.room = room;
        console.log('room updated');
        if(this.unsub){
            this.unsub();
        }
    }
}

const chat = new Chatroom('Clovis', 'general');
chat.getChats((data) => {
    console.log(data);
});

setTimeout(() => {
    chat.addChat('Salut à mes esclaves Gallo-Romains');
    chat.updateName('Clovis le Catholique');
    chat.addChat('Salut à mes freres Gallo-Romains');
    chat.updateRoom('gaming');
    chat.getChats((data) => {
        console.log(data);
    });
}, 4000)

setTimeout(() => {
    chat.addChat('Salut à mes amis gamers');
}, 6000);