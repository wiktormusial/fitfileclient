import { useState } from "react";
import uploadFile from "../../api/uploadFile/uploadFIle";

const IndexView = () => {
  const [file, setFile] = useState<File>();

  const getData = () => {
    if (file) {
      uploadFile(file)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files![0])} />
      <button onClick={() => getData()}>Upload</button>
    </div>
  );
};

export default IndexView;
