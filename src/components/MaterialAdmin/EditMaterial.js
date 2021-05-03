import React, { Component } from 'react'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MyAlert from '../WorkForce/MyAlert';
import MaterialService from '../../service/MaterialService';

const style ={
    display: 'flex',
    justifyContent: 'center'
}

class EditMaterialComponent extends Component {

    constructor(props){
        super(props);
        this.state ={
            id:'',
            matType:'',
            matImg:'',
            matName:'',
             number:'',
            data:'',
           price :'',
            message: '',
            show: false,
        }
    }

    componentDidMount() {
       const materialId = this.props.match.params.id;
         MaterialService.fetchMaterialById(materialId)
         .then((                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    res) => {
            let material=res.data;
            this.setState({
                    id:this.material.id,
                    matType:this.material.matType,
                    matImg:this.material.matImg,
                    matName:this.material.matName,
                    number:this.material.number,
                    data:this.material.data,
                    price:this.material.price
                   
               })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveMaterial = (e) => {
        e.preventDefault();
        let material = {
            id: this.state.id, 
            matName: this.state.matName, 
            matType: this.state.matType, 
            matImg: this.state.matImg, 
             number: this.state.number,
              data: this.state.data, 
              price: this.state.price 
            };
 
    MaterialService.editMaterial(material)
            .then(res => {
                if(res.data != null) {
                    this.setState({show:true, message : 'Admin Updated successfully.'});
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

    render() {
        return (
            <div>
                 <div style={{"display":this.state.show ? "block" : "none"}}>
                    <MyAlert show = {this.state.show} message = {this.state.message} type = {"success"}/>
                </div>
                <Typography variant="h4" style={style}>Edit Admin-Material</Typography>
                <form>
                <TextField placeholder="MatName" fullWidth margin="normal" name="matName" value={this.state.matName} onChange={this.onChange}/>
                <TextField placeholder="MatType" fullWidth margin="normal" name="matType" value={this.state.matType} onChange={this.onChange}/>
                <TextField placeholder="MatImg" fullWidth margin="normal" name="matImg" value={this.state.matImg} onChange={this.onChange}/>
                <TextField placeholder="Number" fullWidth margin="normal" name="number" value={this.state.number} onChange={this.onChange}/>
                <TextField placeholder="Data" fullWidth margin="normal" name="data" value={this.state.data} onChange={this.onChange}/>
                <TextField placeholder="price" fullWidth margin="normal" name="price" value={this.state.price} onChange={this.onChange}/>

             <Button variant="contained" color="primary" onClick={this.saveMaterial}>Save</Button>
                </form>
            </div>
        );
    }
}

export default EditMaterialComponent;