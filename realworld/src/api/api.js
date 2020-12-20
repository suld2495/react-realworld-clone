import PouchDomain from '../lib/PouchDB';
import { guid } from '../lib/utils';

const realworldPouch = new PouchDomain('realworld');
const user = 'user';

let token = null;

export const login = async ({ email, password }) => {
    const data = await realworldPouch.getDocs(user);
    try {
        return data.users.find(user => {
            return user.email === email && user.password === password;
        });
    } catch (e) {
        return false;
    }
};

export const currentUser = async ( token ) => {
    const data = await realworldPouch.getDocs(user);
    try {
        return data.users.find(user => {
            return user.token === token;
        });
    } catch (e) {
        return false;
    }
}

export const checkDuplicateUsername = async username => {
    try {
        const result = await realworldPouch.getDocs(user);
        return !!result.users.find(user => {
            return user.username === username;
        });
    } catch (e) {
        return false;
    }
};

export const addUser = async (userData) => {
    let data = await realworldPouch.getDocs(user) || { _id: user, users: [] };
    userData.token = guid();
    data.users = [ ...data.users, userData ];

    try {
        await realworldPouch.addData(data);
    } catch (e) {
        console.log(e);
    }
};

export const getBoard = async () => {
    return {
        articles: [{"title":"Yurii Fliachok 224 Postman","slug":"yurii-fliachok-224-postman-bkbfz2","body":"asdasddd","createdAt":"2020-12-20T16:17:49.743Z","updatedAt":"2020-12-20T16:17:49.743Z","tagList":[],"description":"asdasd","author":{"username":"TestUserNov","bio":null,"image":"https://static.productionready.io/images/smiley-cyrus.jpg","following":false},"favorited":false,"favoritesCount":1},{"title":"asdasdasdas","slug":"asdasdasdas-fj3f06","body":"dasdasdasda","createdAt":"2020-12-20T16:17:20.055Z","updatedAt":"2020-12-20T16:17:20.055Z","tagList":[],"description":"dasdasda","author":{"username":"mpostica","bio":null,"image":"https://static.productionready.io/images/smiley-cyrus.jpg","following":false},"favorited":false,"favoritesCount":0},{"title":"asd","slug":"asd-wv9hts","body":"asd","createdAt":"2020-12-20T16:14:02.156Z","updatedAt":"2020-12-20T16:14:02.156Z","tagList":[],"description":"asd","author":{"username":"test734","bio":"I like to skateboard","image":"","following":false},"favorited":false,"favoritesCount":0},{"title":"Abs","slug":"abs-lxzzvz","body":"adssda","createdAt":"2020-12-20T16:07:54.481Z","updatedAt":"2020-12-20T16:07:54.481Z","tagList":[],"description":"abs","author":{"username":"---TL---","bio":null,"image":"https://static.productionready.io/images/smiley-cyrus.jpg","following":false},"favorited":false,"favoritesCount":0},{"title":"Yurii Fliachok 224 UI","slug":"yurii-fliachok-224-ui-1naqa6","body":"aaaaaa","createdAt":"2020-12-20T16:02:52.442Z","updatedAt":"2020-12-20T16:02:52.442Z","tagList":[],"description":"aaaaa","author":{"username":"TestUserNov","bio":null,"image":"https://static.productionready.io/images/smiley-cyrus.jpg","following":false},"favorited":false,"favoritesCount":0},{"title":"First Feed","slug":"first-feed-9fd9ba","body":"sadsaf fj adkas d sad ad ads dada s","createdAt":"2020-12-20T15:34:23.146Z","updatedAt":"2020-12-20T15:34:23.146Z","tagList":[],"description":"Feeding","author":{"username":"ppp123456","bio":null,"image":"https://static.productionready.io/images/smiley-cyrus.jpg","following":false},"favorited":false,"favoritesCount":1},{"title":"test1","slug":"test1-oupf2h","body":"test3","createdAt":"2020-12-20T15:31:41.681Z","updatedAt":"2020-12-20T15:31:41.681Z","tagList":[],"description":"test2","author":{"username":"anil singh","bio":null,"image":"","following":false},"favorited":false,"favoritesCount":2},{"title":"test1","slug":"test1-ruuuez","body":"test3","createdAt":"2020-12-20T15:30:08.823Z","updatedAt":"2020-12-20T15:30:08.823Z","tagList":[],"description":"test2","author":{"username":"anil singh","bio":null,"image":"","following":false},"favorited":false,"favoritesCount":0},{"title":"test1","slug":"test1-6cbg5q","body":"test3","createdAt":"2020-12-20T15:27:36.304Z","updatedAt":"2020-12-20T15:27:36.304Z","tagList":[],"description":"test2","author":{"username":"anil singh","bio":null,"image":"","following":false},"favorited":false,"favoritesCount":0},{"title":"test1","slug":"test1-1z3862","body":"test3","createdAt":"2020-12-20T15:27:00.319Z","updatedAt":"2020-12-20T15:27:00.319Z","tagList":[],"description":"test2","author":{"username":"anil singh","bio":null,"image":"","following":false},"favorited":false,"favoritesCount":1}],
        total: 500
    };
}

export default {
    setToken: _token => { token = _token; }
}