// import { useSelector, useDispatch } from "react-redux"
import { ordered, restocked } from "./iceCreamSlice"
import { useState } from "react"
import { useAppSelector, useAppDispatch } from "../../app/hooks"

export const IceCreamView = () => {
    const [value, setValue] = useState<number>(1)
    const numOfIceCream = useAppSelector((state) => state.icecream.numOfIcecream)
    const dispatch = useAppDispatch()
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