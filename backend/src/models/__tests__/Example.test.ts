import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import {IExample} from "../Example";
import Example from "../Example";

let mongod: MongoMemoryServer;

let example1: IExample = {
    name: 'test1',
}

describe("Example schema", () => {
    beforeAll(async () => {

        mongod = await MongoMemoryServer.create();

        const connectionString = mongod.getUri();
        await mongoose.connect(connectionString);
    });

    beforeEach(async () => {

        // Drop existing collections
        await mongoose.connection.db.dropDatabase();

        const coll = await mongoose.connection.db.createCollection('breakfasts');
        await coll.insertOne(example1);
    });

    afterAll(async () => {
        await mongoose.disconnect();
        await mongod.stop();
    });

    it('gets breakfasts', async () => {

        const breakfastsFromDb = await Example.find();
        expect(breakfastsFromDb).toBeTruthy();
        expect(breakfastsFromDb.length).toBe(1);
    });
})