import React, { Component } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import PlantService from '../../service/PlantService';
import MyAlert from '../WorkForce/MyAlert';


const style ={
    display: 'flex',
    justifyContent: 'center'
}

class ListPlantComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            plants: [],
            show: false,
            message: ''
        }
    }

    componentDidMount() {
        PlantService.fetchPlants()
            .then((res) => {
                this.setState({plants: res.data})
            });
    }

    deletePlant = (plantId) => {
        PlantService.deletePlant(plantId)
           .then(res => {
               if(res.data != null) {
                this.setState({"show":true, message : 'Plant deleted successfully.'});
                setTimeout(() => this.setState({"show":false}), 3000);
                this.setState({
                    plants: this.state.plants.filter(plant => plant.id !== plantId)
                });
            } else {
                this.setState({"show":false});
            }
           })
    }

    editPlant = (id) => {
        this.props.history.push('/admin/edit-plant/'+ id);
    }

    addPlant = () => {
        this.props.history.push('/admin/add-plant');
    }

    render() {
        const {plants} = this.state;

        return (
            <div>
                <div style={{"display":this.state.show ? "block" : "none"}}>
                    <MyAlert show = {this.state.show} message = {this.state.message} type = {"error"}/>
                </div>
                <Typography variant="h4" style={style}>Plant Details</Typography>
                <Button variant="contained" color="primary" onClick={() => this.addPlant()}>
                    Add Plant
                </Button>

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Id</TableCell>
                            <TableCell align="right">Title</TableCell>
                            <TableCell align="right">Description</TableCell>
                            <TableCell align="right">AvatarUrl</TableCell>
                            <TableCell align="right">ImageUrl</TableCell>
                            <TableCell align="right">Descripe</TableCell>
                           
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                        plants.length === 0 ?
                        <TableRow>
                            <TableCell colSpan="6" align="center">No Plants Available.</TableCell>
                        </TableRow> 
                        :
                        plants.map(row => (
                            <TableRow key={row.id}>
                                <TableCell align="right">
                                    {row.id}
                                </TableCell>
                                <TableCell align="right">{row.title}</TableCell>
                                <TableCell align="right">{row.description}</TableCell>
                                <TableCell align="right"><img src={row.avatarUrl} alt= "plant2" width="150" height="150" /></TableCell>
                                <TableCell align="right"><img src={row.imageUrl} alt= "plant" width="150" height="150" /> </TableCell>
                                <TableCell align="right">{row.descripe}</TableCell>
                                <TableCell align="right" onClick={() => this.editPlant(row.id)}><CreateIcon /></TableCell>
                                <TableCell align="right" onClick={() => this.deletePlant(row.id)}><DeleteIcon /></TableCell>
                            </TableRow>
                        ))
                    }
                    </TableBody>
                </Table>

            </div>
        );
    }

}

export default ListPlantComponent;