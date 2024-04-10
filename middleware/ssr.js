const React = require('react');
const ReactDOMServer = require('react-dom/server');

function renderComponent(component, props, { doctype } = { doctype: true }) {
  const element = React.createElement(component, {
    ...props,
    ...this.locals,
    ...this.app.locals,
  });
  const html = ReactDOMServer.renderToStaticMarkup(element);
  return doctype ? `<!DOCTYPE html> ${html}` : html;
}

const ssr = (req, res, next) => {
  res.renderComponent = renderComponent;
  next();
};

module.exports = ssr;
