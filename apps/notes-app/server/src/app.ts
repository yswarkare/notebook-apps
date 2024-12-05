import bodyParser from 'body-parser';
import express from 'express';
import passport from 'passport';
import { passportStrategy } from './middlewares/passport';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import userRoutes from './routes/user.router';
import authRoutes from './routes/auth.routes';
import notebookRoutes from './routes/notebook.routes';
import tagRoutes from './routes/tag.routes';

function createApp() {
	const app = express();

	// parse application/x-www-form-urlencoded
	app.use(bodyParser.urlencoded({ extended: false, limit: '30mb' }));
	// parse application/json
	app.use(bodyParser.json({ limit: '30mb' }));

	var corsOptions = {
		origin: 'http://localhost:5173',
		optionsSuccessStatus: 200,
		credentials: true,
	};

	app.use(cors(corsOptions));

	app.use(cookieParser());

	app.use(passport.initialize());

	passport.use(passportStrategy);

	app.use('/api/auth', authRoutes);
	app.use('/api/user', userRoutes);
	app.use('/api/notebook', notebookRoutes);
	app.use('/api/tag', tagRoutes);

	return app;
}

export default createApp;
