import createApp from './src/app.js';




const app = createApp();

function startServer(){
    app.listen(3000,()=>{
        console.log('Server is running on port',3000);
    })
}

startServer();