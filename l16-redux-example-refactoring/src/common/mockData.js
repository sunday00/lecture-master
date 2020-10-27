const timelines = [
    { desc: 'hello', likes: 13 },
    { desc: 'hello2', likes: 37},
    { desc: 'hello3', likes: 42 },
    { desc: 'hello4', likes: 33 },
    { desc: 'hello5', likes: 8 },
];

function makeDataGenerator (items) {
    let itemIndex = 0;
    return function getNextData() {
        const item = items[itemIndex % items.length];
        itemIndex ++;
        return { ...item, id: itemIndex}
    }
}

export const getNextTimeline = makeDataGenerator(timelines);