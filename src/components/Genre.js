import React from 'react';

export default class Genre extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            clicked : false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (id) => {
        const { clicked } = this.state;
        this.setState({
            clicked : !clicked,
        });
    };

    render() {
        const {
            genre: {
                id,
                name,
            },
        } = this.props;

        return (
            <div className="genre">
                <div>
                    <button className="btn btn-primary"  onClick={() => this.handleClick(id)}>
                        {name}
                    </button>
                </div>
            </div>
        );
    }
}