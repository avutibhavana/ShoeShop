import React, { useState, useEffect } from 'react'
import './Home.css'
import Products from '../Products/Products';
import {Data}   from '../Data/Data'

export default function Home() {
    const [SearchItem, setSearchItem] = useState('')
    const [Items, setItems] = useState(Data)
    const [footWearType, setfootwearType] = useState('')
    const [MinVal, setMinval] = useState('0')
    const [MaxVal, setMaxval] = useState('5000')
    const [Size, setSize] = useState('')
    const Search = (Arr) => {
        return Arr.filter(info =>
            info.Name.toLowerCase().includes(SearchItem.toLowerCase()) &&
            info.Category.toLowerCase().includes(footWearType.toLocaleLowerCase()) &&
            info.Price >= MinVal && info.Price <= MaxVal &&
            info.Size.includes(Size)
        )
    }
    return (
        <div className='Container'>
            <div className='Nav'>
                <div className='Logo'> SHOES </div>
                <div className='search'>
                    <input type='search' placeholder='Search....' value={SearchItem} onChange={(event) => setSearchItem(event.target.value)} />
                </div>
            </div>
            <div className='Filter'>
                <div className='Types'>
                    <div className='form'>
                        <div className='head-F'> Categories: </div>
                        <div className='FOrm-Options'>
                            <div className='label-I'>
                                <label>Select All</label>
                            </div>
                            <div className='Radio-I'>
                                <input type='radio' name='FootWear' value={footWearType} onClick={(e) => setfootwearType('')} />
                            </div>
                        </div>
                        <div className='FOrm-Options'>
                            <div className='label-I'>
                                Flip Flops
                            </div>
                            <div className='Radio-I'>
                                <input type='radio' name='FootWear' value={footWearType} onClick={(e) => setfootwearType('Filp Flops')} />
                            </div>
                        </div>
                        <div className='FOrm-Options'>
                            <div className='label-I'>
                                Sport Shoes
                            </div>
                            <div className='Radio-I'>
                                <input type='radio' name='FootWear' value={footWearType} onClick={(e) => setfootwearType('Sport Shoes')} />
                            </div>
                        </div>
                        <div className='FOrm-Options'>
                            <div className='label-I'>
                                Loafers
                            </div>
                            <div className='Radio-I'>
                                <input type='radio' name='FootWear' value={footWearType} onClick={(e) => setfootwearType('Loafers')} />
                            </div>
                        </div>
                        <div className='FOrm-Options'>
                            <div className='label-I'>
                                Formal Shoes
                            </div>
                            <div className='Radio-I'>
                                <input type='radio' name='FootWear' value={footWearType} onClick={(event) => setfootwearType('Formal Shoes')} />
                            </div>
                        </div>
                    </div>

                </div>
                <div className='range'>
                    <div className='head-F'> Price Range: </div>

                    <div className='min-max'>
                        <div className='Val-O'>
                            <div className='min-val'>Min : {MinVal}</div>
                            <div className='max-val'>Max : {MaxVal}</div>
                        </div>
                        <div className='Input-Range'>
                            <div className='Slider'>
                                <div className='Slide Name'> Min Price Slide:</div>
                                <input type='range' min='0' max='2500' value={MinVal} onChange={e => setMinval(e.target.value)} />
                            </div>
                            <div className='Slider'>
                                <div className='Slide Name'> Max Price Slide:</div>
                                <input type='range' min='2501' max='5000' value={MaxVal} onChange={e => setMaxval(e.target.value)} />
                            </div>


                        </div>
                    </div>
                    <div className='I-Sizes'>
                        <div className='head-F'> Select your Size: </div>
                        <div className='Sizes'>
                            <div className='Size'>
                                <div className='size'><button onClick={e => setSize('35')}>35</button></div>
                                <div className='size'><button onClick={e => setSize('36')}> 36</button></div>
                                <div className='size'><button onClick={e => setSize('37')}>37</button></div>
                                <div className='size'><button onClick={e => setSize('38')}>38</button></div>
                                <div className='size'><button onClick={e => setSize('39')}>39</button></div>
                            </div>
                        </div>
                        <div className='Sizes'>
                            <div className='Size'>
                                <div className='size'><button onClick={e => setSize('40')}>40</button></div>
                                <div className='size'><button onClick={e => setSize('41')}>41</button></div>
                                <div className='size'><button onClick={e => setSize('42')}>42</button></div>
                                <div className='size'><button onClick={e => setSize('43')}>43</button></div>
                                <div className='size'><button onClick={e => setSize('44')}>44</button></div>
                            </div>
                        </div>
                        <div className='Sizes'>
                            <div className='Size'>
                                <div className='size'><button onClick={e => setSize('45')}>45</button></div>
                                <div className='size'><button onClick={e => setSize('46')}>46</button></div>
                                <div className='size'><button onClick={e => setSize('47')}>47</button></div>
                                <div className='size'><button onClick={e => setSize('48')}>48</button></div>
                                <div className='size'><button onClick={e => setSize('49')}>49</button></div>
                            </div>
                        </div>
                        <div className='Reset'><button onClick={e => setSize('')}> Reset </button></div>
                    </div>
                </div>
            </div>
            <div className='Display'>
                <Products
                    prd={Search(Items)}
                />
            </div>


        </div>
    )
}
