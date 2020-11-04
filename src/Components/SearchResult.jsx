import React from 'react';

const SearchResults = (props) => {
    return (
        <div>
            {props.searchResults.map(result => (
                <h2>{result.title}</h2>
            ))}
        </div>
    )
}

class SearchResults2 extends React.Component {
    render() {
        return (
            <div>
                {this.props.searchValue}
            </div>
        )
    }
}

export default SearchResults;
