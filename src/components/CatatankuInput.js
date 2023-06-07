import React from "react";

class CatatankuInput extends React.Component {

    constructor(props) {
        super(props);

        // inisialisasi

        this.state = {
            title: '',
            body: '',
            

        }
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value,
            }
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addCatatanku(this.state);
        
    }

    render() {
        return (
            <form className='catatanku-input' onSubmit={this.onSubmitEventHandler}>
                <input type="text" placeholder="Nama Judul" value={this.state.title} onChange={this.onTitleChangeEventHandler}/>
                <input type="text" placeholder="Isi Catatan" value={this.state.body} onChange={this.onBodyChangeEventHandler}/>
                <button type="submit">Simpan Catatan</button>
            </form>
        )
    }


}

export default CatatankuInput;