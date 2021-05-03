import React, { Component } from 'react'
// import DeviceService from "../../../service/DeviceService";
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
// import {connect} from 'react-redux';
// import {deleteBook} from '../../services/index';
import DeviceService from '../../service/DeviceService';


const style ={
    display: 'flex',
    justifyContent: 'center'
}

class ListDeviceComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            devices: [],
            show: false,
            message: '' 
            
        }
    }
    
    componentDidMount() {
        DeviceService.fetchDevices()
            .then((res) => {
                this.setState({devices: res.data})
            });
      }

      

    deleteDevice = (deviceId) => {
        DeviceService.deleteDevice(deviceId)
           .then(res => {
               if(res.data != null) {
                this.setState({"show":true, message : 'Admin deleted successfully.'});
                setTimeout(() => this.setState({"show":false}), 3000);
                this.setState({
                    devices: this.state.devices.filter(device => device.id !== deviceId)
                });
            } else {
                this.setState({"show":false});
            }
           })
    }
    editDevice = (id) => {
        this.props.history.push('/admin/edit-devices/'+ id);
    }

    addDevice = () => {
        this.props.history.push('/admin/add-devices');
    }

    render() {
        const {devices} = this.state;

        return (
            <div>
                <div style={{"display":this.state.show ? "block" : "none"}}>
                    <MyAlert show = {this.state.show} message = {this.state.message} type = {"error"}/>
                </div>
                <Typography variant="h4" style={style}>Devices Details</Typography>
                <Button variant="contained" color="primary" onClick={() => this.addDevice()}>
                    Add Devices
                </Button>
                <Table>
                    <TableHead>
                        <TableRow>
                             {/* <TableCell align="right">Id</TableCell> */}


                             <TableCell align="right">Id</TableCell>
                            <TableCell align="right">Title</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Description</TableCell>
                            <TableCell align="right">AvatarUrl</TableCell>
                            <TableCell align="right">ImageUrl01</TableCell> 
                            <TableCell align="right">ImageUrl02</TableCell> 
                            <TableCell align="right">ImageUrl03</TableCell> 
                            <TableCell align="right">ImageUrl04</TableCell> 
                            <TableCell align="right">LeDescrip01</TableCell> 
                            <TableCell align="right">LeDescrip02</TableCell> 
                            <TableCell align="right">LeDescrip03</TableCell> 
                            <TableCell align="right">RiDescrip04</TableCell> 

                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                        devices.length === 0 ?
                        <TableRow>
                            <TableCell colSpan="6" align="center">No Devices Available.</TableCell>
                        </TableRow> 
                        :
                        devices.map(row => (
                            <TableRow key={row.id}>
                                {/* {/* <TableCell align="right">
                                    {row.id} */}
                           
                           <TableCell align="left">{row.id}</TableCell>
                                <TableCell align="left">{row.title}</TableCell>
                                <TableCell align="left">{row.price}</TableCell>
                                <TableCell align="left">{row.description}</TableCell>
                                <TableCell align="left"><img src={row.avatarUrl} alt= "avatar" width="150" height="150" /></TableCell>
                                <TableCell align="left"><img src={row.imageUrl01} alt= "device1" width="150" height="150" /></TableCell>
                                <TableCell align="left"><img src={row.imageUrl02} alt= "device2" width="150" height="150" /></TableCell>
                                <TableCell align="left"><img src={row.imageUrl03} alt= "device3" width="150" height="150" /></TableCell>
                                <TableCell align="left"><img src={row.imageUrl04} alt= "device4" width="150" height="150" /></TableCell>
                                <TableCell align="left">{row.leDescrip01}</TableCell>
                                <TableCell align="left">{row.leDescrip02}</TableCell>
                                <TableCell align="left">{row.leDescrip03}</TableCell>
                                <TableCell align="left">{row.RiDescrip04}</TableCell>
                                <TableCell align="left" onClick={() => this.editDevice(row.id)}><CreateIcon /></TableCell>
                                <TableCell align="left" onClick={() => this.deleteDevice(row.id)}><DeleteIcon /></TableCell>

                           
                           
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

export default ListDeviceComponent;