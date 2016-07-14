import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from '../routes';

const app = express();

app.use('/assets', express.static('build'));

const render = (req, res) => {
  const basename = '/my-app';
  // Note that req.url here should be the full URL path from
  // the original request, including the query string.
  match({ routes, location: req.url, basename }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      // You can also check renderProps.components or renderProps.routes for
      // your "not found" component or route respectively, and send a 404 as
      // below, if you're using a catch-all route.
      // res.status(200).send(renderProps);
      const content = renderToString(
        <RouterContext {...renderProps} />
      );

      res.status(200).send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <title></title>
          <base href="${basename}" />
          <script src="/assets/bundle.js"></script>
        </head>
        <body>
          <div id="root">${content}</div>
        </body>
        </html>
      `);
    } else {
      res.status(404).send('Not found');
    }
  });
};

app.get('*', render);

app.on('mount', () => {
  console.log('App is available at %s', app.mountpath);
});


app.listen(8000, () => {
  console.log('Server started at port %d', 8000);
});
