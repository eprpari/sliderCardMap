import React, { Component } from 'react'
import WokerService from "../../service/WorkerService";
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

class ListWorkerComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            workers: [],
            show: false,
            message: ''
        }
    }

    componentDidMount() {
        WokerService.fetchWorkers()
            .then((res) => {
                this.setState({workers: res.data})
            });
    }

    deleteWorker = (workerId) => {
        WokerService.deleteWorker(workerId)
           .then(res => {
               if(res.data != null) {
                this.setState({"show":true, message : 'worker deleted successfully.'});
                setTimeout(() => this.setState({"show":false}), 3000);
                this.setState({
                    workers: this.state.workers.filter(worker => worker.id !== workerId)
                });
            } else {
                this.setState({"show":false});
            }
           })
    }

    editWorker = (id) => {
        this.props.history.push('/admin/edit-worker/'+ id);
    }

    addWorker = () => {
        this.props.history.push('/admin/add-worker');
    }

    render() {
        const {workers} = this.state;
        console.log(workers)

        return (
            <div>
                <div style={{"display":this.state.show ? "block" : "none"}}>
                    <MyAlert show = {this.state.show} message = {this.state.message} type = {"error"}/>
                </div>
                <Typography variant="h4" style={style}>worker Details</Typography>
                <Button variant="contained" style={{ background: '#2E3B55' }} onClick={() => this.addWorker()}>
                    Add Worker
                </Button>

                <Table className="Container table-size">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Id</TableCell>
                            <TableCell align="right">Title</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Number</TableCell>
                            <TableCell align="right">Address</TableCell>
                            <TableCell align="right">Img</TableCell>
                            <TableCell align="right">City</TableCell>
                            <TableCell align="right">Age</TableCell>
                            <TableCell align="right">Salary</TableCell>
                            <TableCell align="right">Data</TableCell>




                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                        workers.length === 0 ?
                        <TableRow>
                            <TableCell colSpan="10" align="center">No Workers Available.</TableCell>
                        </TableRow> 
                        :
                        workers.map(row => (
                            <TableRow key={row.id}>
                                <TableCell align="right">
                                    {row.id}
                                </TableCell>
                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">{row.title}</TableCell>
                                <TableCell align="right">{row.number}</TableCell>
                                <TableCell align="right">{row.address}</TableCell>
                                <TableCell align="right">{<img src={row.img} alt= "work" width="150" height="150" />}</TableCell>
                                <TableCell align="right">{row.city}</TableCell>
                                <TableCell align="right">{row.age}</TableCell>
                                <TableCell align="right">{row.salary}</TableCell>
                                <TableCell align="right">{row.data}</TableCell>
                                <TableCell align="right" onClick={() => this.editWorker(row.id)}><CreateIcon /></TableCell>
                                <TableCell align="right" onClick={() => this.deleteWorker(row.id)}><DeleteIcon /></TableCell>
                            </TableRow>
                        ))
                    }
                    </TableBody>
                </Table>

            </div>
        );
    }

}

export default ListWorkerComponent;