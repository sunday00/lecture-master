import produce from 'immer';

export const initUser = {
    id: 1,
    name: 'joker',
    age: 22
}

export const userList = [initUser];

// export const newPerson = produce(initUser, draft => {draft.age = 33});
export const newPerson = produce(userList, draft => {
    draft.push({
        id: 2,
        name: 'batman',
        age: 33
    });
});