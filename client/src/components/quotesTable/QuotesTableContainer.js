import {connect} from "react-redux";
import {setNewQuotes} from "../../redux/mainReducer";
import QuotesTable from "./QuotesTable";

let mapStateToProps = (state) => {
    return {
        actualQuotes: state.mainReducer.actualQuotes,
        prevQuotes: state.mainReducer.prev,
    }
};


let QuotesTableContainer = connect(mapStateToProps, {setNewQuotes})(QuotesTable);

export default QuotesTableContainer;