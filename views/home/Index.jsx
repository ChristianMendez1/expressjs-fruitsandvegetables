const React = require('react');

class Index extends React.Component {
  render() {
      return (
              <div>
                <p>
                    <a href="/fruits"> fruits</a> or <a href="/vegetables"> vegetables</a>
                </p>
              </div>
      );
  }
}
module.exports = Index;