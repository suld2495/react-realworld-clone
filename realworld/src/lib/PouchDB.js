import PouchDB from 'pouchdb';

class PouchDomain {
    constructor(dbName) {
        this.dbName = dbName;
        this.db = new PouchDB(dbName);
    }

    showAll(option = {}) {
        return this.db.allDocs({ 
            ...option, 
            include_docs: true, 
            descending: true
        })
    }

    getDocs() {
        return this.db.get(this.dbName);
    }

    async addData(data) {
        try {
            const docs = await this.getDocs();
            data = { ...data, _rev: docs._rev };
        } catch (e) {

        }

        return this.db.put(data);
    }
}

export default PouchDomain;