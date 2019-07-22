You need to make 2 changes to your `skywalker-web` project, find the `src/config.js` file and change port from 3000 to 80
```
const apiUrl = `${process.env.EXTERNAL_API_URL || 'http://localhost:3000/api'}/v1`;
const ssrApiUrl = `${process.env.INTERNAL_API_URL || 'http://localhost:3000/api'}/v1`;
```

```
const apiUrl = `${process.env.EXTERNAL_API_URL || 'http://localhost:80/api'}/v1`;
const ssrApiUrl = `${process.env.INTERNAL_API_URL || 'http://localhost:80/api'}/v1`;
```
And then just run the proxy with `npm start` and then run `yarn start` from `skywalker-web/` to start Skywalker in development mode for FE.

Open `http://localhost:80/` to see the app.