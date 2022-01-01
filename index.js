const Koa = require("koa");
const app = new Koa();

// response
app.use((ctx) => {
  if (ctx.URL.pathname == "/") {
    let message = "İndex sayfasına hoşgeldiniz";
    ctx.body = `<h1>${message}</h1>`;
  }
  else if (ctx.URL.pathname == "/hakkimizda") {
    let message = "Hakkımızda sayfasına hoşgeldiniz";
    ctx.body = `<h1>${message}</h1>`;
  }
  else if (ctx.URL.pathname == "/iletisim") {
    let message = "İletişim sayfasına hoşgeldiniz";
    ctx.body = `<h1>${message}</h1>`;
  } else {
    ctx.body = "404 Not Found";
  }
});

app.listen(3000);
