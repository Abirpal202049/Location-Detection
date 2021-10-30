window.navigator.geolocation.getCurrentPosition(showPosition);


function showPosition(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  console.log("lat", latitude, "long", longitude);

  const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=eccf45365d18446eac6f86bcbed3c2e5`;


  async function getapi(url) {
    const response = await fetch(url);

    var data = await response.json();
    let city = data.results[0].components.city;
    return city
  }



  var c = getapi(url); // c is a promish
  c.then((data) =>{
    console.log(data)
    document.getElementById('city').innerHTML = data;

    function conv(f) {
      return f - 273;
    }

    async function gettemp(url) {
      const response = await fetch(url);
  
      var data = await response.json();
      // console.log(data.name);
      console.log(data.main.temp);
      document.getElementById("temp").innerHTML = Math.round(conv(data.main.temp));

      console.log(data.main.temp_max);
      document.getElementById("high").innerHTML = Math.round(conv(data.main.temp_max));

      console.log(data.main.temp_min);
      document.getElementById("lowest").innerHTML = Math.round(conv(data.main.temp_min));
    }

    tempurl = `https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=e342367614d61e912d92e29103041f54`
    gettemp(tempurl)
  });


  document.getElementById("lat").innerHTML = latitude ;
  document.getElementById("long").innerHTML = longitude;
}
