const expect = require('expect');

const{Users} =require('./users');

describe('Users', () =>{

    let users;
    beforeEach(() =>{
        users  = new Users();
        users.users = [{

            id : "1",
            name: "Antika",
            room: "The Office Fans"
        },{

            id : "2",
            name: "Shumi",
            room: "The Office Fans"
        },{

            id : "3",
            name: "Anamika",
            room: "The Office Fans"
        }]
    });
    it('should add new user', () => {
        let users = new Users();
        let user ={
            id : "adfadf",
            name: "Antika",
            room: "The Office Fans"
        };
        let reUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });
    it('should return names for the office fans', ()=>{
        let userlist = users.getUserList('The office Fans');

        expect(userlist).toEqual(['Shumi','Anamika'];
    })
    it('should return names for the Scrubs fans', ()=>{
        let userlist = users.getUserList('Scrubs Fans');

        expect(userlist).toEqual(['Shumi']);
    });
    it('should find user', () =>{
        let userID = '2',
            user = users.getUSer(userID);
        expect(user.id).toBe(userID);
    });
    it('should find user', () =>{
        let userID = '150',
            user = users.getUSer(userID);
        expect(user).toBeUndefined();
    });
    it('should not remove a user', () =>{
        let userID = '108',
            user = users.removeUser(userID);
        expect(user).toBeUndefined();
        expect(users.users.length).toBe(3);
    });
    it('should remove a user', () =>{
        let userID = '1',
            user = users.removeUser(userID);
        expect(user.id).toBe(userID);
        expect(users.users.length).toBe(2);
    });
});
