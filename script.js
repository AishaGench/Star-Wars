const output = document.getElementById("output");
const spinner = document.getElementById("spinner");
const url = "https://starwars.egghead.training/";
const btn = document.getElementById("button")

//Create a function
function starWars(endpoint){
    //used Api url
    const url = 'https://starwars.egghead.training/' + endpoint;
    return fetch(url).then((response)=>{
        if(response.ok){
            return response.json();
        }else{
            return Promise.reject(Error('Unsuccesful response'));
        }
    })
    .then((data)=>{
        console.log(data);
        console.log(`There are ${data.length} ${endpoint}  in Starwars history`);
		ata.forEach(element => {console.log(`Film episode_${element.episode_id} title is ${element.title}`)});
        

    }).catch((error)=>{
        console.log(error);
    })
}



starWars('films');


