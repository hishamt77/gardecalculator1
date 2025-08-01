let score= 85;
let name="Athira";
function calculateGrade(score)
{
    if (score >= 90) 
    {
        console.log("Grade: A+");
        document.write("Grade: A+<br>");
    }
     else if (score >= 80) 
    {
        console.log("Grade: A");
        document.write("Grade: A<br>");
    }
     else if (score >= 70) 
    {
        console.log("Grade: B+");
        document.write("Grade: B+<br>");
    }
    else if(score>= 60)
    {
        console.log("Grade: B");
        document.write("Grade: B<br>");
    }
    else
    {
        console.log("Grade: F");
        document.write("Grade: F<br>");
    }

}
function displayResult(name,score)
{
    
    document.write("student: " + name + "<br>");
    document.write("Score: " + score + "<br>");
    let grade = calculateGrade(score);
    console.log("Student: "+name)
    console.log("Score: "+score)
}

displayResult(name,score);