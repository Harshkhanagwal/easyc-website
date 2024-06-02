import React from 'react'
import Calloutbx from '../../Components/Callout/Calloutbx'
const Overview = () => {
    return (
        <>

            <div className="container guide-container">

                <div className="content-area">

                    <h1>Heading 1</h1>


                    <Calloutbx heading={"heading"} list={["point1", "point3"]} />

                    <h2>heading 2</h2>
                    <p>

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident praesentium ea hic, earum sequi quia aut voluptatum, quod deleniti et delectus quam quas reprehenderit perspiciatis maxime, asperiores distinctio dolor!

                        <br />

                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam architecto provident magni officiis excepturi reprehenderit. Consequuntur soluta accusamus modi assumenda suscipit, expedita totam. Magnam ipsa, nostrum explicabo odit enim labore?
                    </p>

                </div>
            </div>
        </>
    )
}

export default Overview