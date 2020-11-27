import PouchDomain from '../lib/PouchDB';

const realworldPouch = new PouchDomain('realworld');
const user = 'user';

export const login = async (email, password) => {
    const users = await realworldPouch.getDocs(user);
    return users;
};

export const checkDuplicateUsername = async username => {
    try {
        const result = await realworldPouch.getDocs(user);
        return !!result.users.find(user => {
            return user.username === username
        });
    } catch (e) {
        return false;
    }
};

export const addUser = async (userData) => {
    let data = await realworldPouch.getDocs(user) || { _id: user, users: [] };
    data.users = [ ...data.users, userData ];

    try {
        await realworldPouch.addData(data);
    } catch (e) {
        console.log(e);
    }
};