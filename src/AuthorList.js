import React, { Component } from "react";

import AuthorCard from "./AuthorCard";

class AuthorList extends Component {
    render() {
      const AuthorCardL = this.props.authors.map(author => (
            <AuthorCard key={author.first_name} AuthorCard={author}/>
        ));
        return (
          <div>
            <h3>Authors</h3>
              <div className="row">
                {AuthorCardL}
              </div>
          </div>
        );

    }
}


export default AuthorList;