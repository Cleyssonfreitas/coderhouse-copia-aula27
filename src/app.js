import express from 'express';
import session from 'express-session';
import passport from "passport";
import config from './config/config.js';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { createServer } from 'node:http';
import cartRouter from './routes/cart.router.js';
import productRouter from './routes/product.router.js';
import viewRouter from "./routes/view.router.js";
import sessionRouter from "./routes/session.router.js";
import { engine } from "express-handlebars";
import mongoose from "mongoose";
import socketServer from "./lib/socket.js";
import initializePassport from "./config/passport.config.js";
import {sessionConfig} from "./config/session.config.js";

mongoose.connect(process.env.MONGODB_CONNECTION, {dbName: 'ecommerce'})
  .catch((error)=>{
    console.error('Error connecting to the database: '+ error);
    process.exit();
  });

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = config.app.port;

const server = createServer(app);

socketServer.start(server);
const io = socketServer.get();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(join(__dirname, 'public')));

app.use(session(sessionConfig));


initializePassport();
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/sessions', sessionRouter);
app.use('/api/products', productRouter);
app.use('/api/carts', cartRouter);
app.use('/', viewRouter);

app.listen(config.app.port, () => {
  console.log(`Server running on port ${config.app.port}`);
});
app.use((req, res, next) => {
  req.io = io;
  next();
});

app.use('/', sessionRouter);
app.use('/', viewRouter);
app.use('/api/carts', cartRouter);
app.use('/api/products', productRouter);

