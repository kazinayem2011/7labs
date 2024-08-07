// SpecificApis.js
import { apiService } from './ApiService';

class SpecificApis {
  async fetchPatientList(searchQuery,searchQueryType) {
    try {
        const response = await apiService.fetchData(`/api/v1/lab/patient?searchQuery=${encodeURIComponent(searchQuery)}&searchQueryType=${encodeURIComponent(searchQueryType)}`);
        return response.data;
    } catch (error) {
      console.error('Error fetching patient list:', error);
      throw error;
    }
  }

  async enterReports(reportData) {
    try {
      const response = await apiService.postData('/reports', reportData);
      return response.data;
    } catch (error) {
      console.error('Error entering reports:', error);
      throw error;
    }
  }

  async registerPatient(patientData) {
    try {
      const response = await apiService.postData('api/v1/lab/patient/register', patientData);
      return response.data;
    } catch (error) {
      console.error('Error entering reports:', error);
      throw error;
    }
  }

  async verifyReports() {
    try {
      const response = await apiService.fetchData('/reports/verify');
      return response.data;
    } catch (error) {
      console.error('Error verifying reports:', error);
      throw error;
    }
  }

  async analyzeFinances() {
    try {
      const response = await apiService.fetchData('/finances');
      return response.data;
    } catch (error) {
      console.error('Error analyzing finances:', error);
      throw error;
    }
  }

  async fetchTestList() {
    try {
      const response = await apiService.fetchData('api/v1/lab/labtest');
      return response.data;
    } catch (error) {
      console.error('Error fetching test list:', error);
      throw error;
    }
  }
  async addTest(testData) {
    try {
      const response = await apiService.postData('api/v1/lab/labtest',testData);
      return response.data;
    } catch (error) {
      console.error('Error fetching test list:', error);
      throw error;
    }
  }

  async fetchOrganisationList() {
    try {
      const response = await apiService.fetchData('/organisations');
      return response.data;
    } catch (error) {
      console.error('Error fetching organisation list:', error);
      throw error;
    }
  }

  async fetchEmployeeList() {
    try {
      const response = await apiService.fetchData('api/v1/lab/employees');
      return response.data;
    } catch (error) {
      console.error('Error fetching employee list:', error);
      throw error;
    }
  }
  async addEmployee(employeeData) {
    try {
      const response = await apiService.postData('api/v1/lab/employees',employeeData);
      return response.data;
    } catch (error) {
      console.error('Error adding employee :', error);
      throw error;
    }
  }

  async fetchCenters() {
    try {
      const response = await apiService.fetchData('api/v1/lab/labcenter');
      return response.data;
    } catch (error) {
      console.error('Error fetching center information:', error);
      throw error;
    }
  }

  async addLetterHeadToCenter(file,labCenterId) {
    try {
      const formData = new FormData();
      formData.append('file', file);
      const response = await apiService.postData(`api/v1/lab/labcenter/letterhead/upload?labCenterId=${encodeURIComponent(labCenterId)}`,formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
      return response.data;
    } catch (error) {
      console.error('Error fetching center information:', error);
      throw error;
    }
  }

  async addReportToPatient(patientId, date, report) {
    try {
        const url = `api/v1/lab/upload/${encodeURIComponent(patientId)}/report/upload?date=${encodeURIComponent(date)}`;
        const formData = new FormData();
        formData.append('file', report);
        const response = await apiService.postData(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data' 
            }
        });

        return response.data;
    } catch (error) {
        console.error('Error uploading report:', error);
        throw error;
    }
}


  async downloadFile(fileId){
    try{
    const response = await apiService.fetchBlobData(`api/v1/lab/reports/download/${encodeURIComponent(fileId)}`);
    return response.data;
    } catch (error){
        console.error('Error donwloading file');
        throw error;
    }

  }

  async addLabCenter(labcenterData) {
    try {
      const response = await apiService.postData('api/v1/lab/labcenter',labcenterData);
      return response.data;
    } catch (error) {
      console.error('Error fetching center information:', error);
      throw error;
    }
  }

  async fetchLabProfile() {
    try {
      const response = await apiService.fetchData('/labprofile');
      return response.data;
    } catch (error) {
      console.error('Error fetching lab profile:', error);
      throw error;
    }
  }

  async getBookings(date, centerCode) {
    try {
      let url = `api/v1/lab/bookings?date=${encodeURIComponent(date)}`;
      if (centerCode && centerCode.trim() !== '') {
        url += `&centerCode=${encodeURIComponent(centerCode)}`;
      }
      const response = await apiService.fetchData(url);
      return response.data;
    } catch (error) {
      console.error('Error fetching bookings:', error);
      throw error;
    }
  }
  

  async createBooking(bookingSlipRequest, updatePatient) {
    try {
      const response = await apiService.postData('api/v1/lab/bookings', bookingSlipRequest, {
        params: { updatePatient }
      });
      return response.data;
    } catch (error) {
              console.error('Error creating booking:', error);
      throw error;
    }
  }

  async updateTestResult(receiptId, testId, updatedTestReport) {
    try {
      const response = await apiService.putData(`api/v1/lab/bookings/${receiptId}/tests/${testId}`, updatedTestReport);
      return response.data;
    } catch (error) {
      console.error('Error updating test result:', error);
      throw error;
    }
  }

   async fetchTestCategories() {
    try {
        const response = await apiService.fetchData(`api/v1/lab/testpanel/category`);
        return response.data;
      } catch (error) {
        console.error('Error updating test result:', error);
        throw error;
      }
  };

  async addTestCategories(formData) {
    try {
        const response = await apiService.postData(`api/v1/lab/testpanel/category`,formData);
        return response.data;
      } catch (error) {
        console.error('Error updating test Categories:', error);
        throw error;
      }
  };
  
   async fetchTestUnits() {
    try {
        const response = await apiService.fetchData(`api/v1/lab/testpanel/testunit`);
        return response.data;
      } catch (error) {
        console.error('Error updating test result:', error);
        throw error;
      }
  };

  async addTestUnits(formData) {
    console.log(formData);
    try {
        const response = await apiService.postData(`api/v1/lab/testpanel/testunit`,formData);
        return response.data;
      } catch (error) {
        console.error('Error updating test unit:', error);
        throw error;
      }
  };

  async fetchAllPossibleReference() {
    try {
      const response = await apiService.fetchData(`api/v1/lab/testpanel/allPossibleReferenceValues`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  async addPossibleReference(formData) {
    try {
      const response = await apiService.postData('api/v1/lab/testpanel/allPossibleReferenceValues', formData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async addTestPanel(formData) {
    try {
      const response = await apiService.postData('api/v1/lab/testpanel', formData);
      return response.data;
    } catch (error) {
      console.error('Error sending test panel:', error);
      throw error;
    }
  }
  
  
}



export const specificApis = new SpecificApis();
