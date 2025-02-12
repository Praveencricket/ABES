const http=require('http');

const server=http.createServer((requestAnimationFrame,res)=>{
    console.log(req.url)
    res.statuscode=200;
    res.setHeader("content-Type",'text/html');
    res.write("<h1>hello ,world</h1>");
    res.end();

});
PORT=3001;
server.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})