/*
The formula to calculate the wind chill factor is 
LaTeX: f=35.74+0.6215\:t-35.75\:s^{0.16}+0.4275\:t\:s^{0.16}
 f = 35.74 + 0.6215 t − 35.75 s 0.16 + 0.4275 t s 0.16 ,
  where f is the wind chill factor in Fahrenheit, t is the air average temperature in Fahrenheit,
   and s is the wind speed in miles per hour.
   */
  
    var t = parseInt(document.getElementById('temperature').innerHTML);
    var s = parseInt(document.getElementById('windspeed').innerHTML);
    var f = 35.74 + (0.6215*t) - (35.75*Math.pow(s, 0.16))+(0.4275*t*Math.pow(s, 0.16));
    var result = f.toFixed(0)
    document.getElementById('windchill').innerHTML= result;