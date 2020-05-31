import React from  'react'

const Hello = () => {
    // return ( //this is JSX
    //     <div className='dummyClass'>
    //         <h1>Hello Lakshay! (calling from Hello.js)</h1>
    //     </div>
    // )
    //w/o JSX
    return React.createElement('div', {id: 'hello', className: 'dummyClass'}, React.createElement('h1', null, "Hello Lakshay (calling from Hello.js)"))
}

export default Hello