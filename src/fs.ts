// const fs = require('fs');
// const { markdown } = require('./md')


// const userData = [
//     {"name" : "Alexander"},
//     {"name" : "Irina"},
// ]

// fs.writeFile('db.json', JSON.stringify(userData) , err:  => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('File written');
//     }
// })

// fs.readFile('db.json', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         data = JSON.parse(data.toString());
//         console.log('File read');
//         data.map(user => {
//             console.log(user.name);
//         })
//     }
// })

// (async function() {
//     const content = await fs.readFile(".readme.md", "utf8");
    
//     const html = await markdown.render(content);
    
// })()    
