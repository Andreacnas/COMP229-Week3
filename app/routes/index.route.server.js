//Index Routes
import { Router } from 'express';
import { displayHomePage, 
         displayAboutPage,
         displayProjectPage,
         displayServicesPage,
         displayContactPage } from '../controllers/index.controller.server.js'

//Instatiate the router
const router = Router();

//add middleware to connect application
router.get('/',displayHomePage);
router.get('/home',displayHomePage);
router.get('/about',displayAboutPage);
router.get('/project',displayProjectPage);
router.get('/services',displayServicesPage);
router.get('/contact',displayContactPage);

export default router;