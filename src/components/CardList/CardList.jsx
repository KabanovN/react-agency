import Card from '../Card/Card';
import './CardList.css';

const CardList = (props) => {
    const { items, updateFilter, selectItem, updateItems } = props;
    return (
        <div className='cards'>
            {items.map((item) => (
                <Card
                    key={item.id}
                    {...item}
                    updateFilter={updateFilter}
                    selectItem={selectItem}
                    updateItems={updateItems}
                />
            ))}
        </div>
    );
};

export default CardList;
