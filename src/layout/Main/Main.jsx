import { useState, useEffect } from 'react';

import Filter from '../../components/Filter/Filter';
import FilterSelect from '../../components/FilterSelect/FilterSelect';
import CardList from '../../components/CardList/CardList';

import './Main.css';

const Main = () => {
    const [items, setItems] = useState([]);
    const [offset, setOffset] = useState(9);
    const [filter, setFilter] = useState('all');
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const LIMIT = 18;

    useEffect(() => {
        fetch('data/data.json')
            .then((res) => res.json())
            .then((data) => setItems(data.slice(0, offset)))
            .catch((error) => console.log(error));
    }, [offset]);

    useEffect(() => {
        window.addEventListener('resize', () => getWindowWidth());
        return window.removeEventListener('resize', () => getWindowWidth());
    }, [windowWidth]);

    const updateItems = (id) => {
        setItems(items.filter((item) => item.id !== id));
    };

    const loadMoreItems = (evt) => {
        evt.preventDefault();
        setOffset((offset) => offset + offset);
    };

    const selectItem = (id) => {
        setItems(
            items.map((item) => {
                return item.id === id
                    ? { ...item, active: !item.active }
                    : { ...item, active: false };
            })
        );
    };

    const updateFilter = (filter) => {
        setFilter(filter);
    };

    const filterItems = (items, filters) => {
        switch (filters) {
            case 'all':
                return items;
            case 'Design':
                return items.filter((item) => item.label === 'Design');
            case 'Branding':
                return items.filter((item) => item.label === 'Branding');
            case 'Illustration':
                return items.filter((item) => item.label === 'Illustration');
            case 'Motion':
                return items.filter((item) => item.label === 'Motion');
            default:
                return items;
        }
    };

    const getWindowWidth = () => {
        setWindowWidth(window.innerWidth);
    };

    const visibleItems = filterItems(items, filter);
    return (
        <main>
            <div className='container main__container'>
                {windowWidth < 1040 ? (
                    <FilterSelect updateFilter={updateFilter} filter={filter} />
                ) : (
                    <Filter updateFilter={updateFilter} filter={filter} />
                )}

                <CardList
                    items={visibleItems}
                    updateFilter={updateFilter}
                    filter={filter}
                    selectItem={selectItem}
                    updateItems={updateItems}
                />
                <div
                    className='load'
                    style={
                        offset === LIMIT
                            ? { display: 'none' }
                            : { display: 'block' }
                    }>
                    <a
                        onClick={loadMoreItems}
                        href='!#'
                        className='btn load__btn'>
                        Load More
                    </a>
                </div>
            </div>
        </main>
    );
};

export default Main;
