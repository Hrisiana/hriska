import React, {Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";
class Movies extends Component {

    componentDidMount() {
        this.props.getWatches();
    }

    toggleFWatches = watches => {
        const watchesIndex = this.props.brandwatches.findIndex(el => el.id === watches.id);

        if(watchesIndex !== -1){
            this.props.removebrandwatches(watchesIndex);
        }else{
            this.props.addbrandwatches(watches);
        }
        console.log(this.props.brandwatches)
    }

    getActiveClass = watches => {
        if(this.props.brandwatches.findIndex(el => el.id === movie.id) !== -1){
            return "active"
        }
        return ""
    }
    getBrand = () => {
        const brand = this.props.watches.map(watches => {
            return <li key={watches.id} className="
            d-flex justify-content-between list-group-item">
                <span>
                    <i className={
                        "fa fa-star mr-3 brand " + 
                        this.getActiveClass(brand)
                    }
                        onClick={() => {
                            this.toggleFavoriteMovie(brand);
                        }}
                    ></i>
                    {watches.title}
                </span>
                <span>{watches.releaseYear}</span>
            </li>
        })
        return brand;
    }
    render() {
        return <ul className="list-group">
            {this.getbrand()}
        </ul>
    }
}
const mapStateToProps = state => {
    return {
        watches: state.watches,
       Brand: state.Brand
    }
};


const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        setWatches: actions.setwatches,
        getWatches: actions.getwatches,
        addbrand: actions.addbrand,
        removebrand: actions.removebrand
    }, dispatch)
};

export default connect(mapStateToProps, mapStateToDispatch)(Movies);