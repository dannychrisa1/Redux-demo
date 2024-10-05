import { useSelector, useDispatch } from "react-redux"
import { ordered, restocked } from "./iceCreamSlice"
import { useState } from "react"

export const IceCreamView = () => {
    const [value, setValue] = useState(1)
    const numOfIceCream = useSelector((state) => state.icecream.numOfIcecream)
    const dispatch = useDispatch()
    return (
        <div className="icecreamview">
            <h2>Number of icecream - {numOfIceCream} </h2>
            <button onClick={() => dispatch(ordered())}>Order icecream</button>
            <div>
                <input
                    type="number"
                    value={value}
                    onChange={(e) => setValue(parseInt(e.target.value))}
                />
            </div>

            <button onClick={() => dispatch(restocked(value))}>
                Restock icecream
            </button>
        </div>
    )
}