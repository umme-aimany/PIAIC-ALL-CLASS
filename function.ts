///////////////////FUNCTION TOPIC//////////////////////
function message(){
    let name="aiman";
    let add=(`my name is ${name}`);
    console.log(add);   
}
message();
function egg(){
    let fry=1+2.5+2;
    console.log(fry);

}
egg()
/////////////////Returning function values//////////////////////
function greet(){
    let wakeup="hellow good morning my dear friend";
    let fname="Bisma";
    let adds=(`${wakeup}  ${fname}`);
    return adds

}
let news =greet();
console.log(news);
///////////////Restricted data type ////////////////function ma data type restrict bhi kar sakta ha//////////////
/////agar hm data type restrict kar rha ha to hme lazmi return karana ha agar return nhi karai ga to error ai ga ///////////////////////
function pract():number {
    let num=22;
    let num2=20;
    let divise=num/num2;

    return divise

}
let call=pract();    
console.log(call);
////////////////////////////Parameters & A rguments//////////////////////////////////////////////
function Para(egg:number,salt:number,water:number){
    return egg +salt+water

}
let new1=Para(5,1,22);
console.log(new1);

function pract2(a:string,b:number){
    return a+b

}
let new3=pract2("aiman",57)
console.log(new3);
////function restrict kardainga to or koi type nhi likh sakta means agar number restrict kardiya to number hi likhnaparai ga ///////////
function hi(name:string,age:number,gender:string):any{
    return name + age+ gender;
}
let new4=hi("Umme Aiman ",18," female")
console.log(new4);
/////restrict the function////////////////////////
function calculatearea(width:number,height:number):number{
    return width * height


}
let new5=calculatearea(5,7);
console.log(new5);
//////////////////////DEFAULT PARAMETER////////////////////////////
///////////1)default parameter sab sa last  ma likhta ha 2)
function recipe(egg:string,salt:string,water:number=1.5){
    return egg + salt+water

}
let new6=recipe("two eggs","1 salt");
console.log(new6);
///////////default parameters////////////////////////////

function recipes(egg:number=2,water:number=2,milk:number=2.5):number
{
    return egg+water+milk;

}
let new7:number=recipes()
console.log(new7);
/////////////////////REST PARAMETETS////ACCEPTING UNKNOWN PARAMETERS//////////////////
function half(egg:number=2, ...ingridents:number[]){
    console.log(egg)
    console.log(ingridents)

}
let new8= half(22,33,22);
console.log(new8);
////////////////ARROW FUNCTION////A short way of writing a function////////////

console.log("ARROW FUNCTION");
let fry=()=> 1+1.2+33;
let response=fry()
console.log(response);
//////////////////ARGUMENTS AND PARAMETERS IN ARROW FUNCTION///////////////////////
let roast=(chicken:string,oil:string,masala:string):string=>(
      chicken+oil+masala
)
let new10=roast("one kg ","2liter ","1cup ")
console.log(new10);
////////////////////ARROW FUNCTION WITHOUT ARGUMENTS;
console.log("arrow function without parameters");
let cook=()=>{
    return 1+2+22
}
let new11=cook();
console.log(new11);


