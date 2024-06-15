import React from 'react';
import Codebx from '../../Components/Codebx/Codebx'
import Highlight from '../../Components/highlight/Highlight';
import Menubar from '../../menubar/Menubar';
import Aside from '../../Components/Aside/Aside';


const Stack = () => {

    const stack =
        ` int size = 5; // Size of the stack
 Stack_AR* myStack = createStack_AR(size);`;

    const push = `push_AR(myStack, 10);`;

    const pop = `pop_AR(myStack);`;

    const peek = `printf("Top element is %d", peek_AR(myStack));`;

    const printStack = `printStack_AR(myStack);`;

    const Stack_AR =
        `#include <stdio.h>
//must include easyc.h file
#include <easyC.h>
   
int main() {
    int size = 5; // Size of the stack
    Stack_AR* stack = createStack_AR(size);
   
    push_AR(stack, 10);
    push_AR(stack, 20);
    push_AR(stack, 30);
   
      
    pop_AR(stack);
   
    printStack_AR(stack);
    printf("Top element is %d", peek_AR(stack));
   
    return 0;
}`;

    const Stack_LLR =
        ` int size = 5; // Size of the stack
 Stack_LLR* myStack = createStack_LLR(size);`;

    const push_LLR = `push_LLR(myStack, 10);`;

    const pop_LLR = `pop_LLR(myStack);`;

    const peek_LLR = `printf("Top element is %d", peek_LLR(myStack));`;

    const printStack_LLR = `printStack_LLR(myStack);`;

    const createStack_LLR =
        `#include <stdio.h>
//must include easyc.h file
#include <easyC.h>
   
int main() {
    int size = 5; // Size of the stack
    Stack_LLR* stack = createStack_LLR(size);
   
    push_LLR(stack, 10);
    push_LLR(stack, 20);
    push_LLR(stack, 30);
   
      
    pop_LLR(stack);
   
    printStack_LLR(stack);
    printf("Top element is %d", peek_LLR(stack));
   
    return 0;
}`;


    return (
        <>
            <Menubar />
            <Aside />
            <div className="container guide-container">

                <div className="content-area">
                    <h1>Stack</h1>
                    <p>The easyC library provides a set of functions designed to simplify operations on stacks. These functions allow you to perform common tasks such as push, pop, peek, and other manipulations with ease. This guide will introduce you to these stack operations and show you how to use them in your C programs.</p>
                    <hr />

                    <h2>Table of content</h2>
                    <ul>
                        <a href="#Stack_Array_Representation"><li>Stack-Array Representation</li></a>
                        <a href="#Stack_Linked_List_Representation"><li>Stack-Linked List Representation</li></a>
                    </ul>
                    <hr />

                    <h2 id='Stack_Array_Representation'>Stack-Array Representation</h2>
                    <p>An array-based stack uses a fixed-size array to store elements, providing fast access and simple implementation but limited by its fixed capacity, leading to potential overflow and wasted memory if not fully utilized.</p>
                    <br />
                    <p><b>List of Operations</b></p>
                    <ul>
                        <a href="#Push"><li>Push </li></a>
                        <a href="#Pop"><li>Pop</li></a>
                        <a href="#Print Stack"><li>Print Stack</li></a>
                        <a href="#Peek"><li>Peek</li></a>
                    </ul>
                    <br />

                    <h3 id='Stack Initialization'>Stack Initialization</h3>
                    <p>To initialize Stack as array representation you can use <Highlight value={"createStack_AR()"} /> function(this function will take single argument which is basically defines the limit or size of our Stack)  in <Highlight value={"Stack_AR*"} /> datatype based variable as given example</p>
                    <Codebx code={stack} />
                    <br />

                    <h3 id='Push'>Push</h3>
                    <p>To perform push operation you can use <Highlight value={"push_AR()"} /> function, this function will take two arguments</p>
                    <ul>
                        <li>1st : Stack itself</li>
                        <li>2nd : value to be added</li>
                    </ul>
                    <Codebx code={push} />
                    <br />

                    <h3 id='Pop'>Pop</h3>
                    <p>To perform Pop operation you can use <Highlight value={"pop_AR()"} /> function, this function only takes single argument which is basically stack itself</p>
                    <Codebx code={pop} />
                    <br />

                    <h3 id='Peek'>Peek</h3>
                    <p>Peek operation will return the top most element of Stack, you can perform peek operation with <Highlight value={"peek_AR()"} />  function, this function only takes single argument (stack itself)</p>
                    <Codebx code={peek} />
                    <br />

                    <h3 id='Print Stack'>Print Stack</h3>
                    <p>you can use <Highlight value={"printStack_AR()"} /> function to print all elements of stack,  this function only takes single argument (stack itself)</p>
                    <Codebx code={printStack} />
                    <p>Stack with Array representation full code example :</p>
                    <Codebx code={Stack_AR} />
                    <hr />

                    <h2 id='Stack_Linked_List_Representation'>Stack-Linked list Representation</h2>
                    <p>In contrast, a linked list-based stack uses dynamic memory allocation, where each element is a node pointing to the next, allowing for flexible size without overflow but with slower access times and additional memory overhead due to the storage of pointers.</p>
                    <br />
                    <p><b>List of Operations</b></p>
                    <ul>
                        <a href="#push"><li>push </li></a>
                        <a href="#pop"><li>pop</li></a>
                        <a href="#Print stack"><li>Print stack</li></a>
                        <a href="#peek"><li>peek</li></a>
                    </ul>
                    <br />

                    <h3 id='Stack Initialization'>Stack Initialization</h3>
                    <p>To initialize Stack as array representation you can use <Highlight value={"createStack_LLR()"} /> function(this function will take single argument which is basically defines the limit or size of our Stack)  in <Highlight value={"Stack_LLR*"} /> datatype based variable as given example</p>
                    <Codebx code={Stack_LLR} />
                    <br />

                    <h3 id='push'>push</h3>
                    <p>To perform push operation you can use <Highlight value={"push_LLR()"} /> function, this function will take two arguments</p>
                    <ul>
                        <li>1st : Stack itself</li>
                        <li>2nd : value to be added</li>
                    </ul>
                    <Codebx code={push_LLR} />
                    <br />

                    <h3 id='pop'>pop</h3>
                    <p>To perform Pop operation you can use <Highlight value={"pop_LLR()"} /> function, this function only takes single argument which is basically stack itself</p>
                    <Codebx code={pop_LLR} />
                    <br />

                    <h3 id='peek'>peek</h3>
                    <p>Peek operation will return the top most element of Stack, you can perform peek operation with <Highlight value={"peek_LLR()"} /> function, this function only takes single argument (stack itself)</p>
                    <Codebx code={peek_LLR} />
                    <br />

                    <h3 id='Print stack'>Print stack</h3>
                    <p>you can use <Highlight value={"printStack_LLR()"} /> function to print all elements of stack,  this function only takes single argument (stack itself)</p>
                    <Codebx code={printStack_LLR} />
                    <p>Stack with Linked list representation full code example :</p>
                    <Codebx code={createStack_LLR} />

                </div>

            </div>

        </>
    )
}
export default Stack 