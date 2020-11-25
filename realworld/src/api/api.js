import PouchDomain from '../lib/PouchDB';

const loginPouch = new PouchDomain('user');

export const login = async (email, password) => {
    const users = await loginPouch.getDocs();
    return users;
};

export const checkDuplicateUsername = async username => {
    try {
        const result = await loginPouch.getDocs();
        return !!result.users.find(user => {
            return user.username === username
        });
    } catch (e) {
        return false;
    }
}