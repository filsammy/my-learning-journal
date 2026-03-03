function FruitList() {
    const fruits = ['Apple', 'Orange', "Melon"]

    return (
        <ul>
            {fruits.map((fruit, index) => (
                <li key={`${fruit}-${index}`}>{fruit}</li>
            ))}
        </ul>
    );
}

export default FruitList;