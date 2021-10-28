let text = "Program"
let letter = "r"

function task1(text, letter){
    arr = text.split('')
    arr.forEach(
        function find(i){
            if (i == letter)
            {
                console.log("Letter '"+letter+"' has index "+text.indexOf(letter)+" in the text")

            }
            else{
                console.log("There is no '"+letter+"' in the word")
            }


        }
    )
}
task1(text,letter)

function task2(str){
    if (Boolean(str)){
        console.log("The string is not empty")
    }
    else{
        console.log("The string is empty")
    }
}

task2("0")

function task3(name){
    arr = name.split(" ")
    return arr[0][0].toUpperCase() +"."+ arr[1][0].toUpperCase()+"."

}

console.log(task3("tanya frys"))

function task4(number1, number2){
    if ( number1 > number2){
        console.log(number1+" is the largest")
    }
    else {
        console.log(number2+" is the largest")
    
    }
}

task4(2,31)

function task5(n_1,n_2,n_3){
    let arr = [n_1,n_2,n_3]
    for( let i=0; i < 3; i++) {            
        for(let j = 2; j > i; j-- ){
            if (arr[j-1]>arr[j])
            {
                temp = arr[j-1]
                arr[j-1]=arr[j]
                arr[j]=temp

        }

        }
           
    }
    console.log(arr)
}
task5(6,5,4)