import React from 'react'

const TableA = (props:any) => {
    console.log("popppp:",props.data)
  return (
    <div>
        <h1>Personal Information</h1>
        <ul className="profile-list">
          {
            props.data.map ((content: { appart: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) =>(
              <li>
                <span><strong>ID:</strong> {content.appart}</span>
              </li>
            ))
          }
        </ul>
    </div>
  );
}

export default TableA;