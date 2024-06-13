import React, { useContext, useEffect } from 'react';
import Codebx from '../../Components/Codebx/Codebx'
import Highlight from '../../Components/highlight/Highlight';
import Aside from '../../Components/Aside/Aside';
import Menubar from '../../menubar/Menubar';


const Linkedlist = () => {

 

  const L_S_Initialization = `LinkedList_S* head = initializeList_S(); `;
  const L_S_I_begin = 'insertAtBeginning_S(&head, 43);';
  const L_S_I_end = `insertAtEnd(&head, 56);`;
  const L_S_I_index = `insertAtIndex_S(&head, 3, 85);`;
  const L_S_D_begin = `deleteFromBeginning_S(&head);`;
  const L_S_D_end = `deleteFromEnd_S(&head);`;
  const L_S_D_index = `deleteFromEnd_S(&head, 1);`;
  const L_S_print = `printList_S(&head);`;
  const L_S_length = `getLenght_S(&head);`;
  const L_S_search = `serach_S(&head, 34);
// this function is an boolean function it will return true or false `;
  const L_S_ex = `#include <stdio.h>
//must include easyc.h file
#include <easyC.h>


int main() {
   LinkedList_S* head = initializeList_S(); 

    printf("Inserting elements at the beginning: ${'\\'}n");
    insertAtBeginning_S(&head, 10);
    insertAtBeginning_S(&head, 20);
    insertAtBeginning_S(&head, 30);
    printList_S(head); 

    printf("Inserting element at the end (40):\\n");
    insertAtEnd_S(&head, 40);
    printList_S(head); 

    printf("\\nInserting element at index 2 (50):\\n");
    insertAtIndex_S(&head, 50, 2);
    printList_S(head); 

    printf("\\nDeleting element from the beginning:\\n");
    deleteAtBeginning_S(&head);
    printList_S(head); 

    printf("\\nDeleting element from the end:\\n");
    deleteAtEnd_S(&head);
    printList_S(head); 

    printf("\\nSearching for element 20:\\n");
    if (search_S(head, 20)) {
        printf("Element 20 found in the list.\\n");
    } else {
        printf("Element 20 not found in the list.\\n");
    }
    
    printf("\\nLength of the list: %d\\n", getLength_S(head));

    printf("\\nSearching for element 50:\\n");
    if (search_S(head, 50)) {
        printf("Element 50 found in the list.\\n");
    } else {
        printf("Element 50 not found in the list.\\n");
    }

    return 0;
}


`;
  const L_D_initial = `serach_S(&head, 34);`;
  const L_D_ex = `#include <stdio.h>
//must include easyc.h file
#include <easyC.h>


int main() {
  LinkedList_D* head = initializeList_D();

  printf("Inserting elements at the beginning:\n");
  insertAtBeginning_D(&head, 10);
  insertAtBeginning_D(&head, 20);
  insertAtBeginning_D(&head, 30);
  printList_D(head);

  printf("\nInserting element at the end (40):\n");
  insertAtEnd_D(&head, 40);
  printList_D(head);

  printf("\nInserting element at index 2 (50):\n");
  insertAtIndex_D(&head, 50, 2);
  printList_D(head);

  printf("\nDeleting element from the beginning: \ n");
  deleteAtBeginning_D(&head);
  printList_D(head);

  printf("\nDeleting element from the end:\n");
  deleteAtEnd_D(&head);
  printList_D(head);

  printf("\nDeleting element from index 1:\n");
  deleteAtIndex_D(&head, 1);
  printList_D(head);

  printf("\nSearching for element 20:\n");
  if (search_D(head, 20))
    printf("Element 20 found in the list.\n");
  else
    printf("Element 20 not found in the list.\n");

  printf("\nSearching for element 50:\n");
  if (search_D(head, 50))
    printf("Element 50 found in the list.\n");
  else
    printf("Element 50 not found in the list.\n");

    return 0;
}`;
  const L_C_initial = `LinkedList_C* head = initializeList_C(); `;
  const L_C_ex = `#include <stdio.h>
//must include easyc.h file
#include <easyC.h>


int main() { 
LinkedList_C* head = initializeList_C();

  printf("Inserting elements at the beginning:\n");
  insertAtBeginning_C(&head, 10);
  insertAtBeginning_C(&head, 20);
  insertAtBeginning_C(&head, 30);
  printList_C(head);

  printf("\nInserting element at the end (40):\n");
  insertAtEnd_C(&head, 40);
  printList_C(head);

  printf("\nInserting element at index 2 (50):\n");
  insertAtIndex_C(&head, 50, 2);
  printList_C(head);

  printf("\nDeleting element from the beginning:\n");
  deleteAtBeginning_C(&head);
  printList_C(head);

  printf("\nDeleting element from the end:\n");
  deleteAtEnd_C(&head);
  printList_C(head);

  printf("\nSearching for element 20:\n");
  if (search_C(head, 20))
    printf("Element 20 found in the list.\n");
  else
    printf("Element 20 not found in the list.\n");

  printf("\nSearching for element 50:\n");
  if (search_C(head, 50))
    printf("Element 50 found in the list.\n");
  else
    printf("Element 50 not found in the list.\n");

    return 0;
}`;
  const S_S_L = `typedef struct LinkedList_S {
  int data;
  struct LinkedList_S* next;
} LinkedList_S;`;
  const S_D_L = `typedef struct LinkedList_D {
  int data;
  struct LinkedList_D* next;
  struct LinkedList_D* prev;
} LinkedList_D;`;
  const S_C_L = `typedef struct LinkedList_C {
  int data;
  struct LinkedList_C* next;
} LinkedList_C;`;

  return (

    <>
   <Menubar />
   <Aside />
      <div className="container guide-container">

        <div className="content-area">
          <h1>Linked List</h1>
          <p>The easyC library provides a set of functions designed to simplify operations on linked lists. These functions allow you to perform common tasks such as insertion, deletion, updating, and other manipulations with ease. This guide will introduce you to these linked list operations and show you how to use them in your C programs.</p>
          <br />

          <h2>Table of Contents</h2>
          <ul>
            <li>Singly Linked List</li>
            <li>Doubly Linked List</li>
            <li>Circular Linked List</li>
          </ul>
          <hr />

          <h2>Single Linked List</h2>
          <p><b>List of operations:</b></p>
          <ul>
            <li><a href="#insertion_in_singly_ll">Insertion</a></li>
            <li><a href="#deletion_in_singly_ll">Deletion</a></li>
            <li><a href="#print_ll">Print linked list</a></li>
            <li><a href="#length_ll">Length</a></li>
            <li><a href="#search_ll">Searching</a></li>
          </ul>
          <hr />
          <h3>Singly linked List Initialization</h3>
          <p>To initialize Singly linked list you can use  <Highlight value={`initializeList_S()`} /> function in variable with data type <Highlight value={`LinkedList_S*`} /> as given example:</p>
          <Codebx code={L_S_Initialization} />
          <hr />
          <h3 id="insertion_in_singly_ll">Insertion in Singly Linked List</h3>
          <ul>
            <li><a href="#single_ll_insert_beginning">Insert at Beginning</a></li>
            <li><a href="#single_ll_insert_ending">Insert at End</a></li>
            <li><a href="#single_ll_insert_index">Insert at given position</a></li>
          </ul>

          <p id="#single_ll_insert_beginning"><b>Insert at Beginning</b></p>
          <p>you can use <Highlight value={`insertAtBeginning_S()`} /> function to insert value at front of linked list or as first element this function will take two arguments:</p>
          <ul>
            <li><p>1st : address of head variable of LinkedList</p></li>
            <li><p>2nd : value to be inserted </p></li>
          </ul>
          <Codebx code={L_S_I_begin} />
          <p id="#single_ll_insert_ending"><b>Insert at End</b></p>
          <p>you can use <Highlight value={'`insertAtEnd_S()`'} />  function to insert value at end of linked list this function will take two arguments :</p>
          <ul>
            <li><p>1st : address of head variable of LinkedList</p></li>
            <li><p>2nd : value to be inserted </p></li>
          </ul>
          <Codebx code={L_S_I_end} />
          <p id="#single_ll_insert_index"><b>Insert at Given Index</b></p>
          <p>you can use <Highlight value={`insertAtIndex_S()`} /> function to insert value at given index of linked list this function will take three arguments</p>
          <ul>
            <li><p>1st : reference of head variable</p></li>
            <li><p>2nd : desired index where to insert value</p></li>
            <li><p>3rd : value to be inserted </p></li>
          </ul>
          <Codebx code={L_S_I_index} />

          <h3 id="deletion_in_singly_ll">Deletion in Singly Linked list</h3>
          <ul>
            <li><a href="#single_ll_delete_begin">Delete from Beginning</a></li>
            <li><a href="#single_ll_delete_End">Delete from End</a></li>
            <li><a href="#single_ll_delete_index">Deletion from given position</a></li>
          </ul>

          <p id="single_ll_delete_begin"><b>Delete From Beginning</b></p>
          <p>you can use <Highlight value={`deleteFromBeginning_S()`} /> function to delete value from front of linked list </p>
          <Codebx code={L_S_D_begin} />
          <p id="single_ll_delete_End"><b>Delete From End</b></p>
          <p>you can use <Highlight value={`deleteFromEnd_S()`} /> function to delete last value of linked list </p>
          <Codebx code={L_S_D_end} />
          <p id="single_ll_delete_index"><b>Delete From Given Index</b></p>
          <p>you can use <Highlight value={`deleteFromIndex_S()`} /> function to delete last value of linked list, this function with take two arguments</p>
          <ul>
            <li><p>1st : address of head node</p></li>
            <li><p>2nd : Index of value </p></li>
          </ul>
          <Codebx code={L_S_D_index} />

          <hr />

          <h3 id="print_ll">Print Linked List </h3>
          <p>To print Linked List you can simply use  <Highlight value={`printList_S()`} /> function</p>
          <Codebx code={L_S_print} />
          <hr />
          <h3 id="length_ll">Get Length of Singly Linked list</h3>
          <p>To gent Length of Singly Linked List you can use <Highlight value={`getLength_S()`} /> function</p>
          <Codebx code={L_S_length} />
          <h3 id="search_ll">Searching </h3>
          <p>to search values in Singly linked list you can use <Highlight value={`search_S()`} /> function, this function will take two arguments:</p>
          <Codebx code={L_S_search} />

          <p>Code Example :</p>
          <Codebx code={L_S_ex} />
          <hr />
          <h2>Doubly Linked List</h2>
          <h3>Initialization</h3>
          <p>To initialize Doubly linked list you can use <Highlight value={`initializeList_D()`} /> function in variable with data type <Highlight value={`LinkedList_D*`} /> as given example:</p>
          <Codebx code={L_D_initial} />
          <h3>Operations</h3>
          <p>syntax of operation functions on doubly linked list is same as singly linked list so you can directly use those functions without any issue</p>
          <p>here's the table representing all operations :</p>
          <div className="tableContainer">
            <table>
              <tr>
                <th>Operation Name</th>
                <th>Syntax</th>
                <th>Code Example</th>
              </tr>
              <tr>
                <td>Insert at Beginning</td>
                <td>insertAtBeginning_D(&head, new_data)</td>
                <td><Highlight value={`insertAtBeginning_D(head, 10);`} /></td>
              </tr>
              <tr>
                <td>Insert at End</td>
                <td>insertAtEnd_D(&head, new_data)</td>
                <td><Highlight value={`insertAtEnd_D(head, 40);`} /></td>
              </tr>
              <tr>
                <td>Insert at Index</td>
                <td>insertAtIndex_D(&head, data, index)</td>
                <td><Highlight value={`insertAtIndex_D(head, 50, 2);`} /></td>
              </tr>
              <tr>
                <td>Delete at Beginning</td>
                <td>deleteAtBeginning_D(&head)</td>
                <td><Highlight value={`deleteAtBeginning_D(head);`} /></td>
              </tr>
              <tr>
                <td>Delete at End</td>
                <td>deleteAtEnd_D(&head)</td>
                <td><Highlight value={`deleteAtEnd_D(head);`} /></td>
              </tr>
              <tr>
                <td>Delete at Index</td>
                <td>deleteAtIndex_D(&head, index)</td>
                <td><Highlight value={`deleteAtIndex_D(head, 1);`} /></td>
              </tr>
              <tr>
                <td>Search</td>
                <td>search_D(head, key)</td>
                <td><Highlight value={`Bool x = search_D(head, 20);`} /></td>
              </tr>
              <tr>
                <td>Print List</td>
                <td>printList_D(&head)</td>
                <td><Highlight value={`printList_D(head);`} /></td>
              </tr>
            </table>
          </div>


          <p>Code Example :</p>
          <Codebx code={L_D_ex} />
          <hr />
          <h2>Circular Linked List</h2>
          <h3>Initialization</h3>
          <p>To initialize Doubly linked list you can use <Highlight value={`initializeList_C()`} /> function in variable with data type LinkedList_C* as given example:</p>
          <Codebx code={L_C_initial} />
          <h3>Operations</h3>
          <p>syntax of operation functions on doubly linked list is same as singly linked list so you can directly use those functions without any issue</p>
          <p>here's the table representing all operations :</p>
        
          <div className="tableContainer">
            <table>
              <tr>
                <th>Operation Name</th>
                <th>Syntax</th>
                <th>Code Example</th>
              </tr>
              <tr>
                <td>Insert at Beginning</td>
                <td>insertAtBeginning_C(&head, new_data)</td>
                <td><Highlight value={`insertAtBeginning_C(head, 10);`} /></td>
              </tr>
              <tr>
                <td>Insert at End</td>
                <td>insertAtEnd_C(&head, new_data)</td>
                <td><Highlight value={`insertAtEnd_C(head, 40);`} /></td>
              </tr>
              <tr>
                <td>Insert at Index</td>
                <td>insertAtIndex_C(&head, data, index)</td>
                <td><Highlight value={`insertAtIndex_C(head, 50, 2);`} /></td>
              </tr>
              <tr>
                <td>Delete at Beginning</td>
                <td>deleteAtBeginning_C(&head)</td>
                <td><Highlight value={`deleteAtBeginning_C(head);`} /></td>
              </tr>
              <tr>
                <td>Delete at End</td>
                <td>deleteAtEnd_C(&head)</td>
                <td><Highlight value={`deleteAtEnd_C(head);`} /></td>
              </tr>
              <tr>
                <td>Delete at Index</td>
                <td>deleteAtIndex_C(&head, index)</td>
                <td><Highlight value={`deleteAtIndex_C(head, 1);;`} /></td>
              </tr>
              <tr>
                <td>Search</td>
                <td>search_C(head, key)</td>
                <td><Highlight value={`bool x = search_C(head, 20);;`} /></td>
              </tr>
              <tr>
                <td>Print List</td>
                <td>printList_C(head)</td>
                <td><Highlight value={`printList_C(head);`} /></td>
              </tr>
            </table>
          </div>
    
          <p>Code Example :</p>
          <Codebx code={L_C_ex} />
          <hr />
          <h2>Custom Operations & Functions</h2>
          <p>If you want to create some other operations while using same linked list created with easyC you can  follow the structure of our nodes and linked list</p>
          <p><b>Note : You don't have to write code for structure in your code just create your custom operations based on those </b></p>

          <h3>Structure of Singly Linked List:</h3>
          <Codebx code={S_S_L} />
          <h3>Structure of Doubly Linked List:</h3>
          <Codebx code={S_D_L} />
          <h3>Structure of Circular Linked List:</h3>
          <Codebx code={S_C_L} />
        </div>
      </div>
    </>
  )
}
export default Linkedlist 