const emptyObject = {};

emptyObject.name = 'dave';

emptyObject.age = 10;

emptyObject.get_data = function(){

return 1+3;

};

console.log(emptyObject.age, emptyObject.get_data());

const user = {

age :20,

name: "dave",

get_data: function(){

return 1 + 2;

}

};

console.log(typeof user, user);

console.log(user.age);

console.log(user.name);

console.log(user.get_data());

const user = {

  age: 10,
  
  name: 'dave',
  
  details {
  
  hobby: 'coding',
  
  major: 'japanese',
  
  get_details: function(item) {
  
  return item + 2;
  
  }
  
  }
  
  };
  
  console.log(user.age,user.name);
  const user = {

    age: 10,
    
    name: 'dave',
    
    details: {
    
    hobby: 'coding',
    
    major: 'japanese',
    
    get_hobby: function(){
    
    return this.hobby;
    
    }
    
    }
    
    };
    
    console.log(user.details.get_hobby());


    const user = {

      age:10,
      
      name: 'dave lee',
      
      get get_age(){
      
      return this.age;
      
      },
      
      set set_age(value) {
      
      this.age = value;
      
      }
      
      };
      
      console.log(user.get_age);
      
      user.set_age = 20;
      
      console.log(user.get_age);
      class user1{

        constructor(){
        
        this.name = 'dave';
        
        this.age=30;
        
        }
        
        get_message(){
        
        return 'hello!';
        
        }
        
        }
        
        const dave =new user1();
        
        console.log(typeof dave, dave.name, dave.age, dave.get_message());

        class animal{

          constructor (name) {
          
          this.name =name;
          
          }
          
          };
          
          class user extends animal{
          
          constructor (name, age){
          
          super(name);
          
          this.age = age;
          
          }
          
          };
          
          const dave= new user('dave', 30);
          
          console.log(dave.name,dave.age);       