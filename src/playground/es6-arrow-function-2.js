const user ={
    name: 'Gaurav',
    cities:['fresno','philadelphia'],
    printPlacesLived: function(){
        console.log(this.name);
        console.log(this.cities);

        this.cities.forEach((city) =>{
            console.log(this.name + ' has lived in ' + city);
        })


        
    }
};
user.printPlacesLived();

const multiplier ={
    number : [1,2,3,4,5],
    multiplier : 3,
    printNumber(){
        return this.number.map((num) => num*this.multiplier);
    }
}
console.log(multiplier.printNumber());