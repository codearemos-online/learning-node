import { create } from "node:domain";
import { CreateTable } from "./create-table.use-case";

describe("CreateTableUseCase",() => {
    test("should create table with default values",() => {
        const createTable = new CreateTable();
        const table = createTable.execute({base: 2,limit:15})
        const rows = table.split('\n').length
        expect(createTable).toBeInstanceOf(CreateTable);
        expect(table).toContain('2 X 1 = 2');
        expect(table).toContain('2 X 15 = 30');
        expect(rows).toBe(15)

    })
})