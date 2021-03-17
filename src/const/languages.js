export const LANGUAGES = [
    'JavaScript',
    'C++',
    'Ruby',
    'Java',
    'PHP',
    'Go',
    'Swift',
];

export const getLanguages = () => {
    // Promis：非同期処理、引数のresolveは、成功した時
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(LANGUAGES);
        },1000)
    })
}