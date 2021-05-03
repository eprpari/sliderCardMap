import axios from 'axios';

const COMPANY_API_BASE_URL = 'http://localhost:8080/admin/company';

class CompanyService {

    fetchCompanies() {
        return axios.get(COMPANY_API_BASE_URL);
    }

    fetchCompanyById(companyId) {
        return axios.get(COMPANY_API_BASE_URL + '?id=' + companyId);
    }

    deleteCompany(companyId) {
        return axios.delete(COMPANY_API_BASE_URL + '/' + companyId);
    }

    addCompany(company) {
        return axios.post(COMPANY_API_BASE_URL, company);
    }

    editCompany(company) {
        return axios.put(COMPANY_API_BASE_URL + '/' + company.id, company);
    }
}

export default new CompanyService();