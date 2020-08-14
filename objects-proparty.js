const studests = [
    {id: 21, name: 'sajal'},
    {id: 31, name: 'munna'},
    {id: 41, name: 'jannat'},
    {id: 51, name: 'ratul'}
];

const names = studests.map( s => s.name);
const ids = studests.map( s => s.id);
const bigger = studests.filter( s => s.id > 30);
const bigger1 = studests.find( s => s.id > 30);
console.log(bigger1);
