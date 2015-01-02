define(function(require) {

  "use strict";

  var React = require("react");

  var ListItemView= require("jsx!app/view/list_item");

  /**
   *
   *
   *
   */
  var ItemListPage = React.createClass({

    getInitialState: function() {
      return {
      };
    },

    componentWillMount: function() {},

    componentDidMount: function() {},

    componentWillUnmount: function() {},

    render: function() {
      return (
        <div className="detail">
          <p>Name: {this.props.model.get("name")}</p>
          <p>Age: {this.props.model.get("age")}</p>
          <p>From: {this.props.model.get("from")}</p>
          <a href="/">back</a>
        </div>
      );
    }

  }); // end ItemListPage

  return ItemListPage;
});