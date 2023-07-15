import './Cars.css'

export const Car = ({car, setOnSend, setOnUpdate}) => {
    const {id, brand, price, year} = car

    const handleDelete = () => {
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${id}`, {
            method: 'DELETE',
        })
            .then(() => {
                setOnSend(previous => !previous)
            })
    }

    return (
        <div className='car'>
            <h3>ID: {id}</h3>
            <h4>{brand}, {year} - {price} USD</h4>
            <button onClick={handleDelete}> Delete</button>
            <button onClick={() => setOnUpdate(car)}> Update</button>
        </div>
    )
}