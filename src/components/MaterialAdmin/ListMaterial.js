import React, { Component } from 'react'
import MaterialService from '../../service/MaterialService';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import MyAlert from '../WorkForce/MyAlert';


const style ={
    display: 'flex',
    justifyContent: 'center'
}

class ListMaterial extends Component {

    constructor(props) {
        super(props)
        this.state = {
            materials: [],
            show: false,
            message: '' 
           
        }
    }
    
    componentDidMount() {
        MaterialService.fetchMaterials()
            .then((res) => {
                this.setState({materials: res.data})
            });
      }

      

    deleteMaterial = (materialId) => {
        MaterialService.deleteMaterial(materialId)
           .then(res => {
               if(res.data != null) {
                this.setState({"show":true, message : 'Admin deleted successfully.'});
                setTimeout(() => this.setState({"show":false}), 3000);
                this.setState({
                    materials: this.state.materials.filter(material => material.id !== materialId)
                });
            } else {
                this.setState({"show":false});
            }
           })
    }
    editMaterial = (id) => {
        this.props.history.push('/admin/edit-mat/'+ id);
    }

    addMaterial = () => {
        this.props.history.push('/admin/add-mat');
    }

    render() {
        const {materials} = this.state;

        return (
            <div>
                <div style={{"display":this.state.show ? "block" : "none"}}>
                    <MyAlert show = {this.state.show} message = {this.state.message} type = {"error"}/>
                </div>
                <Typography variant="h4" style={style}>Materials Details</Typography>
                <Button variant="contained" color="primary" onClick={() => this.addMaterial()}>
                    Add Material
                </Button>
                <Table>
                    <TableHead>
                        <TableRow>
                             {/* <TableCell align="right">Id</TableCell> */}


                             <TableCell align="right">Id</TableCell>
                            <TableCell align="right">MatName</TableCell>
                            <TableCell align="right">MatType</TableCell>
                            <TableCell align="right">MatImg</TableCell>
                            <TableCell align="right">Number</TableCell>
                            <TableCell align="right">Data</TableCell>
                            <TableCell align="right">price</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                        materials.length === 0 ?
                        <TableRow>
                            <TableCell colSpan="6" align="center">No Materials Available.</TableCell>
                        </TableRow> 
                        :
                        materials.map(row => (
                            <TableRow key={row.id}>
                                {/* {/* <TableCell align="right">
                                    {row.id} */}
                           
                           <TableCell align="left">{row.id}</TableCell>
                                <TableCell align="left">{row.matName}</TableCell>
                                <TableCell align="left">{row.matType}</TableCell>
                                <TableCell align="left"><img src={row.matImg} alt= "MaterialImg" width="150" height="150" /></TableCell>
                                <TableCell align="left">{row.number}</TableCell>
                                <TableCell align="left">{row.data}</TableCell>
                                <TableCell align="left">{row.price}</TableCell>
                                <TableCell align="left" onClick={() => this.editMaterial(row.id)}><CreateIcon /></TableCell>
                                <TableCell align="left" onClick={() => this.deleteMaterial(row.id)}><DeleteIcon /></TableCell>

                           
                           
                            </TableRow>
                        ))
                    }
                    
                           
                    {/* }  */}
             
                    </TableBody>
                </Table>
                </div> 
           
        );
    }

}

export default ListMaterial;