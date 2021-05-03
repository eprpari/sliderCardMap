import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MyAlert from '../WorkForce/MyAlert';
import MaterialService from '../../service/MaterialService';


const formContainer = {
    display: 'flex',
    flexFlow: 'row wrap'
};

const style ={
    display: 'flex',
    justifyContent: 'center'

}

class AddMaterial extends Component{
    constructor(props){
        super(props);
        this.state ={
           
            matName:'',
            matType:'',
            matImg:'',
             number:'',
            data:'',
           price :'',
            message: '',
            show: false
        }
    }
    

    saveMaterial = (e) => {
        e.preventDefault();
        let material = {
            // id: this.state.id, 
           matName: this.state.matName,
           matType: this.state.matType, 
           matImg: this.state.matImg,
          number: this.state.number, 
            data: this.state.data, 
            price: this.state.price, 
            
        };

        MaterialService.addMaterial(material)
            .then(res => {
                if(res.data != null) {
                    this.setState({show:true, message : 'Admin added successfully.'});
                    setTimeout(() => this.setState({show:false}), 3000);
                    setTimeout(() => this.materialList(), 3000);
                } else {
                    this.setState({show:false});
                }
            });
    }

    materialList = () => {
        return this.props.history.push('/admin/mat');
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
                console.log(" ImageUrldata",e.target.result)
                elements.push(e.target.result)
                this.setState({matImg:elements[0]})
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
                
                <Typography variant="h4" style={style}>Add Material</Typography>
                <form style={formContainer}>
                <TextField placeholder="MatName" fullWidth margin="normal" name="matName" value={this.state.matName} onChange={this.onChange}/>
                <TextField placeholder="MatType" fullWidth margin="normal" name="matType" value={this.state.matType} onChange={this.onChange}/>
                <TextField placeholder="MatImg" fullWidth margin="normal" name="matImg" value={this.state.matImg} onChange={this.onChange}/>
                <input type="file" multiple onChange={this.onFileChangeHandler1 }/>
                    <img src={this.state.matImg}/>
                <TextField placeholder="Number" fullWidth margin="normal" name="number" value={this.state.number} onChange={this.onChange}/>
                <TextField placeholder="Data" fullWidth margin="normal" name="data" value={this.state.data} onChange={this.onChange}/>
                <TextField placeholder="price" fullWidth margin="normal" name="price" value={this.state.price} onChange={this.onChange}/>

                    <Button variant="contained" color="primary" onClick={this.saveMaterial}>Save</Button>
                </form>
            </div>
        );
    }
}

export default AddMaterial;