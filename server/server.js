import createApp from './src/app.js';
import env from './src/config/env.js';




const app = createApp();

function startServer(){
    app.listen(env.PORT,()=>{
        console.log('Server is running on port',env.PORT);
    })
}

startServer();