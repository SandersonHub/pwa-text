const { offlineFallback, warmStrategyCache } = require('workbox-recipes');
const { CacheFirst } = require('workbox-strategies');
const { registerRoute } = require('workbox-routing');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');
const { ExpirationPlugin } = require('workbox-expiration');
const { precacheAndRoute } = require('workbox-precaching/precacheAndRoute');

precacheAndRoute(self.__WB_MANIFEST);

const pageCache = new CacheFirst({
  cacheName: 'page-cache',
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60,
    }),
  ],
});

warmStrategyCache({
  urls: ['/index.html', '/'],
  strategy: pageCache,
});

registerRoute(({ request }) => request.mode === 'navigate', pageCache);

// TODO: Implement asset caching


// Path: client/src-sw.js
//function to handle the registration script
registerRoute(

  //arrow function
  //takes in a request object
  //serves the registerRoute as the first argument
  // returns true if the request destination is style, script, or worker
  ({ request }) => ['style', 'script', 'worker'].includes(request.destination),
  //request.destination is the request object that specifies the destination of the request

//returns a new StaleWhileRevalidate object
  new StaleWhileRevalidate({
    //cache name
    cacheName: 'asset-cache',
    //plugins
    plugins: [
      //cacheable response plugin
      //specifies the statuses, which HTTP response should be cached
      new CacheableResponsePlugin({
        //HTTP status codes 0 to 200 that should be cached
        statuses: [0, 200],
      }),
    ],
  })
);
