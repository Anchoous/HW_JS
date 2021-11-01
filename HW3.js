//// Task 1
//1.1
let arr = [1,2,3];
function last_element(arr){
    return arr[arr.length - 1];

}

console.log("The last element. Function 1  : "+ last_element(arr));

//1.2
function last_element_2(arr)
{
    return arr.pop();
}
console.log("The last element. Function 2  : "+last_element_2(arr));


//// Task 2

// 2.1 
function join_elements(arr)
{
    return arr.join();
}

arr = ["Hello","1",23];
console.log("Arrray into string : "+ join_elements(arr));

// 2.2
const my_join = (arr) => {
        let result = '';
        arr.forEach((element)=>{
          result+=element;
        })
        return result;
      }
      
console.log("array to string (2)" + my_join(arr));


let arr_1 = [1,2,3];
let arr_2 = [1,1,1];

// Task 3

const sumOfArrays = (first_arr, second_arr) => {
    return first_arr.map((element, index) => element += second_arr[index] )
  }
 
console.log("Sum of arrays  "+ sumOfArrays(arr_1,arr_2));


// Task 4

class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  
    getPerimetr(){
      return 2*(this.height + this.width);
    }
  
    getArea() {
      return this.height * this.width;
    }
  }
  
let rec1 = new Rectangle(1,2);
console.log("Area  " + rec1.getArea())
console.log("Perimeter  " + rec1.getPerimetr())

