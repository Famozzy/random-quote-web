import DataSource from './data-source.js';
const main = async () => {
  const quoteElement = document.querySelector('blockquote');
  const authorElement = document.querySelector('.author');
  let a = true;

  DataSource.getData()
    .then(result => renderResult(result))
    .catch(err => console.err(err));

  const renderResult = quotes => {
    const quote = quotes.filter(q => q.text.length <= 100).slice(0, 1);
    quote.forEach(quote => {
      quoteElement.previousSibling.previousSibling.textContent = '“';
      quoteElement.textContent = quote.text;
      authorElement.textContent = `- ${quote.author}`;
    });
  };
};

export default main;
