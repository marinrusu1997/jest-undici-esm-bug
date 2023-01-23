import { get } from "../src";
import { BASE_URL, startServer, stopServer } from "./web-server";

describe('get request', function () {
    beforeAll(startServer);

    afterAll(stopServer);

    it('makes get request', async () => {
        const result = await get(BASE_URL);
        expect(result).toBe('Hello World');
    });
});
