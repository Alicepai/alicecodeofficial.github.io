const key = 'at_GinPIoU3Gs7Kur1WqgcQMGakOYcGa'

//1.輸入資料後
const input = document.querySelector("input");
const button = document.querySelector("button");

let ipAddress = '';
getData(`https://geo.ipify.org/api/v1?apiKey=${key}&ipAddress=${ipAddress}`);

button.addEventListener("click",()=>{
// 2.取得input值
ipAddress = input.value.trim();
// if(ipAddress =='')alert("this cannot be empty!");
console.log(input.value);
// 3.帶入axios中
getData(`https://geo.ipify.org/api/v1?apiKey=${key}&ipAddress=${ipAddress}`);
input.value = ""

})


input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      // code for enter
      ipAddress = input.value.trim();
    //   if(ipAddress =='')alert("this cannot be empty!");
      console.log(input.value);
      // 3.帶入axios中
        getData(`https://geo.ipify.org/api/v1?apiKey=${key}&ipAddress=${ipAddress}`);
    input.value = ""

    }
});
function getData(url){
    axios.get(url)
    // .then(item=>console.log(item))
    .then(item=>item = item.data)
    .then(item=>setInput(item.ip,item.location.city,item.location.postalCode,item.location.timezone,item.isp,item.location.lat,item.location.lng))
    .catch((err) => console.log(err));
}


function setInput(ipValue,cityValue,postValue,timeZoneValue,ISPValue,latValue,lngValue){
    const ip = document.getElementById("ip");
    const location = document.getElementById("location");
    const timeZone = document.getElementById("timeZone");
    const isp = document.getElementById("isp");
    ip.innerHTML = ipValue;
    location.innerHTML=`${cityValue} <br>${postValue}`;
    timeZone.innerHTML = `UTC ${timeZoneValue}`;
    isp.innerHTML = ISPValue;
    if(mymap != undefined && mymap != null){
        mymap.remove();
    }
    setMarker(latValue,lngValue);
}


// setMarker(37.38605, -122.08385);

var mymap = null;
function setMarker(x,y){
mymap = L.map('map').setView([x, y], 13);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);
    var blackIcon = new L.Icon({
        iconUrl: 'images/icon-location.svg',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [30, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });
    L.marker([x, y],{icon:blackIcon}).addTo(mymap);
    L.control.zoom({ position: 'bottomright'}).addTo(mymap);
}






