import axios from 'axios';

const PLANT_API_BASE_URL = 'http://localhost:8080/plants';

class PlantService {

    fetchPlants() {
        return axios.get(PLANT_API_BASE_URL);
    }

    fetchPlantById(plantId) {
        return axios.get(PLANT_API_BASE_URL + '?id=' + plantId);
    }

    deletePlant(plantId) {
        return axios.delete(PLANT_API_BASE_URL + '/' + plantId);
    }

    addPlant(plant) {
        return axios.post(PLANT_API_BASE_URL, plant);
    }

    editPlant(plant) {
        return axios.put(PLANT_API_BASE_URL + '/' + plant.id, plant);
    }

}

export default new PlantService();