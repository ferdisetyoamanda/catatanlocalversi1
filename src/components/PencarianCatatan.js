import React from "react";

class PencarianCatatan extends React.Component {
  constructor(props) {
    super(props);

    //init data
    this.state = {
      searchTitle: "",
    };
  }

  onSearch = (cari) => {
    this.setState({
      searchTitle: cari.target.value,
    });
    this.props.isSearched(cari.target.value);
  };
  render() {
    return (
      <input
        className="Pencarian"
        placeholder="Cari Judul catatan"
        onChange={this.onSearch}
        value={this.state.searchTitle}
      ></input>
    );
  }
}

export default PencarianCatatan;
