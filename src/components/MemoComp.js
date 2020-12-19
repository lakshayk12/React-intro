import React from 'react'

function MemoComp({ name }) {
    console.log("***************************Memo Comp Render*******************************")
    return (
        <div>
            MemoComp {name}
        </div>
    )
}

export default React.memo(MemoComp)

//avoid re-rendering the MemoComp, since props are not changing
//https://www.youtube.com/watch?v=7TaBhrnPH78&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=27
