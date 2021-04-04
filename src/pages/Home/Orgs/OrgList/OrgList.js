import React from "react";
import "./OrgList.scss";

class OrgList extends React.Component {

    constructor(props) {
        super(props)
    }

    state = {
        currentPage: 0,
        renderPageNumbers: null,
        renderItems: null,
        winWidth: 0
    };

    handleClick = (e) => {

        let currentPage = e.target.name;

        this.setState({
            currentPage: currentPage,
            winWidth: window.innerWidth
        }, () => this.renderItems(this.state.currentPage));


    };

    renderItems = (currentPage) => {

        let data = this.props.data.slice((currentPage * 3 - 3), (currentPage * 3));


        if (this.state.winWidth < 400) {
            data = this.props.data;
        }

        let renderItems = data.map((el, i) => (
            <div className="OrgList__items__element" key={`key-${i}`}>
            <div className="OrgList__items__element__left">
                <div className="OrgList__items__element__left__title">{el.title}</div>
                <div className="OrgList__items__element__left__description">{el.description}</div>
            </div>
                <div className="OrgList__items__element__things">{el.things}</div>
            </div>
        ));

        this.setState({
            renderItems: renderItems
        })

    };

    renderPageNumbers = () => {

        // the necessary number of pages

        let pages = Math.ceil(this.props.data.length / 3);
        let pageNumbers = Array(pages).fill("0");

        let renderPageNumbers = pageNumbers.map((el, i) => (
            <button key={i} name={i + 1} onClick={this.handleClick}
                    className="OrgList__pages__button">{i + 1}</button>
        ));

        this.setState({
            renderPageNumbers: renderPageNumbers
        });


    };

    getWindowSize = () => {
        this.setState({ winWidth: window.innerWidth});
    };



    componentDidMount() {

        this.getWindowSize();
        window.addEventListener('resize', this.getWindowSize);

        this.renderPageNumbers();

        this.setState({

            winWidth: window.innerWidth
        }, () => this.renderItems(1));

        //
        // this.renderItems(1);

    }

    componentDidUpdate(prevProps, prevState) {

        if (this.props.data !== prevProps.data) {

            this.renderPageNumbers();
            this.renderItems(1);
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.getWindowSize);
    }

    render() {
        return (
            <div className="OrgList">
                <div className="OrgList__items">
                    {this.state.renderItems}
                </div>
                <div className="OrgList__pages">
                    {this.state.renderPageNumbers}
                </div>
            </div>
        )
    }
}

export default OrgList;