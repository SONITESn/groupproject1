// defining the global variables that used both in Rectangle and Triangle functions
let steps = 2;

//definition of the recCalc function with the parameters of height, width, offsetLength

var recCalc = (height, width, offsetLength) =>
{    

    // creating the ladder for rectangle
    for(let s=0;s<steps;s++)
    {
        var rectangle="";

        //draw line by line
        for(let h=0;h<height;h++)
        {
            // create new line
            let line = "\n";

            // create offset
            let offset = ""; 
            for (let o=0;o<offsetLength;o++)
                offset+= " ";
            // append it to the new line
            line += offset;

            // draw number stars in that line equal to the width
            for(let w=0;w<width;w++)
                line += "*";

            // append the line to the rectangle
            rectangle += line;

        }
        console.log(rectangle);
        //performing different calculuations to generate 
        height = height + 8;
        width = width + 8;
    }
}

let recDrawing1 = recCalc(9,8,10);//change to rectangle1

let recDrawing2 = recCalc(9,12,20);//change to rectangle2


var triCalc = (height, Length) =>
{
    //let repeat = 2;
    

    for (let r=0; r<steps;r++)
    {
        var triangle = "";
        //for each line
        for (let h=0; h<height; h++)
        {
            
            // create a new line
            let line = "\n";
            
            let displacement = "";
            for (let d=0;d<Length;d++)
                displacement = displacement +  " ";
            
            // create the offset
            let offset = "";
            for (let offsetLength=height-(h+1);offsetLength>=0;offsetLength--)
                offset += " ";

            //append the created offset to the line
            line = line + displacement
            line = line + offset;
            

            // draw a number of starts equal to the line number
            for (let s=0;s<h+1;s++)
                line = line + "*";

            // append the new line
            triangle = triangle + line;
        }

        console.log(triangle);
       
    }
}

let triDrawing1 = triCalc(9,10);

let triDrawing2 = triCalc(15,20);
