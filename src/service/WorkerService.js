import axios from 'axios';

const WORKER_API_BASE_URL = 'http://localhost:8080/admin';

class WorkerService {

    fetchWorkers() {
        return axios.get(WORKER_API_BASE_URL);
    }

    
    fetchWorkerById(workerId) {
        return axios.get(WORKER_API_BASE_URL + '?id=' + workerId);
    }

    fetchWorkerByTitle(workerTitle) {
        return axios.get(WORKER_API_BASE_URL + '?title=' + workerTitle);
    }

    deleteWorker(workerId) {
        return axios.delete(WORKER_API_BASE_URL + '/' + workerId);
    }

    addWorker(worker) {
        return axios.post(WORKER_API_BASE_URL, worker);
    }

    editWorker(worker) {
        return axios.put(WORKER_API_BASE_URL + '/' + worker.id, worker);
    }

}

export default new WorkerService();