function workingHours(req,res,next) {
    const date = new Date();
    const day = date.getDay();
    const hours = date.getHours();

if (day >= 1 && day <= 5 && hours >= 9 && hours < 17){
    next();
} else{
    res.status(403).send('Sorry, working hours are between 9 to 17 on Mondays to Fridays');
}
}

module.exports = workingHours