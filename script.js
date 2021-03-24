const output = document.getElementById("output");
const spinner = document.getElementById("spinner");
const url = "https://starwars.egghead.training/";
const btn = document.getElementById("button")

//Create a function
function starWars(endpoint){
    //used Api url
    const url = 'https://starwars.egghead.training/' + endpoint;
    return fetch(url).then((response)=>{
		return response.ok ? response.json() : Promise.reject(Error('Unsuccesful response'))
//        if(response.ok){
//            return response.json();
//        }else{
//            return Promise.reject(Error('Unsuccesful response'));
//        }
    })
    .then((data)=>{
        console.log(data);
        console.log(`There are ${data.length} ${endpoint}  in Starwars history`);
		ata.forEach(element => {console.log(`Film episode_${element.episode_id} title is ${element.title}`)});
        

    }).catch((error)=>{
        console.log(error);
    })
}

function starWarsCount(endpoint){
    return fetch(url + endpoint)
     .then((response)=>{
            if(response.ok){
                return response.json()
            }
            else{
               return Promise.reject(Error("unsuccescful response"));
            } 
	// return response.ok ? response.json() : Promise.reject(Error("Unsuccessful response"));
    
        })
    }

starWarsCount('planets').then(response =>{
            
            console.log(response)
        })
        starWarsCount('starships').then(response =>{
            
            console.log(response)
        })
        starWarsCount('films').then(response =>{
            console.log(response)
})

Promise.all([
	starWarsCount('films'),
	starWarsCount('planets'),
	starWarsCount('species'),
    starWarsCount('people'),
    starWarsCount('starships'),
	starWarsCount('vehicles')
])
  .then(([films,planets,species,people,starships,vehicles])=>{
      output.innerHTML =  
		  `${films.length} films ,` + 
		  `${planets.length} planets, ` + 
		  `${species.length} species ,` +
		  `${people.length} people,` + 
		  `${starships.length} starships, ` + 
		  `${vehicles.length} vehicles, ` 
  }).catch((err) =>{
      console.log(err)
      
  
  })
 .finally(()=>{spinner.src='images/star-wars-ship-2.png'})
 btn.addEventListener('click',()=>{
     starWarsCount('starships').then(response =>{
        //  console.log(response)
         
        const randomNumber= Math.floor(Math.random()* response.length)
         spinner.src=url + response[randomNumber].image
     })
       
 })


//starWars('films');


