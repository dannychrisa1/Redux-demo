// import { useSelector, useDispatch } from "react-redux"
import { ordered, restocked } from './cakeSlice'
import { useState } from "react"
import { useAppSelector, useAppDispatch } from "../../app/hooks"

export const CakeView = () => {
    const [value, setValue] = useState<number>(1)
    const numOfCakes = useAppSelector((state) => state.cake?.numOfCakes)
    const dispatch = useAppDispatch()

    return (
        <div className="cakeviw">
            <h2>Number of cakes - {numOfCakes} </h2>
            <button onClick={() => dispatch(ordered())}>Order cake</button>
            <div>
                <input
                    type="number"
                    value={value}
                    onChange={(e) => setValue(parseInt(e.target.value))}
                />
            </div>
            <button onClick={() => dispatch(restocked(value))}>Restock cake</button>
        </div>
    )
}
