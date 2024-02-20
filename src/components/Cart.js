function Cart() {
    const title = "Cart"
    const price = [8,10,15]
    return <div>
        <h2>{title}</h2>
        <ul>
            <li> plante 1 : {price[0]}</li>
            <li> plante 2 : {price[1]}</li>
            <li> plante 3 : {price[2]}</li>
        </ul>
        <br></br>
        <p>total : {price[0]+price[1]+price[2]}</p>
    </div>
}

export default Cart