import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import DeviceService from './service/DeviceService';
import MyAlert from '../WorkForce/MyAlert';
import DeviceService from '../../service/DeviceService';

const formContainer = {
    display: 'flex',
    flexFlow: 'row wrap'
};

const style ={
    display: 'flex',
    justifyContent: 'center'

}

class AddDeviceComponent extends Component{
    constructor(props){
        super(props);
        this.state ={
            
            // salary: '',
            // id:'',
            title:'',
            price:'',
            description:'',
            avatarUrl:'',
           imageUrl01 :'',
           imageUrl02 :'',
           imageUrl03 :'',
           imageUrl04:'',
           leDescrip01:'',
           leDescrip02:'',
           leDescrip03:'',
           riDescrip04:'',

            message: '',
            show: false
        }
    }

    saveDevice = (e) => {
        e.preventDefault();
        let device = {
            // id: this.state.id, 
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

        DeviceService.addDevice(device)
            .then(res => {
                if(res.data != null) {
                    this.setState({show:true, message : 'Admin added successfully.'});
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

    onChange = (e) =>
        this.setState({ 
            [e.target.name]: e.target.value 
        });

        onFileChangeHandler = (e) => {
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
            console.log(" ImageUrl1data",e.target.result)
            elements.push(e.target.result)
            this.setState({imageUrl01:elements[0]})
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
        console.log(" ImageUrl2data",e.target.result)
        elements.push(e.target.result)
        this.setState({imageUrl02:elements[0]})
        }
        console.log(elements)
    }
}
onFileChangeHandler3 = (e) => {
    e.preventDefault();
    var elements=[];
    console.log(e.target.files.length)
    let files = e.target.files
    console.log(files)
    for(let i = 0; i<e.target.files.length; i++){
        let reader = new FileReader()
        reader.readAsDataURL(files[i])
        reader.onload = (e) => {
        console.log("ImageUrl3data ",e.target.result)
        elements.push(e.target.result)
        this.setState({imageUrl03:elements[0]})
        }
        console.log(elements)
    }
}
onFileChangeHandler4 = (e) => {
    e.preventDefault();
    var elements=[];
    console.log(e.target.files.length)
    let files = e.target.files
    console.log(files)
    for(let i = 0; i<e.target.files.length; i++){
        let reader = new FileReader()
        reader.readAsDataURL(files[i])
        reader.onload = (e) => {
        console.log("ImageUrl4data",e.target.result)
        elements.push(e.target.result)
        this.setState({imageUrl04:elements[0]})
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
                
                <Typography variant="h4" style={style}>Add Device</Typography>
                <form style={formContainer}>
                {/* <TextField placeholder="Id" fullWidth margin="normal" name="id" value={this.state.id} onChange={this.onChange}/> */}
                <TextField placeholder="Title" fullWidth margin="title" name="title" value={this.state.title} onChange={this.onChange}/>
                <TextField placeholder="Price" fullWidth margin="normal" name="price" value={this.state.price} onChange={this.onChange}/>
                <TextField placeholder="Description" fullWidth margin="normal" name="description" value={this.state.description} onChange={this.onChange}/>
                <TextField placeholder="AvatarUrl" fullWidth margin="normal" name="avatarUrl" value={this.state.avatarUrl} onChange={this.onChange}/>
                <input type="file" multiple onChange={this.onFileChangeHandler }/>
                    <img src={this.state.avatarUrl}/>
                <TextField placeholder="ImageUrl01" fullWidth margin="normal" name="imageUrl01" value={this.state.imageUrl01} onChange={this.onChange}/>
                <input type="file" multiple onChange={this.onFileChangeHandler1 }/>
                    <img src={this.state.imageUrl01}/>
                <TextField placeholder="ImageUrl02" fullWidth margin="normal" name="imageUrl02" value={this.state.imageUrl02} onChange={this.onChange}/>
                <input type="file" multiple onChange={this.onFileChangeHandler2 }/>
                    <img src={this.state.imageUrl02}/>
                <TextField placeholder="ImageUrl03" fullWidth margin="normal" name="imageUrl03" value={this.state.imageUrl03} onChange={this.onChange}/>
                <input type="file" multiple onChange={this.onFileChangeHandler3 }/>
                    <img src={this.state.imageUrl03}/>
                <TextField placeholder="ImageUrl04" fullWidth margin="normal" name="imageUrl04" value={this.state.imageUrl04} onChange={this.onChange}/>
                <input type="file" multiple onChange={this.onFileChangeHandler4 }/>
                    <img src={this.state.imageUrl04}/>
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

export default AddDeviceComponent;