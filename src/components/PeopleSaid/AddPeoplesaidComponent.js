import React, { Component } from 'react'
import ApiService from "../../service/PeoplesaidService";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MyAlert from './MyAlert'

const formContainer = {
    display: 'flex',
    flexFlow: 'row wrap'
};

const style ={
    display: 'flex',
    justifyContent: 'center'

}

class AddPeoplesaidComponent extends Component{
    constructor(props){
        super(props);
        this.state ={
            companyname:'',
            peopleimg1:'',
            peopleimg2:'',
            peopleimg3:'',
            peoplename1:'',
            peoplename2:'',
            peoplename3:'',
            status1:'',
            status2:'',
            status3:'',
            description1:'',
            description2:'',
            description3:'',
            companyimg:'',
            message: '',
            show: false
        }
    }

    saveUser = (e) => {
        e.preventDefault();
        let user = {
            companyname: this.state.companyname, 
            peopleimg1: this.state.peopleimg1, 
            peopleimg2: this.state.peopleimg2, 
            peopleimg3: this.state.peopleimg3, 
            peoplename1: this.state.peoplename1, 
            peoplename2: this.state.peoplename2, 
            peoplename3: this.state.peoplename3, 
            status1: this.state.status1,
            status2: this.state.status2,
            status3: this.state.status3,
            description1: this.state.description1, 
            description2: this.state.description2, 
            description3: this.state.description3, 
            companyimg: this.state.companyimg
           
        };

        ApiService.addUser(user)
            .then(res => {
                if(res.data != null) {
                    this.setState({show:true, message : 'Peoplesaid added successfully.'});
                    setTimeout(() => this.setState({show:false}), 3000);
                    setTimeout(() => this.userList(), 3000);
                } else {
                    this.setState({show:false});
                }
            });
    }

    userList = () => {
        return this.props.history.push('admin/peoplesaid/list-view');
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
                console.log(" Peopleimg1data",e.target.result)
                elements.push(e.target.result)
                this.setState({peopleimg1:elements[0]})
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
            console.log(" Peopleimg2data",e.target.result)
            elements.push(e.target.result)
            this.setState({peopleimg2:elements[0]})
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
        console.log(" Peopleimg3data",e.target.result)
        elements.push(e.target.result)
        this.setState({peopleimg3:elements[0]})
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
        console.log(" Companyimgdata",e.target.result)
        elements.push(e.target.result)
        this.setState({companyimg:elements[0]})
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
                
                <Typography variant="h4" style={style}>Add PeopleSaid</Typography>
                <form style={formContainer}>
                   
                    
                    <TextField type="text" placeholder="companyname" fullWidth margin="normal" name="companyname" value={this.state.companyname} onChange={this.onChange}/>
                    <TextField type="text" placeholder="peopleimg1" fullWidth margin="normal" name="peopleimg1" value={this.state.peopleimg1} onChange={this.onChange}/>
                    <input type="file" multiple onChange={this.onFileChangeHandler1 }/>
                    <img src={this.state.peopleimg1}/>
                    <TextField type="text" placeholder="peopleimg2" fullWidth margin="normal" name="peopleimg2" value={this.state.peopleimg2} onChange={this.onChange}/>
                    <input type="file" multiple onChange={this.onFileChangeHandler2 }/>
                    <img src={this.state.peopleimg2}/>
                    <TextField type="text" placeholder="peopleimg3" fullWidth margin="normal" name="peopleimg3" value={this.state.peopleimg3} onChange={this.onChange}/>
                    <input type="file" multiple onChange={this.onFileChangeHandler3 }/>
                    <img src={this.state.peopleimg3}/>
                    <TextField type="text" placeholder="peoplename1" fullWidth margin="normal" name="peoplename1" value={this.state.peoplename1} onChange={this.onChange}/>
                   
                    <TextField type="text" placeholder="peoplename2" fullWidth margin="normal" name="peoplename2" value={this.state.peoplename2} onChange={this.onChange}/>
                  

                    <TextField type="text" placeholder="peoplename3" fullWidth margin="normal" name="peoplename3" value={this.state.peoplename3} onChange={this.onChange}/>
                   
                    
                    <TextField type="text" placeholder="status1" fullWidth margin="normal" name="status1" value={this.state.status1} onChange={this.onChange}/>

                    <TextField type="text" placeholder="status2" fullWidth margin="normal" name="status2" value={this.state.status2} onChange={this.onChange}/>
                    <TextField type="text" placeholder="status3" fullWidth margin="normal" name="status3" value={this.state.status3} onChange={this.onChange}/>
                   
                    <TextField type="text" placeholder="description1" fullWidth margin="normal" name="description1" value={this.state.description1} onChange={this.onChange}/>

                    <TextField type="text" placeholder="description2" fullWidth margin="normal" name="description2" value={this.state.description2} onChange={this.onChange}/>
                   <TextField type="text" placeholder="description3" fullWidth margin="normal" name="description3" value={this.state.description3} onChange={this.onChange}/>
                    <TextField type="text" placeholder="companyimg" fullWidth margin="normal" name="companyimg" value={this.state.companyimg} onChange={this.onChange}/>
                    <input type="file" multiple onChange={this.onFileChangeHandler4 }/>
                    <img src={this.state.companyimg}/>
                    <Button variant="contained" color="primary" onClick={this.saveUser}>Save</Button>
                </form>
            </div>
        );
    }
}

export default AddPeoplesaidComponent;