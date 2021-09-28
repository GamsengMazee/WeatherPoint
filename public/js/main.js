const btn = document.getElementById('submitBtn');
const city = document.getElementById('cityName');
const city_p = document.getElementById('city_name');
const tempVal = document.getElementById('temp_real_val');
const temp_icon = document.getElementById('temp_status');
const dataHide = document.querySelector('.middle_layer');




const mssg = async (event) =>{
   event.preventDefault();

   let cityVal = city.value;

   if(cityVal ===""){
        city_p.innerText =  `Please use Valid Input`;
        dataHide.classList.add('data_hide');
   }
   else{
         
        try {
             let url = `https:\\api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=60424bc0b372dee3f339f828acdde158`;
             const response = await fetch(url);
             const data = await response.json();
             const arrData = [data];
              
              city_p.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
              const temp_celcius = arrData[0].main.temp -  273.15;
              tempVal.innerText = Math.floor(temp_celcius);
              
            

             const tempMood = arrData[0].weather[0].main;

             //change icon according to temp status

             if(tempMood === 'Clear'){
                  temp_icon.innerHTML = 
                  '<i class="fas fa-sun">';
             } else if(tempMood === 'Clouds') {
                     temp_icon.innerHTML = 
                  '<i class="fa fa-cloud">';
             } else if(tempMood === 'Rain') {
                     temp_icon.innerHTML = 
                  '<i class="fas fa-cloud-rain">';
               }else{
                     temp_icon.innerHTML = 
                  '<i class="fas fa-sun">';
               }
               dataHide.classList.remove('data_hide');
             
             
        } catch{
             city_p.innerText =  `Wrong Input`;
             dataHide.classList.add('data_hide');
        }
       
         
   }
}




btn.addEventListener('click', mssg)

