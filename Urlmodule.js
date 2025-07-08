// const url = require('url');

import url from 'url';

const myURL =
  new URL('https://user:pass@sub.example.com:6000/p/a/t/h?query=string#hash'); 

  myURL.pathname = 'a/b/c'
  myURL.search = '?d=e';
  myURL.hash = '#fgh'

  console.log(myURL);
  console.log(myURL.href);
  console.log(myURL.port);
  
  
  



