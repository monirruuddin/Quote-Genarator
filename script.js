'use strict';
// all selection
let qouteEle = document.querySelector('.blockquote p');
let authorEle = document.querySelector('.blockquote-footer span');
let newQBtn = document.querySelector('.newQBtn');
let copyEle = document.querySelector('.copy');
let favEle = document.querySelector('.favbtn');
let ulEle = document.querySelector('ol');
let liEle = document.querySelectorAll('li');

const allqoute = [
  {
    qoute: `The greatest glory in living lies not in never falling, but in rising every time we fall.`,
    name: 'Nelson Mandelaname',
  },
  {
    qoute: 'The way to get started is to quit talking and begin doing.',
    name: 'Walt Disney',
  },
  {
    qoute:
      "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    name: 'ames Cameron',
  },
  {
    qoute: "Life is what happens when you're busy making other plans.",
    name: 'John Lennon',
  },
  {
    qoute:
      'The future belongs to those who believe in the beauty of their dreams.',
    name: 'Eleanor Roosevelt',
  },
  {
    qoute:
      "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    name: 'Robert Louis Stevenson',
  },
  {
    qoute:
      'Always remember that you are absolutely unique. Just like everyone else.',
    name: 'Margaret Mead',
  },
  {
    qoute:
      'Spread love everywhere you go. Let no one ever come to you without leaving happier.',
    name: 'Mother Teresa',
  },
  {
    qoute:
      'Do not go where the path may lead, go instead where there is no path and leave a trail.',
    name: 'Ralph Waldo Emerson',
  },
  {
    qoute:
      'It is during our darkest moments that we must focus to see the light.',
    name: 'Aristotle',
  },
  {
    qoute:
      'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
    name: 'Benjamin Franklin',
  },
  {
    qoute:
      'Always remember that you are absolutely unique. Just like everyone else.',
    name: 'Margaret Mead',
  },
];

newQBtn.addEventListener('click', function () {
  let random = Math.trunc(Math.random() * allqoute.length);

  qouteEle.textContent = allqoute[random].qoute;
  authorEle.textContent = allqoute[random].name;
});

// navigator.clipboard.writeText(qouteEle);

copyEle.addEventListener('click', async () => {
  if (!navigator.clipboard) {
    alert('Copy functionality not supported');
  }
  try {
    await navigator.clipboard.writeText(qouteEle.textContent);
  } catch (err) {
    console.error('ERROR', err);
  }
});

favEle.addEventListener('click', function () {
  let copyFav = qouteEle;
  let node = document.createElement('li');
  let textnode = document.createTextNode(copyFav.textContent);
  node.appendChild(textnode);
  

  let check = [].slice.call(ulEle.children);
 

  // length =0 .add hbe ekta.
  // length !0.
  // main p == iterator
  // no date  add
  // doing add.

  if (check.length == 0) {
    ulEle.appendChild(node);
  } else {
    let found = false;
    for (let i = 0; i <= check.length; i++) {
     
      if (check[i] !== undefined) {
        //match the value between
        if (qouteEle.textContent === check[i].textContent) {
          found = true;
          break;
        }
      }
    }
    if(found == false){
        ulEle.appendChild(node);
    }
  }

});