//Index Controller
export function displayHomePage(req,res,next){
    res.render('index', { title: 'Home', page: 'home' });
};

export function displayAboutPage(req,res,next){
    res.render('index', { title: 'About', page: 'about' });
};

export function displayProjectPage(req,res,next){
    res.render('index', { title: 'Project', page: 'project' });
};

export function displayServicesPage(req,res,next){
    res.render('index', { title: 'Services', page: 'services' });
};

export function displayContactPage(req,res,next){
    res.render('index', { title: 'Contactt', page: 'contact' });
};