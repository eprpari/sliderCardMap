import axios from 'axios';

const DEVICE_API_BASE_URL = 'http://localhost:8080/api/device';

class DeviceService {

    fetchDevices() {
        return axios.get(DEVICE_API_BASE_URL);
    }

    fetchDeviceById(deviceId) {
        return axios.get(DEVICE_API_BASE_URL + '?id=' + deviceId);
    }

    deleteDevice(deviceId) {
        return axios.delete(DEVICE_API_BASE_URL + '/' + deviceId);
    }

    addDevice(device) {
        return axios.post(DEVICE_API_BASE_URL, device);
    }

    editDevice(device) {
        return axios.put(DEVICE_API_BASE_URL + '/' + device.id, device);
    }
   

}

export default new DeviceService();