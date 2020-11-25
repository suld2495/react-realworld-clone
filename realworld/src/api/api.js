import PouchDomain from '../lib/PouchDB';

const loginPouch = new PouchDomain('user');

export const login = async (email, password) => {
    const loginInfo = await loginPouch.getDocs();
    return loginInfo;
};