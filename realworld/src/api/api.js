import PouchDomain from '../lib/PouchDB';
import { guid } from '../lib/utils';

const realworldPouch = new PouchDomain('realworld');
const user = 'user';
const ARTICLE = 'article';

let token = null;
const initialArticle = {
    favorites: [],
    favoriteCount: 0
}

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

export const getBoard = async ({ page, all, id, followers }) => {
    const data = await realworldPouch.getDocs(ARTICLE) || { _id: ARTICLE, articles: [] };
    let articles = data.articles.reverse();
    const total = articles.length;

    if (!all) {
        articles = articles.filter(article => {
            return true;
        });
    }

    articles = articles.splice((page - 1) * 10, 10);

    return {
        articles,
        total
    }
}

export const getBoardInfo = async (id) => {
    const data = await realworldPouch.getDocs(ARTICLE) || { _id: ARTICLE, articles: [] };

    return data.articles.find(article => {
        return article.id === parseInt(id);
    })
}

export const updateBoard = async (article) => {
    let data = await realworldPouch.getDocs(ARTICLE) || { _id: ARTICLE, articles: [] };
    article = { ...article, ...initialArticle };
    article.id = data.articles.length + 1;
    article.createdAt = new Date();

    data.articles = [ ...data.articles, article ];

    try {
        await realworldPouch.addData(data);
        return article.id;
    } catch (e) {
        console.log(e);
    }
}

export const updateFavorite = async ({ user, id }) => {
    const data = await realworldPouch.getDocs(ARTICLE) || { _id: ARTICLE, articles: [] };
    const article = data.articles.find((article) => {
        return article.id === id;
    });
    
    if (article) {
        const index = article.favorites.indexOf(user.email);

        if (index > -1) {
            article.favorites.splice(index, 1);
        } else {
            article.favorites.push(user.email);
        }

        article.favoriteCount = article.favorites.length;

        try {
            await realworldPouch.addData(data);
        } catch (e) {
            console.log(e);
        }
    }
}

export default {
    setToken: _token => { token = _token; }
}