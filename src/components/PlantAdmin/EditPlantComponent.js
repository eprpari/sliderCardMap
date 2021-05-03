import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PlantService from '../../service/PlantService';
import MyAlert from '../WorkForce/MyAlert';



const style ={
    display: 'flex',
    justifyContent: 'center'
}

class EditPlantComponent extends Component {

    constructor(props){
        super(props);
        this.state ={
            id: '',
            
            title: '',
            description: '',
            avatarUrl: '',
            imageUrl: '',
            descripe:'',
            show: false,
            message: ''

        }
    }

    componentDidMount() {
        const plantId = this.props.match.params.id;
        // ApiService.fetchUserById(userId)
        // console.log(userId);
        PlantService.fetchPlantById(plantId)
            .then((res) => {
                let plant = res.data;
                this.setState({
                    id: plant.id,
                   
                     title: plant.title,
                     description: plant.description,
                     avatarUrl:plant.avatarUrl,
                     imageUrl: plant.imageUrl,
                     descripe:plant.descripe,
                    
                })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    savePlant = (e) => {
        e.preventDefault();
        let plant = {id: this.state.id, title: this.state.title, description: this.state.description,imageUrl: this.state.imageUrl, avatarUrl: this.state.avatarUrl, descripe: this.state.descripe};
        PlantService.editPlant(plant)
            .then(res => {
                if(res.data != null) {
                    this.setState({show:true, message : 'Plant Updated successfully.'});
                    setTimeout(() => this.setState({show:false}), 3000);
                    setTimeout(() => this.plantList(), 3000);
                } else {
                    this.setState({show:false});
                }
            });
    }

    plantList = () => {
        return this.props.history.push('/admin/plants');
    }

    render() {
        return (
            <div>
                 <div style={{"display":this.state.show ? "block" : "none"}}>
                    <MyAlert show = {this.state.show} message = {this.state.message} type = {"success"}/>
                </div>
                <Typography variant="h4" style={style}>Edit Plant</Typography>
                <form>
                        {/* <TextField type="number" placeholder="salary" fullWidth margin="normal" name="salary" value={this.state.salary} onChange={this.onChange}/> */} 

                        <TextField type="text" placeholder="id" fullWidth margin="normal" name="id" disabled readonly="true" value={this.state.id}/>
                        <TextField type="text" placeholder="title" fullWidth margin="normal" name="title" value={this.state.title} onChange={this.onChange}/>
                        <TextField type="text" placeholder="description" fullWidth margin="normal" name="description" value={this.state.description} onChange={this.onChange}/>
                        <TextField type="text" placeholder="avatarUrl" fullWidth margin="normal" name="avatarUrl" value={this.state.avatarUrl} onChange={this.onChange}/>
                        <TextField type="text" placeholder="imageUrl" fullWidth margin="normal" name="imageUrl" value={this.state.imageUrl} onChange={this.onChange}/>
                        <TextField type="text" placeholder="descripe" fullWidth margin="normal" name="descripe" value={this.state.descripe} onChange={this.onChange}/>
                        
                        <Button variant="contained" color="primary" onClick={this.savePlant}>Save</Button>
                       
                </form>
            </div>
        );
    }
}

export default EditPlantComponent;