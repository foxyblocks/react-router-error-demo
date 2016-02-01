This is a demo repo do show an issue with react-router server side rendering in situations when the app is using a basename url:

# Running

```
npm install
```

```
npm start
```

Visit [http://localhost:8000](http://localhost:8000/my-app);

You should see an error caused by links rendered with different URLs between server and client.

![](http://i.imgur.com/8zhdsWN.png)
