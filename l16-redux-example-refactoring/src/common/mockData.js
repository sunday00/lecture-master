const timelines = [
    { desc: 'hello', likes: 13, subject: 'sports' },
    { desc: 'hello2', likes: 37, subject: 'cartoon' },
    { desc: 'hello3', likes: 42, subject: 'sports' },
    { desc: 'hello4', likes: 33, subject: 'cartoon' },
    { desc: 'hello5', likes: 8, subject: 'detective' },
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

export const FILTER = '';