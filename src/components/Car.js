export const Car = ({car}) => {
    const {id, brand, price, year} = car

    return (
        <div>
            <h3>ID: {id}</h3>
            <h4>{brand}, {year} - {price} USD</h4>
        </div>
    )

}