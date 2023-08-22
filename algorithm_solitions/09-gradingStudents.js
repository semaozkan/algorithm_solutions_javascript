function gradingStudents(grades) {
    let n = grades.length;
    let roundedGrades = [];
    
    grades.forEach((grade) => {
        let kalan = grade % 10;
        if(grade < 38){
           roundedGrades.push(grade); 
        }else if(kalan >= 8){   
            grade = (grade - kalan) + 10
            roundedGrades.push(grade);
        }else if(kalan >= 3 && kalan < 5){
            grade = (grade - kalan) + 5;
            roundedGrades.push(grade);
        }else{
            roundedGrades.push(grade);
        }
    })
    
    return roundedGrades;

}