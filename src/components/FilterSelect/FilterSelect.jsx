import './FilterSelect.css';

const FilterSelect = ({ updateFilter, filter }) => {
    const filters = [
        { id: 1, title: 'Show All', label: 'all', active: true },
        { id: 2, title: 'Design', label: 'Design', active: false },
        { id: 3, title: 'Branding', label: 'Branding', active: false },
        { id: 4, title: 'Illustration', label: 'Illustration', active: false },
        { id: 5, title: 'Motion', label: 'Motion', active: false },
    ];

    return (
        <div className='filter-select'>
            <select
                value={filter}
                onChange={(e) => updateFilter(e.target.value)}>
                {filters.map((item) => (
                    <option
                        key={item.id}
                        className='filters__item'
                        value={item.label}>
                        {item.title}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default FilterSelect;
