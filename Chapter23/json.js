let book = {
  title: 'WEB',
  authors: [
    "randy",
    'mack'
  ],
  edition: 4,
  year: 2020
}

let jsonText = JSON.stringify(book)
let bookCopy = JSON.parse(jsonText)
console.log(jsonText);//{"title":"WEB","authors":["randy","mack"],"edition":4,"year":2020}
console.log(bookCopy);
//{ title: 'WEB', authors: [ 'randy', 'mack' ], edition: 4, year: 2020 }


