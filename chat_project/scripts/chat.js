// adding new chat messages
// setting up a real-time listener to get new chats
// update Room
// update Name

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
                        callback(change.doc.data());
                    }
                });
            });
    }
    updateName(username){
        this.username = username;
        localStorage.setItem('username', this.username);
    }
    updateRoom(room){
        this.room = room;
        console.log('room updated');
        if(this.unsub){
            this.unsub();
        }
    }
}
