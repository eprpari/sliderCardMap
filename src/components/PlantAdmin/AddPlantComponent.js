import React, { Component } from 'react'
// import ApiService from "../../service/ApiService";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PlantService from '../../service/PlantService';
import MyAlert from '../WorkForce/MyAlert';



const formContainer = {
    display: 'flex',
    flexFlow: 'row wrap'
};

const style ={
    display: 'flex',
    justifyContent: 'center'

}

class AddPlantComponent extends Component{
    constructor(props){
        super(props);
        this.state ={
          
            // age: '',
            // salary: '',
            title: '',
            description: '',
            avatarUrl: '',
            imageUrl: '',
            descripe:'',
            message: '',
            show: false
        }
    }

    savePlant = (e) => {
        e.preventDefault();
        let plant = {
            title: this.state.title, 
            description: this.state.description, 
            avatarUrl: this.state.avatarUrl, 
            imageUrl: this.state.imageUrl, 
            descripe: this.state.descripe 
            // salary: this.state.salary
        };

        PlantService.addPlant(plant)
            .then(res => {
                if(res.data != null) {
                    this.setState({show:true, message : 'Plant added successfully.'});
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

    onChange = (e) =>
        this.setState({ 
            [e.target.name]: e.target.value 
        });

        onFileChangeHandler1 = (e) => {
            e.preventDefault();
            var elements=[];
            console.log(e.target.files.length)
            let files = e.target.files
            console.log(files)
            for(let i = 0; i<e.target.files.length; i++){
                let reader = new FileReader()
                reader.readAsDataURL(files[i])
                reader.onload = (e) => {
                console.log(" AvatarUrldata",e.target.result)
                elements.push(e.target.result)
                this.setState({avatarUrl:elements[0]})
                }
                console.log(elements)
            }
       }

        onFileChangeHandler2 = (e) => {
            e.preventDefault();
            var elements=[];
            console.log(e.target.files.length)
            let files = e.target.files
            console.log(files)
            for(let i = 0; i<e.target.files.length; i++){
                let reader = new FileReader()
                reader.readAsDataURL(files[i])
                reader.onload = (e) => {
                console.log(" ImageUrldata",e.target.result)
                elements.push(e.target.result)
                this.setState({imageUrl:elements[0],avatarUrl:elements[0]})
                }
                console.log(elements)
            }
       }
      

    render() {
        return(
            <div>
                
                <div style={{"display":this.state.show ? "block" : "none"}}>
                    <MyAlert show = {this.state.show} message = {this.state.message} type = {"success"}/>
                </div>
                
                <Typography variant="h4" style={style}>Add Plant</Typography>
                <form style={formContainer}>
                    {/* <TextField type="number" placeholder="salary" fullWidth margin="normal" name="salary" value={this.state.salary} onChange={this.onChange}/> */} 
                    
                    {/* <TextField type="text" placeholder="title" fullWidth margin="normal" name="title" disabled readonly="true" value={this.state.title}/> */}
                    <TextField type="text" placeholder="title" fullWidth margin="normal" name="title" value={this.state.title} onChange={this.onChange}/>
                    <TextField type="text" placeholder="description" fullWidth margin="normal" name="description" value={this.state.description} onChange={this.onChange}/>
                    <TextField type="text" placeholder="avatarUrl" fullWidth margin="normal" name="avatarUrl" value={this.state.avatarUrl} onChange={this.onChange}/>
                    <input type="file" multiple onChange={this.onFileChangeHandler1 }/>
                    <img src={this.state.avatarUrl}/>
                    <TextField type="text" placeholder="imageUrl" fullWidth margin="normal" name="imageUrl" value={this.state.imageUrl} onChange={this.onChange}/>
                    <input type="file"  multiple onChange={this.onFileChangeHandler2 }/>
                    <img src={this.state.imageUrl}/>
                    <TextField type="text" placeholder="descripe" fullWidth margin="normal" name="descripe" value={this.state.descripe} onChange={this.onChange}/>
                   
                   

                    <Button variant="contained" color="primary" onClick={this.savePlant}>Save</Button>
                   
                </form>
            </div>
        );
    }
}

export default AddPlantComponent;