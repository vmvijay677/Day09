var request = new XMLHttpRequest();
request.open('GET', 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json', true);
request.send();
request.onload = function(){	
    var data = JSON.parse(request.response);
    console.log(data);
    //Getting all the countries from Asia continent /region using Filter function:
    let output1 = data.filter((item) => item.region === "Asia").map((item) => item.name);
    console.log(output1);

    //Getting all the countries with a population of less than 2 lakhs using Filter function:
    let output2 = data.filter((item) => item.population < 200000).map((item) => item.name);
        console.log(output2);

    //Print the total population of countries using reduce function:
    let output3 = data.reduce((acc, item) => acc + item.population, 0);
        console.log(output3);

    //Print the country which uses US Dollars as currency:
    let output4 = data.filter((x) => {
        for(let cur in x.currencies){
                if(x.currencies[cur].code === "USD")
                return true;
            }
        });
        console.log(output4);

    //Print the following details name, capital, flag using forEach function:
    let val1 = data.forEach(ele => console.log(ele.name));
   	let val2 = data.forEach(ele => console.log(ele.capital));
   	let val3 = data.forEach(ele => console.log(ele.flag));
    console.log(val1 + " " + val2 + " " + val3);

}
