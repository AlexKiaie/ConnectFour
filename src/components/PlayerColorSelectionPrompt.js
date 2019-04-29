import React, { Component} from 'react';

class PlayerColorSelectionPrompt extends Component {
    constructor(props) {
        super(props);
        const { selectionCallback } = props;
        this.clickCallback = selectionCallback;
    }

    clickHandler(e, p1, p2) {
		e.preventDefault();
        this.clickCallback(p1, p2);
        return false;
    }

    render() {
        return (
            <div>
                <p>Player 1 please select your color</p>
                <form>
                    <button onClick={(e) => {this.clickHandler(e, 'black', 'red')}}>Black</button>
                    <button onClick={(e) => {this.clickHandler(e, 'red', 'black')}}>Red</button>
                </form>
            </div>
        );
    }
}

export default PlayerColorSelectionPrompt;