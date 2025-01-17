import React, {Component} from "react";
import constants from "../../constants";
import moment from "moment";
import {withRouter} from 'react-router-dom';

class SingleMovie extends Component {


    showwatchesDetails = () => {
        this.props.history.push(`/watchesdetails/${this.props.id}`);
    }
    render() {
        return <div className="col-md-6">
                <div className="d-flex
                flex-md-row
                flex-column
                border shadow-sm mb-3 bg-white rounded
                single-movie
                ">
                    <img className="watches-image" alt=""
                    src={constants.basePosterURL + this.props.poster_path}/>
                    <div className="p-3 d-flex flex-column">
                        <div className="pb-3">
                            <h4>{this.props.title}</h4>
                            <p>{moment(this.props.release_date).format("MMMM Do YYYY")}</p>
                            <div className="mt-3 watches-description">
                                {this.props.overview}
                            </div>
                        </div>
                        <div className="mt-auto border-top pt-3">
                            <button type="button"
                            onClick={this.showwatchesDetails} 
                            className="btn btn-link">
                                Повече Информация
                            </button>
                        </div> 
                    </div>
                </div>
        </div>
    }
}

export default withRouter(SingleMovie);