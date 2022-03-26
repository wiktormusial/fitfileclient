import axios from "axios"

const uploadFile = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const response = await axios.post("http://127.0.0.1:5000/", formData, config);
  
    return response.data;
  };

  export default uploadFile