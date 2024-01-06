
const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
};
const MODE = [
    {title: "Easy", number: 20},
    {title: "Medium", number: 100},
    {title: "Hard", number: 200},
    {title: "BEAST", number: 1000},
]

//TODO how can I use this way instead?

// const MODE = [
//     {'Easy': 20},
//     {'Medium': 100},
//     {'Hard': 200},
//     {'BEAST': 1000}
// ]

export { shuffle, MODE }