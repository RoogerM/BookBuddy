const DATE = new Date();
const MONTHS = [
  "Jaunary", "February", "March", "April", "May", "June", "July", "August", "Septermber", "October", "November", "December", 
]
document.query("#month").innerHTML = MONTHS[DATE.getMonth()];