import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-l6d31ps-shard-00-00.t5m7b1r.mongodb.net:27017,ac-l6d31ps-shard-00-01.t5m7b1r.mongodb.net:27017,ac-l6d31ps-shard-00-02.t5m7b1r.mongodb.net:27017/?ssl=true&replicaSet=atlas-185c0j-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;