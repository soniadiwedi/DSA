function addMatrices(){
    let rows=matrix1.length
    let columns=matrix1[0].length
   // Check if the matrices have the same dimensions
  if (rows !== matrix2.length || columns !== matrix2[0].length) {
    console.log("Matrices must have the same dimensions for addition.");
    return;
  }
  // Initialize the result matrix with zeros
  let resultMatrix=[]
  for(let i=0;i<rows;i++){
    resultMatrix[i]=[]
    for(let j=0;j<columns;j++){
        resultMatrix[i][j]=matrix1[i][j]+matrix2[i][j]
    }
  }
  return resultMatrix
}


const matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  const matrix2 = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
  ];

  const resultMatrix = addMatrices(matrix1, matrix2)