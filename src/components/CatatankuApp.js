import React from "react";
import CatatankuList from "./CatatankuList";
import CatatankuInput from "./CatatankuInput";
import { getInitialData } from '../utils/data.js';
import PencarianCatatan from "./PencarianCatatan";


class CatatankuApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            catatankus: getInitialData(),
            cariCatatan: "",
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddCatatankuHandler = this.onAddCatatankuHandler.bind(this);
    }

    onDeleteHandler(id) {
        const catatankus = this.state.catatankus.filter(catatanku => catatanku.id !== id);
        this.setState({ catatankus });
    }

    onArchiveHandler = (id) => {
        this.setState({
          notes: this.state.catatankus.map((catatanku) => {
            if (catatanku.id === id) {
              catatanku.archived = !catatanku.archived;
            }
            return catatanku;
          }),
        });
    };
     

   
    
    onAddCatatankuHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                catatankus: [
                    ...prevState.catatankus,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: +new Date(),
                        archived: false,


                    }
                ]
            }
        });
    }

    onCari = (cari) => {
        this.setState({
            cariCatatan: cari,
        })

    }

    render() {

        const HasilPencarian = this.state.catatankus.filter((catatanku) => {
            return catatanku.title
            .toLowerCase()
            .includes(this.state.cariCatatan.toLowerCase());
        })

        const catatanaktif = HasilPencarian.filter((catatanku) => {
            return !catatanku.archived;
        });
          const arsipcatatan = HasilPencarian.filter((catatanku) => {
            return catatanku.archived;
        });
       
        return (
          <div className="catatanku-app">
            <h1>Aplikasi Catatanku</h1>
            <h2>Cari Judul Catatan</h2>
            <PencarianCatatan isSearched={this.onCari} />
            <h2>Tambah Catatan</h2>
            <CatatankuInput addCatatanku={this.onAddCatatankuHandler} />
            <h2>List Catatanku</h2>
            {catatanaktif.length !== 0 ? (
                <CatatankuList catatankus={catatanaktif} 
                               onDelete={this.onDeleteHandler} 
                               onArchive={this.onArchiveHandler}/>
            ) : (
                <div className="CatatanList">Tidak Ada Catatan.</div>
            )}
            <h3>Arsip</h3>
            {arsipcatatan.length !== 0 ? (
                <CatatankuList catatankus={arsipcatatan} 
                               onDelete={this.onDeleteHandler} 
                               onArchive={this.onArchiveHandler}/>
            ) : (
                <div className="ArsipCatatan">Tidak Ada Arsip Catatan.</div>
            )}  
          </div>
        );
      }
}

export default CatatankuApp;