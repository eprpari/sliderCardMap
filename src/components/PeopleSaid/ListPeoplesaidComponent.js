import React, { Component } from 'react'
import ApiService from "../../service/PeoplesaidService";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import MyAlert from './MyAlert'

const style ={
    display: 'flex',
    justifyContent: 'center'
}

class ListPeoplesaidComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            show: false,
            message: ''
        }
    }

    componentDidMount() {
        ApiService.fetchUsers()
            .then((res) => {
                this.setState({users: res.data})
            });
    }

    deleteUser = (userId) => {
        ApiService.deleteUser(userId)
           .then(res => {
               if(res.data != null) {
                this.setState({"show":true, message : 'Peoplesaid deleted successfully.'});
                setTimeout(() => this.setState({"show":false}), 3000);
                this.setState({
                    users: this.state.users.filter(user => user.id !== userId)
                });
            } else {
                this.setState({"show":false});
            }
           })
    }

    editUser = (id) => {
        this.props.history.push('admin/peoplesaid/edit-people/:id/'+ id);
    }

    addUser = () => {
        this.props.history.push('admin/peoplesaid/add-people');
    }

    render() {
        const {users} = this.state;

        return (
            <div>
                <div style={{"display":this.state.show ? "block" : "none"}}>
                    <MyAlert show = {this.state.show} message = {this.state.message} type = {"error"}/>
                </div>
                <Typography variant="h4" style={style}>Peoplesaid Details</Typography>
                <Button variant="contained" color="primary" onClick={() => this.addUser()}>
                    Add Peoplesaid
                </Button>

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Id</TableCell>
                            <TableCell align="right">Companyname</TableCell>
                            <TableCell align="right">Peopleimg1</TableCell>
                            <TableCell align="right">Peopleimg2</TableCell>
                            <TableCell align="right">Peopleimg3</TableCell>
                           <TableCell align="right">Peoplename1</TableCell>
                            <TableCell align="right">Peoplename2</TableCell>
                            <TableCell align="right">Peoplename3</TableCell>
                            <TableCell align="right">Status1</TableCell>
                            <TableCell align="right">Status2</TableCell>
                            <TableCell align="right">Status3</TableCell>
                            <TableCell align="right">Description1</TableCell>
                            <TableCell align="right">Description2</TableCell>
                            <TableCell align="right">Description3</TableCell>
                         
                            <TableCell align="right">Companyimg</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                        users.length === 0 ?
                        <TableRow>
                            <TableCell colSpan="6" align="center">No Users Available.</TableCell>
                        </TableRow> 
                        :
                        users.map(row => (
                            <TableRow key={row.id}>
                                <TableCell align="right">
                                    {row.id}
                                </TableCell>
                                <TableCell align="right">{row.companyname}</TableCell>
                                <TableCell align="right"><img src={row.peopleimg1} alt= "people1" width="150" height="150" /> </TableCell>
                                <TableCell align="right"><img src={row.peopleimg2} alt= "people2" width="150" height="150" /> </TableCell>
                                <TableCell align="right"><img src={row.peopleimg3} alt= "people3" width="150" height="150" /> </TableCell>

                                <TableCell align="right">{row.peoplename1}</TableCell>
                                <TableCell align="right">{row.peoplename2}</TableCell>
                                <TableCell align="right">{row.peoplename3}</TableCell>
                                <TableCell align="right">{row.status1}</TableCell>
                                <TableCell align="right">{row.status2}</TableCell>
                                <TableCell align="right">{row.status3}</TableCell>
                                <TableCell align="right">{row.description1}</TableCell>
                                <TableCell align="right">{row.description2}</TableCell>
                                <TableCell align="right">{row.description3}</TableCell>
                                <TableCell align="right"><img src={row.companyimg} alt= "companyimg" width="150" height="150" /></TableCell>

                                <TableCell align="right" onClick={() => this.editUser(row.id)}><CreateIcon /></TableCell>
                                <TableCell align="right" onClick={() => this.deleteUser(row.id)}><DeleteIcon /></TableCell>
                            </TableRow>
                        ))
                    }
                    </TableBody>
                </Table>

            </div>
        );
    }

}

export default ListPeoplesaidComponent;