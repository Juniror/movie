import { createFactory } from "../util/createFactory.js"
import { type } from "../data/logo.js"

export function randomSlice(element, usedIndices) {
    let randomStartIndex
    do {
        randomStartIndex = Math.floor(Math.random() * type.mews.length)
    } while (usedIndices.includes(randomStartIndex))

    usedIndices.push(randomStartIndex)

    const randomLength = Math.floor(Math.random() * 3) + 7
    const randomMews = type.mews.slice(randomStartIndex, randomStartIndex + randomLength)

    randomMews.forEach((item) => {
        element.innerHTML += createFactory("news", item)
    })
}