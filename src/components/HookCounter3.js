import React, { useState } from 'react'

function HookCounter3() {
    //object state.
    const [name, setName] = useState({ firstName: "", lastName: "" });

    return (
        <div>
            <form>
                <input
                    type="text"
                    value={name.firstName}
                    // onChange={e => setName({ lastName: name.lastName, firstName: e.target.value })}
                    // OR use spread op
                    onChange={e => setName({ ...name, firstName: e.target.value })}
                //spread operator: copy everything from name object & override the firstName field.
                //we have to use it, else, fields other than firstName will be removed from name while updating firstName.
                //we have to manually merge & set.
                />
                <input
                    type="text"
                    value={name.lastName}
                    // onChange={e => setName({ firstName: name.firstName, lastName: e.target.value })}
                    // OR use spread op
                    onChange={e => setName({ ...name, lastName: e.target.value })}
                //copy everything from name object & override the lastName field.
                />
                <h2>First name: {name.firstName}</h2>
                <h2>Last name: {name.lastName}</h2>
                <h2>{JSON.stringify(name)}</h2>
            </form>
        </div>
    )
}

export default HookCounter3
