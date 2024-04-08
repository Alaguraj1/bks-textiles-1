import React from 'react'

const WorkwearMain = ({ data }) => {
console.log('✌️data --->', data);
    return (
        <>
            <div className="container-fluid">
                <div
                    dangerouslySetInnerHTML={{ __html: data?.content?.rendered }}
                ></div>
            </div>
        </>
    )
}

export default WorkwearMain