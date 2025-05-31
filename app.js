const txt = document.querySelector('#qbox');
const btn = document.querySelector('#foobtn');

btn.addEventListener('click', (e)=>{
      foo();
});

const url = window.location.href;
console.log('url:', url);
const pace = 1200;
const params = new URLSearchParams(window.location.search);
console.log('obj:', params)
const query = params.get('q')
txt.value = query;
console.log('query:', query)
const b = './mp3';
let arr = [];
console.log(btn)
if(query) {
  arr = params.get('q')
    .split(/\s/)
    .map((a)=>{
      const html = document.createElement('audio');
      html.src = `${b}/${a}.mp3`;
      document.body.appendChild(html);
      return html;
    });

  console.log('audio-bank', arr);
}

async function foo() {
  arr.forEach((a,i)=>{
    setTimeout(()=>{
      a.play()
    },(i*1)*pace)
  })
}


