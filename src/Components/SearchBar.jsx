import React, { useState } from 'react';

const SearchBar = (props) => {
    // useState has to be imported from React using destructure of the object import React, { useState } from 'react'
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        // prevents the form from redirecting to the url that you want to submit
        e.preventDefault();
        // assigns the targeted inputs value as a searchValue from App.js
        props.setSearchValue(value);
    }

    return (
        // simple form with input type text, onChange event and onSubmit
        <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="search">Search input:</label>
            <input
                name="search"
                type="text"
                onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    )
}

class SearchBar2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    handleSubmit = (e) => {
        // prevents the form from redirecting to the url that you want to submit
        e.preventDefault();
        // assigns the targeted inputs value as a searchValue from App.js
        this.props.setSearchValue(this.state.value);
    }

    render() {
        return (
            // simple form with input type text, onChange event and onSubmit
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <label htmlFor="search">Search input:</label>
                <input
                    name="search"
                    type="text"
                    onChange={(e) => this.setState({ value: e.target.value })}
                />
                <button type="submit">Search</button>
            </form>
        )
    }
}

export default SearchBar;