import { describe, expect, it, vi } from "vitest";
import { findLongestWord, charCount, mergeSortedArrays, flattenArray, groupBy, debounce } from "./premade-functions.js";

describe("findLongestWord", () => {

    it("should recieve a string and return the longest word", () => {
        // TODO
        // expect(...)
        const result = findLongestWord("Find the longest word")
        expect(result).toBe("longest")
    });

});

describe("charCount", () => {

    it("charCount", () => {
     
        const result = charCount("baba")
        expect(result).toEqual({b:2, a:2})
    });

});


describe("mergeSortedArrays", () => {

    it("mergeSortedArrays", () => {
     
        const result = mergeSortedArrays([1], [2, 3])
        expect(result).toEqual([1, 2, 3])
    });

});

describe("flattenArray", () => {

    it("flattenArray", () => {
     
        const result = flattenArray([1, [2, 3]])
        expect(result).toEqual([1, 2, 3])
    });

});

describe("groupBy", () => {

    it("groupBy", () => {
     
        const peopleByAge = [
            {age: 33},
            {age: 25}
        ]

        expect(groupBy(peopleByAge, "age")).toEqual({
            25: [{age: 25}],
            33: [{age: 33}]
        })
    });

});


describe("debounce", () => {

    it("debounce", async () => {
        const mockFunc = vi.fn()
        const debounced = debounce(mockFunc, 1000)

        debounced()
        debounced()
        debounced()

        expect(mockFunc).not.toHaveBeenCalled()

        await new Promise((resolve) => setTimeout(resolve, 1000))

        expect(mockFunc).toHaveBeenCalledTimes(1)
    });

});

// Lav selv tests for de andre functions...