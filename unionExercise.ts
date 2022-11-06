let highScore: number | boolean;
highScore =1;
highScore =false;


const stuff: number[] | string []  = []



type SkillLevel = "beginner" | "intermediate" | "advanced";


type SkiSchoolStudents = {
    name:string;
    age:number;
    sport: "ski" | "snowboard";
    level: SkillLevel;

}

type RGB = {
    r: number;
    g: number;
    b: number;
}
type HSL = {
    h: number;
    s: number;
    l: number;
}
const colors: (RGB | HSL)[]=[];

const greet = (person: string | string[]): void => {
if(typeof person === "string" ){
console.log(`hello, ${person}`);
} else {
    for(let p of person){
        console.log(`Hello, ${p}`)
    }
  }
};