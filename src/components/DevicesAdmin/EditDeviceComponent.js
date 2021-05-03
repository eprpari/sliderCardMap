import React, { Component } from 'react'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MyAlert from '../WorkForce/MyAlert';

import DeviceService from '../../service/DeviceService';

const style ={
    display: 'flex',
    justifyContent: 'center'
}

class EditDeviceComponent extends Component {

    constructor(props){
        super(props);
        this.state ={
            id: '',
            title: '',
            price: '',
            description:'',
            avatarUrl: '',
            imageUrl01 :'',
           imageUrl02 :'',
           imageUrl03 :'',
           imageUrl04:'',
           leDescrip01:'',
           leDescrip02:'',
           leDescrip03:'',
           riDescrip04:'',
            message: '',
            show: false,
        }
    }

    componentDidMount() {
        console.log("hiiiiii");
       const deviceId = this.props.match.params.id;
        console.log(deviceId);
            
        DeviceService.fetchDeviceById(deviceId)
        
            .then((res) => {
                let device = res.data;
                this.setState({
                    id: device.id,
                    title: device.title,
                    price: device.price,
                    description: device.description,
                   avatarUrl: device.avatarUrl,
                   imageUrl01: device.imageUrl01,
                   imageUrl02: device.imageUrl02,
                   imageUrl03: device.imageUrl03,
                   imageUrl04: device.imageUrl04,
                   leDescrip01:device.leDescrip01,
                   leDescrip02:device.leDescrip02,
                  leDescrip03:device.leDescrip03,
                   riDescrip04:device.riDescrip04,
                })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveDevice = (e) => {
        e.preventDefault();
        let device = {id: this.state.id, 
            title: this.state.title, 
            price: this.state.price,
             description: this.state.description,
            avatarUrl: this.state.avatarUrl,
           imageUrl01: this.state. imageUrl01,
            imageUrl02: this.state. imageUrl02,
            imageUrl03: this.state. imageUrl03,
            imageUrl04: this.state. imageUrl04,
            leDescrip01:this.state.leDescrip01,
            leDescrip02:this.state.leDescrip02,
            leDescrip03:this.state.leDescrip03,
            riDescrip04:this.state.riDescrip04,
};
        DeviceService.editDevice(device)
            .then(res => {
                if(res.data != null) {
                    this.setState({show:true, message : 'Admin Updated successfully.'});
                    setTimeout(() => this.setState({show:false}), 3000);
                    setTimeout(() => this.deviceList(), 3000);
                } else {
                    this.setState({show:false});
                }
            });
    }

    deviceList = () => {
        return this.props.history.push('/admin/devices');
    }

    render() {
        return (
            <div>
                 <div style={{"display":this.state.show ? "block" : "none"}}>
                    <MyAlert show = {this.state.show} message = {this.state.message} type = {"success"}/>
                </div>
                <Typography variant="h4" style={style}>Edit Admin-Devices</Typography>
                <form>
                       {/* <TextField type="text" placeholder="Id" fullWidth margin="normal" name="id" disabled readonly="true" value={this.state.id}/> */}
                       <TextField placeholder="Title" fullWidth margin="normal" name="title" value={this.state.title} onChange={this.onChange}/>
                        {/* <TextField placeholder="Title" fullWidth margin="normal" name="title" disabled readonly="true"   value={this.state.title} /> */}

                        <TextField placeholder="Price" fullWidth margin="normal" name="price" value={this.state.price} onChange={this.onChange}/>
                        <TextField placeholder="Description" fullWidth margin="normal" name="description" value={this.state.description} onChange={this.onChange}/>
                        <TextField type="text" placeholder="AvatarUrl" fullWidth margin="normal" name="avatarUrl" value={this.state.avatarUrl} onChange={this.onChange}/>
                        <TextField placeholder="ImageUrl01" fullWidth margin="normal" name="imageUrl01" value={this.state.imageUrl01} onChange={this.onChange}/>
                        <TextField placeholder="ImageUrl02" fullWidth margin="normal" name="imageUrl02" value={this.state.imageUrl02} onChange={this.onChange}/>
                        <TextField placeholder="ImageUrl03" fullWidth margin="normal" name="imageUrl03" value={this.state.imageUrl03} onChange={this.onChange}/>
                        <TextField placeholder="ImageUrl04" fullWidth margin="normal" name="imageUrl04" value={this.state.imageUrl04} onChange={this.onChange}/>
                        <TextField placeholder="LeDescrip01" fullWidth margin="normal" name="leDescrip01" value={this.state.leDescrip01} onChange={this.onChange}/>
                        <TextField placeholder="LeDescrip02" fullWidth margin="normal" name="leDescrip02" value={this.state.leDescrip02} onChange={this.onChange}/>
                        <TextField placeholder="LeDescrip03" fullWidth margin="normal" name="leDescrip03" value={this.state.leDescrip03} onChange={this.onChange}/>
                        <TextField placeholder="RiDescrip04" fullWidth margin="normal" name="riDescrip04" value={this.state.riDescrip04} onChange={this.onChange}/>




                        {/* <TextField type="number" placeholder="salary" fullWidth margin="normal" name="salary" value={this.state.salary} onChange={this.onChange}/> */} 
                        <Button variant="contained" color="primary" onClick={this.saveDevice}>Save</Button>
                </form>
            </div>
        );
    }
}

export default EditDeviceComponent;