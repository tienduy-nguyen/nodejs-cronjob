class Person{
	constructor(firstName, lastName,age, likes = []){
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.likes = likes;
	}
	getBio(){
		let bio =  `${this.firstName} is ${this.age}`;
		this.likes.forEach((like) => {
			bio += `\n${this.firstName} likes ${like}`;
		});
		return bio;
	}
	setName(fullName) {
		const names = fullName.split(' ');
		this.firstName = names[0];
		this.lastName = names[1];
	}
}

const myPerson = new Person('Andrew','Mead',27,['Teaching']);
console.log(myPerson);


const me = new Person('Duy', 'NGUYEN', 26,['Reading','Coding','Programming']);
console.log(me.getBio());

