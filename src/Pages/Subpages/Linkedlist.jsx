import React from 'react';
import Codebx from '../../Components/Codebx/Codebx'
import Highlight from '../../Components/highlight/Highlight';

const Linkedlist = () => {

    const struct = `struct Node* head = initializeList_S(); `;

    const insert_begin = `insertAtBeginning_S(&head, 43);`;

    const insert_end = `insertAtEnd(&head, 56);`;

    const insert_index = `insertAtIndex_S(&head, 3, 85);`;

    const delete_begin = `deleteFromBeginning_S(&head);`;


    return (

        <>
        
        <div className="container guide-container">

        <div className="content-area">
            <h1>Linked List</h1>
            <p>The easyC library provides a set of functions designed to simplify operations on linked lists. These functions allow you to perform common tasks such as insertion, deletion, updating, and other manipulations with ease. This guide will introduce you to these linked list operations and show you how to use them in your C programs.</p>
            <br/>

            <h2>Table of Contents</h2>
            <ul>
                <li>Singly Linked List</li>
                <li>Doubly Linked List</li>
                <li>Circular Linked List</li>
            </ul>
            <hr/>

            <h2>Single Linked List</h2>
            <p>List of operations:</p>
            <ul>
                <li>Insertion</li>
                <li>Deletion</li>
                <li>print Linked List</li>
                <li>sort</li>
                <li>searching</li>
            </ul>
            <hr/>

            <h3>Singly linked List Initialization</h3>
            <p>To initialize linked list you can use <Highlight value={"initializeList_s()"} /> function in variable with data type <Highlight value={"struct Node*"} /> as given example:</p>
            <Codebx code={struct} />
            <hr/>

            <h3>Insertion in Singly Linked List</h3>
            <ul>
                <li>Insert at Beginning</li>
                <li>Insert at End</li>
                <li>Insert at given position</li>
            </ul>
            <br/>

            <p><b>Insert at Beginning</b></p>
            <p>you can use <Highlight value={"insertAtBeginning_S()"} /> function to insert value at front of linked list or as first element</p>
            <p>this function will take two arguments:</p>
            <ul>
                <li>1st : address of head variable of LinkedList</li>
                <li>2nd : value to be inserted </li>
            </ul>
            <Codebx code={insert_begin } />
            <br/>

            <p><b>Insert at End</b></p>
            <p>you can use <Highlight value={"insertAtEnd_S()"} /> function to insert value at end of linked list</p>
            <p>this function will take two arguments :</p>
            <Codebx code={insert_end} />
            <br/>

            <p><b>Insert at Given Index</b></p>
            <p>you can use <Highlight value={"insertAtIndex_S()"} /> function to insert value at given index of linked list</p>
            <p>this function will take three arguments :</p>
            <ul>
                <li>1st : reference of head variable</li>
                <li>2nd : desired index where to insert value</li>
                <li>3rd :  value it self</li>
            </ul>
            <Codebx code={insert_index } />
            <hr/>

            <h3>Deletion in Singly Linked list</h3>
            <ul>
                <li>Delete from Beginning</li>
                <li>Delete from End</li>
                <li>Deletion from given position</li>
            </ul>
            <br/>

            <p><b>Delete from Beginning</b></p>
            <p>you can use <Highlight value={"deleteFromBeginning_S()"} /> function to delete value from front of linked list </p>
            <Codebx code={delete_begin} />


            </div>



        </div>
        </>
    )
}
export  default Linkedlist 