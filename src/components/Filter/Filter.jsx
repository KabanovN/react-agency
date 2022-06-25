import './Filter.css';

const Filter = ({ updateFilter, filter }) => {
    const filters = [
        { id: 1, title: 'Show All', label: 'all', active: true },
        { id: 2, title: 'Design', label: 'Design', active: false },
        { id: 3, title: 'Branding', label: 'Branding', active: false },
        { id: 4, title: 'Illustration', label: 'Illustration', active: false },
        { id: 5, title: 'Motion', label: 'Motion', active: false },
    ];

    return (
        <div className='filters'>
            {filters.map((item) => (
                <button
                    onClick={() => updateFilter(item.label)}
                    key={item.id}
                    className='filters__btn'
                    style={
                        item.label === filter
                            ? { color: '#16cd53' }
                            : { color: 'rgba(57, 20, 0, 0.64)' }
                    }>
                    {item.title}
                </button>
            ))}
        </div>
    );
};

export default Filter;
