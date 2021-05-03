import React, { Component } from 'react'
import WokerService from "../../service/WorkerService";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MyAlert from './MyAlert'

const style ={
    display: 'flex',
    justifyContent: 'center'
}

class EditWorkerComponent extends Component {

    constructor(props){
        super(props);
        this.state ={
            id: '',
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

    componentDidMount() {
        const workerId = this.props.match.params.id;
        // console.log (workerId);
        WokerService.fetchWorkerById(workerId)
            .then((res) => {
                let worker = res.data;
                this.setState({
                    id: worker.id,
                    name: worker.name,
                    title:worker.title,
                    number: worker.number,
                    address: worker.address,
                    img: worker.img,
                    city: worker.city,
                    age: worker.age,
                    salary: worker.salary,
                    data: worker.data
                })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveWorker = (e) => {
        e.preventDefault();
        let worker = {id: this.state.id, 
            name: this.state.name, 
            title:this.state.title,
            number: this.state.number, 
            address: this.state.address , 
            img: this.state.img, 
            city: this.state.city ,
             age: this.state.age , 
             salary: this.state.salary ,
              data: this.state.data
            };

        WokerService.editWorker(worker)
            .then(res => {
                if(res.data != null) {
                    this.setState({show:true, message : 'Worker Updated successfully.'});
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

    render() {
        return (
            <div>
                 <div style={{"display":this.state.show ? "block" : "none"}}>
                    <MyAlert show = {this.state.show} message = {this.state.message} type = {"success"}/>
                </div>
                <Typography variant="h4" style={style}>Edit Worker</Typography>
                <form>
                
                    <TextField type="text" placeholder="username" fullWidth margin="normal" name="name" value={this.state.name} onChange={this.onChange}/>
                    <TextField type="text" placeholder="Title" fullWidth margin="normal" name="title" value={this.state.title} onChange={this.onChange}/>
                    <TextField type="number" placeholder="phonenuber" fullWidth margin="normal" name="number" value={this.state.number} onChange={this.onChange}/>
                    <TextField placeholder="Address" fullWidth margin="normal" name="address" value={this.state.address} onChange={this.onChange}/>
                    <TextField placeholder="img" fullWidth margin="normal" name="img" value={this.state.img} onChange={this.onChange}/>
                    <TextField placeholder="city" fullWidth margin="normal" name="city" value={this.state.city} onChange={this.onChange}/>
                    <TextField type="text" placeholder="age" fullWidth margin="normal" name="age" value={this.state.age} onChange={this.onChange}/>
                    <TextField type="text" placeholder="salary" fullWidth margin="normal" name="salary" value={this.state.salary} onChange={this.onChange}/>
                    <TextField type="text" placeholder="data" fullWidth margin="normal" name="data" value={this.state.data} onChange={this.onChange}/>

                        <Button variant="contained" color="primary" onClick={this.saveWorker}>Save</Button>
                </form>
            </div>
        );
    }
}

export default EditWorkerComponent;