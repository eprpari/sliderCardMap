import axios from 'axios';

const MATERIAL_API_BASE_URL = 'http://localhost:8080/admin/materials';

class MaterialService {

    fetchMaterials() {
        return axios.get(MATERIAL_API_BASE_URL);
    }

    fetchMaterialById(materialId) {
        return axios.get(MATERIAL_API_BASE_URL + '?id=' + materialId);
    }
    fetchMaterialByMatType(matType) {
        return axios.get(MATERIAL_API_BASE_URL + '?matType=' + matType);
    }
    deleteMaterial(materialId) {
        return axios.delete(MATERIAL_API_BASE_URL + '/' + materialId);
    }

    addMaterial(material) {
        return axios.post(MATERIAL_API_BASE_URL, material);
    }

    editMaterial(material) {
        return axios.put(MATERIAL_API_BASE_URL + '/' + material.id, material);
    }
    

}

export default new MaterialService();