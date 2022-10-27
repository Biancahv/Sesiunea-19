const animals = ['oaie', 'gaina']; 
Console.log(animals)

const animals2 = new Array ('oaie2', 'gaina2');
Console.log(animals2);

const obj = new Object ();
// const obj = {};
Console.log(obj);

function Student(name, age, grade) {
// this = {}

this.name = name;
this.age = age;
this.grade = grade;
this.sayHello = function(){
    Console.log('hello');
};

this.average = function() {return this.grade / 3;}

//return this;
}

const student1 = new Student('Bianca', 24, 8);
Console.log(student1);
student1.sayHello();

const student2 = new Student('Ion', 30, 9);
Console.log(student1);

function dummyCunstructor(name, age, grade) {
    const obj = {
        name,
        age,
        grade,
        sayHello: function(){
            Console.log('hello', this);
        },
    }
}