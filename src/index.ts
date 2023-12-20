import ip from 'ip';
import app from './app';
import { APP_PORT } from './app/config';
// import { createDatabaseConnect } from './app/database';
import { AppDataSource } from './app/database';

// AppDataSource.initialize()
//   .then(async () => {
//     app.listen(APP_PORT, async () => {
//       // await createDatabaseConnect();
//       console.log('服务器启动成功');
//       console.log(`API Docs:  
//         http://localhost:${APP_PORT}/docs/
//         http://${ip.address()}:${APP_PORT}/docs/`);
//     });
//   })
//   .catch((error) => console.log(error));
app.listen(APP_PORT, async () => {
  // await createDatabaseConnect();
  console.log('服务器启动成功');
  console.log(`API Docs:  
    http://localhost:${APP_PORT}/docs/
    http://${ip.address()}:${APP_PORT}/docs/`);
});