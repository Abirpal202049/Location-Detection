window.navigator.geolocation.getCurrentPosition(showPosition);
function showPosition(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  console.log("lat", latitude, "long", longitude);

  const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=eccf45365d18446eac6f86bcbed3c2e5`;
  async function getapi(url) {
    const response = await fetch(url);

    var data = await response.json();
    // console.log(data);
    let city = data.results[0].components.city;
    console.log(city);
    document.getElementById("city").innerHTML = city;
  }
  getapi(url);
  document.getElementById("lat").innerHTML = latitude ;
  document.getElementById("long").innerHTML = longitude;
}
