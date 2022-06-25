import './Card.css';

const Card = ({
    id,
    title,
    label,
    img,
    active,
    updateFilter,
    selectItem,
    updateItems,
}) => {
    const deleteItem = (evt) => {
        active && evt.key === 'Delete' && updateItems(id);
    };

    return (
        <div
            onClick={() => selectItem(id)}
            onKeyDown={deleteItem}
            className='card'
            tabIndex={0}
            style={
                active ? { outline: 'solid 7px #4fe24a' } : { outline: 'none' }
            }>
            <img src={`${img}`} alt={title} />
            <span className='card__label' onClick={() => updateFilter(label)}>
                {label}
            </span>
            <span className='card__title'>{title}</span>
        </div>
    );
};

export default Card;
