# React Develop

## Overview

In this repository, i will introduce basic knowledge of using React to implement basic functions

## Initialization
`cd .\react-develop\`  
Your folder needs to fullfill the following requrements:
 * name can only contain URL-friendly characters
* name can no longer contain capital letters  

`npx create-react-app ./`  
Now a new project folder is established. You can check it out on a browser using command  
`npm start`  
And you will see the default static website of your react project.

## useState
useState is a React Hook that lets you add a state variable to your component.   
useState returns an array with exactly two values:

* The current state. During the first render, it will match the initialState you have passed.
* The set function that lets you update the state to a different value and trigger a re-render.
## share state between different components
Sometimes, you want the state of two components to always change together. To do it, remove state from both of them, move it to their closest common parent, and then pass it down to them via props. 

## use Router to make web page jumps
```
<Router>
        <div>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/brawler/:brawlerId" element={<BrawlerDetail />} />       
            </Routes>
        </div>

    </Router>
```
use Route path to match different web pages to different components
## use CSS to characterize
We can give each little element a className to match it in .css, which can manage and customize the ui style.
```
<button className='backtomenu'onClick={() => navigate(-1)}>Back to Menu</button>
```
So this button is having a clssName called 'back ot menu', and so we can adjust the style settings in the .css file.
```
.backtomenu{
  color:rgb(25, 161, 161);
  background-color: #dde447;
  border-radius: 5px;
}
```
## Reference



