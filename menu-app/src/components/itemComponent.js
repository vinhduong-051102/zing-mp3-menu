function ItemComponent({ props }) {
    const data = props
    return (
        <div className="row">
            <span className = 'icon'></span>
            <span className = 'displayName'>{data.displayName}</span>
        </div>
    )
}

export default ItemComponent