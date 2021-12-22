import React from 'react';
import { Container } from 'react-bootstrap';
import contextExample from '../../../images/reactContext.PNG'
const ReactBlog = () => {
    return (
        <Container className='pt-5 text-white text-start'>
            <h1 style={{ color: '#df248d', fontWeight: '900' }} className='py-3'>This is react blog</h1>
            <div>
                <h3>
                    Virtual DOM
                </h3>
                <p>
                    JSX is a syntax extension that allows writing HTML and javascript together.JSX allows us to write HTML in react app which is not actual HTML. Then we write JSX in react app it convert JSX into a javascript object. Thai objects describe what we want to see on the display. React observe this object and create a virtual dom. Which makes real dom and display what we want to see in the display.
                </p>
                <h3>Prop drilling</h3>
                <p>Prop drilling is a process in which data have to almost every component due to the requirement of final components.
                    For example we have  four components,  parent, child1, child2, child3.
                    The requirement is to pass some data from the parent component to the child3 component. In this situation, we hat to send data parent to child1 then child1 to child2 finally child2 to child3. This process of passing data is known as prop drilling. To solve this problem we use context API which produces global variable that can pass around.
                    Component lifecycle </p>
                <h1>React component lifecycle</h1>
                <p>React component lifecycle are divided into three categories are,



                    <ol className=''>
                        <li>
                            Mounting: In mounting, components render data and then componentDidMount where components load data.
                        </li>
                        <li>
                            Updating: In updation, we can update data by using various conditions
                        </li>
                        <li>
                            Unmounting: When we move from one page to another page and need to remove the previous page data then componentWillUnmountion remove the required data from UI
                        </li>
                    </ol>
                </p>
                <h3>Custom Hook</h3>
                <p>
                    The purpose of the custom hook is to share the logic with other components.The custom hook creates with the use keyword. The custom hook can create like any js function.
                    
                   
                    <h5 className='py-2'>For Example: </h5>
                    <img className='img-fluid mx-auto' src={contextExample} alt="" />
                    <p className='py-2'> When we need to fetch the data from any component, we just need to call our useFetch custom hook.</p>
                </p>
            </div>








        </Container>
    );
};

export default ReactBlog;