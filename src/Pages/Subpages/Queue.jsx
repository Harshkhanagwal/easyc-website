import React from 'react'
import Codebx from '../../Components/Codebx/Codebx'
import Highlight from '../../Components/highlight/Highlight';


const Queue = () => {

    const create_q = 
    `Queue_AR* queue = createQueue_AR(10);
//AR stands for array representation `;

    const enqueue = 
    `Queue_AR* queue = createQueue_AR(10);
enqueue_AR(queue, 10);`;

    const dequeue = `dequeue_AR(queue);`;

    const front_element = `printf("Front item is %d",front_AR(queue));`;

    const printQueue = `printQueue_AR(queue);`;

    const queue_ex = 
    `#include <stdio.h>
//must include easyc.h file
#include <easyC.h>
    
int main() {
    Queue_AR* queue = createQueue_AR(10);
    
    enqueue_AR(queue, 10);
    enqueue_AR(queue, 20);
    enqueue_AR(queue, 30);
    enqueue_AR(queue, 40);
    
    dequeue_AR(queue);
    dequeue_AR(queue);
    
    printQueue_AR(queue);
    
    enqueue_AR(queue, 50);
    enqueue_AR(queue, 60);
    
    printQueue_AR(queue);
        
    printf("Front item is %d", front_AR(queue));
      
    return 0;
}`;

    const queue_LLR = 
    `Queue_LLR* queue = createQueue_LLR();
//LLR stands for Linked List representation `;

    const enqueue_LLR = 
    `Queue_LLR* queue = createQueue_LLR();
enqueue_LLR(queue, 10);`;

    const dequeue_LLR = `dequeue(queue);`;

     const front_LLR = `printf("Front item is %d", front_LLR(queue));`;

     const printQueue_LLR = `printQueue_LLR(queue);`;

     const print_Queue = 
     `#include <stdio.h>
//must include easyc.h file
#include <easyC.h>
     
     
int main() {
    Queue_LLR* queue = createQueue_LLR(10);
     
    enqueue_LLR(queue, 10);
    enqueue_LLR(queue, 20);
    enqueue_LLR(queue, 30);
    enqueue_LLR(queue, 40);
     
    dequeue_LLR(queue);
    dequeue_LLR(queue);
     
    printQueue_LLR(queue);
     
    enqueue_LLR(queue, 50);
    enqueue_LLR(queue, 60);
     
    printQueue_LLR(queue);

    printf("Front item is %d", front_AR(queue));
     
    return 0;
}`;

    return (
        <>
            <div className="container guide-container">

                <div className="content-area">
                    <h1>Queue</h1>
                    <p>The easyC library provides a set of functions designed to simplify operations on queues. These functions allow you to perform common tasks such as enqueue, dequeue, and other manipulations with ease. This guide will introduce you to these queue operations and show you how to use them in your C programs.</p>
                    <hr />

                    <h2>Table Of content</h2>
                    <ul>
                        <a href="#Queue_Array_representation"><li>Queue_Array_representation</li></a>
                        <a href="#Queue_Linked_List_representation"><li>Queue_Linked_List_representation </li></a>
                    </ul>
                    <hr/>

                    <h2 id='Queue_Array_representation'>Queue_Array+representation</h2>
                    <p>Array-represented queues are simple and have O(1) time complexity for enqueue and dequeue operations but are limited by a fixed size and can be inefficient with space.</p>
                    <br/>
                    <p><b>list of operations</b></p>
                    <ul>
                        <a href="#Queue Initialization"><li>Queue Initialization</li></a>
                        <a href="#Enqueue"><li>Enqueue</li></a>
                        <a href="#Dequeue"><li>Dequeue</li></a>
                        <a href="#Front element"><li>Front element</li></a>
                        <a href="#Print Queue"><li>Print Queue</li></a>
                    </ul>
                    <br/>

                    <h3 id="Queue Initialization">Queue Initialization</h3>
                    <p>To initialize queue as array representation you can use <Highlight value={"createQueue_AR()"} /> function(this function will take single argument which is basically defines the limit or size of our queue)  in <Highlight value={"queue_AR*"} /> pointer variable as given example: </p>
                    <Codebx code={create_q} />
                    <br/>

                    <h3 id='Enqueue'>Enqueue</h3>
                    <p>To add new element in queue you can use <Highlight value={"enqueue_AR()"} /> function</p>
                    <p>this function will take 2 arguments</p>
                    <ul>
                        <li>1st : queue itself (in which u want to add element)</li>
                        <li>2nd : value to be added</li>
                        <Codebx code={enqueue} />
                    </ul>
                    <br/>

                    <h3 id='Dequeue'>Dequeue</h3>
                    <p>you can use <Highlight value={"dequeue_AR()"} /> function for dequeue operation, this function simply takes single argument which is queue it self</p>
                    <Codebx code={dequeue} />
                    <br/>

                    <h3 id='Front element'>Front element</h3>
                    <p>to fetch front element of queue you can use <Highlight value={"front_AR()"} /> function, this function takes single argument which is queue it self and return the front element of queue</p>
                    <Codebx code={front_element} />
                    <br/>

                    <h3 id='Print Queue'>Print Queue</h3>
                    <p>to print queue you can use <Highlight value={"printQueue_AR()"} /> function, this function takes single argument which is queue it self</p>
                    <Codebx code={printQueue} />
                    <p>Queue with Array representation full code example :</p>
                    <Codebx code={queue_ex} /> 
                    <hr/>

                    <h2 id='Queue_Linked_List_representation'>Queue_Linked_List_representation</h2>
                    <p>Linked list-represented queues are more flexible with dynamic sizing, avoid overflow issues, and efficiently use memory, but they require more complex memory management and have additional overhead per element.</p>
                    <br/>
                    <p><b>list of operations</b></p>
                    <ul>
                        <a href="#Queue initialization"><li>Queue initialization</li></a>
                        <a href="#enqueue"><li>enqueue</li></a>
                        <a href="#dequeue"><li>dequeue</li></a>
                        <a href="#front element"><li>front element</li></a>
                        <a href="#print queue"><li>print queue</li></a>
                    </ul>
                    <br/>

                    <h3 id='Queue initialization'>Queue initialization</h3>
                    <p>To initialize queue as array representation you can use <Highlight value={"createQueue_LLR()"} /> function in <Highlight value={"queue_LLR*"} /> pointer variable as given example: </p>
                    <Codebx code={queue_LLR} /> 
                    <br/>

                    <h3 id='enqueue'>enqueue</h3>
                    <p>To add new element in queue you can use <Highlight value={"enqueue_LLR()"} />  function</p>
                    <br/>
                    <p>this function will take 2 arguments</p>
                    <ul>
                        <li>1st : queue itself (in which u want to add element)</li>
                        <li>2nd : value to be added</li>
                    </ul>
                    <Codebx code={enqueue_LLR} />
                    <br/>

                    <h3 id='dequeue'>dequeue</h3>
                    <p>you can use <Highlight value={"dequeue_LLR()"} /> function for dequeue operation, this function simply takes single argument which is queue it self</p>
                    <Codebx code={dequeue_LLR} />
                    <br/>

                    <h3 id='front element'>front element</h3>
                    <p>to fetch front element of queue you can use <Highlight value={"front_LLR()"} /> function, this function takes single argument which is queue it self and return the front element of queue</p>
                    <Codebx code={front_LLR} />
                    <br/>

                    <h3 id='print queue'>print queue</h3>
                    <p>to print queue you can use <Highlight value={"printQueue_LLR()"} /> function, this function takes single argument which is queue it self</p>
                    <Codebx code={printQueue_LLR} />
                    <br/>
                    <p>Queue with Linked list representation full code example :</p>
                    <Codebx code={print_Queue} />

                </div>
            </div>

        </>
    )
}
export default Queue