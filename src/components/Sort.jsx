import React, {useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './Sort.css';


const Sort = ({onSortChange}) => {
    return (
        <Dropdown className="sort-box">
            <Dropdown.Toggle variant="success" id="dropdown-sort" >
                Sort by Prep Time
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={() => onSortChange('default')}>Default</Dropdown.Item>
                <Dropdown.Item onClick={() => onSortChange('asc')}>Low to High</Dropdown.Item>
                <Dropdown.Item onClick={() => onSortChange('desc')}>High to Low</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default Sort;

