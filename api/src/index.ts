import App from './app';
import Routes from './routes';

const app = new App({});

app.app.use(Routes);

app.listen();