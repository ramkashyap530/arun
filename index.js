const http=require('http');
const app=require('./app');
const server=http.createServer(app);

// server.listen(3000,console.log('app is running'));

// Use PORT provided in environment or default to 3000
const port = process.env.PORT || 3000;

// Listen on `port` and 0.0.0.0
app.listen(port, "0.0.0.0", function () {
    console.log('LIVE app is running')
});