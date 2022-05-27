
import React from 'react'
import './products.css'

export default function Products(props) {

    return (
        <div className='Container1'>

            <div className='Heading'>
                Foot Wear
            </div>
            <div className='Column-L'>
                {
                    props.prd.map((item) => (
                        <div className='Item-D'>
                            <div className='Item-Name' key={item.id + 1}> {item.Name}</div>
                            <div className='Item-Img' key={item.id}> <img src={item.Image} alt='ItemLogo' /></div>
                            <div className='Info-D'>
                                <div className='Price' key={item.id + 2}> Price: {item.Price}/-</div>
                                <div className='Price' key={item.id + 3}> Size:  {item.Size}</div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}
