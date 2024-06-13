import React from 'react';
import Codebx from '../../Components/Codebx/Codebx'
import Highlight from '../../Components/highlight/Highlight';
import Menubar from '../../menubar/Menubar';
import Aside from '../../Components/Aside/Aside';

const Array = () => {

    const length = 
    `#include <stdio.h>
//must include easyc.h file
#include <easyC.h>
    
    int main() {
       
        char name[] = {'J','A','C', 'K'};
        int size =  sizeof(name)/sizeof(name[0]);
    
        printf("%d", size);
        return 0;
        
    }`;

    const array_ex =
        `// example : 
// printArr_int(arr, sizeOfarray)
`;

    const length_char =
        `#include <stdio.h>
//alawys use while working with characters or strings
#include <string.h>

//must include easyc.h file
#include <easyC.h>

int main() {
   
    char name[] = {'J','A','C', 'K'};
    int size =  sizeof(name)/sizeof(name[0]);
    
    printArr_char(name, size);
    
    return 0;
    
}`;

    const printArr_int =
        `// example : 
// insertAtBeginning_int(arr, &sizeOfarray, value_to_be_added)`;

    const length_int = `
#include <stdio.h>
//must include easyc.h file
#include <easyC.h>

int main() {
   
    int arr[] = {1,2,3,4,5};
    int size = sizeof(name)/sizeof(name[0]);
   
    int value = 0;
    
    //this function also update the value of size variable with current size or length of array
    insertAtBeginning_int(arr, size, value);
    
    //easyc print function 
    printArr_int(arr, size);
    return 0;
    
}   
    `;

    const character_array =
        `// example : 
// insertAtEnd_char(character_array,  character_to_be_added)`;

    const insertAtBeginning_char =
        `#include <stdio.h>
//must include easyc.h file
#include <easyC.h>

//alawys use while working with characters or strings
#include <string.h>

int main() {
   
    char chrArr[] = {'a', 'b', 'c', 'd'};

    char chrr = '@';
    
    insertAtBeginning_char(chrArr, chrr);
    
    return 0;
    
}`;

    const insertAtEnd_ex =
        `// example : 
// insertAtEnd_int(arr, &sizeOfarray, value_to_be_added)`;

    const insertAtEnd_int =
        `#include <stdio.h>
//must include easyc.h file
#include <easyC.h>
    
int main() {
       
    int arr[] = {1,2,3,4,5};
    int size =  sizeof(arr)/sizeof(arr[0]);
       
    int value = 6;
        
    //this function also update the value of size variable with current size or length of array
    insertAtEnd_int(arr, size, value);
        
    //easyc print function 
    printArr_int(arr, size);
    return 0;
        
}`;

    const end_char_ex =
        `// example : 
// insertAtEnd_char(&address_of_character_array,  character_to_be_added)`;

    const chrr =
        `#include <stdio.h>
//must include easyc.h file
#include <easyC.h>

//alawys use while working with characters or strings
#include <string.h>

int main() {
   
    char chrArr[] = {'a', 'b', 'c', 'd'};

    char chrr = 'e';
    
    insertAtEnd_char(&chrArr, chrr);
    
    return 0;
    
}`;


    const index_ex =
        `// example : 
// insertAtEnd_int(&arr, &sizeOfarray, value_to_be_added, index_where_to_add_value)`;

    const insertAtIndex_int =
        `#include <stdio.h>
//must include easyc.h file
#include <easyC.h>

int main() {
   
    int arr[] = {1,2,4,5};
    int size =  sizeof(arr)/sizeof(arr[0]);
    int index = 2;
    int value = 3;
    
    //this function also update the value of size variable with current size or length of array
    insertAtIndex_int(&arr, &size, value, index);
    
    //easyc print function 
    printArr_int(arr, size);
    return 0;
    
}`;

    const char_ex =
        `// example : 
// insertAtEnd_char(&address_of_character_array,  character_to_be_added)`;

    const end_char =
        `#include <stdio.h>
//must include easyc.h file
#include <easyC.h>

//alawys use while working with characters or strings
#include <string.h>

int main() {
   
    char chrArr[] = {'a', 'b', 'c', 'd'};

    char chrr = 'e';
    
    insertAtEnd_char(&chrArr, chrr);
    
    return 0;
    
}`;

    const delete_ex =
        `// example : 
// deleteFromBeginning_int(arr, &sizeOfarray)`;

    const deleteFromBeginning_int =
        `#include <stdio.h>
//must include easyc.h file
#include <easyC.h>

int main() {
   
    int arr[] = {1,2,3,4,5};
    int size =  sizeof(arr)/sizeof(arr[0]);
       
    //this function also update the value of size variable with current size or length of array
    deleteFromBeginning_int(arr, &size);
    
    //easyc print function 
    printArr_int(arr, size);
    return 0;
    
}`;

    const delete_char_ex =
        `// example : 
// deleteFromBeginning_char(&character_array)`;

    const deleteFromBeginning_char =
        `#include <stdio.h>
//must include easyc.h file
#include <easyC.h>

//alawys use while working with characters or strings
#include <string.h>

int main() {
   
    char chrArr[] = {'a', 'b', 'c', 'd'};

    
    deleteFromBeginning_char(chrArr);
    
    return 0;
    
}`;

    const deleteFromEnd_int =
        `#include <stdio.h>
//must include easyc.h file
#include <easyC.h>

int main() {
   
    int arr[] = {1,2,3,4,5};
    int size =  sizeof(arr)/sizeof(arr[0]);
   
    //this function also update the value of size variable with current size or length of array
    deleteFromEnd_int(arr, &size);
    
    //easyc print function 
    printArr_int(arr, size);
    return 0;
    
}`;

    const deleteFromEnd_char =
        `#include <stdio.h>
//must include easyc.h file
#include <easyC.h>

//alawys use while working with characters or strings
#include <string.h>

int main() {
   
    char chrArr[] = {'a', 'b', 'c', 'd'};    
    deleteFromEnd_char(&chrArr);
    
    return 0;
    
}`;

    const del_index_ex =
        `// example : 
// deleteFromIndex_int(arr, &sizeOfarray, index)`;

    const deleteFromIndex_int =
        `#include <stdio.h>
//must include easyc.h file
#include <easyC.h>

int main() {
   
    int arr[] = {1,2,3,4,5};
    int size =  sizeof(arr)/sizeof(arr[0]);
    int index = 0;
    
    //this function also update the value of size variable with current size or length of array
    deleteFromIndex_int(arr, &size, index);
    
    //easyc print function 
    printArr_int(arr, size);
    return 0;
    
}`;

    const char_arr =
        `// example : 
// deleteFromBeginning_char(&character_array, index)`;

    const deleteFromIndex_char =
        `#include <stdio.h>
//must include easyc.h file
#include <easyC.h>

//alawys use while working with characters or strings
#include <string.h>

int main() {
   
    char chrArr[] = {'a', 'b', 'c', 'd'};
    int index = 0;
    
    deleteFromIndex_char(&chrArr, index);
    
    return 0;
    
}`;

    const sort =
        `#include <stdio.h>
//must include easyc.h file
#include <easyC.h>

int main() {
   
    int arr[] = {1, 4, 2, 3, 6, 5};
    int size =  sizeof(arr)/sizeof(arr[0]);
    
    sort_int(arr, size);
    
    //easyc print function 
    printArr_int(arr, size);
    return 0;
    
}
`;
    const search = `
#include <stdio.h>
//must include easyc.h file
#include <easyC.h>

int main() {
	   
    int arr[] = {23, 43, 5, 8, 9};
	  
    //length function is also from easyC
    int size = sizeof(arr)/sizeof(arr[0]);
    
    // the search function will return the index of searched value
    int indexOfSearchedValue = search_int(arr, 5, size);
    
    return 0;
}
    
    `;


    return (


        <>
         <Menubar />
         <Aside />

            <div className="container guide-container">

                <div className="content-area">
                    <h1> Array</h1>
                    <p>The easyC library provides a set of functions designed to simplify operations on arrays. These functions allow you to perform common tasks such as insertion, deletion, updating, and other manipulations with ease. This guide will introduce you to these array operations and show you how to use them in your C programs.
                        <br /> <br />
                        <b>Supported datatypes</b> :  <Highlight value={"int"} /> , <Highlight value={"float"} /> , <Highlight value={"char"} />
                    </p>
                    <hr />

                    <h2>Table Of Content (Array Operations)</h2>
                    <ul>
                        <li><a href="#insertion">Insertion</a></li>
                        <li><a href="#deletion">Deletion</a></li>
                        <li><a href="#sorting">Sorting</a></li>
                        <li><a href="#searching">Searching</a></li>
                    </ul>
                    <hr />

                    

                    <h2 id='print-array'>Print Array</h2>
                    <p>To find the  values of array you also have pre build function for each supported data types:</p>
                    <ul>
                        <li><Highlight value={"printArr_int()"} /> for int datatype</li>
                        <li><Highlight value={"printArr_float()"} /> for float datatype</li>
                        <li><Highlight value={"printArr_char()"} /> for char datatype</li>
                    </ul>
                    <br />
                    <p>you just have to pass a two argument during function call (1st: array itself , 2nd : length of array)</p>
                    <Codebx code={array_ex} />
                    <br />
                    <p>for example :</p>
                    <Codebx code={length_char} />
                    <hr />

                    <h2 id='insertion'>Insertion </h2>
                    <p>You can insert element in array with easyC in three ways: </p>
                    <ul>
                        <li>insert at beginning </li>
                        <li>insert at end</li>
                        <li>inset at given index</li>
                    </ul>
                    <br />

                    <h3>Insert at beginning</h3>
                    <p>function for each supported data types:</p>
                    <ul>
                        <li><Highlight value={"insertAtBeginning_int()"} /> for int datatype</li>
                        <li><Highlight value={"insertAtBeginning_float()"} /> for float datatype</li>
                        <li><Highlight value={"insertAtBeginning_char()"} /> for char datatype</li>
                    </ul>
                    <br />

                    <p>for <Highlight value={"int"} /> & <Highlight value={"float"} /> you have to pass three argument  during function call :</p>
                    <ul>
                        <li>1st: array itself </li>
                        <li>2nd : this is an pointer based argument so you need to pass address of variable which is holding the length of variable(example : <Highlight value={"&size"} />)</li>
                        <li>3rd: value to be added</li>
                    </ul>
                    <Codebx code={printArr_int} />
                    <br />
                    <p>for example:</p>
                    <Codebx code={length_int} />
                    <br />
                    <p>for <Highlight value={"char"} /> array  you have to pass two argument  during function call:</p>
                    <ul>
                        <li>1st: character array itself</li>
                        <li>2nd : character to be inserted</li>
                    </ul>
                    <Codebx code={character_array} />
                    <br />
                    <p>for example:</p>
                    <Codebx code={insertAtBeginning_char} />
                    <br />

                    <h3>Insert at end</h3>
                    <p>function for each supported data types:</p>
                    <ul>
                        <li><Highlight value={"insertAtEnd_int()"} /> for int datatype</li>
                        <li><Highlight value={"insertAtEnd_float()"} /> for float datatype</li>
                        <li><Highlight value={"insertAtEnd_char()"} /> for char datatype</li>
                    </ul>
                    <br />
                    <p>you have to pass three argument  during function call - </p>
                    <ul>
                        <li>1st: array itself </li>
                        <li>2nd : this is an pointer based argument so you need to pass address of variable which is holding the length of variable (example : <Highlight value={"&size"} />)</li>
                        <li>3rd: value to be added</li>
                    </ul>
                    <Codebx code={insertAtEnd_ex} />
                    <p>for example:</p>
                    <Codebx code={insertAtEnd_int} />
                    <br />

                    <p>for <Highlight value={"char"} /> array  you have to pass two argument  during function call :</p>
                    <ul>
                        <li>1st: address of character array <Highlight value={"&chr"} /></li>
                        <li>2nd : character to be inserted </li>
                    </ul>
                    <Codebx code={end_char_ex} />
                    <br />
                    <p>for example:</p>
                    <Codebx code={chrr} />
                    <br />

                    <h3>Insert at given Index</h3>
                    <p>function for each supported data types:</p>
                    <ul>
                        <li><Highlight value={"insertAtIndex_int()"} /> for int datatype</li>
                        <li><Highlight value={"insertAtIndex_float()"} /> for float datatype</li>
                        <li><Highlight value={"insertAtIndex_char"} /> for char datatype</li>
                    </ul>
                    <br />
                    <p>you have to pass four argument  during function call - </p>
                    <ul>
                        <li>1st: address of array (example : <Highlight value={"&arr"} />)</li>
                        <li>2nd : this is an pointer based argument so you need to pass address of variable which is holding the length of variable (example : <Highlight value={"&size"} />)</li>
                        <li>3rd: value to be added</li>
                        <li>4th : index where you want to add value</li>
                    </ul>
                    <Codebx code={index_ex} />
                    <br />
                    <p>for example:</p>
                    <Codebx code={insertAtIndex_int} />
                    <br />

                    <p>for <Highlight value={"char"} /> array  you have to pass three argument  during function call :</p>
                    <ul>
                        <li>1st : address of character array <Highlight value={"&chr"} /></li>
                        <li>2nd : character to be inserted </li>
                        <li>3rd :  index where you want to add value</li>
                    </ul>
                    <Codebx code={char_ex} />
                    <br />
                    <p>for example:</p>
                    <Codebx code={end_char} />
                    <hr />

                    <h2 id='deletion'>Deletion</h2>
                    <p>You can insert element in array with easyC in three ways: </p>
                    <ul>
                        <li>Deletion from beginning </li>
                        <li>Deletion from end</li>
                        <li>Deletion from given index</li>
                    </ul>
                    <br />

                    <h3>Deletion from beginning</h3>
                    <p>function for each supported data types:</p>
                    <ul>
                        <li><Highlight value={"deleteFromBeginning_int()"} /> for int datatype</li>
                        <li><Highlight value={"deleteFromBeginning_float()"} /> for float datatype</li>
                        <li><Highlight value={"deleteFromBeginning_char()"} /> for char datatype</li>
                    </ul>
                    <br />
                    <p>for <Highlight value={"int"} /> & <Highlight value={"float"} /> you have to pass two argument  during function call :</p>
                    <ul>
                        <li>1st: array itself </li>
                        <li>2nd : this is an pointer based argument so you need to pass address of variable which is holding the length of variable (example : <Highlight value={"&size"} />)</li>
                    </ul>
                    <Codebx code={delete_ex} />
                    <br />
                    <p>for example:</p>
                    <Codebx code={deleteFromBeginning_int} />
                    <br />
                    <p>for <Highlight value={"char"} /> array  you just have to pass single argument, address of character array  </p>
                    <Codebx code={delete_char_ex} />
                    <br />
                    <p>for example:</p>
                    <Codebx code={deleteFromBeginning_char} />
                    <br />
                    <h3>Deletion from end</h3>
                    <p>function for each supported data types:</p>
                    <ul>
                        <li><Highlight value={"deleteFromEnd_int()"} /> for int datatype</li>
                        <li><Highlight value={"deleteFromEnd_float()"} /> for float datatype</li>
                        <li><Highlight value={"deleteFromEnd_char()"} /> for   char datatype</li>
                    </ul>
                    <br />

                    <p>to perform Deletion from end you can follow same steps as Deletion from beginning</p>
                    <br />
                    <p>for example:</p>
                    <Codebx code={deleteFromEnd_int} />
                    <br />

                    <p>for <Highlight value={"char"} /></p>
                    <Codebx code={deleteFromEnd_char} />
                    <br />

                    <h3>Deletion from Index</h3>
                    <p>Function for each supported data types:</p>
                    <ul>
                        <li><Highlight value={"deleteFromIndex_int()"} /> for int datatype</li>
                        <li><Highlight value={"deleteFromIndex_float"} /> for float datatype</li>
                        <li><Highlight value={"deleteFromIndex_char"} /> for  char datatype</li>
                    </ul>
                    <br />

                    <p>for <Highlight value={"char"} /> & <Highlight value={"float"} /> you have to pass two argument  during function call :</p>
                    <ul>
                        <li>1st: array itself </li>
                        <li>2nd : this is an pointer based argument so you need to pass address of variable which is holding the length of variable ( example : <Highlight value={"&size"} />)</li>
                        <li>3rd : index of the position in the array from which you want to delete the value.</li>
                    </ul>
                    <Codebx code={del_index_ex} />
                    <br />

                    <p>for example:</p>
                    <Codebx code={deleteFromIndex_int} />
                    <br />

                    <p>for <Highlight value={"char"} /> array  you  have to pass two argument:</p>
                    <ul>
                        <li>1st : address of character array  </li>
                        <li>2nd : index of the position in the array from which you want to delete the value.</li>
                    </ul>
                    <Codebx code={char_arr} />
                    <br />

                    <p>for example:</p>
                    <Codebx code={deleteFromIndex_char} />
                    <hr />

                    <h2 id='sorting'>sorting</h2>
                    <p>To sort the array you have sort functions for each supported data types:</p>
                    <ul>
                        <li><Highlight value={"sort_int()"} /> for int datatype</li>
                        <li><Highlight value={"dort_float()"} /> for float datatype</li>
                        <li><Highlight value={"sort_char()"} /> for char datatype</li>
                    </ul>
                    <br />

                    <p>you just have to pass three arguments during function call:</p>
                    <ul>
                        <li>1st : array itself</li>
                        <li>2nd : size of array </li>
                    </ul>
                    <br />

                    <p>for example:</p>
                    <Codebx code={sort} />
                    <hr />

                    <h2 id='searching'>Searching</h2>
                    <p> To search element in array you have Search functions for each supported data types:</p>
                    <ul>
                        <li><Highlight value={"search_int()"} /> for int datatype</li>
                        <li><Highlight value={"search_float()"} /> for float datatype</li>
                        <li><Highlight value={"search_char"} /> for char datatype</li>
                    </ul>
                    <br />

                    <p>You have to pass three arguments during function call:</p>
                    <ul>
                        <li>1st : array itself</li>
                        <li>2nd : value to be searched</li>
                        <li>3rd : size of array</li>
                    </ul>
                    <br/>

                    <p>for example:</p>
                    <Codebx code={search}></Codebx>






                </div>
            </div>

        </>

    )
}

export default Array