import React, { Component } from 'react'
import WorkerService from "../../service/WorkerService";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MyAlert from './MyAlert'
/// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';




const formContainer = {
    display: 'flex',
    flexFlow: 'row wrap'
};

const style ={
    display: 'flex',
    justifyContent: 'center'

}

class AddWorkerComponent extends Component{
    constructor(props){
        super(props);
        this.state ={
          // id: ' ',
            name: '',
            title:'',
            number: '',
            address: '',
            img : '',
            city: '',
            age: '',
            salary: '',
            data : '',
            message:'',
            show: false
        }
    }

    saveWorker = (e) => {
        e.preventDefault();
        let worker = {
          // id: this.state.id, 
            name: this.state.name,
            title: this.state.title, 
            number: this.state.number, 
            address: this.state.address, 
            img : this.state.img,
            city: this.state.city, 
            age: this.state.age, 
            salary: this.state.salary,
            data : this.state.data
        };

        WorkerService.addWorker(worker)
            .then(res => {
                if(res.data != null) {
                    this.setState({show:true, message : 'Worker added successfully.'});
                    setTimeout(() => this.setState({show:false}), 3000);
                    setTimeout(() => this.workerList(), 3000);
                } else {
                    this.setState({show:false});
                }
            });
    }

    workerList = () => {
        return this.props.history.push('/admin/worker');
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
          console.log(" ImageUrldata",e.target.result)
          elements.push(e.target.result)
          this.setState({img:elements[0]})
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
                
                <Typography variant="h4" style={style}>Add Worker</Typography>
                <form style={formContainer}>
                {/* <TextField type="text" placeholder="Id" fullWidth margin="normal" name="id" value={this.state.id} onChange={this.onChange}/> */}
                <TextField type="text" placeholder="title" fullWidth margin="normal" name="title" value={this.state.title} onChange={this.onChange}/>
                    <TextField type="text" placeholder="username" fullWidth margin="normal" name="name" value={this.state.name} onChange={this.onChange}/>
                    <TextField type="number" placeholder="phonenuber" fullWidth margin="normal" name="number" value={this.state.number} onChange={this.onChange}/>
                    <TextField placeholder="Address" fullWidth margin="normal" name="address" value={this.state.address} onChange={this.onChange}/>
                    <TextField placeholder="img" fullWidth margin="normal" name="img" value={this.state.img} onChange={this.onChange}/>
                    <input type="file" multiple onChange={this.onFileChangeHandler }/>
                      <img src={this.state.img}/> 
                   
                    <TextField placeholder="city" fullWidth margin="normal" name="city" value={this.state.city} onChange={this.onChange}/>
                    <TextField type="text" placeholder="age" fullWidth margin="normal" name="age" value={this.state.age} onChange={this.onChange}/>
                    <TextField type="text" placeholder="salary" fullWidth margin="normal" name="salary" value={this.state.salary} onChange={this.onChange}/>
                    <TextField type="text" placeholder="data" fullWidth margin="normal" name="data" value={this.state.data} onChange={this.onChange}/>

         <br/><br/>
                      
       <Button variant="contained" style={{ background: '#2E3B55' }} onClick={this.saveWorker}>Save</Button>
                </form>
            </div>
        );
    }
}

export default AddWorkerComponent;