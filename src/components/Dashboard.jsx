import React, { useState } from 'react'

const Dashboard = () => {
    const [count,setCount] = useState(0);
  return (
    <>
     <section className='parent_secion'>
        <div className="container">
            <div className="row text-center mt-4">
                <div className="col-md-12">
                    <h1 className=' text-primary fw-bold'>Welcome To Dashboard</h1>
                    <h5 className=''>{count}</h5>
                </div>
            </div>
        </div>
        </section> 
    </>
  )
}

export default Dashboard
